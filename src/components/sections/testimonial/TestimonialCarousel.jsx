import TestimonialCard from "./TestimonialCard.jsx";

export default function TestimonialCarousel({ currentPage, testimonials, cardsPerPage }) {

    // render each group as one full page
    const groupedTestimonials = [];

    for (let i = 0; i < testimonials.length; i += cardsPerPage) {
        // move from page 1 to page 2, instead of sliding card by card.
        groupedTestimonials.push(testimonials.slice(i, i + cardsPerPage));
    }

    return(
        <div className="h-full w-full overflow-x-hidden overflow-y-visible">
            <div
                className="flex h-full min-h-full transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
                {groupedTestimonials.map((group, pageIndex) => (
                    <div
                        key={pageIndex}
                        className="flex h-full min-w-full"
                    >
                        {group.map((testimonial, index) => (
                            <div
                                key={index}
                                className="h-full shrink-0"
                                style={{ width: `${100 / cardsPerPage}%` }}
                            >
                                <TestimonialCard
                                    name={testimonial.name}
                                    title={testimonial.title}
                                    quotes={testimonial.quotes}
                                    image={testimonial.img}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
}