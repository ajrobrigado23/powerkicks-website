import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Circle } from "lucide-react";

export default function SlideUpText({ children, isButton }) {
    const containerRef = useRef(null);
    const tl = useRef(null);
    const circleRef = useRef(null);

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true });

        const tops = gsap.utils.toArray(".top", containerRef.current);
        const bottoms = gsap.utils.toArray(".bottom", containerRef.current);
        const stagger = Math.min(0.03, 0.8 / tops.length);

        tops.forEach((top, i) => {
            const offset = i * stagger;
            tl.current
                .to(top, {
                    yPercent: -100,
                    duration: 0.4,
                    ease: "power3.out"
                }, offset)
                .to(bottoms[i], {
                    yPercent: -100,
                    duration: 0.4,
                    ease: "power3.out"
                }, offset);
        });

    }, { scope: containerRef });

    const handleMouseEnter = () => {
        tl.current.play();

        gsap.to(circleRef.current, {
            fill: "#ffffff",   // or any color
            duration: 0.25,
            ease: "power2.inOut",
            scale: 0.65
        });

    };

    const handleMouseLeave = () => {
        tl.current.reverse();

        gsap.to(circleRef.current, {
            fill: "transparent",
            duration: 0.25,
            ease: "power2.inOut",
            scale: 1
        });

    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={isButton ? "bg-black px-4 py-3 rounded-xl" : undefined}
        >
            <div className="flex overflow-hidden cursor-pointer relative">
                {/* Top layer */}
                <div className="flex items-end">
                    {children.split("").map((char, i) => (
                        <span key={i} className="top inline-block">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}

                    {
                        isButton && (
                            <span className="self-center inline-block pl-3">
                                <Circle ref={circleRef} size={8} strokeWidth={2}/>
                            </span>
                        )
                    }

                </div>

                {/* Bottom layer */}
                <div className="flex absolute top-full left-0">
                    {children.split("").map((char, i) => (
                        <span key={i} className="bottom inline-block">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}

                </div>
            </div>

        </div>
    );
}