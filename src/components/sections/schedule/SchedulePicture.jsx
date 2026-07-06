import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LiftZoomImage from "../../ui/LiftZoomImage.jsx";

export default function SchedulePicture({
                                            src,
                                            className = "",
                                            centerPercentage = "50%",
                                        }) {
    const imageWrapRef = useRef(null);
    const imageRevealRef = useRef(null);

    useGSAP(() => {
        const wrapper = imageWrapRef.current;
        const reveal = imageRevealRef.current;

        if (!wrapper || !reveal) return;

        gsap.set(wrapper, {
            clipPath: "inset(100% 0 0 0)",
        });

        gsap.set(reveal, {
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
        <div
            ref={imageWrapRef}
            className={`overflow-hidden ${className}`}
        >
            <div
                ref={imageRevealRef}
                className="h-full w-full">
                    <LiftZoomImage
                        src={src}
                        alt="powerkicks schedule picture"
                        centerPercentage={centerPercentage}
                    />
            </div>
        </div>
    );
}