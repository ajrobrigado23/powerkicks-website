import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NewsScrollColumn({ children }) {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    const [isDesktop, setIsDesktop] = useState(false);

    // Enable independent scrolling only on desktop.
    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)");

        const update = () => setIsDesktop(media.matches);

        update();

        media.addEventListener("change", update);

        return () => {
            media.removeEventListener("change", update);
        };
    }, []);

    // Initialize Lenis for the news column.
    useEffect(() => {
        if (!isDesktop) return;

        const lenis = new Lenis({
                                    wrapper: wrapperRef.current,
                                    content: contentRef.current,
                                    duration: 1.05,
                                    wheelMultiplier: 0.9,
                                    smoothWheel: true,
                                    autoRaf: false,
                                });

        // Keep GSAP ScrollTrigger synchronized.
        lenis.on("scroll", ScrollTrigger.update);

        const updateLenis = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateLenis);

        return () => {
            gsap.ticker.remove(updateLenis);
            lenis.destroy();
        };
    }, [isDesktop]);

    return (
        <section
            ref={wrapperRef}
            data-lenis-prevent={isDesktop ? "" : undefined}
            className="
                min-h-0 bg-[#171717]
                lg:overflow-y-auto
                lg:overscroll-contain
            "
        >
            <div
                ref={contentRef}
                className="px-6 py-10 lg:px-10"
            >
                {children}
            </div>
        </section>
    );
}
