import { useRef } from "react";
import { gsap } from "gsap";

export default function PremiumImageHover({ src, alt }) {
    const cardRef = useRef(null);
    const imageRef = useRef(null);

    const handleEnter = () => {
        gsap.to(cardRef.current, {
            y: -4,
            duration: 0.75,
            ease: "power3.out",
        });

        gsap.to(imageRef.current, {
            scale: 1.05,
            filter: "grayscale(0%) brightness(1)",
            duration: 0.75,
            ease: "power3.out",
        });
    };

    const handleLeave = () => {
        gsap.to(cardRef.current, {
            y: 0,
            duration: 0.75,
            ease: "power3.out",
        });

        gsap.to(imageRef.current, {
            scale: 1,
            filter: "grayscale(100%) brightness(0.85)",
            duration: 0.75,
            ease: "power3.out",
        });
    };

    return (
        <div
            ref={cardRef}
            className="h-full w-full overflow-hidden"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
                style={{
                    filter: "grayscale(100%) brightness(0.80)",
                    transform: "scale(1)",
                }}
            />
        </div>
    );
}