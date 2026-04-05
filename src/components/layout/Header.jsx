import NavBar from "./NavBar.jsx";
import HeroSection from "./HeaderSection.jsx";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {

    const { navScrolled } = props

    return (
        <>
            <NavBar navScrolled={navScrolled}/>
            <header ref={ref} className="relative w-full h-screen overflow-hidden">
                <HeroSection />
            </header>
        </>
    );
});

Header.displayName = "Header";
export default Header;