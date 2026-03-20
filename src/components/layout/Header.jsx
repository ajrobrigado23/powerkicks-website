import NavBar from "./NavBar.jsx";
import HeroSection from "./HeaderSection.jsx";

export default function Header() {
    return(
            <header className="w-screen h-screen bg-white relative">
                <HeroSection>
                    {/* Navigation bar */}
                    <NavBar></NavBar>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden max-w-screen">

                    </div>
                    <div className="flex h-full justify-center items-center">
                    </div>
                </HeroSection>
            </header>
    );
}