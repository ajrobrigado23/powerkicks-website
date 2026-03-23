import SlideUpText from "../animations/SlideUpText.jsx";
import {useRef} from "react";
import{ gsap } from "gsap";
import {useGSAP} from "@gsap/react";

export default function HeroSection({ children }) {

    const headerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".home-header", {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            delay: 0.3,
            stagger: 0.5,
            ease: "power1.inOut"
        });

        gsap.fromTo(".home-para", {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            delay: 0.8,
            stagger: 0.5,
            ease: "power1.inOut"
        });

    }, { scope: headerRef });

    return(
        <section
            ref={headerRef}
            className="relative grid grid-rows-[1fr_auto] w-full h-screen overflow-hidden"
        >
            {/* Video Background */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/Powerkicks-Video-compress.mp4"
                autoPlay muted loop playsInline
            />
            {/* Adding gradient black at the bottom of the video */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-5" />

            {/* 1st row */}
            <div className="relative z-10">
                {/* Renders the nav passed from Header */}
                {children}
            </div>
            {/* Hero Content */}
            <div className="relative flex justify-around mb-10 z-10">
                <div className="flex flex-col gap-1 font-bold text-[4.50rem] uppercase leading-none">
                    <h2 className="home-header leading-[0.725] text-white">The Powerkicks</h2>
                    <h2 className="home-header text-[#6b6b6b]">Difference</h2>
                </div>
                <div className="self-end flex flex-col items-start text-white">
                    <p className="home-para text-sm tracking-[0.025rem] max-w-lg">The Best Taekwondo Club You’ll Ever Experience Proudly affiliated with the
                        Philippine Taekwondo Association. Where power, discipline,
                        and champions are built every single day.</p>
                    <div className="home-para text-sm gap-1 self-end flex items-end font-bold tracking-wider me-3">
                        <SlideUpText isButton={true}>Get free trial</SlideUpText>
                    </div>
                </div>
            </div>

        </section>
    );
}