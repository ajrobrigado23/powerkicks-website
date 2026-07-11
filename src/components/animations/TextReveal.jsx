import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function TextReveal({
                                       // means you can choose what elements it renders
                                       as: Tag = "div",
                                       children,
                                       className = "",
                                       delay = 0,
                                       duration = 1.4,
                                       stagger = 0.06,
                                       type = "letters",
                                       // scroll trigger options
                                       triggerOnScroll = false,
                                       scrollStart = "top 85%"
                                   }) {

    // creates a reference to the wrapper element
    const wrapperRef = useRef(null);
    // check if the children is a plain text
    const text = typeof children === "string" ? children : "";
    // decide how to split the text
    const items = type === "words"
        ? text.split(" ")
        : text.split("");

    useGSAP(() => {
        // finds all the text pieces that will be animated (only inside this component)
        const revealItems = gsap.utils.toArray(
            ".text-reveal-item",
            wrapperRef.current
        );

        gsap.fromTo(
            revealItems,
            {
                // replace from percentage transforms to em (to remove the earthquake or shaky movement)
                y: "1.1em",
                force3D: true,
            },
            {
                y: "0em",
                duration,
                delay,
                stagger,
                ease: "power4.out",
                force3D: true,

                // Adds ScrollTrigger only when triggerOnScroll is true
                ...(triggerOnScroll && {
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: scrollStart,
                        toggleActions: "play none none none",
                        once: true,
                    },
                }),
            }
        );
    }, { scope: wrapperRef, dependencies: [children, delay, duration, stagger, type, triggerOnScroll, scrollStart] });

    return (
        <div ref={wrapperRef} className="overflow-hidden">
            <Tag className={className} aria-label={text}>
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="inline-block overflow-hidden leading-none pb-[0.08em]"
                        aria-hidden="true"
                    >
                    <span className="text-reveal-item inline-block leading-none will-change-transform transform-gpu">
                        {item === " " ? "\u00A0" : item}
                    </span>

                        {type === "words" && index !== items.length - 1 ? "\u00A0" : ""}
                    </span>
                ))}
            </Tag>
        </div>
    );
}