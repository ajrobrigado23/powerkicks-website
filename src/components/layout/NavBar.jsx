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
        <nav ref={navigationRef} className="fixed top-0 w-full h-12 z-50 bg-black lg:left-1/2 lg:w-[48rem] lg:rounded-xl lg:-translate-x-1/2 lg:mt-4 xl:w-[64rem]">
            <div className="flex h-full justify-between items-center text-white">
                <h1 className="font-bold text-lg ms-9 xl:ms-12" >Logo</h1>
                <ul className="flex font-semibold text-sm tracking-wider gap-14 lg:me-9 xl:me-12">
                    <SlideUpText>About</SlideUpText>
                    <SlideUpText>Schedule</SlideUpText>
                    <SlideUpText>Contact</SlideUpText>
                </ul>
            </div>
        </nav>
    );
}