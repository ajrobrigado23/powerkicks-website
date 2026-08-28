import NavBar from "../components/layout/NavBar.jsx";
import GalleryHero from "../components/sections/gallery/GalleryHero.jsx";
import GalleryJourney from "../components/sections/gallery/GalleryJourney.jsx";

export default function Gallery() {

    return (
        <>
            <header>
                <NavBar></NavBar>
                <GalleryHero/>
            </header>

            <main>
                <GalleryJourney/>
            </main>
        </>
    );
}