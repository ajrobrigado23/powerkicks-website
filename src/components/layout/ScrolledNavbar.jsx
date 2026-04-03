import SlideUpText from "../animations/SlideUpText.jsx";

export default function ScrolledNavBar() {
    return (
        <nav className="fixed top-0 w-full mt-4 z-40">
            <div className="flex h-full justify-between items-center">
                <h1 className="font-bold text-lg ms-10 uppercase tracking-wider">Powerkicks</h1>
                {/* Get Free Trial button */}
                <button className="text-white font-bold tracking-wider text-sm uppercase ml-auto me-4">
                    <SlideUpText isButton={true}>Get Free Trial</SlideUpText>
                </button>

                {/* Menu button */}
                <button
                    className="flex flex-col justify-center items-center gap-1 me-8 cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <span className="font-semibold text-sm uppercase">Menu</span>
                </button>
            </div>
        </nav>
    );
}