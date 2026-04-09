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
            className="relative grid h-screen w-full grid-cols-[1fr_1.5fr] grid-rows-[auto_1fr_auto]"
        >
            {/* Headline overlay */}
            <div className="absolute left-10 top-1/3 z-20 -translate-y-1/2">
                <div className="w-max">
                    <p className="mb-2 text-sm font-semibold text-[#7F7F7F]">
                        Trusted by 1,000+ dedicated students
                    </p>
                    <h2 className="home-header text-black text-[clamp(3rem,4.5vw,4.5rem)] leading-[0.9] font-bold">
                        More than kicks.
                    </h2>
                    <h2 className="home-header text-black text-[clamp(3rem,4.5vw,4.5rem)] leading-[0.9] font-bold">
                        Built on <span className="text-[#B91C1C]">discipline</span>
                    </h2>
                </div>
            </div>

            {/* Left content */}
            <div className="row-start-2 col-start-1 relative z-10 ms-10 me-10 self-center mt-40">
                <button className="bg-black px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white">
                    View Schedule
                </button>

                <p className="home-para mt-8 max-w-md font-medium tracking-[0.025rem] text-[clamp(0.75rem,1vw,0.875rem)]">
                    Powerkicks Taekwondo Club is a certified training center recognized by the Philippine
                    Taekwondo Association. We focus on discipline, structure, and real progress helping students
                    grow stronger every session.
                </p>
            </div>

            {/* Right video */}
            <div className="relative row-start-2 col-start-2 min-h-0">
                <video
                    className="hero-parallax absolute inset-0 z-0 h-full w-full object-cover object-center"
                    src="/videos/Powerkicks-Video-compress.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                <div className="absolute inset-0 z-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 top-0 z-20 h-40 pointer-events-none bg-linear-to-b from-black/55 to-transparent" />
            </div>

            {/* Bottom text */}
            <div className="col-span-2 row-start-3 flex items-center justify-between ms-10 me-10 py-3 text-[11px] font-semibold tracking-wide">
                <p>Certified Coaches</p>
                <p>Imus, Dasmariñas and General Trias</p>
                <p>Kids, Teens and Adults</p>
            </div>

        </section>
    );
}