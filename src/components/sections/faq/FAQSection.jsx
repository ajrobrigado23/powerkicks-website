import FAQAccordionItem from "./FAQAccordionItem.jsx";
import { faqs } from "./faq.js";
import { useState } from "react";

export default function FAQSection () {

    // For the UI Accordion
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="w-full px-10 pt-[2rem] pb-[2rem] bg-black text-white">
            <div className="flex flex-col min-[700px]:gap-15 tablet:gap-20">
                {/* Section heading */}
                <div className="pb-15 text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold min-[700px]:pb-6">
                    <p className="mb-1 text-sm font-semibold text-[#7F7F7F]">Partners / Affiliation</p>
                    <h3>Frequently asked</h3>
                    <h3>questions</h3>
                </div>
                {/* FAQ content section */}
                <div
                    className="flex flex-col pb-0 min-[700px]:flex-row min-[700px]:justify-between"
                >
                    <p className="
                                    hidden
                                    text-[#7F7F7F]
                                    min-[700px]:block
                                    min-[700px]:font-semibold
                                    min-[700px]:tracking-[0.025rem]
                                    min-[700px]:text-[0.80rem]
                                    tablet:text-[clamp(0.80rem,1.25vw,1rem)]
                                ">
                        Everything you need to know before starting your Powerkicks journey.
                    </p>
                    {/* FAQ accordion items */}
                    <div className="flex flex-col pl-0 gap-15 min-[700px]:pl-15 min-[900px]:pl-30">
                        {faqs.map((item, index) => (
                            <FAQAccordionItem
                                key={item.id}
                                faq={item}
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

            </div>
        </section>
    );
}