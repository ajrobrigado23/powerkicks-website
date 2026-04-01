import NavBar from "./NavBar.jsx";
import HeroSection from "./HeaderSection.jsx";
import BrandCarousel from "../animations/BrandCarousel.jsx";

export default function Header() {
    return(
        <>
            <header className="w-full relative">
                {/* Navigation bar */}
                <NavBar/>
                <HeroSection/>
            </header>
            <section className="w-full pt-8 pb-12">
                <BrandCarousel></BrandCarousel>
            </section>
        </>

    );
}