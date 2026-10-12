import trainingImageOne from '../../../assets/images/website-picture-1.webp'
import LiftZoomImage from "../../animations/LiftZoomImage.jsx";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import { gsap } from "gsap";

export default function TrainingSection() {
    const sectionRef = useRef(null);
    const imageWrapRef = useRef(null);

    useGSAP(() => {
        const wrapper = imageWrapRef.current;

        if (!wrapper) return;

        const image = wrapper.querySelector("img");

        // Prepare the image reveal by clipping the wrapper and offsetting the image.
        gsap.set(wrapper, {
            clipPath: "inset(100% 0 0 0)",
        });

        gsap.set(image, {
            scale: 1.15,
            y: 40,
        });

        // Reveal the image when it enters the viewport and reverse the animation on scroll-back.
        const tl = gsap.timeline({
                                     scrollTrigger: {
                                         trigger: wrapper,
                                         start: "top 85%",
                                         toggleActions: "play none none reverse",
                                     },
                                 });

        // Synchronize the wrapper reveal and image zoom-out for a cohesive transition.
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
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="grid grid-cols-[1fr_1.8fr] grid-rows-[auto_auto_auto_auto] w-full px-10 py-10 gap-[2rem] bg-black text-white"
        >
            {/* Section introduction */}
            <div className="row-start-1 col-span-2">
                <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold max-w-2xl">
                    Disciplines defines everything
                </h2>
            </div>

            {/* Training philosophy */}
            <div className="row-start-2 col-start-1 pt-[6rem]">
                <p className="max-w-[18rem] font-semibold text-[clamp(0.75rem,1.25vw,0.90rem)]">
                    Powerkicks (noun) -
                    Modern taekwondo training built on discipline, focus, and growth.
                </p>
            </div>

            <div className="row-start-2 col-start-2 justify-self-end pt-[6rem]">
                <p className="max-w-[32rem] font-light tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                    Taekwondo is more than just movement it’s discipline in action.
                    At Powerkicks, we focus on building strong fundamentals, confidence, and mindset through structured training.
                    Every session is designed to help students grow, both physically and mentally.
                </p>
            </div>

            {/* Featured training image */}
            <div className="row-start-3 col-start-1 pt-[2rem]">
                <p className="max-w-[16rem] font-semibold text-[clamp(0.75rem,1.25vw,0.90rem)]">
                    Real training moments
                </p>
            </div>

            <div className="row-start-3 col-start-2 pt-[2rem]">
                <div
                    ref={imageWrapRef}
                    className="w-full h-[430px] overflow-hidden"
                >
                    <LiftZoomImage
                        src={trainingImageOne}
                        alt="Powerkicks training session"
                    />
                </div>
            </div>

            {/* Training values and student development */}
            <div className="row-start-4 col-start-2 justify-items-end pt-[2rem] pb-[4rem] space-y-8">
                <p className="max-w-[32rem] font-light tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                    We believe progress comes from consistency, discipline, and proper guidance.
                </p>

                <p className="max-w-[32rem] font-light tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                    That’s why Powerkicks provides structured training for kids, teens, and adults, helping each student improve at their own pace while building real confidence.
                </p>
            </div>
        </section>
    );
}