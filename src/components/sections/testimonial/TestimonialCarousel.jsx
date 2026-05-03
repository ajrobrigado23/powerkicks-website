import TestimonialCard from "./TestimonialCard.jsx";

export default function TestimonialCarousel({ currentPage }) {

    return(
        <div className="overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
                <div className="w-1/3 shrink-0 px-3">
                    <TestimonialCard />
                </div>

                <div className="w-1/3 shrink-0 px-3">
                    <TestimonialCard />
                </div>

                <div className="w-1/3 shrink-0 px-3">
                    <TestimonialCard />
                </div>

                <div className="w-1/3 shrink-0 px-3">
                    <TestimonialCard />
                </div>

                <div className="w-1/3 shrink-0 px-3">
                    <TestimonialCard />
                </div>

                <div className="w-1/3 shrink-0 px-3">
                    <TestimonialCard />
                </div>
            </div>
        </div>
    );
}