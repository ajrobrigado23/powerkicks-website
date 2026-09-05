import NavBar from "../components/layout/NavBar.jsx";
import GalleryHero from "../components/sections/gallery/GalleryHero.jsx";
import GalleryJourney from "../components/sections/gallery/GalleryJourney.jsx";
import Footer from "../components/layout/Footer.jsx";
import PowerkicksMarqueeSection from "../components/sections/marquee/PowerkicksMarqueeSection.jsx";
import useScrollNavbar from "../hooks/useScrollNavbar.js";

export default function Gallery() {

    const { firstContainerRef, secondContainerRef, navScrolled } = useScrollNavbar();

    return (
        <>
            <header ref={firstContainerRef} className="relative w-full tablet:overflow-hidden">
                <NavBar navScrolled={navScrolled}></NavBar>
                <GalleryHero ref={secondContainerRef}/>
            </header>

            <main>
                <GalleryJourney/>
                <PowerkicksMarqueeSection backgroundColorBlack={false}/>
            </main>

            <Footer backgroundColorBlack={false} textColorWhite={false}></Footer>
        </>
    );
}