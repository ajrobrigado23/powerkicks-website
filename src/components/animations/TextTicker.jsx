import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Total duration of one complete ticker movement.
// A larger value makes the ticker move more slowly.
const DURATION = 180;

// Number of times the text will be rendered.
// More repetitions make the ticker track longer.
const REPEAT_COUNT = 6;

export default function TextTicker({ children, textIsBlack, right }) {

    // Reference to the outer container.
    // Used as the GSAP scope so selectors only target
    // elements inside this TextTicker component.
    const containerRef = useRef(null);

    // Reference to the element containing all duplicated text items.
    // GSAP will move this element horizontally.
    const trackRef = useRef(null);

    // Run the ticker animation when the component mounts
    // and whenever the direction changes.
    useGSAP(() => {

        // Get the actual DOM element from the React ref.
        const track = trackRef.current;

        // Stop if the track has not been rendered yet.
        if (!track)
            return;

        /*
         * The text items are duplicated so that the end of one copy
         * can seamlessly connect to the beginning of the next copy.
         *
         * Because we have two identical halves, the width of one
         * complete copy is half of the total track width.
         *
         * Example:
         *
         * [ TEXT TEXT TEXT ][ TEXT TEXT TEXT ]
         *       half width        half width
         *
         */
        const totalWidth = track.scrollWidth / 2;

        /*
         * Set the initial position based on the direction.
         *
         * right === true:
         * Start one complete copy to the left.
         *
         * right === false:
         * Start at the normal position.
         *
         * This allows the ticker to move in opposite directions
         * without changing the actual content.
         */
        gsap.set(track, {
            x: right ? -totalWidth : 0,
        });

        /*
         * Animate the track continuously.
         *
         * right === true:
         * Move from -totalWidth back to 0.
         *
         * right === false:
         * Move from 0 to -totalWidth.
         *
         * ease: "none" keeps the movement at a constant speed.
         *
         * repeat: -1 means repeat forever.
         */
        const tween = gsap.to(track, {
            x: right ? 0 : -totalWidth,
            duration: DURATION,
            ease: "none",
            repeat: -1,

            /*
             * wrap() keeps the x position inside the range
             * -totalWidth to 0.
             *
             * Without this, GSAP would keep increasing/decreasing
             * the transform value indefinitely.
             *
             * Example:
             *
             * -100 → -50 → 0
             *
             * then wrap back to:
             *
             * -100 → -50 → 0
             *
             * This creates the infinite scrolling effect.
             *
             * unitize() adds the "px" unit back to the value
             * because CSS transforms require a valid unit.
             */
            modifiers: {
                x: gsap.utils.unitize(
                    gsap.utils.wrap(-totalWidth, 0)
                ),
            },
        });

        // Kill the GSAP animation when this component is unmounted.
        // This prevents the animation from continuing to run after
        // the component has been removed from the page.
        return () => tween.kill();

        // containerRef scopes GSAP to this component.
        //
        // dependencies: [right] means the animation is recreated
        // when the direction changes.
    }, {
                scope: containerRef,
                dependencies: [right]
            });

    /*
     * Create an array containing the text multiple times.
     *
     * Example with REPEAT_COUNT = 6:
     *
     * [
     *   children,
     *   children,
     *   children,
     *   children,
     *   children,
     *   children
     * ]
     *
     * This provides enough repeated content for the ticker.
     */
    const items = Array(REPEAT_COUNT).fill(children);

    return (
        <div
            ref={containerRef}
            className="w-full overflow-hidden overflow-x-clip"
        >
            {/* Duplicate the items to create a seamless loop */}
            <div
                ref={trackRef}
                className={`flex whitespace-nowrap uppercase ${textIsBlack ? "text-black" : "text-white"} will-change-transform`}
            >
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="mx-7 shrink-0 text-[8rem] leading-none min-[700px]:text-[10rem] min-[900px]:text-[12rem] tracking-[0.075rem] font-semibold"
                    >
                    {item}
                </span>
                ))}
            </div>
        </div>
    );
}