import NavBar from "../components/layout/NavBar.jsx";
import ScheduleHero from "../components/sections/schedule/ScheduleHero.jsx";
import ScheduleGallery from "../components/sections/schedule/ScheduleGallery.jsx";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Schedule() {

    // Used by ScrollTrigger to detect when the user starts scrolling
    const firstContainerRef = useRef(null);
    // Used as the trigger for showing the scrolled version of the navbar.
    const secondContainerRef= useRef(null);

    // React state that determines which navbar style/version should be displayed.
    const [navScrolled, setNavScrolled] = useState(false);
    // Keeps track of the current navbar state without causing a React re-render.
    const navScrolledRef = useRef(false);

    // Run GSAP and ScrollTrigger logic when the Schedule page mounts.
    useGSAP(() => {

        // Get the actual DOM elements from the refs.
        const firstContainer = firstContainerRef.current;
        const secondContainer = secondContainerRef.current;

        // Stop the animation setup if either element does not exist.
        if (!firstContainer || !secondContainer) return;

        // Show the original/top navbar.
        const showTopNav = () => {

            // Stop any navbar animation that is currently running
            // to prevent conflicting animations.
            gsap.killTweensOf(".nav-inner");

            // Update both the ref and React state
            // to indicate that we are using the top navbar.
            navScrolledRef.current = false;
            setNavScrolled(false);

            // Animate the navbar from above the screen into its normal position.
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

        // Hide the original/top navbar.
        const hideTopNav = () => {
            // Stop any existing navbar animation.
            gsap.killTweensOf(".nav-inner");

            // Move the navbar upward and outside the screen.
            gsap.to(".nav-inner", {
                yPercent: -100,
                duration: 0.45,
                ease: "power3.inOut",
                overwrite: true,
            });
        };

        // Show the scrolled version of the navbar.
        const showScrolledNav = () => {

            // Stop any existing navbar animation.
            gsap.killTweensOf(".nav-inner");

            // Tell React to switch to the scrolled navbar version.
            navScrolledRef.current = true;
            setNavScrolled(true);

            // Animate the new navbar from below into its normal position.
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

        // Hide the scrolled version of the navbar.
        const hideScrolledNav = () => {

            // Stop any existing navbar animation.
            gsap.killTweensOf(".nav-inner");

            // Move the navbar downward and outside the screen.
            gsap.to(".nav-inner", {
                yPercent: 100,
                delay: 0.15,
                duration: 1.25,
                ease: "power3.out",
                overwrite: "auto",
            });
        };


        // First ScrollTrigger:
        // Controls hiding and showing the original navbar
        // when interacting with the top header section.
        const trigger1 = ScrollTrigger.create({
                                                  // Use the main header as the trigger element.
                                                  trigger: firstContainer,
                                                  // Trigger when the top of the header reaches
                                                  // the top of the viewport.
                                                  start: "top top",
                                                  // Runs when scrolling forward into the trigger.
                                                  onEnter: () => {
                                                      // Do nothing if we are already using the scrolled navbar.
                                                      if (navScrolledRef.current) return;
                                                      // Hide the original navbar.
                                                      hideTopNav();
                                                  },
                                                  // Runs when scrolling backward past the trigger.
                                                  onLeaveBack: () => {
                                                      // Only show the original navbar if the user
                                                      // is almost completely back at the top of the page.
                                                      if (window.scrollY <= 10) {
                                                          showTopNav();
                                                      }
                                                  },
                                              });

        // Second ScrollTrigger:
        // Controls when the scrolled navbar should appear.
        const trigger2 = ScrollTrigger.create({
                                                  // Use ScheduleHero as the trigger element.
                                                  trigger: secondContainer,
                                                  // Trigger when the defined "center" position is reached.
                                                  start: "center",
                                                  // Display ScrollTrigger markers for debugging.
                                                  // Remove or set to false when finished debugging.
                                                  markers:true,
                                                  // When scrolling forward and reaching the trigger,
                                                  // show the scrolled navbar.
                                                  onEnter: () => {
                                                      showScrolledNav();
                                                  },
                                                  // When scrolling backward above the trigger,
                                                  // hide the scrolled navbar.
                                                  onLeaveBack: () => {
                                                      hideScrolledNav();
                                                  },
                                              });

        // Refresh ScrollTrigger calculations whenever
        // the browser window is resized.
        const onResize = () => ScrollTrigger.refresh();

        // Add the resize event listener.
        window.addEventListener("resize", onResize);

        // Cleanup function that runs when the component unmounts.
        return () => {

            // Remove both ScrollTrigger instances.
            trigger1.kill();
            trigger2.kill();

            // Remove the resize event listener.
            window.removeEventListener("resize", onResize);
        };
    }, []);
    return (
        <>
            <header ref={firstContainerRef} className="relative w-full tablet:h-screen tablet:overflow-hidden">
                <NavBar navScrolled={navScrolled}></NavBar>
                <ScheduleHero ref={secondContainerRef}></ScheduleHero>
            </header>

            <main>
                <ScheduleGallery></ScheduleGallery>
            </main>
        </>
    );
}