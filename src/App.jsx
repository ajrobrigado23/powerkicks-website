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

                                     gsap.to("#main-nav", {
                                         opacity: 0,
                                         y: -20,
                                         duration: 0.3,
                                         ease: "power2.in"
                                     });
                                 },
                                 onLeaveBack: () => {
                                     if (window.scrollY <= 10) {
                                         navScrolledRef.current = false;
                                         setNavScrolled(false);

                                         gsap.fromTo(
                                             "#main-nav",
                                             {
                                                 opacity: 0,
                                                 y: -20
                                             },
                                             {
                                                 opacity: 1,
                                                 y: 0,
                                                 duration: 0.3,
                                                 ease: "power2.out"
                                             }
                                         );
                                     }
                                 }
                             });

        // Switch to the scrolled navbar when LogoCarouselSection enters
        ScrollTrigger.create({
                                 trigger: logoSection,
                                 start: "top 60%",

                                 onEnter: () => {
                                     navScrolledRef.current = true;
                                     setNavScrolled(true);

                                     gsap.fromTo(
                                         "#main-nav",
                                         {
                                             opacity: 0,
                                             y: 20
                                         },
                                         {
                                             opacity: 1,
                                             y: 0,
                                             duration: 0.3,
                                             ease: "power2.out"
                                         }
                                     );
                                 },

                                 onEnterBack: () => {
                                     navScrolledRef.current = true;
                                     setNavScrolled(true);

                                     gsap.fromTo(
                                         "#main-nav",
                                         {
                                             opacity: 0,
                                             y: 20
                                         },
                                         {
                                             opacity: 1,
                                             y: 0,
                                             duration: 0.3,
                                             ease: "power2.out"
                                         }
                                     );
                                 },

                                 onLeaveBack: () => {
                                     navScrolledRef.current = false;
                                     setNavScrolled(false);

                                     gsap.to("#main-nav", {
                                         opacity: 0,
                                         y: -20,
                                         duration: 0.25,
                                         ease: "power2.in"
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
            </main>
        </>

    )
}
export default App;
