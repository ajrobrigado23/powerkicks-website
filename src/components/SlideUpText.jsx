import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function SlideUpText() {

    const containerRef = useRef(null);
    const tl = useRef(null);

    const text = "Hover Me";

    const split = (text, className) =>
        text.split("").map((char, i) => (
            <span key={i} className={`letter ${className}`}>
                {char === " " ? "\u00A0" : char}
            </span>
        ));

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current
            .to(".top", {
                yPercent: -100,
                stagger: 0.03,
                duration: 0.3,
                ease: "power3.out"
            }, 0)
            .to(".bottom", {
                yPercent: -100,
                stagger: 0.03,
                duration: 0.3,
                ease: "power3.out"
            }, 0);
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
                {split(text, "top")}
            </div>

            {/* Bottom layer */}
            <div
                className="flex absolute top-full left-0"
            >
                {split(text, "bottom")}
            </div>
        </div>
    );
}