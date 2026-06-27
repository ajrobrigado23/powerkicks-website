import NavBar from "../components/layout/NavBar.jsx";
import ScheduleHero from "../components/sections/schedule/ScheduleHero.jsx";
import ScheduleContent from "../components/sections/schedule/ScheduleContent.jsx";

export default function Schedule() {

    return (
        <>
            <NavBar></NavBar>

            <main>
                <ScheduleHero></ScheduleHero>
                <ScheduleContent></ScheduleContent>
            </main>
        </>
    );
}