import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const brands = [
    { name: "kukkiwon", logo:"/logo/kukkiwon.png" },
    { name: "pta", logo:"/logo/pta-logo-black.png" },
    { name: "robinson", logo:"/logo/robinson-logo.png" },
    { name: "waltermart", logo:"/logo/waltermart-logo.png" },
    { name: "world taekwondo", logo:"/logo/world-taekwondo.png" }
];

export default function BrandCarousel() {

    // Reference to the outer carousel container.
    // This is mainly used as the scope for useGSAP().
    const containerRef = useRef(null);

    // Reference to the inner track that contains all the logos.
    // GSAP will move this element horizontally.
    const trackRef = useRef(null);

    useGSAP(() => {

        // Get the actual DOM element from the track ref.
        const track = trackRef.current;

        // Stop if the track element doesn't exist yet.
        if (!track) return;

        // Find every image inside the track.
        // We need to wait for these images before calculating
        // the total width of the carousel.
        const images = track.querySelectorAll("img");

        // Keeps track of how many images have finished loading.
        let loaded = 0;

        // Starts the infinite horizontal carousel animation.
        const startAnimation = () => {

            /*
             * The brands array is rendered 4 times:
             *
             * [brands][brands][brands][brands]
             *
             * Since the track contains four identical sets,
             * dividing scrollWidth by 4 gives us the width
             * of ONE complete set of logos.
             */
            const singleWidth = track.scrollWidth / 4;

            gsap.fromTo(
                track,

                // Starting position.
                {
                    x: 0
                },

                // Ending position.
                {
                    // Move the track exactly one set of logos to the left.
                    x: -singleWidth,

                    // How long one complete movement takes.
                    duration: 30,

                    // Linear movement.
                    // This prevents the carousel from speeding up or slowing down.
                    ease: "none",

                    // Repeat forever.
                    repeat: -1
                }
            );
        };

        /*
         * If there are no images, there is nothing to wait for.
         * Start the animation immediately.
         */
        if (images.length === 0) {
            startAnimation();
            return;
        }

        /*
         * Wait until ALL images have loaded before starting
         * the animation.
         *
         * This is important because image dimensions affect
         * track.scrollWidth.
         *
         * If we measured the width before the images loaded,
         * scrollWidth could be incorrect.
         */
        images.forEach((img) => {

            // If the image has already loaded before this code runs,
            // count it immediately.
            if (img.complete) {
                loaded++;

                // Start only after every image is ready.
                if (loaded === images.length) {
                    startAnimation();
                }

            } else {

                // If the image hasn't loaded yet,
                // wait for its load event.
                img.addEventListener("load", () => {

                    loaded++;

                    // Once the final image loads, start the carousel.
                    if (loaded === images.length) {
                        startAnimation();
                    }
                });
            }
        });

    }, {
                // Limits GSAP's selector scope to this component.
                // For example, ".track" queries would only search
                // inside containerRef.
                scope: containerRef
            });


    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div
                    ref={containerRef}
                    className="overflow-hidden w-5/6"
                    style={{
                        // Fade in ends later — logos visible sooner
                        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
                    }}
                >
                    <div ref={trackRef} className="flex w-max">
                        {
                            /*
                             * Repeat the brands array 4 times.
                             *
                             * Original:
                             * [1 2 3 4 5]
                             *
                             * Becomes:
                             * [1 2 3 4 5] [1 2 3 4 5]
                             * [1 2 3 4 5] [1 2 3 4 5]
                             *
                             * This creates enough content for the infinite
                             * scrolling illusion.
                             */
                        }

                        {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                            <div key={i}
                                 className="flex items-center justify-center px-10 h-full opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                <img src={brand.logo} alt={brand.name} className="h-14 object-contain"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}