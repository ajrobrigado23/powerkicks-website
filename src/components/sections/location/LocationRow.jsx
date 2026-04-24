import { forwardRef } from "react";

const LocationRow = forwardRef(function LocationRow(
    { location, locationLength, isActive, onHover, onLeave, hasActiveHover },
    ref
) {
    return (
        <div
            ref={ref}
            onMouseEnter={onHover}
            onFocus={onHover}
            onMouseLeave={onLeave}
            className={`grid grid-cols-[1.55fr_1fr_1.8fr] items-center border-black/50
                ${locationLength === location.id ? "border-b-0" : "border-b-2" }
            `}
        >
            {/* Left */}
            <div className="py-8 flex flex-col justify-center gap-2">
                <h3
                    className={`
                        font-semibold text-[clamp(1.75rem,2vw,3rem)] leading-none transition-opacity duration-300 max-w-sm,
                        ${!hasActiveHover && "opacity-100 text-black"}
                        ${hasActiveHover && isActive && "opacity-100 text-black"}
                        ${hasActiveHover && !isActive && "opacity-40 text-black"}
                    `}
                >
                    {location.title}
                </h3>
                <p className={`font-normal tracking-[0.025rem] text-[clamp(0.50rem,1.5vw,0.65rem)] max-w-[15rem]
                        ${!hasActiveHover && "text-black"}
                        ${hasActiveHover && isActive && "text-black"}
                        ${hasActiveHover && !isActive && "text-black/50"}
                    `}
                >
                    {location.address}
                </p>
            </div>

            {/* Middle spacer */}
            <div className="py-8"/>

            {/* Right */}
            <div className="py-8 col-start-3 justify-self-end">
                <p
                    className={`
                        max-w-[32rem] font-medium tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)] transition-colors duration-300
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