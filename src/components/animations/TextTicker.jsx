import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Animation duration for one complete ticker cycle.
const DURATION = 180;

// Number of repeated content groups rendered in the track.
const REPEAT_COUNT = 6;

export default function TextTicker({ children, textIsBlack, right }) {

    // Scope for GSAP selectors and component-level animation cleanup.
    const containerRef = useRef(null);

    // Reference to the animated ticker track.
    const trackRef = useRef(null);

    useGSAP(() => {
        const track = trackRef.current;

        if (!track) return;

        // The content is duplicated, so half of the track width
        // represents one complete loop.
        const totalWidth = track.scrollWidth / 2;

        // Position the track according to the selected direction.
        gsap.set(track, {
            x: right ? -totalWidth : 0,
        });

        const tween = gsap.to(track, {
            x: right ? 0 : -totalWidth,
            duration: DURATION,
            ease: "none",
            repeat: -1,

            // Wrap the transform within one loop to create a
            // continuous ticker without accumulating offset.
            modifiers: {
                x: gsap.utils.unitize(
                    gsap.utils.wrap(-totalWidth, 0)
                ),
            },
        });

        // Clean up the animation when the component unmounts
        // or the direction changes.
        return () => tween.kill();

    }, {
                // Limit GSAP's scope to this component.
                scope: containerRef,

                // Recreate the animation when the direction changes.
                dependencies: [right],
            });

    // Duplicate the content to provide enough length for the ticker.
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