import {useState} from "react";
import TestimonialCarousel from "./TestimonialCarousel.jsx";
import blackBeltImg from "../../../assets/images/black-background-black-belt.jpg"

export default function TestimonialSection() {

    const [currentPage, setCurrentPage] = useState(0);

    const nextSlide = () => {
        setCurrentPage(1);
    };

    const prevSlide = () => {
        setCurrentPage(0);
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
                <div className="grid grid-cols-[auto_3fr_1fr] items-stretch">
                    {/* Column 1 */}
                    <div className="col-start-1 bg-red-100">
                        <p>column 1</p>
                    </div>
                    {/* Column 2 */}
                    <div className="col-start-2 flex h-full">
                        <TestimonialCarousel currentPage={currentPage}></TestimonialCarousel>
                    </div>
                    {/* Column 3 */}
                    <div className="col-start-3 bg-red-300">
                        <img
                            className="object-cover object-center w-full h-full"
                            src={blackBeltImg}
                            alt="black belt dobuk with black background" />
                    </div>
                </div>

            </div>
        </section>
    );
}