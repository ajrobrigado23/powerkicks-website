import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                                         defaults: {
                                             ease: "power3.out",
                                         },
                                     });

            const eyebrow = sectionRef.current.querySelector(".hero-eyebrow");
            const headingLines = sectionRef.current.querySelectorAll(".hero-line-inner");
            const paragraph = sectionRef.current.querySelector(".home-para");
            const button = sectionRef.current.querySelector(".hero-button");
            const video = sectionRef.current.querySelector(".hero-video");
            const bottomItems = sectionRef.current.querySelectorAll(".hero-bottom-item");

            tl
                // Slight video scale for premium feel
                .from(video, {
                    opacity: 0,
                    scale: 1.04,
                    y: 10,
                    duration: 1.35,
                    ease: "power3.out",
                }, 0)

                // Eyebrow
                .from(eyebrow, {
                    opacity: 0,
                    y: 18,
                    duration: 0.5,
                }, "-=0.8")

                // Headline line reveals
                .from(headingLines, {
                    yPercent: 100,
                    duration: 0.9,
                    stagger: 0.12,
                }, "-=0.35")

                // Paragraph + button
                .from([paragraph, button], {
                    opacity: 0,
                    y: 18,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                }, "-=0.35")

                // Bottom row
                .from(bottomItems, {
                    opacity: 0,
                    y: 14,
                    duration: 0.45,
                    stagger: 0.08,
                    ease: "power3.out",
                }, "-=0.2");
        }, sectionRef);

        return () => ctx.revert();

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative grid min-h-screen w-full grid-cols-1 grid-rows-[auto_auto_auto_auto] tablet:h-screen tablet:grid-cols-[1fr_1.5fr] tablet:grid-rows-[auto_1fr_auto]"
        >
            {/* Headline overlay */}
            <div className="row-start-1 col-start-1 z-20 pt-25 pb-5 ps-10 tablet:absolute tablet:left-10 tablet:top-[22vh] tablet:p-0">
                <div className="w-full tablet:w-max">
                    <p className="hero-eyebrow mb-1 text-sm font-semibold text-[#7F7F7F]">
                        Trusted by 1,000+ dedicated students
                    </p>

                    <div className="overflow-hidden">
                        <h2 className="hero-line-inner text-[clamp(3rem,5vw,4.5rem)] font-bold leading-[0.9] text-black">
                            More than kicks.
                        </h2>
                    </div>

                    <div className="overflow-hidden">
                        <h2 className="hero-line-inner text-[clamp(3rem,5vw,4.5rem)] font-bold leading-[0.9] text-black">
                            Built on <span className="text-[#B91C1C]">discipline</span>
                        </h2>
                    </div>

                    <button className="hero-button mt-2 bg-black px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-white">
                        View Schedule
                    </button>
                </div>
            </div>

            {/* Left content */}
            <div className="relative z-10 row-start-3 col-start-1 px-10 pt-5 tablet:row-start-2 tablet:col-start-1 tablet:self-end tablet:pb-[8.50rem] min-[1300px]:pb-30">
                <p className="home-para w-full text-[clamp(0.75rem,1.2vw,1rem)] font-medium tracking-[0.025rem] tablet:max-w-md">
                    Powerkicks is a certified taekwondo training center recognized by the Philippine Taekwondo
                    Association, focused on building discipline, structure, and real progress in every student.
                </p>
            </div>

            {/* Right video */}
            <div
                className="
                    relative row-start-2 col-start-1 min-h-[300px]
                    tablet:row-start-2 tablet:col-start-2
                "
            >
                <div className="absolute inset-0 overflow-hidden bg-black">
                    <video
                        className="hero-video absolute inset-0 block h-full w-full object-cover object-center"
                        src="/videos/Powerkicks-Video-compress.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/55 to-transparent" />
            </div>

            {/* Bottom text */}
            <div className="row-start-4 flex items-end justify-between px-10 pt-5 pb-2 text-[10px] font-semibold tracking-[0.025rem] tablet:row-start-3 tablet:col-span-2">
                <p className="hero-bottom-item">Certified Coaches</p>
                <p className="hero-bottom-item">Imus, Dasmariñas and General Trias</p>
                <p className="hero-bottom-item">Kids, Teens and Adults</p>
            </div>
        </section>
    );
}
