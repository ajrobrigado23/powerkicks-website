import NavBar from "./NavBar.jsx";
import HeroSection from "./HeaderSection.jsx";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {

    const { navScrolled } = props

    return (
        <header ref={ref} className="w-full relative">
            <NavBar navScrolled={navScrolled}/>
            <HeroSection />
        </header>
    );
});

Header.displayName = "Header";
export default Header;