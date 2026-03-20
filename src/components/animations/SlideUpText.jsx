import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function split(text, className) {
    return (
        text.split("").map((char, i) => (
            <span key={i} className={`${className} inline-block`}>
                {char === " " ? "\u00A0" : char}
            </span>
        ))
    );
}

export default function SlideUpText({ children }) {

    const containerRef = useRef(null);
    const tl = useRef(null);

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
                {split(children, "top")}
            </div>

            {/* Bottom layer */}
            <div
                className="flex absolute top-full left-0"
            >
                {split(children, "bottom")}
            </div>
        </div>
    );
}