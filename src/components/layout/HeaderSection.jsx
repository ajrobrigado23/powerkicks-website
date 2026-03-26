import SlideUpText from "../animations/SlideUpText.jsx";
import {useRef} from "react";
import{ gsap } from "gsap";
import {useGSAP} from "@gsap/react";

export default function HeroSection() {

    const sectionRef = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline();

        tl.fromTo(".home-header", {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            delay: 0.3,
            stagger: 0.5,
            ease: "power1.inOut"
        });

        tl.fromTo(".home-para", {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.5,
            ease: "power1.inOut"
        });

    }, { scope: sectionRef });

    return(
        <section
            ref={sectionRef}
            className="relative flex flex-col justify-end w-full h-screen overflow-hidden"
        >
            {/* Video Background */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/Powerkicks-Video-compress.mp4"
                autoPlay muted loop playsInline
            />
            {/* Adding gradient black at the bottom of the video */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

            {/* Hero Content */}
            <div className="relative flex justify-around mb-10 z-10 max-[900px]:gap-6 max-[900px]:flex-col max-[900px]:m-8">
                <div className="flex gap-1 font-bold uppercase leading-none max-[523px]:gap-0 min-[900px]:flex-col min-[900px]:text-[clamp(2.5rem,4.5vw,4.5rem)] max-[841px]:flex-col max-[900px]:text-[clamp(2rem,10vw,3rem)]">
                    <h2 className="home-header min-[900px]:leading-[0.725] text-white">The Powerkicks</h2>
                    <h2 className="home-header ml-2 text-[#6b6b6b] max-[841px]:ml-0 min-[900px]:ml-0">Difference</h2>
                </div>
                <div className="flex flex-col justify-end text-white max-[900px]:self-start max-[900px]:gap-2">
                    <p className="home-para tracking-[0.025rem] max-w-md max-[900px]:max-w-full lg:max-w-md xl:max-w-lg text-[clamp(0.75rem,1.0vw,0.875rem)]">The Best Taekwondo Club You’ll Ever Experience Proudly affiliated with the
                        Philippine Taekwondo Association. Where power, discipline,
                        and champions are built every single day.</p>
                    <div className="home-para self-end text-xs gap-1 flex items-end font-bold tracking-wider me-3 lg-text-sm max-[856px]:mt-4 max-[856px]:self-start">
                        <SlideUpText isButton={true}>Get free trial</SlideUpText>
                    </div>
                </div>
            </div>

        </section>
    );
}