import Header from "./components/layout/Header.jsx";
import BrandCarousel from "./components/animations/BrandCarousel.jsx";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const App = () => {

    const headerRef = useRef(null);
    const panelRef = useRef(null);

    useGSAP(() => {

        const header = headerRef.current;
        const panel = panelRef.current;

        if (!header || !panel)
            return;

        // white panel slides up over the hero
        gsap.fromTo(panel,
                    { y: 100 },
                    {
                        y: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: header,
                            start: "bottom 90%",  // starts just before hero bottom hits viewport
                            end: "bottom 50%",
                            scrub: 1,
                        },
                    }
        );

    }, { dependencies: [] });

    return (
        <>
            <Header ref={headerRef}/>
            <section
                ref={panelRef}
                className="relative z-20 w-full bg-white -mt-16 pt-8 pb-12"
            >
                <BrandCarousel />
            </section>

            {/* 👇 temporary — just to test scrolling */}
            <div style={{ height: "100vh", background: "lightgray" }}>
                scroll test
            </div>
        </>

    )
}
export default App;
