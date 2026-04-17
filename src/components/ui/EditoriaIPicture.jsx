import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";

export default function EditorialPicture({ src, alt }) {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            imageRef.current,
            {
                scale: 1.25,
                yPercent: 7,
                filter: "brightness(0.5)",
            },
            {
                scale: 1.2,
                yPercent: 5,
                filter: "brightness(1)",
                ease: "none",
                delay: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    end: "top 30%",
                    toggleActions: "play none none none",
                    once: true,
                },
            }
        );
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="w-full h-[550px] overflow-hidden"
        >
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                className="block h-full w-full object-cover"
            />
        </div>
    );
}