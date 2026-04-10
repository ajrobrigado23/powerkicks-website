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

    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useGSAP(() => {
        const track = trackRef.current;
        if (!track) return;

        const images = track.querySelectorAll("img");
        let loaded = 0;

        const startAnimation = () => {
            const singleWidth = track.scrollWidth / 4;

            gsap.fromTo(track,
                        { x: 0 },
                        {
                            x: -singleWidth,
                            duration: 30,
                            ease: "none",
                            repeat: -1,  // ✅ no recursion, no drift
                        }
            );
        };

        // No images edge case
        if (images.length === 0) {
            startAnimation();
            return;
        }

        // Wait for all images to load before measuring width
        images.forEach((img) => {
            if (img.complete) {
                loaded++;
                if (loaded === images.length) startAnimation();
            } else {
                img.addEventListener("load", () => {
                    loaded++;
                    if (loaded === images.length) startAnimation();
                });
            }
        });

    }, { scope: containerRef });


    return(
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
                    <div ref={trackRef} className="flex w-max will-change-transform">
                        {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                            <div key={i} className="flex items-center justify-center px-10 h-full opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                <img src={brand.logo} alt={brand.name} className="h-14 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}