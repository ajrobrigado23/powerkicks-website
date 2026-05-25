import {useState} from "react";
import TestimonialCarousel from "./TestimonialCarousel.jsx";
import SlideUpText from "../../animations/SlideUpText.jsx";
import blackBeltImg from "../../../assets/images/black-background-black-belt.jpg"
import quotesImg from "../../../assets/images/quotes-2.png"
import { testimonials } from "./testimonials.js";

export default function TestimonialSection() {

    const [currentPage, setCurrentPage] = useState(0);

    const nextSlide = () => {
        const totalPages = Math.ceil(testimonials.length / 3);

        if (currentPage === totalPages - 1)
            return;

        setCurrentPage(currentPage => currentPage + 1);
    };

    const prevSlide = () => {
        if (currentPage === 0)
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
                <div className="grid grid-cols-[72px_3fr_1fr] items-stretch">
                    {/* Column 1 */}
                    <div
                        className="
                            col-start-1
                            flex
                            w-[72px]
                            flex-col
                            justify-center
                            items-center
                            gap-6
                            h-full
                            border
                            border-black/20
                            text-[clamp(0.85rem,1.5vw,1.25rem)]
                            font-semibold
                            p-6"
                    >
                        <p className={`${currentPage !== 0 ? "text-xs text-[#7F7F7F]" : "text-[clamp(0.85rem,1.5vw,1.50rem)]"} tracking-[0.075rem]`}>01</p>
                        <p className={`${currentPage !== 1 ? "text-xs text-[#7F7F7F]" : "text-[clamp(0.85rem,1.5vw,1.50rem)]"}`}>02</p>
                        <p className="text-xs text-[#7F7F7F]">03</p>
                    </div>
                    {/* Column 2 */}
                    <div className="col-start-2 relative flex h-full min-h-full border-t border-b border-black/20 overflow-x-hidden">
                        <TestimonialCarousel
                            currentPage={currentPage}
                            testimonials={testimonials}
                        />

                        <div className="absolute bottom-10 left-6 flex gap-8 text-[clamp(0.75rem,1.5vw,0.85rem)] font-semibold">
                            {/* Prev Button */}
                            <button
                                type="button"
                                onClick={prevSlide}
                                className={`${currentPage === 0 && "text-[#7F7F7F]"} p-0 m-0 inline-flex bg-red-100 uppercase`}
                            >
                                <SlideUpText isArrowLeft={true}>Prev</SlideUpText>
                            </button>

                            {/* Next Button */}
                            <button
                                type="button"
                                onClick={nextSlide}
                                className={`${currentPage !== 0 && "text-[#7F7F7F]"} p-0 m-0 inline-flex bg-red-100 uppercase`}
                            >
                                <SlideUpText isArrowRight={true}>Next</SlideUpText>
                            </button>
                        </div>
                    </div>
                    {/* Column 3 */}
                    <div className="col-start-3">
                        <img
                            className="object-cover object-center w-full h-full"
                            src={blackBeltImg}
                            alt="black belt dobuk with black background" />
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