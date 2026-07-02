// src/components/animations/TextReveal.jsx

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function TextReveal({
                                       as: Tag = "div",
                                       children,
                                       className = "",
                                       delay = 0,
                                   }) {
    const wrapperRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            textRef.current,
            {
                yPercent: 100,
            },
            {
                yPercent: 0,
                duration: 1,
                delay,
                ease: "power4.out",
            }
        );
    }, { scope: wrapperRef });

    return (
        <div ref={wrapperRef} className="overflow-hidden">
            <Tag ref={textRef} className={className}>
                {children}
            </Tag>
        </div>
    );
}