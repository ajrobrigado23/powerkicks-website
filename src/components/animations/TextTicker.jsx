import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// constant
const DURATION = 180;
const REPEAT_COUNT = 6;

export default function TextTicker({ children, black, right }) {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useGSAP(() => {
        const track = trackRef.current;

        if (!track)
            return;

        const totalWidth = track.scrollWidth / 2; // Half because we duplicated items


        // Start from the correct position depending on direction
        gsap.set(track, {
            x: right ? -totalWidth : 0,
        });

        const tween = gsap.to(track, {
            x: right ? 0 : -totalWidth,
            duration: DURATION,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(
                    gsap.utils.wrap(-totalWidth, 0)
                ),
            },
        });

        // kill the animation once the component unmounts
        return () => tween.kill();

    }, { scope: containerRef, dependencies: [right] });

    // 6 or 10
    const items = Array(REPEAT_COUNT).fill(children);

    return (
        <div
            ref={containerRef}
            className="w-full overflow-hidden overflow-x-clip bg-black"
        >
            {/* Duplicate the items to create a seamless loop */}
            <div
                ref={trackRef}
                className={`flex whitespace-nowrap uppercase ${black ? "text-black" : "text-white"} will-change-transform`}
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