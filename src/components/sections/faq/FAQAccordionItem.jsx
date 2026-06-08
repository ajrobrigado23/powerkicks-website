import {Minus, Plus} from "lucide-react";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export default function FAQAccordionItem({
                                             faq,
                                             faqLength,
                                             isOpen,
                                             onToggle
                                         }) {

    // collapsible container (animate its height)
    const contentRef = useRef(null);
    // actual content inside (used to measure height - offsetHeight)
    const innerRef = useRef(null);

    useGSAP(() => {
        if (!contentRef.current || !innerRef.current) return;

        gsap.killTweensOf(contentRef.current);

        if (isOpen) {
            gsap.fromTo(
                contentRef.current,
                { height: 0 },
                {
                    height: innerRef.current.offsetHeight,
                    duration: 0.55,
                    ease: "power3.out",
                }
            );
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                duration: 0.45,
                ease: "power3.inOut",
            });
        }
    }, [isOpen]);

    return (
        <article
            className="max-w-full border-white/50 text-white"
        >
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full text-left justify-between"
                aria-expanded={isOpen}
            >
                <div className="flex flex-col">
                    <h3 className="text-[clamp(0.75rem,3vw,1.35rem)] font-semibold leading-none">
                        {faq.question}
                    </h3>
                </div>

                <span className="relative flex h-6 w-6 items-center justify-center">
                    <Plus
                        size={24}
                        strokeWidth={1.8}
                        className={`absolute transition-all duration-300 ${
                            isOpen ? "scale-75 opacity-0" : "scale-100 opacity-100"
                        }`}
                    />
                    <Minus
                        size={24}
                        strokeWidth={1.8}
                        className={`absolute transition-all duration-300 ${
                            isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
                        }`}
                    />
                </span>
            </button>
            {/* collapsible content - (hidden by default - height controlled by GSAP) */}
            <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
                {/* content wrapper */}
                <div ref={innerRef} className="pt-13 text-[#7F7F7F]">
                    <p className="max-w-3xl font-medium tracking-[0.025rem] text-[clamp(0.50rem,1.5vw,0.90rem)] leading-[1.6]">
                        {faq.answer}
                    </p>
                </div>
            </div>

        </article>
    );
}