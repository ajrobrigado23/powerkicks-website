import Header from "./components/layout/Header.jsx";
import BrandCarousel from "./components/animations/BrandCarousel.jsx";
import {useRef, useState} from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {

    const headerRef = useRef(null);
    const panelRef = useRef(null);
    const [navScrolled, setNavScrolled] = useState(false);
    const navScrolledRef = useRef(false);

    useGSAP(() => {

        const header = headerRef.current;
        const panel = panelRef.current;

        // Prevents GSAP from running if refs aren’t ready
        if (!header || !panel) return;

        // Initial state before animation
        gsap.set(panel, { y: 200 });

        // panel animation
        gsap.fromTo(panel,
                    { y: 200 },
                    {
                        y: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: header,
                            start: "top bottom",
                            end: "bottom 20%",
                            scrub: 1,
                        },
                    }
        );

        // 1. Hide nav when scrolling starts (ONLY if not in "scrolled nav" mode)
        ScrollTrigger.create({
                                 trigger: header,
                                 start: "top top",

                                 onEnter: () => {
                                     // Prevents conflict with second trigger
                                     if (navScrolledRef.current) return;

                                     gsap.to("#main-nav", {
                                         opacity: 0,
                                         y: -20,
                                         duration: 0.3,
                                         ease: "power2.in"
                                     });
                                 },

                                 // ✅ Back to very top → restore ORIGINAL nav
                                 onLeaveBack: () => {
                                     // Only run when very close to top
                                     if (window.scrollY <= 10) {
                                         navScrolledRef.current = false;
                                         setNavScrolled(false);

                                         gsap.fromTo("#main-nav", {
                                             opacity: 0,
                                             y: -20
                                         }, {
                                             opacity: 1,
                                             y: 0,
                                             duration: 0.3,
                                             ease: "power2.out"
                                         });
                                     }
                                 }
                             });

        // 2. Switch to "scrolled nav" at 85%
        ScrollTrigger.create({
                                 trigger: header,
                                 start: "85% top",

                                 // ✅ scrolling DOWN → show new nav
                                 onEnter: () => {
                                     navScrolledRef.current = true;
                                     setNavScrolled(true);

                                     gsap.fromTo("#main-nav", {
                                                     opacity: 0,
                                                     y: 20
                                                 },
                                                 {
                                                     opacity: 1,
                                                     y: 0,
                                                     duration: 0.3,
                                                     ease: "power2.out",
                                                 }
                                     );
                                 },

                                 // ❌ scrolling UP → hide it (do NOT restore original here)
                                 onEnterBack: () => {
                                     gsap.to("#main-nav", {
                                         opacity: 0,
                                         y: -20,
                                         duration: 0.3,
                                         ease: "power2.in"
                                     });
                                 },

                                 // ✅ keep new nav when scrolling further down
                                 onLeave: () => {
                                     // DO NOTHING → this is the key fix
                                 },

                                 // ❌ still hidden when going up
                                 onLeaveBack: () => {
                                     gsap.to("#main-nav", {
                                         opacity: 0,
                                         y: -20,
                                         duration: 0.3,
                                         ease: "power2.in"
                                     });
                                 }
                             });

    }, []);

    return (
        <>
            <Header ref={headerRef} navScrolled={navScrolled}/>
            <section
                ref={panelRef}
                className="relative z-20 w-full bg-white -mt-16 pt-8 pb-12"
            >
                <BrandCarousel />
            </section>

            {/* 👇 temporary — just to test scrolling */}
            <div style={{ height: "100vh", background: "lightgray" }}>
                scroll test
            </div>
        </>

    )
}
export default App;
