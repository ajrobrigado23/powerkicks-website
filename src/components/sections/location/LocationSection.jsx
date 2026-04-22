import { useRef, useState } from "react";
import { locations } from "./locations.js";
import LocationRow from "./LocationRow.jsx";
import LocationPreview from "./LocationPreview.jsx";

export default function LocationSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    const rowRefs = useRef([]);

    const setRowRef = (element, index) => {
        rowRefs.current[index] = element;
    };

    const activeLocation =
        activeIndex !== null ? locations[activeIndex] : null;

    const activeRow =
        activeIndex !== null ? rowRefs.current[activeIndex] : null;

    const hasActiveHover = activeIndex !== null;

    return (
        <section className="w-full px-10 pt-[2rem] pb-[2rem]">
            <div className="pb-8">
                {/* Header */}
                <div className="flex flex-col gap-10 pb-8 min-[700px]:gap-15 tablet:gap-20">
                    <div className="pb-6 text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold">
                        <p className="mb-1 text-sm font-semibold text-[#7F7F7F]">
                            Our Branches
                        </p>
                        <h3>Find a Powerkicks</h3>
                        <h3>Near You</h3>
                    </div>
                </div>

                {/* Desktop */}
                <div className="relative hidden min-[1000px]:block pt-[2rem]">
                    {/* Overlay layer aligned to same grid */}
                    <div className="pointer-events-none absolute inset-0 z-20 grid grid-cols-[1.5fr_1fr_1.8fr]">
                        <div />
                        <div className="relative">
                            <LocationPreview
                                activeLocation={activeLocation}
                                activeRow={activeRow}
                            />
                        </div>
                        <div />
                    </div>

                    <div className="relative z-10">
                        {locations.map((location, index) => (
                            <LocationRow
                                key={location.id}
                                ref={(element) => setRowRef(element, index)}
                                location={location}
                                locationLength={locations.length}
                                isActive={activeIndex === index}
                                hasActiveHover={hasActiveHover}
                                onHover={() => setActiveIndex(index)}
                                onLeave={() => setActiveIndex(null)}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile / tablet fallback */}
                <div className="grid gap-8 min-[1000px]:hidden">
                    {locations.map((location) => (
                        <article
                            key={location.id}
                            className="border-t border-black/15 pt-6"
                        >
                            <div className="mb-4 aspect-[4/5] overflow-hidden bg-neutral-200">
                                <img
                                    src={location.image}
                                    alt={location.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <h3 className="text-[clamp(1.4rem,3vw,2rem)] font-semibold leading-none">
                                {location.title}
                            </h3>

                            <p className="mt-3 text-[0.82rem] font-semibold uppercase tracking-[0.06rem]">
                                {location.address}
                            </p>

                            <p className="mt-3 max-w-xl tracking-[0.025rem] text-[clamp(0.85rem,1.3vw,1rem)] leading-[1.6] text-black/75">
                                {location.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}