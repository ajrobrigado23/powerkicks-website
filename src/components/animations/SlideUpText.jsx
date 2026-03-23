import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "lucide-react";

export default function SlideUpText({ children, isButton }) {
    const containerRef = useRef(null);
    const tl = useRef(null);

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

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => tl.current.play()}
            onMouseLeave={() => tl.current.reverse()}
            className="inline-block overflow-hidden cursor-pointer relative"
        >
            {/* Top layer */}
            <div className="flex">
                {children.split("").map((char, i) => (
                    <span key={i} className="top inline-block">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}

                {
                    isButton &&
                    (
                        <span className="top inline-block ml-1">
                            <ArrowDownRight size={20} />
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

                {
                    isButton &&
                    (
                        <span className="bottom inline-block ml-1">
                            <ArrowDownRight size={20} />
                        </span>
                    )
                }

            </div>
        </div>
    );
}