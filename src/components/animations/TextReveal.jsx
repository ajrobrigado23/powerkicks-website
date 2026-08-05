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
                                       // Time difference between each animated item
                                       stagger = 0.06,
                                       // Determines whether text is split into "letters" or "words"
                                       type = "letters",

                                       // ScrollTrigger options
                                       triggerOnScroll = false,
                                       scrollStart = "top 85%",
                                   }) {

    // Stores a reference to this specific TextReveal component
    const wrapperRef = useRef(null);

    /**
     * Extracts all readable text from children.
     *
     * This is used for the aria-label because the visible words and letters
     * are marked as aria-hidden to prevent screen readers from reading every
     * individual animated piece separately.
     */
    const getTextContent = (nodes) => {
        return Children.toArray(nodes)
            .map((child) => {
                if (
                    typeof child === "string" ||
                    typeof child === "number"
                ) {
                    return String(child);
                }

                if (isValidElement(child)) {
                    return getTextContent(child.props.children);
                }

                // Ignore null, undefined, booleans, and unsupported values
                return "";
            })
            .join("");
    };

    /**
     * Splits a plain-text node into letters or words.
     *
     * Every word or letter receives the "text-reveal-item" class,
     * which GSAP uses as the animation target.
     */
    const splitText = (text, keyPrefix) => {
        // Preserve whitespace when splitting by words
        const items =
            type === "words"
                ? text.split(/(\s+)/)
                : text.split("");

        return items.map((item, index) => {
            // Checks whether the current item contains only whitespace
            const isWhitespace = /^\s+$/.test(item);

            /**
             * Spaces do not need to be animated.
             *
             * A non-breaking space is used so the browser preserves
             * the spacing between words and nested elements.
             */
            if (isWhitespace) {
                return (
                    <span
                        key={`${keyPrefix}-space-${index}`}
                        aria-hidden="true"
                    >
                        {"\u00A0"}
                    </span>
                );
            }

            /**
             * Outer span:
             * Hides the word or letter while it moves upward.
             *
             * Inner span:
             * Receives the GSAP animation.
             */
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

    /**
     * Recursively processes children.
     *
     * Plain text is split into animated words or letters.
     * React elements such as <span> are cloned so their classes and
     * properties are preserved while their text is still animated.
     */
    const processChildren = (nodes, keyPrefix = "child") => {
        return Children.map(nodes, (child, index) => {
            // Creates a unique key for each child and nested child
            const currentKey = `${keyPrefix}-${index}`;

            // Split plain strings into animated items
            if (typeof child === "string") {
                return splitText(child, currentKey);
            }

            // Convert numbers to strings before splitting them
            if (typeof child === "number") {
                return splitText(String(child), currentKey);
            }

            // Check whether the child is a valid React element
            if (isValidElement(child)) {
                /**
                 * Preserve elements without children.
                 *
                 * Examples:
                 * <br />
                 * <img />
                 */
                if (child.props.children == null) {
                    return child;
                }

                /**
                 * Clone the element to preserve its original properties,
                 * such as className, href, and id.
                 *
                 * Its children are recursively processed so the text inside
                 * a nested <span> is also animated.
                 */
                return cloneElement(child, {
                    key: child.key ?? currentKey,
                    children: processChildren(
                        child.props.children,
                        `${currentKey}-nested`
                    ),
                });
            }

            // Return unsupported values unchanged
            return child;
        });
    };

    // Creates one complete text value for accessibility
    const accessibleText = getTextContent(children);

    /**
     * Creates the GSAP reveal animation.
     *
     * Each element with the "text-reveal-item" class starts below its
     * normal position and moves upward into view.
     */
    useGSAP(
        () => {
            /**
             * Finds only the animated items located inside this specific
             * TextReveal component.
             */
            const revealItems = gsap.utils.toArray(
                ".text-reveal-item",
                wrapperRef.current
            );

            // Stop if there are no words or letters to animate
            if (!revealItems.length) return;

            /**
             * Animates each item from below its container into its
             * normal position.
             */
            gsap.fromTo(
                revealItems,
                {
                    y: "1.1em",
                    // Uses GPU acceleration for smoother transforms
                    force3D: true,
                },
                {
                    y: "0em",
                    duration,
                    delay,
                    stagger,
                    ease: "power4.out",
                    force3D: true,

                    /**
                     * ScrollTrigger is only added when triggerOnScroll
                     * is true.
                     */
                    ...(triggerOnScroll && {
                        scrollTrigger: {
                            trigger: wrapperRef.current,
                            start: scrollStart,
                            // Play when entering and do nothing afterward
                            toggleActions: "play none none none",
                            // Prevent replaying when scrolling back
                            once: true,
                        },
                    }),
                }
            );
        },
        {
            // Limits GSAP selectors and cleanup to this component
            scope: wrapperRef,
            /**
             * Empty dependencies mean this GSAP setup runs once
             * when the component mounts.
             */
            dependencies: [],
        }
    );

    /**
     * Renders the final component.
     *
     * The outer div provides the reference used by GSAP and clips
     * overflowing animation content.
     *
     * Tag is the selected semantic element, such as p, h1, or h2.
     */
    return (
        <div ref={wrapperRef} className="overflow-hidden">
            <Tag className={className} aria-label={accessibleText}>
                {processChildren(children)}
            </Tag>
        </div>
    );
}