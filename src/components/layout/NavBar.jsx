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
            ease: "power1.inOut",
            onComplete: () => {
                // Clear GSAP inline transform after animation
                gsap.set(navigationRef.current, { clearProps: "all" });
            }
        });

    }, []);

    return(
        <nav ref={navigationRef} className="w-full h-12 z-50 bg-black lg:fixed lg:top-0 lg:left-1/2 lg:w-[64rem] lg:rounded-xl lg:-translate-x-1/2 lg:mt-4">
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