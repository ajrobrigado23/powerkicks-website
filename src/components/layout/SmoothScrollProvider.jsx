import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }) {
    // use lenis for smooth scrolling
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
                                    duration: 1.05,
                                    smoothWheel: true,
                                    wheelMultiplier: 0.9,
                                    touchMultiplier: 1.1,
                                    easing: (t) => 1 - Math.pow(1 - t, 4),
                                });

        lenisRef.current = lenis;

        const onScroll = () => {
            ScrollTrigger.update();
        };

        lenis.on("scroll", onScroll);

        const update = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.off("scroll", onScroll);
            gsap.ticker.remove(update);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return children;
}