import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function SchedulePicture({
                                            src,
                                            className = "",
                                            centerPercentage = "50%",
                                        }) {
    const imageWrapRef = useRef(null);

    useGSAP(() => {
        const wrapper = imageWrapRef.current;
        if (!wrapper) return;

        const image = wrapper.querySelector("img");
        if (!image) return;

        gsap.set(wrapper, {
            clipPath: "inset(100% 0 0 0)",
        });

        gsap.set(image, {
            scale: 1.15,
            y: 40,
        });

        const tl = gsap.timeline({
                                     scrollTrigger: {
                                         trigger: wrapper,
                                         start: "top 85%",
                                         toggleActions: "play none none reverse",
                                     },
                                 });

        tl.to(wrapper, {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power4.out",
        }).to(
            image,
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
        <div
            ref={imageWrapRef}
            className={`overflow-hidden ${className}`}
        >
            <img
                src={src}
                alt="powerkicks schedule picture"
                className="block h-full w-full object-cover"
                style={{
                    objectPosition: `center ${centerPercentage}`,
                }}
            />
        </div>
    );
}