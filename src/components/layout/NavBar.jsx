import SlideUpText from "../animations/SlideUpText.jsx";
import {useRef} from "react";
import{ gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import Button from "../ui/Button.jsx";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo.jsx";
import { MENU_ITEMS } from "../../data/navigation.js";
import MenuOverlay from "./MenuOverlay.jsx";
import useNavigationMenu from "../../hooks/useNavigationMenu.js";

export default function NavBar({
                                   navScrolled,
                                   isBlack = false,
                               }) {
    
    const navigationRef = useRef(null);

    const {
        menuButtonRef,
        menuOpen,
        menuId,
        handleToggle,
        closeMenu,
    } = useNavigationMenu();

    // Reveal the navbar content when the navbar mounts.
    useGSAP(() => {
        gsap.fromTo(
            [".nav-text-inner", ".nav-button-inner"],
            {
                yPercent: 110,
            },
            {
                yPercent: 0,
                duration: 1.25,
                stagger: 0.08,
                ease: "power4.out",
                delay: 0.25,
            }
        );
    },{scope: navigationRef});

    // External link attributes.
    const getLinkProps = (item) => {
        if (!item.external) return {};

        return {
            target: "_blank",
            rel: "noreferrer noopener",
        };
    };

    // Render internal and external navigation links.
    const renderMenuLink = (item, onClick) => {
        if (!item.external) {
            return (
                <Link
                    to={item.to ?? item.href}
                    onClick={onClick}
                >
                    {item.label}
                </Link>
            );
        }

        return (
            <a
                href={item.href}
                onClick={onClick}
                {...getLinkProps(item)}
            >
                {item.label}
            </a>
        );
    }

    return(
        <>
            <nav
                id="main-nav"
                ref={navigationRef}
                className="fixed top-0 left-0 w-full z-40"
            >
                <div className="nav-mask overflow-hidden">
                    <div
                        className={
                            `nav-inner w-full
                            ${isBlack ? 'text-white' : 'text-black'} 
                            ${navScrolled ? "py-4 bg-transparent" : `py-2 ${isBlack ? 'bg-black' : 'bg-[#F7F7F7]'}`}
                        `}
                    >
                        <div className="flex h-full items-center justify-between">
                            <h1
                                className={`font-bold text-2xl ms-10 uppercase tracking-wider ${
                                    navScrolled && "hidden"
                                }`}
                            >
                                <div className="nav-text-reveal overflow-hidden">
                                    <div className="nav-text-inner">
                                        <Link
                                            to="/"
                                            aria-label="Go to Powerkicks homepage"
                                            className="inline-flex"
                                        >
                                            <Logo isBlack={isBlack} />
                                        </Link>
                                    </div>
                                </div>
                            </h1>

                            <ul
                                className={`nav-links ms-[6rem] flex font-bold text-[0.7rem] uppercase tracking-wide gap-8 max-[1100px]:text-[0.65rem] max-[901px]:hidden ${
                                    navScrolled && "hidden"
                                }`}
                            >
                                {MENU_ITEMS.slice(0, 4).map((item) => (
                                    <li key={item.label} className="nav-text-reveal overflow-hidden">
                                        <div className="nav-text-inner">
                                            <SlideUpText>
                                                {renderMenuLink(item)}
                                            </SlideUpText>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div
                                className={`overflow-hidden max-[901px]:ml-auto max-[901px]:me-4 ${
                                    navScrolled ? "ml-auto me-2" : "me-10 hidden min-[575px]:block"
                                }`}
                            >
                                <div className="nav-button-inner">
                                    <Button
                                        className="flex items-center justify-center font-bold tracking-wider text-sm uppercase"
                                        padding="px-4 py-3"
                                        backgroundColor="bg-[#B91C1C]"
                                    >
                                        Get Free Trial
                                    </Button>
                                </div>
                            </div>

                            {/* Menu Button */}
                            <Button
                                className={`max-[901px]:flex flex-col justify-center items-center gap-1 me-8 cursor-pointer ${
                                    navScrolled
                                        ? "text-black px-[0.70rem] py-[0.65rem] bg-[#dee2e6] rounded-4xl"
                                        : "hidden"
                                }`}
                                ref={menuButtonRef}
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
            <MenuOverlay
                id={menuId}
                isOpen={menuOpen}
                onClose={closeMenu}
                triggerRef={menuButtonRef}
                items={MENU_ITEMS}
            />
        </>
    );
}
