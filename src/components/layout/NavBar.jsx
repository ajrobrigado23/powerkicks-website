import SlideUpText from "../animations/SlideUpText.jsx";
import { useEffect, useRef, useState } from "react";
import{ gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import Button from "../ui/Button.jsx";

const MENU_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
  { label: "Facebook", href: "https://facebook.com", external: true },
  { label: "Instagram", href: "https://instagram.com", external: true },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" }
];

export default function NavBar({ navScrolled }) {

    const navigationRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    // Dropdown navigation
    const dropdownRef = useRef(null);
    const menuItemsRef = useRef([]);
    const hasOpenedRef = useRef(false);
    const menuId = "mobile-menu";

    useEffect(() => {
        if (!menuOpen)
            return undefined;

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            closeButtonRef.current?.focus();
            return () => {
                document.body.style.overflow = "";
            };
        }

        document.body.style.overflow = "";
        if (hasOpenedRef.current) {
            toggleButtonRef.current?.focus();
        }

        return undefined;
    }, [menuOpen]);

    // Animation for the burger menu (dropdown on open/ close)
    useGSAP(() => {

        // add gsap context (New animations are freshly created)
        const ctx = gsap.context(() => {
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
                    menuItemsRef.current.filter(Boolean),
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
        }, dropdownRef.current);

        // reset DOM to original state (kill animations)
        return () => ctx.revert();

    }, { dependencies: [menuOpen] });

    const handleToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const getLinkProps = (item) => {
        if (!item.external) return {};
        return {
            target: "_blank",
            rel: "noreferrer noopener"
        };
    };

    return(
        <>
            <nav
                id="main-nav"
                ref={navigationRef}
                className="fixed top-0 left-0 w-full z-40 transform-gpu"
            >
                <div className="nav-mask overflow-hidden">
                    <div
                        className={`nav-inner w-full text-black will-change-transform ${
                            navScrolled ? "py-4 bg-transparent" : "py-3 bg-[#F7F7F7]"
                        }`}
                    >
                        <div className="flex h-full items-center justify-between">
                            <h1
                                className={`font-bold text-lg ms-10 uppercase tracking-wider transition-all duration-300 ${
                                    navScrolled && "hidden"
                                }`}
                            >
                                Powerkicks
                            </h1>

                            <ul
                                className={`ms-16 flex font-bold text-xs uppercase tracking-wide gap-20 max-[1100px]:text-[0.70rem] max-[1100px]:gap-13 max-[901px]:hidden transition-all duration-300 ${
                                    navScrolled && "hidden"
                                }`}
                            >
                                {MENU_ITEMS.slice(0, 3).map((item) => (
                                    <li key={item.label}>
                                        <SlideUpText>
                                            <a href={item.href} {...getLinkProps(item)}>
                                                {item.label}
                                            </a>
                                        </SlideUpText>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`flex items-center justify-center font-bold tracking-wider text-sm text-white uppercase max-[900px]:ml-auto max-[900px]:me-4 ${
                                    navScrolled ? "ml-auto me-2" : "me-10"
                                }`}
                            >
                                Get Free Trial
                            </Button>

                            {/* Menu Button */}
                            <Button
                                className={`max-[900px]:flex flex-col justify-center items-center gap-1 me-8 cursor-pointer ${
                                    navScrolled
                                        ? "text-black px-[0.70rem] py-[0.65rem] bg-[#dee2e6] rounded-4xl"
                                        : "hidden"
                                }`}
                                ref={toggleButtonRef}
                                onClick={handleToggle}
                                aria-label="Toggle menu"
                                aria-expanded={menuOpen}
                                aria-controls={menuId}
                                isMenu={true}
                            >
                                Menu
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Dropdown section */}
            <div
                ref={dropdownRef}
                id={menuId}
                className="hidden max-[900px]:grid fixed top-0 left-0 min-w-full h-screen bg-black z-50 text-white pointer-events-none"
                style={{ clipPath: "inset(0% 0 100% 0)" }}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                aria-hidden={!menuOpen}
            >
                <div className="grid grid-cols-2 grid-rows-[auto_1fr_auto] p-8 h-full">
                    <ul className="col-start-1 row-start-2 flex flex-col justify-center font-bold tracking-tight text-5xl gap-1 uppercase">
                        {MENU_ITEMS.slice(0, 3).map((item, i) => (
                            <li
                                key={item.label}
                                className="overflow-hidden self-start"
                            >
                                <div
                                    ref={(el) => (menuItemsRef.current[i] = el)}
                                    className="opacity-0 translate-y-full"
                                >
                                    <SlideUpText>
                                        <a
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            {...getLinkProps(item)}
                                        >
                                            {item.label}
                                        </a>
                                    </SlideUpText>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="col-start-1 row-start-1 flex">
                        <p className="font-bold uppercase text-2xl">Powerkicks</p>
                    </div>

                    <div className="col-start-1 row-start-3 flex flex-col uppercase text-sm font-semibold gap-8">
                        <ul>
                            {MENU_ITEMS.slice(3, 5).map((item, i) => {
                                const currentLength = 3 + i;
                                return (
                                    <li className="overflow-hidden" key={item.label}>
                                        <div
                                            ref={(el) => (menuItemsRef.current[currentLength] = el)}
                                            className="opacity-0 translate-y-full"
                                        >
                                            <a
                                                href={item.href}
                                                onClick={() => setMenuOpen(false)}
                                                {...getLinkProps(item)}
                                            >
                                                {item.label}
                                            </a>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <ul>
                            {MENU_ITEMS.slice(5).map((item, i) => {
                                const currentLength = 5 + i;
                                return (
                                    <li className="overflow-hidden" key={item.label}>
                                        <div
                                            ref={(el) => (menuItemsRef.current[currentLength] = el)}
                                            className="opacity-0 translate-y-full"
                                        >
                                            <a
                                                href={item.href}
                                                onClick={() => setMenuOpen(false)}
                                                {...getLinkProps(item)}
                                            >
                                                {item.label}
                                            </a>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="col-start-2 row-start-1 row-span-3 flex justify-end items-start">
                        <button
                            ref={closeButtonRef}
                            onClick={handleToggle}
                            aria-label="Close menu"
                            className="cursor-pointer"
                        >
                            <span className="font-bold text-sm uppercase">Close</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
