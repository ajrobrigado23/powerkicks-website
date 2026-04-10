import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".home-header",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                delay: 0.3,
                stagger: 0.5,
                ease: "power1.inOut",
            }
        );

        tl.fromTo(
            ".home-para",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.5,
                ease: "power1.inOut",
            }
        );
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative grid min-h-screen w-full grid-cols-1 grid-rows-[auto_auto_auto_auto] tablet:grid-rows-[auto_1fr_auto] tablet:grid-cols-[1fr_1.5fr] tablet:h-screen"
        >
            {/* Headline overlay */}
            <div className="row-start-1 pt-25 pb-5 ps-10 col-start-1 z-20 tablet:p-0 tablet:absolute tablet:left-10 tablet:top-[22vh]">
                <div className="w-full tablet:w-max">
                    <p className="mb-1 text-sm font-semibold text-[#7F7F7F]">
                        Trusted by 1,000+ dedicated students
                    </p>
                    <h2 className="home-header text-black text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold">
                        More than kicks.
                    </h2>
                    <h2 className="home-header text-black text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold">
                        Built on <span className="text-[#B91C1C]">discipline</span>
                    </h2>
                    <button className="mt-2 bg-black px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-white">
                        View Schedule
                    </button>
                </div>
            </div>

            {/* Left content */}
            <div className="relative z-10 row-start-3 col-start-1 pt-5 px-10 tablet:self-end tablet:row-start-2 tablet:col-start-1 tablet:pb-[3.50rem] min-[1300px]:pb-25">
                <p className="home-para w-full font-medium tracking-[0.025rem] text-[clamp(1rem,1.2vw,1.375rem)] tablet:max-w-lg ">
                    Powerkicks Taekwondo Club is a certified training center recognized by the Philippine
                    Taekwondo Association. We focus on discipline, structure, and real progress helping students
                    grow stronger every session.
                </p>
            </div>

            {/* Right video */}
            <div className="relative
                            row-start-2
                            col-start-1
                            tablet:col-start-2
                            tablet:row-start-2
                            min-h-[300px]

            ">
                <video
                    className="hero-parallax absolute inset-0 h-full w-full object-cover object-center"
                    src="/videos/Powerkicks-Video-compress.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-40 pointer-events-none bg-linear-to-b from-black/55 to-transparent" />
            </div>

            {/* Bottom text */}
            <div className="row-start-4 flex items-center justify-between px-10 py-6 text-[11px] font-semibold tracking-wide tablet:row-start-3 tablet:col-span-2">
                <p>Certified Coaches</p>
                <p>Imus, Dasmariñas and General Trias</p>
                <p>Kids, Teens and Adults</p>
            </div>

        </section>
    );
}
