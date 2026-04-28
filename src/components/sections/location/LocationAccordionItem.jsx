import { useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function LocationAccordionItem({
                                                  location,
                                                  locationLength,
                                                  isOpen,
                                                  onToggle,
                                              }) {
    // collapsible container (animate its height)
    const contentRef = useRef(null);
    // actual content inside (used to measure height - offsetHeight)
    const innerRef = useRef(null);
    // wrapper of image (used for clip-path reveal animation)
    const imageWrapRef = useRef(null);
    // image itself (used for scale + fade animation)
    const imageRef = useRef(null);

    useGSAP(() => {
        // safety check (prevents error if DOM not ready)
        if (!contentRef.current || !innerRef.current) return;
        // open state (accordion expanding)
        if (isOpen) {
            // animate the height (accordion expansion)
            gsap.to(contentRef.current, {
                height: innerRef.current.offsetHeight,
                duration: 0.55,
                ease: "power3.out",
                // allows responsive resizing later (prevents layout bug)
                onComplete: () => {
                    // after animation set height:auto
                    contentRef.current.style.height = "auto";
                }
            });
            // image reveal (mask animation)
            gsap.fromTo(
                // image is fully hidden from bottom
                imageWrapRef.current,
                {
                    clipPath: "inset(0 0 100% 0)",
                },
                // reveals upward (like a curtain)
                {
                    clipPath: "inset(0 0 0% 0)",
                    duration: 0.65,
                    ease: "power3.out",
                }
            );
            // image zoom + fade (slightly zoomed in - invisible)
            gsap.fromTo(
                imageRef.current,
                {
                    scale: 1.08,
                    autoAlpha: 0,
                },
                // normal scale, fully visible
                {
                    scale: 1,
                    autoAlpha: 1,
                    duration: 0.75,
                    ease: "power3.out",
                }
            );

        } else {
            // closed state (accordion collapsing)
            gsap.to(contentRef.current, {
                // instantly sets height to current content height
                height: contentRef.current.scrollHeight,
                duration: 0.01,
                // smoothly collapses
                onComplete: () => {
                    gsap.to(contentRef.current, {
                        height: 0,
                        duration: 0.45,
                        ease: "power3.inOut",
                    });
                },
            });
        }
    }, [isOpen]);

    return (
        <article
            className={`border-black/50 ${
                locationLength === location.id ? "border-b-0" : "border-b-2"
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
            >
                <div className="flex flex-col gap-1">
                    <h3 className="text-[clamp(1.25rem,4vw,4.5rem)] font-semibold leading-none">
                        {location.title}
                    </h3>

                    <p className="font-normal tracking-[0.025rem] text-[clamp(0.35rem,1.5vw,0.70rem)] text-black">
                        {location.address}
                    </p>
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
                <div ref={innerRef} className="pb-6">
                    <p className="mt-2 mb-4 max-w-full font-medium tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)] leading-[1.6]">
                        {location.description}
                    </p>

                    <div
                        ref={imageWrapRef}
                        className="h-[clamp(320px,65vw,600px)] overflow-hidden bg-neutral-100"
                    >
                        <img
                            ref={imageRef}
                            src={location.image}
                            alt={location.title}
                            className="h-full w-full object-cover object-[center_70%]"
                        />
                    </div>

                </div>
            </div>

        </article>
    );
}