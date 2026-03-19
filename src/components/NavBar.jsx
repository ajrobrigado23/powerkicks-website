import SlideUpText from "./SlideUpText.jsx";

export default function NavBar() {
    return(
        <nav className="fixed top-0 left-1/2 w-5xl h-13 rounded-xl -translate-x-1/2 bg-black mt-6">
            <div className="flex h-full justify-between items-center text-white">
                <h1 className="font-bold text-lg ms-6">Logo</h1>
                <ul className="flex font-semibold text-sm tracking-wider gap-15 me-13">
                    <li>About</li>
                    <li>Schedule</li>
                    <li>Contact</li>
                    <SlideUpText></SlideUpText>
                </ul>
            </div>
        </nav>
    );
}