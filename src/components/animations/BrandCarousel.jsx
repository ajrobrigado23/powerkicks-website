import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const brands = [
    { name: "kukkiwon", logo: "/logo/kukkiwon.png" },
    { name: "pta", logo: "/logo/pta-logo-black.png" },
    { name: "robinson", logo: "/logo/robinson-logo.png" },
    { name: "waltermart", logo: "/logo/waltermart-logo.png" },
    { name: "world taekwondo", logo: "/logo/world-taekwondo.png" }
];

export default function BrandCarousel() {
    // Scope GSAP to the carousel instance.
    const containerRef = useRef(null);

    // Track that is translated horizontally for the marquee effect.
    const trackRef = useRef(null);

    useGSAP(() => {
        const track = trackRef.current;

        if (!track) return;

        const images = track.querySelectorAll("img");
        let loaded = 0;

        const startAnimation = () => {
            /*
             * The track contains four identical groups of logos.
             * One quarter of the total width represents a complete cycle.
             */
            const singleWidth = track.scrollWidth / 4;

            gsap.fromTo(
                track,
                { x: 0 },
                {
                    x: -singleWidth,
                    duration: 30,
                    ease: "none",
                    repeat: -1,
                }
            );
        };

        // Start immediately when there are no assets to wait for.
        if (images.length === 0) {
            startAnimation();
            return;
        }

        /*
         * Wait until all logos are loaded before measuring the track.
         * Image dimensions affect scrollWidth, so measuring earlier can
         * produce an incorrect loop distance.
         */
        images.forEach((img) => {
            if (img.complete) {
                loaded++;

                if (loaded === images.length) {
                    startAnimation();
                }

                return;
            }

            img.addEventListener("load", () => {
                loaded++;

                if (loaded === images.length) {
                    startAnimation();
                }
            });
        });
    }, {
                // Restrict GSAP's selector scope to this component.
                scope: containerRef,
            });

    return (
        <div className="flex flex-col items-center justify-center">
            <div
                ref={containerRef}
                className="w-5/6 overflow-hidden"
                style={{
                    // Fade the edges to create a soft transition into the viewport.
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
            >
                <div ref={trackRef} className="flex w-max">
                    {/*
                     * Duplicate the logo set so the next cycle is already
                     * in place when the current cycle leaves the viewport.
                     */}
                    {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                        <div
                            key={i}
                            className="flex h-full items-center justify-center px-10 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-14 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}