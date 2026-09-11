import ContactHero from "../components/sections/contact/ContactHero.jsx";
import NavBar from "../components/layout/NavBar.jsx";

export default function Contact() {

    return(
        <>
            <main className="min-h-screen bg-black">
                <NavBar isBlack={true}></NavBar>
                <ContactHero></ContactHero>
            </main>
        </>
    );
}