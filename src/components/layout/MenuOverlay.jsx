
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SlideUpText from "../animations/SlideUpText.jsx";

export default function MenuOverlay({
                                        id = "site-menu",
                                        isOpen,
                                        onClose,
                                        triggerRef,
                                        items,
                                    }) {
    const overlayRef = useRef(null);
    const closeButtonRef = useRef(null);
    const menuItemsRef = useRef([]);
    const hasOpenedRef = useRef(false);

    // Handle keyboard accessibility and scroll locking.
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
            triggerRef?.current?.focus();
        };
    }, [isOpen, onClose, triggerRef]);

    // Animate the fullscreen menu and its links.
    useGSAP(() => {
        const overlay = overlayRef.current;
        const menuItems = menuItemsRef.current.filter(Boolean);

        gsap.killTweensOf([overlay, ...menuItems]);

        if (isOpen) {
            hasOpenedRef.current = true;

            gsap.set(overlay, {
                pointerEvents: "auto",
            });

            gsap.fromTo(
                overlay,
                {
                    clipPath: "inset(0% 0 100% 0)",
                },
                {
                    clipPath: "inset(0% 0 0% 0)",
                    duration: 1,
                    ease: "power4.inOut",
                }
            );

            gsap.fromTo(
                menuItems,
                {
                    yPercent: 100,
                    opacity: 0,
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power4.out",
                    delay: 0.6,
                }
            );

        } else if (hasOpenedRef.current) {
            gsap.to(overlay, {
                clipPath: "inset(0% 0 100% 0)",
                duration: 0.7,
                ease: "power4.inOut",
                delay: 0.2,
                onComplete: () => {
                    gsap.set(overlay, {
                        pointerEvents: "none",
                    });
                },
            });
        }
    }, {
                scope: overlayRef,
                dependencies: [isOpen],
            });

    // Render either a React Router link or external link.
    const renderMenuItem = (item, index) => {
        const link = item.external ? (
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
            >
                {item.label}
            </a>
        ) : (
            <Link
                to={item.to ?? item.href}
                onClick={onClose}
            >
                {item.label}
            </Link>
        );

        return (
            <li key={item.label} className="overflow-hidden">
                <div
                    ref={(element) => {
                        menuItemsRef.current[index] = element;
                    }}
                    className="opacity-0"
                >
                    <SlideUpText>
                        {link}
                    </SlideUpText>
                </div>
            </li>
        );
    };

    return (
        <div
            id={id}
            ref={overlayRef}
            role="dialog"
            aria-modal={isOpen}
            aria-label="Site navigation menu"
            aria-hidden={!isOpen}
            inert={!isOpen}
            className="
                fixed inset-0 z-50
                h-dvh w-full
                bg-black text-white
                pointer-events-none
            "
            style={{
                clipPath: "inset(0% 0 100% 0)",
            }}
        >
            <div className="
                grid h-full grid-cols-2
                grid-rows-[auto_1fr_auto]
                p-8
            ">

                {/* Powerkicks branding */}
                <div className="col-start-1 row-start-1">
                    <p className="font-bold uppercase text-2xl">
                        Powerkicks
                    </p>
                </div>

                {/* Primary navigation */}
                <nav
                    aria-label="Main navigation"
                    className="col-start-1 row-start-2 flex items-center"
                >
                    <ul className="
                        flex flex-col
                        font-bold uppercase tracking-tight
                        text-[clamp(2rem,5vw,4rem)]
                        leading-none
                    ">
                        {items.slice(0, 4).map((item, index) =>
                                                   renderMenuItem(item, index)
                        )}
                    </ul>
                </nav>

                {/* Social and legal links */}
                <div className="
                    col-start-1 row-start-3
                    flex flex-col gap-8
                    text-sm font-semibold uppercase
                ">
                    <ul>
                        {items.slice(4, 6).map((item, index) =>
                                                   renderMenuItem(item, index + 4)
                        )}
                    </ul>

                    <ul>
                        {items.slice(6).map((item, index) =>
                                                renderMenuItem(item, index + 6)
                        )}
                    </ul>
                </div>

                {/* Close button */}
                <div className="
                    col-start-2 row-start-1 row-span-3
                    flex justify-end items-start
                ">
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close menu"
                        className="cursor-pointer"
                    >
                        <span className="font-bold text-sm uppercase">
                            Close
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
}
