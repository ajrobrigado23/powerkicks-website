import SlideUpText from "../animations/SlideUpText.jsx";
import {useRef} from "react";
import{ gsap } from "gsap";
import {useGSAP} from "@gsap/react";

export default function NavBar() {

    const navigationRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(navigationRef.current, {
            opacity: 0,
            y:-20
        }, {
            opacity: 1,
            y: 0,
            delay: 0.3,
            ease: "power1.inOut"
        });

    }, []);

    return(
        <nav ref={navigationRef} className="fixed top-0 left-1/2 w-5xl h-13 rounded-xl -translate-x-1/2 bg-black mt-4">
            <div className="flex h-full justify-between items-center text-white">
                <h1 className="font-bold text-lg ms-6">Logo</h1>
                <ul className="flex font-semibold text-sm tracking-wider gap-15 me-13">
                    <SlideUpText>About</SlideUpText>
                    <SlideUpText>Schedule</SlideUpText>
                    <SlideUpText>Contact</SlideUpText>
                </ul>
            </div>
        </nav>
    );
}