import { forwardRef } from "react";

const LocationRow = forwardRef(function LocationRow(
    { location, isActive, onHover, onLeave, hasActiveHover },
    ref
) {
    return (
        <div
            ref={ref}
            onMouseEnter={onHover}
            onFocus={onHover}
            onMouseLeave={onLeave}
            className="grid grid-cols-[1fr_1fr_1.8fr] items-center border-b border-black/15"
        >
            {/* Left */}
            <div className="py-8">
                <h3
                    className={`
                        text-[clamp(1.35rem,2vw,2rem)] leading-none font-semibold transition-opacity duration-300,
                        ${!hasActiveHover && "opacity-100 text-black"}
                        ${hasActiveHover && isActive && "opacity-100 text-black"}
                        ${hasActiveHover && !isActive && "opacity-40 text-black"}
                    `}
                >
                    {location.title}
                </h3>
            </div>

            {/* Middle spacer */}
            <div className="py-8 bg-red-100"/>

            {/* Right */}
            <div className="py-8 col-start-3 justify-self-end bg-red-300">
                <p
                    className={`
                        max-w-[32rem] font-regular tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)] transition-colors duration-300,
                        ${!hasActiveHover && "text-black"}
                        ${hasActiveHover && isActive && "text-black"}
                        ${hasActiveHover && !isActive && "text-black/50"}
                    `}
                >
                    {location.description}
                </p>
            </div>
        </div>
    );
});

export default LocationRow;