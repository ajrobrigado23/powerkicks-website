import TestimonialCard from "./TestimonialCard.jsx";
import { testimonials } from "./testimonials.js";

export default function TestimonialCarousel({ currentPage }) {

    return(
        <div className="h-full w-full overflow-hidden">
            <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
                {
                    testimonials.map((testimonial, index) => {
                        console.log(testimonial.name);

                        return (
                            <div
                                className="w-1/3 shrink-0 h-full"
                                key={index}
                            >
                                <TestimonialCard
                                    name={testimonial.name}
                                    title={testimonial.title}
                                    quotes={testimonial.quotes}
                                    image={testimonial.img}
                                />
                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
}