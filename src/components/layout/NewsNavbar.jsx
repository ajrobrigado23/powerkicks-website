import {Link} from "react-router-dom";
import Logo from "../ui/Logo.jsx";
import Button from "../ui/Button.jsx";
import useNavigationMenu from "../../hooks/useNavigationMenu.js";
import MenuOverlay from "./MenuOverlay.jsx";
import {MENU_ITEMS} from "../../data/navigation.js";


export default function NewsNavbar() {

    const {
        menuButtonRef,
        menuOpen,
        menuId,
        handleToggle,
        closeMenu,
    } = useNavigationMenu();

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-40 py-2 bg-transparent">
                <div className="flex items-center justify-between ml-8">
                    <Link
                        to="/"
                        aria-label="Go to Powerkicks homepage"
                        className="inline-flex"
                    >
                        <Logo isBlack={true} />
                    </Link>

                    <div className="flex gap-6">
                        <Button
                            className="flex h-10 items-center justify-center font-bold tracking-wider leading-none text-sm uppercase"
                            padding="px-4"
                            backgroundColor="bg-[#B91C1C]"
                        >
                            Get Free Trial
                        </Button>

                        {/* Menu Button */}
                        <Button
                            className="flex flex-col justify-center items-center h-10 me-8 cursor-pointer text-white"
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