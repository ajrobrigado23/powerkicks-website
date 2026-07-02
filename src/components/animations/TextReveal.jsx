// src/components/animations/TextReveal.jsx

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function TextReveal({
                                       as: Tag = "div",
                                       children,
                                       className = "",
                                       delay = 0,
                                       duration = 1.4,
                                       stagger = 0.06,
                                   }) {
    const wrapperRef = useRef(null);

    const text = typeof children === "string" ? children : "";

    useGSAP(() => {
        const letters = gsap.utils.toArray(".text-reveal-letter", wrapperRef.current);

        gsap.fromTo(
            letters,
            {
                yPercent: 110,
            },
            {
                yPercent: 0,
                duration,
                delay,
                stagger,
                ease: "power4.out",
            }
        );
    }, { scope: wrapperRef, dependencies: [children, delay, duration, stagger] });

    return (
        <div ref={wrapperRef} className="overflow-hidden">
            <Tag className={className} aria-label={text}>
                {text.split("").map((letter, index) => (
                    <span
                        key={index}
                        className="inline-block overflow-hidden leading-none"
                        aria-hidden="true"
                    >
                        <span className="text-reveal-letter inline-block leading-none">
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    </span>
                ))}
            </Tag>
        </div>
    );
}