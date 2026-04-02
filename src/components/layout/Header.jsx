import NavBar from "./NavBar.jsx";
import HeroSection from "./HeaderSection.jsx";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
    return (
        <header ref={ref} className="w-full relative">
            <NavBar />
            <HeroSection />
        </header>
    );
});

Header.displayName = "Header";
export default Header;