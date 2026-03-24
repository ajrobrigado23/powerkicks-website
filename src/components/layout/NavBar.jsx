import SlideUpText from "../animations/SlideUpText.jsx";
import {useRef, useState} from "react";
import{ gsap } from "gsap";
import {useGSAP} from "@gsap/react";

export default function NavBar() {

    const navigationRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const menuItemsRef = useRef([]);

    // Animation for the navbar
    useGSAP(() => {
            gsap.fromTo(navigationRef.current, {
                opacity: 0,
                y:-20
            }, {
                opacity: 1,
                y: 0,
                delay: 0.3,
                ease: "power1.inOut",
                onComplete: () => {
                    // Clear GSAP inline transform after animation
                    gsap.set(navigationRef.current, { clearProps: "all" });
                }
            }
        );

    }, []);

    // Animation for the burger menu (dropdown on open/ close)
    // Animate dropdown on open/close
    useGSAP(() => {
        if (!dropdownRef.current) return;

        if (menuOpen) {
            // Animate dropdown open
            gsap.fromTo(
                dropdownRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
            );

            // Stagger menu items sliding up
            gsap.fromTo(
                menuItemsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, stagger: 0.08, ease: "power2.out", delay: 0.1 }
            );
        } else {
            // Animate dropdown close
            gsap.to(menuItemsRef.current, {
                y: -10,
                opacity: 0,
                duration: 0.2,
                stagger: 0.05,
                ease: "power2.in",
            });

            gsap.to(dropdownRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power3.in",
                delay: 0.1,
            });
        }
    }, { dependencies: [menuOpen], scope: navigationRef });

    // Burger line refs
    const line1 = useRef(null);
    const line2 = useRef(null);
    const line3 = useRef(null);

    const handleToggle = () => {
        const opening = !menuOpen;
        setMenuOpen(opening);

        if (opening) {
            // Animate to X
            gsap.to(line1.current, {
                rotate: 45,
                y: 8,
                duration: 0.3,
                ease: "power2.inOut"
            });
            gsap.to(line2.current, {
                opacity: 0,
                scaleX: 0,
                duration: 0.2,
                ease: "power2.in" });
            gsap.to(line3.current, {
                rotate: -45,
                y: -8,
                duration: 0.3,
                ease: "power2.inOut"
            });
        } else {
            // Animate back to burger
            gsap.to(line1.current, { rotate: 0, y: 0, duration: 0.3, ease: "power2.inOut" });
            gsap.to(line2.current, { opacity: 1, scaleX: 1, duration: 0.3, ease: "power2.out" });
            gsap.to(line3.current, { rotate: 0, y: 0, duration: 0.3, ease: "power2.inOut" });
        }
    };

    return(
        <>
            <nav ref={navigationRef} className="fixed top-0 w-full h-16 z-50 bg-black min-[900px]:h-12 min-[900px]:left-1/2 min-[900px]:w-[48rem] min-[900px]:rounded-xl min-[900px]:-translate-x-1/2 min-[900px]:mt-4 xl:w-[64rem]">
                <div className="flex h-full justify-between items-center text-white">
                    <h1 className="font-bold text-lg ms-9 xl:ms-12" >Logo</h1>
                    <ul className="flex font-semibold text-sm tracking-wider gap-14 min-[900px]:me-9 xl:me-12 max-[900px]:hidden">
                        <SlideUpText>About</SlideUpText>
                        <SlideUpText>Schedule</SlideUpText>
                        <SlideUpText>Contact</SlideUpText>
                    </ul>
                    {/* Burger button — visible only at -900px */}
                    <button
                        className="hidden max-[900px]:flex flex-col justify-center items-center gap-1.5 me-9 xl:me-12 w-7 h-6"
                        onClick={handleToggle}
                        aria-label="Toggle menu"
                    >
                        <span ref={line1} className="block h-0.5 w-full bg-white origin-center" />
                        <span ref={line2} className="self-end block h-0.5 w-3/4 bg-white origin-center" />
                        <span ref={line3} className="self-end block h-0.5 w-1/3 bg-white origin-center" />
                    </button>
                </div>
            </nav>

            {/* Dropdown — always mounted at 900px+, GSAP controls visibility */}
            <div
                ref={dropdownRef}
                className="hidden max-[900px]:block fixed top-[4.5rem] left-1/2 -translate-x-1/2 w-[48rem] xl:w-[64rem] bg-black rounded-xl z-40 text-white overflow-hidden h-0 opacity-0"
            >
                <ul className="flex flex-col font-semibold text-sm tracking-wider p-6 gap-4">
                    {["About", "Schedule", "Contact"].map((item, i) => (
                        <li
                            key={item}
                            ref={(el) => (menuItemsRef.current[i] = el)}
                            className="opacity-0"
                        >
                            <SlideUpText>{item}</SlideUpText>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
}