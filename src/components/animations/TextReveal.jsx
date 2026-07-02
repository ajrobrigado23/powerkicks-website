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
                                       type = "letters",
                                   }) {
    const wrapperRef = useRef(null);

    const text = typeof children === "string" ? children : "";

    const items = type === "words"
        ? text.split(" ")
        : text.split("");

    useGSAP(() => {
        const revealItems = gsap.utils.toArray(
            ".text-reveal-item",
            wrapperRef.current
        );

        gsap.fromTo(
            revealItems,
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
    }, { scope: wrapperRef, dependencies: [children, delay, duration, stagger, type] });

    return (
        <div ref={wrapperRef} className="overflow-hidden">
            <Tag className={className} aria-label={text}>
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="inline-block overflow-hidden leading-none pb-[0.08em]"
                        aria-hidden="true"
                    >
                    <span className="text-reveal-item inline-block leading-none">
                        {item === " " ? "\u00A0" : item}
                    </span>

                        {type === "words" && index !== items.length - 1 ? "\u00A0" : ""}
                    </span>
                ))}
            </Tag>
        </div>
    );
}