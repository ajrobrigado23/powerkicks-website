import NavBar from "./NavBar.jsx";
import HeroSection from "./HeaderSection.jsx";

export default function Header() {
    return(
            <header className="w-screen h-screen bg-white relative">
                <HeroSection>
                    {/* Navigation bar */}
                    <NavBar></NavBar>

                </HeroSection>
            </header>
    );
}