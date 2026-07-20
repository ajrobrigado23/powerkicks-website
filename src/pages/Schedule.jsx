import NavBar from "../components/layout/NavBar.jsx";
import ScheduleHero from "../components/sections/schedule/ScheduleHero.jsx";
import ScheduleGallery from "../components/sections/schedule/ScheduleGallery.jsx";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Schedule() {

    const firstContainerRef = useRef(null);
    const secondContainerRef= useRef(null);

    const [navScrolled, setNavScrolled] = useState(false);
    const navScrolledRef = useRef(false);

    useGSAP(() => {
        const firstContainer = firstContainerRef.current;
        const secondContainer = secondContainerRef.current;

        if (!firstContainer || !secondContainer) return;

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

        const trigger1 = ScrollTrigger.create({
                                                  trigger: firstContainer,
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

        const trigger2 = ScrollTrigger.create({
                                                  trigger: secondContainer,
                                                  start: "center",
                                                  markers:true,
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
        <>
            <header ref={firstContainerRef} className="relative w-full min-h-screen tablet:h-screen tablet:overflow-hidden">
                <NavBar navScrolled={navScrolled}></NavBar>
                <ScheduleHero ref={secondContainerRef}></ScheduleHero>
            </header>

            <main>
                <ScheduleGallery></ScheduleGallery>
            </main>
        </>
    );
}