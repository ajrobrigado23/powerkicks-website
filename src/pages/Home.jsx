import Header from "../components/layout/Header.jsx";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BrandSection from "../components/sections/brand/BrandSection.jsx";
import TrainingSection from "../components/sections/training/TrainingSection.jsx";
import InstructorsSection from "../components/sections/instructors/InstructorsSection.jsx";
import LocationSection from "../components/sections/location/LocationSection.jsx";
import TestimonialSection from "../components/sections/testimonial/TestimonialSection.jsx";
import FAQSection from "../components/sections/faq/FAQSection.jsx";
import PowerkicksMarqueeSection from "../components/sections/marquee/PowerkicksMarqueeSection.jsx";
import Footer from "../components/layout/Footer.jsx";

const Home = () => {
    const headerRef = useRef(null);
    const logoSectionRef = useRef(null);

    const [navScrolled, setNavScrolled] = useState(false);

    // Keep navbar state synchronized for ScrollTrigger callbacks.
    const navScrolledRef = useRef(false);

    useGSAP(() => {
        const header = headerRef.current;
        const logoSection = logoSectionRef.current;

        if (!header || !logoSection) return;

        const showTopNav = () => {
            gsap.killTweensOf(".nav-inner");

            navScrolledRef.current = false;
            setNavScrolled(false);

            gsap.fromTo(
                ".nav-inner",
                { yPercent: -100 },
                {
                    yPercent: 0,
                    duration: 0.45,
                    ease: "power2.inOut",
                    overwrite: "auto",
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
        };

        const hideScrolledNav = () => {
            gsap.killTweensOf(".nav-inner");

            gsap.to(".nav-inner", {
                yPercent: 100,
                delay: 0.15,
                duration: 1.25,
                ease: "power3.out",
                overwrite: "auto",
            });
        };

        // Hide the initial navbar as the header scrolls out of view.
        const trigger1 = ScrollTrigger.create({
                                                  trigger: header,
                                                  start: "top top",
                                                  onEnter: () => {
                                                      if (navScrolledRef.current) return;
                                                      hideTopNav();
                                                  },
                                                  onLeaveBack: () => {
                                                      // Restore the initial navbar only when returning to the page top.
                                                      if (window.scrollY <= 10) {
                                                          showTopNav();
                                                      }
                                                  },
                                              });

        // Switch navbar variants when the brand section reaches the viewport threshold.
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

        // Recalculate trigger positions when the layout changes.
        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", onResize);

        // Remove scroll triggers and listeners when the page unmounts.
        return () => {
            trigger1.kill();
            trigger2.kill();
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <>
            <Header ref={headerRef} navScrolled={navScrolled} />

            <main>
                <div ref={logoSectionRef}>
                    <BrandSection />
                </div>

                <TrainingSection />
                <InstructorsSection />
                <LocationSection />
                <TestimonialSection />
                <FAQSection />

                <PowerkicksMarqueeSection
                    backgroundColorBlack={true}
                    textIsBlack={false}
                />
            </main>

            <Footer />
        </>
    );
};

export default Home;