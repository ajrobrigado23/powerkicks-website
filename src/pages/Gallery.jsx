import NavBar from "../components/layout/NavBar.jsx";
import GalleryHero from "../components/sections/gallery/GalleryHero.jsx";
import GalleryJourney from "../components/sections/gallery/GalleryJourney.jsx";
import Footer from "../components/layout/Footer.jsx";
import PowerkicksMarqueeSection from "../components/sections/marquee/PowerkicksMarqueeSection.jsx";

export default function Gallery() {

    return (
        <>
            <header>
                <NavBar></NavBar>
                <GalleryHero/>
            </header>

            <main>
                <GalleryJourney/>
                <PowerkicksMarqueeSection backgroundColorBlack={false}/>
            </main>

            <Footer></Footer>
        </>
    );
}