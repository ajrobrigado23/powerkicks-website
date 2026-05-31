import {useEffect, useState} from "react";
import TestimonialCarousel from "./TestimonialCarousel.jsx";
import SlideUpText from "../../animations/SlideUpText.jsx";
import blackBeltImg from "../../../assets/images/black-background-black-belt.jpg"
import quotesImg from "../../../assets/images/quotes-2.png"
import { testimonials } from "./testimonials.js";

export default function TestimonialSection() {

    const [currentPage, setCurrentPage] = useState(0);
    // Track how many testimonial cards should be shown per page based on screen size
    const [cardsPerPage, setCardsPerPage] = useState(3);

    // calculate the total pages
    const totalPages = Math.ceil(testimonials.length / cardsPerPage);
    // keep the carousel page index within the available page range
    const safeCurrentPage = Math.min(currentPage, totalPages - 1);
    // disabled variables
    const isPrevDisabled = safeCurrentPage === 0;
    const isNextDisabled = safeCurrentPage === totalPages - 1;

    // Update the number of visible testimonial cards whenever the screen size changes
    useEffect(() => {
        const updateCardsPerPage = () => {
            setCardsPerPage(window.innerWidth < 900 ? 2 : 3);
        };

        updateCardsPerPage();
        window.addEventListener("resize", updateCardsPerPage);

        return () => window.removeEventListener("resize", updateCardsPerPage);
    }, []);

    const nextSlide = () => {

        if (safeCurrentPage === totalPages - 1)
            return;

        setCurrentPage(currentPage => currentPage + 1);
    };

    const prevSlide = () => {
        if (safeCurrentPage === 0)
            return
        setCurrentPage(currentPage => currentPage - 1);
    };

    return(
        <section className="w-full px-10 pt-[2rem] pb-[2rem]">
            <div className="flex flex-col min-[700px]:gap-15 tablet:gap-20">
                {/* Header */}
                <div className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold pb-6">
                    <p className="mb-1 text-sm font-semibold text-[#7F7F7F]">Testimonials</p>
                    <h3>Champion Share</h3>
                    <h3>Their Stories</h3>
                </div>
                <div
                    className="flex flex-col gap-4 pb-12 min-[700px]:pb-0 min-[700px]:flex-row min-[700px]:justify-between"
                >
                    <p className="opacity-0
                                  min-[700px]:opacity-100
                                  min-[700px]:font-semibold
                                  min-[700px]:tracking-[0.025rem]
                                  min-[700px]:text-[0.80rem]
                                  tablet:text-[clamp(0.80rem,1.25vw,1rem)]
                                ">
                        Achievements
                    </p>
                    <p className="font-medium max-w-full tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)] min-[700px]:max-w-md tablet:max-w-2xl">
                        If you're looking for disciplined, experienced, and high-quality taekwondo coaches
                        you're in the right place. </p>
                </div>
                {/* Testimonial Section */}
                <div className="grid grid-cols-1 items-stretch min-[1200px]:grid-cols-[72px_3fr_1fr]">
                    {/* Column 1 */}
                    <div
                        className="
                                    hidden
                                    min-[1200px]:col-start-1
                                    min-[1200px]:flex
                                    min-[1200px]:w-[72px]
                                    flex-col
                                    justify-center
                                    items-center
                                    gap-6
                                    h-full
                                    border
                                    border-black/20
                                    text-[clamp(0.85rem,1.5vw,1.25rem)]
                                    font-semibold
                                    p-6
                                "
                    >
                        {
                            // create 2 empty items because totalPages is 2 - [undefined, undefined]
                            Array.from({ length: totalPages }).map((_, index) => (
                            <p
                                key={index}
                                className={currentPage === index
                                    ? "text-[clamp(0.85rem,1.5vw,1.50rem)]"
                                    : "text-xs text-[#7F7F7F]"
                                }
                            >
                                {
                                    // padStart(2, "0") makes it always 2 digits:
                                    String(index + 1).padStart(2, "0") // 01
                                }
                            </p>
                        ))}
                    </div>
                    {/* Column 2 */}
                    <div className="col-start-1 relative flex h-full border-l border-t border-b border-black/20 overflow-x-hidden min-[1200px]:border-l-0 min-[1200px]:col-start-2">
                        <TestimonialCarousel
                            currentPage={safeCurrentPage}
                            testimonials={testimonials}
                            cardsPerPage={cardsPerPage}
                        />

                        {/* Buttons section */}
                        <div className="absolute bottom-10 left-6 flex gap-8 text-[clamp(0.75rem,1.5vw,0.85rem)] font-semibold">
                            {/* Prev Button */}
                            <button
                                type="button"
                                onClick={prevSlide}
                                disabled={isPrevDisabled}
                                className={`
                                            m-0 inline-flex p-0 uppercase
                                            ${isPrevDisabled
                                                                    ? "cursor-not-allowed text-[#7F7F7F]"
                                                                    : "cursor-pointer text-black"
                                                                }
                                        `}
                            >
                                <SlideUpText
                                    isArrowLeft={true}
                                    disabled={isPrevDisabled}
                                >
                                    Prev
                                </SlideUpText>
                            </button>

                            {/* Next Button */}
                            <button
                                type="button"
                                onClick={nextSlide}
                                disabled={isNextDisabled}
                                className={`
                                            m-0 inline-flex p-0 uppercase
                                            ${isNextDisabled
                                                                    ? "cursor-not-allowed text-[#7F7F7F]"
                                                                    : "cursor-pointer text-black"
                                                                }
                                        `}
                            >
                                <SlideUpText
                                    isArrowRight={true}
                                    disabled={isNextDisabled}
                                >
                                    Next
                                </SlideUpText>
                            </button>
                        </div>

                    </div>
                    {/* Column 3 */}
                    <div className="hidden min-[1200px]:col-start-3 min-[1200px]:block">
                        <img
                            className="object-cover object-center w-full h-full"
                            src={blackBeltImg}
                            alt="black belt dobuk with black background"
                        />
                    </div>
                </div>

            </div>
            {/* Bottom section */}
            <div className="flex justify-between pt-6">
                <div className="flex justify-center items-end gap-6">
                    <img
                        className="block object-contain w-5 h-5"
                        src={quotesImg}
                        alt="quotes" />
                    <p className="tracking-[0.025rem] text-[clamp(0.45rem,1vw,0.65rem)] font-medium">Strong body. Strong mind. Strong life</p>
                </div>
                <p className="uppercase tracking-[0.025rem] font-semibold text-[clamp(0.45rem,1vw,0.65rem)]">Powerkicks Taekwondo</p>
            </div>

        </section>
    );
}