import NavBar from "./NavBar.jsx";
import HeroSection from "../sections/HeaderSection.jsx";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {

    const { navScrolled } = props

    return (
        <>
            <header ref={ref} className="relative w-full min-h-screen tablet:h-screen tablet:overflow-hidden">
                <NavBar navScrolled={navScrolled}/>
                <HeroSection />
            </header>
        </>
    );
});

Header.displayName = "Header";
export default Header;