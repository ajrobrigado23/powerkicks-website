import { useRef } from "react";
import { gsap } from "gsap";

export default function LiftZoomImage({
                                          src,
                                          // default alt text for accessibility
                                          alt = "powerkicks image",
                                          wrapperClassName = "",
                                          imageClassName = "block h-full w-full object-cover",
                                          // controls the vertical object-position of the image
                                          centerPercentage = "50%",
                                      }) {
    // creates a reference to the image element so GSAP can animate it
    const imageRef = useRef(null);

    // runs when the mouse enters the image wrapper
    const handleEnter = () => {
        // stops the function if the image is not loaded or available yet
        if (!imageRef.current) return;

        // stops any current GSAP animation on the image before starting a new one
        gsap.killTweensOf(imageRef.current);

        // animates the image on hover: slightly zooms in, moves up, and removes grayscale
        gsap.to(imageRef.current, {
            scale: 1.05,
            y: -4,
            filter: "grayscale(0%) brightness(1)",
            duration: 0.75,
            ease: "power3.out",
        });
    };

    // runs when the mouse leaves the image wrapper
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
            // Makes the wrapper full size, hides the zoomed image overflow, and allows extra custom classes
            className={`h-full w-full overflow-hidden ${wrapperClassName}`}

            // Triggers the hover animation when the mouse enters
            onMouseEnter={handleEnter}

            // Triggers the reset animation when the mouse leaves
            onMouseLeave={handleLeave}
        >
            <img
                // Connects this image to imageRef so GSAP can control it
                ref={imageRef}

                // Displays the image passed through the src prop
                src={src}

                // Adds alt text for accessibility and SEO
                alt={alt}

                // Applies default or custom Tailwind styling to the image
                className={imageClassName}

                // Inline styles for image position and default visual state
                style={{
                    // Controls which part of the image is focused vertically
                    objectPosition: `center ${centerPercentage}`,

                    // Default state: black and white with slightly darker brightness
                    filter: "grayscale(100%) brightness(0.85)",

                    // Default scale before hover
                    transform: "scale(1)",

                    // Helps the browser prepare for animation performance
                    willChange: "transform, filter",
                }}
            />
        </div>
    );
}