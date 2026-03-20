import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function TextTicker({ children, black, right }) {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useGSAP(() => {
        const track = trackRef.current;
        const totalWidth = track.scrollWidth / 2; // Half because we duplicated items

        gsap.to(track, {
            x: right ? `+=${totalWidth}` : `-=${totalWidth}`,
            duration: 60,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(
                    gsap.utils.wrap(-totalWidth, 0)
                ),
            },
        });
    }, { scope: containerRef });

    const items = Array(6).fill(children);

    return (
        <div
            ref={containerRef}
            className="overflow-hidden w-full z-0"
        >
            {/* Duplicate the items to create a seamless loop */}
            <div ref={trackRef} className={`flex whitespace-nowrap ${black ? "text-black": "text-[#7F7F7F]"} will-change-transform`}>
                {[...items, ...items].map((letter, i) => (
                    <span
                        key={i}
                        className="mx-6 text-8xl font-bold"
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
}