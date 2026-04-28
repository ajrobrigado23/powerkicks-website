import { useRef, useState } from "react";
import { locations } from "./locations.js";
import LocationRow from "./LocationRow.jsx";
import LocationPreview from "./LocationPreview.jsx";
import LocationAccordionItem from "./LocationAccordionItem.jsx";

export default function LocationSection() {
    // track which row is currently hovered (null means nothing)
    const [activeIndex, setActiveIndex] = useState(null);
    // stores references to each row DOM element (positioning the preview GSAP)
    const rowRefs = useRef([]);
    // For the UI Accordion
    const [openIndex, setOpenIndex] = useState(null);

    // saves each row's DOM element
    const setRowRef = (element, index) => {
        // [div1, div2, div3]
        rowRefs.current[index] = element;
    };

    // gets the actual location object based on hover
    const activeLocation =
        activeIndex !== null ? locations[activeIndex] : null;

    // gets the DOM element of the hovered row
    const activeRow =
        activeIndex !== null ? rowRefs.current[activeIndex] : null;

    // has something hovered
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

                {/* Desktop - (Implement a Hover Image Reveal) */}
                <div className="relative hidden min-[1090px]:block pt-[2rem]">
                    {/* Overlay layer aligned to same grid */}
                    <div className="pointer-events-none absolute inset-0 z-20 grid grid-cols-[1.5fr_1fr_1.8fr]">
                        <div />
                        <div className="relative">
                            {/* display the hover image preview */}
                            <LocationPreview
                                activeLocation={activeLocation}
                                activeRow={activeRow}
                            />
                        </div>
                        <div />
                    </div>

                    <div className="relative z-10">
                        {/* Loop through all branches */}
                        {locations.map((location, index) => (
                            // Render each row
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

                {/* Mobile / tablet fallback (Make it Accordion UI (Accordion Component) ) */}
                <div className="min-[1090px]:hidden">
                    {locations.map((location, index) => (
                        <LocationAccordionItem
                            key={location.id}
                            location={location}
                            locationLength={locations.length}
                            // check if this item is open
                            isOpen={openIndex === index}
                            onToggle={() =>
                                // if already open (close it), if closed (open it)
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}