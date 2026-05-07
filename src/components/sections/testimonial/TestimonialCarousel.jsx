import TestimonialCard from "./TestimonialCard.jsx";

export default function TestimonialCarousel({ currentPage }) {

    return(
        <div className="h-full w-full overflow-hidden">
            <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
                <div className="w-1/3 shrink-0 h-full">
                    <TestimonialCard />
                </div>

                <div className="w-1/3 shrink-0 h-full">
                    <TestimonialCard />
                </div>

                <div className="w-1/3 shrink-0 h-full">
                    <TestimonialCard />
                </div>

                <div className="w-1/3 shrink-0 h-full">
                    <TestimonialCard />
                </div>

                <div className="w-1/3 shrink-0 h-full">
                    <TestimonialCard />
                </div>

                <div className="w-1/3 shrink-0 h-full">
                    <TestimonialCard />
                </div>
            </div>
        </div>
    );
}