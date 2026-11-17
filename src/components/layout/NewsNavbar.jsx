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
            <nav className="fixed inset-x-0 top-0 z-40 bg-transparent px-8 py-2">
                <div className="flex items-center justify-between">
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

                        <Button
                            className="flex h-10 cursor-pointer flex-col items-center justify-center text-white"
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