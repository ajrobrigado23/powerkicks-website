import { useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function LocationAccordionItem({
                                                  location,
                                                  isOpen,
                                                  onToggle,
                                              }) {

    const contentRef = useRef(null);
    const innerRef = useRef(null);

    // Animate the picture
    const imageRef = useRef(null);

    useGSAP(() => {

        if (!contentRef.current || !innerRef.current)
            return;

        // Animation for the picture
        if (isOpen && imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                {
                    scale: 1.05,
                    autoAlpha: 0,
                },
                {
                    scale: 1,
                    autoAlpha: 1,
                    duration: 0.65,
                    ease: "power3.out",
                }
            );
        }

        if (isOpen) {
            gsap.to(contentRef.current, {
                height: innerRef.current.offsetHeight,
                duration: 0.55,
                ease: "power3.out",
            });

        } else {
            gsap.to(contentRef.current, {
                height: 0,
                duration: 0.45,
                ease: "power3.out",
            });

        }
    }, [isOpen]);

    return (
        <article className="border-t border-black/15">
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
            >
                <h3
                    className={`
                        "text-[clamp(1.25rem,3vw,2rem)] font-semibold leading-none transition-opacity duration-300",
                        isOpen ? "opacity-100" : "opacity-85"
                    `}
                >
                    {location.title}
                </h3>

                <span className="relative flex h-6 w-6 items-center justify-center">
                    <Plus
                        size={24}
                        strokeWidth={1.8}
                        className={`absolute transition-all duration-300 ${
                            isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
                        }`}
                    />
                    <Minus
                        size={24}
                        strokeWidth={1.8}
                        className={`absolute transition-all duration-300 ${
                            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
                        }`}
                    />
                </span>
            </button>

            <div
                ref={contentRef}
                className="overflow-hidden"
                style={{ height: 0 }}
            >
                <div ref={innerRef} className="pb-6">
                    <div className="mb-4 aspect-[4/5] overflow-hidden bg-neutral-200">
                        <img
                            ref={imageRef}
                            src={location.image}
                            alt={location.title}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <p className="text-[0.82rem] font-semibold uppercase tracking-[0.06rem] text-black">
                        {location.address}
                    </p>

                    <p className="mt-3 max-w-xl tracking-[0.025rem] text-[clamp(0.85rem,1.3vw,1rem)] leading-[1.6] text-black/75">
                        {location.description}
                    </p>
                </div>
            </div>
        </article>
    );
}