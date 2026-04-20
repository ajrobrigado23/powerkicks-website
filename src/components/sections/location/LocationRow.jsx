import { forwardRef } from "react";

const LocationRow = forwardRef(function LocationRow(
    { location, isActive, onHover },
    ref
) {
    return (
        <div
            ref={ref}
            onMouseEnter={onHover}
            onFocus={onHover}
            className="grid grid-cols-[1fr_1fr_1fr] items-center border-t border-black/15"
        >
            {/* Left */}
            <div className="py-8">
                <h3
                    className={`
                        text-[clamp(1.35rem,2vw,2rem)] leading-none font-semibold transition-opacity duration-300,
                        ${isActive ? "opacity-100" : "opacity-45"}
                    `}
                >
                    {location.title}
                </h3>
            </div>

            {/* Middle spacer */}
            <div className="py-8" />

            {/* Right */}
            <div className="py-8">
                <p
                    className={
                        `mb-2 text-[0.82rem] font-semibold uppercase tracking-[0.06rem] transition-opacity duration-300,
                        ${isActive ? "opacity-100" : "opacity-45"}
                        `}
                >
                    {location.address}
                </p>

                <p
                    className={`
                        max-w-md tracking-[0.025rem] text-[clamp(0.85rem,1.2vw,1rem)] leading-[1.6] transition-colors duration-300,
                        ${isActive ? "text-black" : "text-black/60"}
                    `}
                >
                    {location.description}
                </p>
            </div>
        </div>
    );
});

export default LocationRow;