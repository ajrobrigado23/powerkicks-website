import NavBar from "../components/layout/NavBar.jsx";
import ScheduleHero from "../components/sections/schedule/ScheduleHero.jsx";
import ScheduleGallery from "../components/sections/schedule/ScheduleGallery.jsx";
import Footer from "../components/layout/Footer.jsx";
import PowerkicksMarqueeSection from "../components/sections/marquee/PowerkicksMarqueeSection.jsx";
import useScrollNavbar from "../hooks/useScrollNavbar.js";

export default function Schedule() {

    const { firstContainerRef, secondContainerRef, navScrolled } = useScrollNavbar();

    return (
        <>
            <header ref={firstContainerRef} className="relative w-full tablet:h-screen tablet:overflow-hidden bg-black">
                <NavBar navScrolled={navScrolled} isBlack={true}></NavBar>
                <ScheduleHero ref={secondContainerRef}></ScheduleHero>
            </header>

            <main className="bg-black">
                <ScheduleGallery></ScheduleGallery>
                <PowerkicksMarqueeSection backgroundColorBlack={true} textIsBlack={false}/>
            </main>

            <Footer/>
        </>
    );
}