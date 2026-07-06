import { useRef } from "react";
import { gsap } from "gsap";

export default function LiftZoomImage({
                                          src,
                                          alt = "powerkicks image",
                                          wrapperClassName = "",
                                          imageClassName = "block h-full w-full object-cover",
                                          centerPercentage = "50%",
                                      }) {
    const imageRef = useRef(null);

    const handleEnter = () => {
        if (!imageRef.current) return;

        gsap.killTweensOf(imageRef.current);

        gsap.to(imageRef.current, {
            scale: 1.05,
            y: -4,
            filter: "grayscale(0%) brightness(1)",
            duration: 0.75,
            ease: "power3.out",
        });
    };

    const handleLeave = () => {
        if (!imageRef.current) return;

        gsap.killTweensOf(imageRef.current);

        gsap.to(imageRef.current, {
            scale: 1,
            y: 0,
            filter: "grayscale(100%) brightness(0.85)",
            duration: 0.75,
            ease: "power3.out",
        });
    };

    return (
        <div
            className={`h-full w-full overflow-hidden ${wrapperClassName}`}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                className={imageClassName}
                style={{
                    objectPosition: `center ${centerPercentage}`,
                    filter: "grayscale(100%) brightness(0.85)",
                    transform: "scale(1)",
                    willChange: "transform, filter",
                }}
            />
        </div>
    );
}