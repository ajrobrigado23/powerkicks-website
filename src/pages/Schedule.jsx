import NavBar from "../components/layout/NavBar.jsx";
import ScheduleHero from "../components/sections/schedule/ScheduleHero.jsx";
import ScheduleGallery from "../components/sections/schedule/ScheduleGallery.jsx";

export default function Schedule() {

    return (
        <>
            <NavBar></NavBar>

            <main>
                <ScheduleHero></ScheduleHero>
                <ScheduleGallery></ScheduleGallery>
            </main>
        </>
    );
}