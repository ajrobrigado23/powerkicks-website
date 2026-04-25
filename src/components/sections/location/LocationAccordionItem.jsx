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
    const contentRef = useRef(null);
    const innerRef = useRef(null);
    const imageWrapRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        if (!contentRef.current || !innerRef.current) return;

        if (isOpen) {
            gsap.to(contentRef.current, {
                height: innerRef.current.offsetHeight,
                duration: 0.55,
                ease: "power3.out",
            });

            gsap.fromTo(
                imageWrapRef.current,
                {
                    clipPath: "inset(0 0 100% 0)",
                },
                {
                    clipPath: "inset(0 0 0% 0)",
                    duration: 0.65,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                imageRef.current,
                {
                    scale: 1.08,
                    autoAlpha: 0,
                },
                {
                    scale: 1,
                    autoAlpha: 1,
                    duration: 0.75,
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

            <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
                <div ref={innerRef} className="pb-6">
                    <p className="mb-4 max-w-full font-medium tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)] leading-[1.6]">
                        {location.description}
                    </p>

                    <div
                        ref={imageWrapRef}
                        className="mb-2 aspect-[4/5] overflow-hidden bg-neutral-200"
                    >
                        <img
                            ref={imageRef}
                            src={location.image}
                            alt={location.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}