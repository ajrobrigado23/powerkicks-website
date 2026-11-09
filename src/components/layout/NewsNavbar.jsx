import {Link} from "react-router-dom";
import Logo from "../ui/Logo.jsx";
import Button from "../ui/Button.jsx";
import useNavigationMenu from "../../hooks/useNavigationMenu.js";


export default function NewsNavbar() {

    const {
        menuButtonRef,
        menuOpen,
        menuId,
        handleToggle,
        closeMenu,
    } = useNavigationMenu();

    return (
        <nav className="py-4 bg-transparent">
            <div className="flex justify-between ml-8">
                <Link
                    to="/"
                    aria-label="Go to Powerkicks homepage"
                    className="inline-flex"
                >
                    <Logo isBlack={true} />
                </Link>

                <div className="flex gap-2">
                    <Button
                        className="flex items-center justify-center font-bold tracking-wider text-sm uppercase"
                        padding="px-4"
                        backgroundColor="bg-[#B91C1C]"
                    >
                        Get Free Trial
                    </Button>

                    {/* Menu Button */}
                    <Button
                        className="flex flex-col justify-center items-center gap-1 me-8 cursor-pointer text-black px-[0.70rem] py-[0.65rem] bg-[#dee2e6] rounded-4xl"
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
    );
}