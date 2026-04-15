import trainingImageOne from '../../assets/images/website-picture-1.webp'
import PremiumImageHover from "../ui/PremiumImageHover.jsx";
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

        gsap.set(wrapper, {
            clipPath: "inset(100% 0 0 0)",
        });

        gsap.set(image, {
            scale: 1.15,
            y: 40,
        });

        const tl =
            gsap.timeline({
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
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="grid grid-cols-[1fr_1.8fr] grid-rows-[auto_auto_auto_auto] w-full px-10 py-10 bg-black text-white">
            {/* 1st Row */}
            <div className="row-start-1 col-span-2 pb-[8rem]">
                <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold max-w-2xl">
                    Disciplines defines everything
                </h2>
            </div>
            {/* 2nd Row */}
            <div className="row-start-2 col-start-1">
                <p className="max-w-[16rem] font-semibold text-[clamp(0.75rem,1.25vw,0.90rem)]">
                    Powerkicks (noun) - <br/>
                    Modern taekwondo training built on discipline, focus, and growth.
                </p>
            </div>
            <div className="row-start-2 col-start-2 justify-self-end">
                <p className="max-w-[32rem] font-light tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                    Taekwondo is more than just movement it’s discipline in action.
                    At Powerkicks, we focus on building strong fundamentals, confidence, and mindset through structured training.
                    Every session is designed to help students grow, both physically and mentally.
                </p>
            </div>
            {/* 3rd Row */}
            <div className="row-start-3 col-start-1 pt-[4rem]">
                <p className="max-w-[16rem] font-semibold text-[clamp(0.75rem,1.25vw,0.90rem)]">
                    Real training moments
                </p>
            </div>
            <div className="row-start-3 col-start-2 pt-[4rem]">
                <div
                    ref={imageWrapRef}
                    className="w-full h-[430px] overflow-hidden">
                    <PremiumImageHover
                        src={trainingImageOne}
                        alt="Powerkicks training session"
                    />
                </div>
            </div>
            {/* 4th Row */}
            <div className="row-start-4 col-start-2 justify-items-end pt-[4rem] space-y-4">
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