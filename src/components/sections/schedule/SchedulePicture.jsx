import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LiftZoomImage from "../../ui/LiftZoomImage.jsx";

export default function SchedulePicture({
                                            src,
                                            className = "",
                                            alt,
                                            // controls the vertical object-position of the image
                                            centerPercentage = "50%",
                                            horizontalPosition = "center",
                                            delay = 0
                                        }) {
    // ref for the outer wrapper that will be clipped/revlead
    const imageWrapRef = useRef(null);
    // ref for the inner image container that will scale and move during reveal
    const imageRevealRef = useRef(null);

    // Runs the GSAP animation when the component mounts
    useGSAP(() => {
        // Get the actual DOM element of the outer wrapper
        const wrapper = imageWrapRef.current;
        // Get the actual DOM element of the inner reveal container
        const reveal = imageRevealRef.current;

        // Stop the animation setup if either element is missing
        if (!wrapper || !reveal) return;

        // Set the initial state of the wrapper:
        // the image starts hidden from the bottom because of clipPath
        gsap.set(wrapper, {
            clipPath: "inset(100% 0 0 0)",
        });

        // Set the initial state of the image:
        // slightly zoomed in and pushed down
        gsap.set(reveal, {
            scale: 1.15,
            y: 40,
        });

        // Create a GSAP timeline with ScrollTrigger
        // The animation starts when the image reaches 85% from the top of the viewport
        const tl = gsap.timeline({
                                     scrollTrigger: {
                                         trigger: wrapper,
                                         start: "top 85%",
                                         toggleActions: "play none none none",
                                     },
                                 });

        // Reveal the wrapper by animating the clipPath from hidden to visible
        tl.to(wrapper, {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power4.out",
            delay: delay
        })
            // At the same time, animate the image back to normal scale and position
            .to(
            reveal,
            {
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
            },
            0
        );
    }, { scope: imageWrapRef });

    return (
        // Outer wrapper:
        // controls clipping/reveal animation and accepts custom layout classes
        <div
            ref={imageWrapRef}
            className={`overflow-hidden ${className}`}
        >
            {/* Inner wrapper:
                this is the part that scales and moves during the reveal animation */}
            <div
                ref={imageRevealRef}
                className="h-full w-full">
                    {/* Actual image component:
                        handles image display and hover lift/zoom effect */}
                    <LiftZoomImage
                        src={src}
                        alt={alt}
                        centerPercentage={centerPercentage}
                        horizontalPosition={horizontalPosition}
                    />
            </div>
        </div>
    );
}