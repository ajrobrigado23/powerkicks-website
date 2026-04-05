import SlideUpText from "../animations/SlideUpText.jsx";
import {useRef, useState} from "react";
import{ gsap } from "gsap";
import {useGSAP} from "@gsap/react";

const MENU_ITEMS = [
  "About",
  "Schedule",
  "Contact",
  "Facebook",
  "Instagram",
  "Privacy Policy",
  "Terms of Service"
];

export default function NavBar({ navScrolled }) {

    const navigationRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    // Dropdown navigation
    const dropdownRef = useRef(null);
    const menuItemsRef = useRef([]);
    const hasOpenedRef = useRef(false);

    // Animation for the navbar
    useGSAP(() => {
        gsap.fromTo(navigationRef.current, {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            delay: 0.3,
            ease: "power1.inOut",
            onComplete: () => {
                gsap.set(navigationRef.current, {clearProps: "all"});
            }
        });
    }, []);

    // Animation for the burger menu (dropdown on open/ close)
    useGSAP(() => {

        // add gsap context
        const ctx = gsap.context(() =>{
            if (menuOpen) {
                hasOpenedRef.current = true;
                gsap.set(dropdownRef.current, { pointerEvents: "auto" });

                // Reveal panel top to bottom
                gsap.fromTo(
                    dropdownRef.current,
                    {
                        clipPath: "inset(0% 0 100% 0)"
                    },

                    {
                        clipPath: "inset(0% 0 0% 0)",
                        duration: 1,
                        ease: "power4.inOut"
                    }
                );

                // Stagger menu items using the curtain and mask animation
                gsap.fromTo(
                    menuItemsRef.current,
                    {
                        y: "100%",
                        opacity: 1
                    },
                    // starts fully below the mask
                    {
                        y: "0%",
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.1,
                        ease: "power4.out",
                        delay: 0.6
                    }
                );
            } else {

                if (!hasOpenedRef.current) return;

                // Then panel clips back up
                gsap.to(dropdownRef.current, {
                    clipPath: "inset(0% 0 100% 0)",
                    duration: 0.7,
                    ease: "power4.inOut",
                    delay: 0.2,
                    onComplete: () => {
                        gsap.set(dropdownRef.current, { pointerEvents: "none" });
                    }
                });
            }
        });

        return () => ctx.revert();

    }, { dependencies: [menuOpen] });

    const handleToggle = () => {
        const opening = !menuOpen;
        setMenuOpen(opening);
    };

    return(
        <>
            <nav id="main-nav" ref={navigationRef}
                 className={`fixed top-0 w-full bg-transparent z-40 text-white ${
                     navScrolled
                         ? "py-4"
                         : "py-4 mt-4"}`
                }>
                <div className="flex h-full justify-between items-center text-white">
                    <h1 className="font-bold text-lg ms-10 uppercase tracking-wider">Powerkicks</h1>
                    <ul
                        className={`ms-16 flex font-semibold text-xs uppercase tracking-wide gap-20 max-[1101px]:hidden
                        ${navScrolled && "hidden"}
                    `}>
                        <SlideUpText>About</SlideUpText>
                        <SlideUpText>Schedule</SlideUpText>
                        <SlideUpText>Contact</SlideUpText>
                    </ul>
                    {/* Get Free Trial button */}
                    <button
                        className={`me-10 font-bold tracking-wider text-sm uppercase max-[1100px]:ml-auto max-[1100px]:me-4
                            ${navScrolled && "ml-auto"}
                        `}>
                        <SlideUpText isButton={true}>Get Free Trial</SlideUpText>
                    </button>

                    {/* Menu button */}
                    <button
                        className={`
                        ${ navScrolled 
                            ? "flex flex-col justify-center items-center gap-1 me-8 cursor-pointer text-black"
                            : "hidden max-[1100px]:flex flex-col justify-center items-center gap-1 me-8 cursor-pointer"}`}
                        onClick={handleToggle}
                        aria-label="Toggle menu"
                    >
                        <span className="font-semibold text-sm uppercase">Menu</span>
                    </button>
                </div>
            </nav>

            {/* Dropdown */}
            <div
                ref={dropdownRef}
                className="hidden max-[1100px]:grid fixed top-0 left-0 min-w-full h-screen bg-white z-50 text-black pointer-events-none"
                style={{ clipPath: "inset(0% 0 100% 0)" }}
            >
                <div className="grid grid-cols-2 grid-rows-[auto_1fr_auto] p-8 h-full">

                    <ul className="col-start-1 row-start-2 flex flex-col justify-center font-bold tracking-tight text-5xl gap-1 uppercase">
                        {
                            // It stops until Contact element
                            MENU_ITEMS.slice(0, 3).map((item, i) => (
                                    <li
                                        key={item}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            ref={(el) => (menuItemsRef.current[i] = el)}
                                            className="opacity-0 translate-y-full"
                                        >
                                            <SlideUpText>{item}</SlideUpText>
                                        </div>
                                    </li>
                                ))
                        }
                    </ul>

                    {/* Left column - row 1 */}
                    <div className="col-start-1 row-start-1 flex">
                        <p className="font-bold uppercase text-2xl">Powerkicks</p>
                    </div>

                    {/* Left column - row 3 */}
                    <div className="col-start-1 row-start-3 flex flex-col uppercase text-sm font-semibold gap-8">
                        <div>
                            {
                                MENU_ITEMS.slice(3, 5).map((item, i) => {
                                    // Starting from the Facebook until Instagram element
                                    const currentLength = 3 + i;
                                    return (
                                        <div className="overflow-hidden"
                                        key={currentLength}>
                                            <div
                                                ref={(el) => (menuItemsRef.current[currentLength] = el)}
                                                className="opacity-0 translate-y-full"
                                            >
                                                <p>{item}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            {
                                MENU_ITEMS.slice(5, MENU_ITEMS.length).map((item, i) => {
                                    // Starting from the Privacy Policy until Terms of Service
                                    const currentLength = 5 + i;
                                    return (
                                        <div className="overflow-hidden"
                                             key={currentLength}>
                                            <div
                                                ref={(el) => (menuItemsRef.current[currentLength] = el)}
                                                className="opacity-0 translate-y-full"
                                            >
                                                <p>{item}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="col-start-2 row-start-1 row-span-3 flex justify-end items-start">
                        <button onClick={handleToggle} aria-label="Toggle menu" className="cursor-pointer">
                            <span className="font-bold text-sm uppercase">Close</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}