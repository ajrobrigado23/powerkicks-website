import NavBar from "./NavBar.jsx";
import HeroSection from "./HeaderSection.jsx";

export default function Header() {
    return(
            <header className="w-full relative lg:h-screen">
                {/* Navigation bar */}
                <NavBar />
                <HeroSection />
            </header>
    );
}