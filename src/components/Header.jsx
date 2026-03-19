import NavBar from "./NavBar.jsx";
import TextTicker from "./TextTicker.jsx";

export default function Header() {
    return(
            <section className="w-screen h-screen bg-white relative">
                <NavBar></NavBar>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden max-w-screen">
                    <TextTicker>POWERKICKS</TextTicker>
                    <TextTicker right='yes' black="yes">POWERKICKS</TextTicker>
                    <TextTicker>POWERKICKS</TextTicker>
                </div>
                <div className="flex h-full justify-center items-center">
                    <h1>Picture</h1>
                </div>
            </section>
    );
}