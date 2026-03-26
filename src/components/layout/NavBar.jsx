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
    useGSAP(() => {

        if (menuOpen) {
            // Animate dropdown open
            gsap.fromTo(
                dropdownRef.current,
                {
                    height: 0,
                    opacity: 0
                },
                {
                    height: "100vh",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power3.out"
                }
            );

            // Stagger menu items sliding up
            gsap.fromTo(
                menuItemsRef.current,
                {
                    y: 20,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.08,
                    ease: "power2.out",
                    delay: 0.1
                }
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

    const handleToggle = () => {
        const opening = !menuOpen;
        setMenuOpen(opening);
    };

    return(
        <>
            <nav ref={navigationRef} className="fixed top-0 w-full h-18 z-50 bg-black min-[900px]:h-14 min-[900px]:left-1/2 min-[900px]:w-[52rem] min-[900px]:rounded-xl min-[900px]:-translate-x-1/2 min-[900px]:mt-4 xl:w-[64rem]">
                <div className="flex h-full justify-between items-center text-white">
                    <h1 className="font-bold text-lg ms-8 " >Logo</h1>
                    <ul className="flex font-semibold text-xs uppercase gap-12 min-[900px]:me-8 xl:me-8 max-[900px]:hidden">
                        <SlideUpText>About</SlideUpText>
                        <SlideUpText>Schedule</SlideUpText>
                        <SlideUpText>Contact</SlideUpText>
                    </ul>
                    {/* Burger button — visible only at 900px+ */}
                    <button
                        className="hidden max-[900px]:flex flex-col justify-center items-center gap-1 me-8"
                        onClick={handleToggle}
                        aria-label="Toggle menu"
                    >
                        <span className="font-semibold text-sm uppercase">Menu</span>
                    </button>
                </div>
            </nav>

            {/* Dropdown — always mounted at 900px+, GSAP controls visibility */}
            <div
                ref={dropdownRef}
                className="hidden max-[900px]:grid fixed top-0 left-0 min-w-full h-auto bg-white z-70 text-black overflow-hidden opacity-0"
            >
                {/* Grid layout */}
                <div className="grid grid-cols-2 grid-rows-[auto_1fr_auto] p-8">

                    <ul className="col-start-1 row-start-2 flex flex-col font-semibold text-sm tracking-wider gap-4">
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

                    {/* Left column - row 1 */}
                    <div className="col-start-1 row-start-1 flex">
                        <p>Powerkicks</p>
                    </div>

                    {/* Left column - row 3 (auto) */}
                    <div className="col-start-1 row-start-3 flex flex-col">
                        <div>
                            <p>Facebook</p>
                            <p>Instagram</p>
                        </div>
                        <div>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>

                    </div>

                    <div className="col-start-2 row-start-1 row-span-3 flex justify-end items-start">
                        {/* Burger button — visible only at 900px+ */}
                        <button
                            onClick={handleToggle}
                            aria-label="Toggle menu"
                        >
                            <span className="font-semibold text-sm uppercase">Close</span>
                        </button>
                    </div>

                </div>

            </div>

        </>
    );
}