import Header from "./components/layout/Header.jsx";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoCarouselSection from "./components/layout/LogoCarouselSection.jsx";

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

        // Hide original nav when user starts scrolling down from hero
        ScrollTrigger.create({
                                 trigger: header,
                                 start: "top top",

                                 onEnter: () => {
                                     if (navScrolledRef.current) return;

                                     gsap.to(".nav-inner", {
                                         yPercent: -100,
                                         duration: 0.45,
                                         ease: "power3.inOut",
                                         overwrite: "auto"
                                     });
                                 },

                                 onLeaveBack: () => {
                                     if (window.scrollY <= 10) {
                                         navScrolledRef.current = false;
                                         setNavScrolled(false);

                                         gsap.fromTo(
                                             ".nav-inner",
                                             {
                                                 yPercent: -100
                                             },
                                             {
                                                 yPercent: 0,
                                                 duration: 0.60,
                                                 ease: "power3.out",
                                                 overwrite: "auto"
                                             }
                                         );
                                     }
                                 }
                             });

        // Reveal new navbar from below like a curtain (switched to new navbar design)
        ScrollTrigger.create({
                                 trigger: logoSection,
                                 start: "top 0%",

                                 onEnter: () => {
                                     navScrolledRef.current = true;
                                     setNavScrolled(true);

                                     gsap.fromTo(
                                         ".nav-inner",
                                         {
                                             yPercent: 100
                                         },
                                         {
                                             yPercent: 0,
                                             duration: 0.85,
                                             ease: "power3.out",
                                             overwrite: "auto"
                                         }
                                     );
                                 },

                                 // only hide here — do NOT switch back to original navbar yet
                                 onLeaveBack: () => {
                                     gsap.to(".nav-inner", {
                                         yPercent: 100,
                                         delay: 0.15,
                                         duration: 1.25,
                                         ease: "power3.out",
                                         overwrite: "auto"
                                     });
                                 }
                             });

    }, []);

    return (
        <>
            <Header ref={headerRef} navScrolled={navScrolled}/>

            <main>
                <div ref={logoSectionRef}>
                    <LogoCarouselSection></LogoCarouselSection>
                </div>
                {/* Testing section */}
                <section className="h-screen">

                </section>
            </main>
        </>

    )
}
export default App;
