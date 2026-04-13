import Header from "./components/layout/Header.jsx";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoCarouselSection from "./components/sections/LogoCarouselSection.jsx";
import TrainingSection from "./components/sections/TrainingSection.jsx";
import SmoothScrollProvider from "./components/layout/SmoothScrollProvider.jsx";

/*
    IMPORTANT TIPS - (When using React + GSAP)
    1. ❌ Don’t animate elements that mount/unmount
    2. ✅ Animate stable elements and change state inside them
 */

const App = () => {

    const headerRef = useRef(null);
    const logoSectionRef = useRef(null);
    const [navScrolled, setNavScrolled] = useState(false);
    const navScrolledRef = useRef(false);

    useGSAP(() => {

        const header = headerRef.current;
        const logoSection = logoSectionRef.current;

        if (!header || !logoSection) return;

        const showTopNav = () => {
            gsap.killTweensOf(".nav-inner")

            navScrolledRef.current = false;
            setNavScrolled(false);

            gsap.fromTo(
                ".nav-inner",
                {
                    yPercent: -100
                },
                {
                    yPercent: 0,
                    duration: 0.45,
                    ease: "power2.inOut",
                    overwrite: "auto"
                }
            );

        };

        const hideTopNav = () => {
            gsap.killTweensOf(".nav-inner");

            gsap.to(".nav-inner", {
                yPercent: -100,
                duration: 0.45,
                ease: "power3.inOut",
                overwrite: true,
            });
        };

        const showScrolledNav = () => {
            gsap.killTweensOf(".nav-inner");

            navScrolledRef.current = true;
            setNavScrolled(true);

            gsap.fromTo(
                ".nav-inner",
                { yPercent: 100 },
                {
                    yPercent: 0,
                    duration: 0.85,
                    ease: "power3.out",
                    overwrite: true,
                }
            );
        }

        // only hide here — do NOT switch back to original navbar yet
        const hideScrolledNav = () => {
            gsap.killTweensOf(".nav-inner");

            gsap.to(".nav-inner", {
                yPercent: 100,
                delay: 0.15,
                duration: 1.25,
                ease: "power3.out",
                overwrite: "auto"
            });

        }

        // Hide original nav when user starts scrolling down from hero
        const trigger1 = ScrollTrigger.create({
                                 trigger: header,
                                 start: "top top",
                                 onEnter: () => {
                                     if (navScrolledRef.current) return;
                                     hideTopNav();
                                 },
                                 onLeaveBack: () => {
                                     if (window.scrollY <= 10) {
                                         showTopNav();
                                     }
                                 },
                             });

        // Reveal new navbar from below like a curtain (switched to new navbar design)
        const trigger2 = ScrollTrigger.create({
                                 trigger: logoSection,
                                 start: "top 10%",
                                 onEnter: () => {
                                     showScrolledNav();
                                 },
                                 onLeaveBack: () => {
                                     hideScrolledNav();
                                 },
                             });

        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", onResize);

        return () => {
            trigger1.kill();
            trigger2.kill();
            window.removeEventListener("resize", onResize);
        };

    }, []);

    return (
        <SmoothScrollProvider>
            <Header ref={headerRef} navScrolled={navScrolled}/>

            <main>
                <div ref={logoSectionRef}>
                    <LogoCarouselSection></LogoCarouselSection>
                </div>
                <TrainingSection></TrainingSection>
            </main>
        </SmoothScrollProvider>

    )
}
export default App;
