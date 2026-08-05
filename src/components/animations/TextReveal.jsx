import {
    Children,
    cloneElement,
    isValidElement,
    useRef,
} from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function TextReveal({
                                       // Allows you to choose which HTML element is rendered
                                       as: Tag = "div",
                                       children,
                                       className = "",
                                       delay = 0,
                                       duration = 1.4,
                                       stagger = 0.06,
                                       type = "letters",

                                       // ScrollTrigger options
                                       triggerOnScroll = false,
                                       scrollStart = "top 85%",
                                   }) {
    const wrapperRef = useRef(null);

    const splitText = (text, keyPrefix = "text") => {
        const items =
            type === "words"
                ? text.split(/(\s+)/)
                : text.split("");

        return items.map((item, index) => {
            const isWhitespace = /^\s+$/.test(item);

            if (isWhitespace) {
                return type === "words" ? (
                    <span key={`${keyPrefix}-space-${index}`}>
                        {"\u00A0"}
                    </span>
                ) : (
                    <span
                        key={`${keyPrefix}-space-${index}`}
                        className="inline-block"
                        aria-hidden="true"
                    >
                        {"\u00A0"}
                    </span>
                );
            }

            return (
                <span
                    key={`${keyPrefix}-${index}`}
                    className="inline-block overflow-hidden leading-none pb-[0.08em]"
                    aria-hidden="true"
                >
                    <span className="text-reveal-item inline-block leading-none will-change-transform transform-gpu">
                        {item}
                    </span>
                </span>
            );
        });
    };

    const processChildren = (nodes, keyPrefix = "child") => {
        return Children.map(nodes, (child, index) => {
            const currentKey = `${keyPrefix}-${index}`;

            // Split and animate plain text
            if (typeof child === "string") {
                return splitText(child, currentKey);
            }

            // Preserve elements such as span, strong, em, and links
            if (isValidElement(child)) {
                return cloneElement(child, {
                    key: child.key ?? currentKey,
                    children: processChildren(
                        child.props.children,
                        `${currentKey}-nested`
                    ),
                });
            }

            // Preserve null, numbers, and other valid values
            return child;
        });
    };

    useGSAP(
        () => {
            const revealItems = gsap.utils.toArray(
                ".text-reveal-item",
                wrapperRef.current
            );

            if (!revealItems.length) return;

            gsap.fromTo(
                revealItems,
                {
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
        },
        {
            scope: wrapperRef,
            dependencies: [
                children,
                delay,
                duration,
                stagger,
                type,
                triggerOnScroll,
                scrollStart,
            ],
        }
    );

    return (
        <div ref={wrapperRef} className="overflow-hidden">
            <Tag className={className}>
                {processChildren(children)}
            </Tag>
        </div>
    );
}