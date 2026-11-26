import NewsNavbar from "../components/layout/NewsNavbar.jsx";
import NewsScrollColumn from "../components/sections/news/NewsScrollColumn.jsx";
import TextTicker from "../components/animations/TextTicker.jsx";
import NewsCard from "../components/sections/news/NewsCard.jsx";
import NewsList from "../components/sections/news/NewsList.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function News() {

    // Add these animations ScrollTrigger pinning, overlapping sections, or stacked sections on scroll.
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);

    // ScrollTrigger pinning + scrub - Pins the outer section while animating its inner content vertically.
    const newsContentRef = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(
            "(width < 64rem) and (prefers-reduced-motion: no-preference)",
            () => {
                const leftColumn = leftColumnRef.current;
                const rightColumn = rightColumnRef.current;
                const newsContent = newsContentRef.current;

                const getScrollDistance = () =>
                    Math.max(
                        0,
                        newsContent.scrollHeight - rightColumn.clientHeight
                    );

                // First animation: Overlapping section reveal.
                ScrollTrigger.create({
                                         id: "powerkicks-reveal",
                                         trigger: leftColumn,
                                         start: "top top",
                                         endTrigger: rightColumn,
                                         end: "top top",
                                         pin: leftColumn,
                                         pinSpacing: false,
                                         invalidateOnRefresh: true,
                                         refreshPriority: 1,
                                     });

                // Second animation: Pin the news section
                // while scrolling its inner content.
                gsap.to(newsContent, {
                    y: () => -getScrollDistance(),
                    ease: "none",

                    scrollTrigger: {
                        id: "news-scroll",
                        trigger: rightColumn,
                        start: "top top",
                        end: () => `+=${Math.max(1, getScrollDistance())}`,
                        pin: rightColumn,
                        pinSpacing: true,
                        scrub: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        // markers: true,
                    },
                });

                ScrollTrigger.refresh();
            }
        );

        return () => mm.revert();
    }, []);

    return (
        <div className="
            flex min-h-dvh flex-col
            bg-black text-white
            lg:h-dvh lg:overflow-hidden
        ">

            <NewsNavbar/>

            <main className="
                flex-1
                lg:grid
                lg:min-h-0
                lg:grid-cols-[60%_40%]
            ">

                {/* Left column - 60% */}
                <section
                    ref={leftColumnRef}
                    className="relative z-0 flex h-dvh w-full flex-col overflow-hidden bg-[#FBC352] lg:h-full lg:min-h-0">
                    {/* Text ticker */}
                    <div className="mt-18 -mb-[3rem]">
                        <TextTicker
                            textClassName="font-humane font-bold mx-7 text-[clamp(28rem,35vw,35rem)] min-[1245px]:text-[clamp(6rem,38vw,40rem)] leading-none tracking-[0.075rem]">
                            Powerkicks
                        </TextTicker>
                    </div>

                    <div className="text-white flex justify-between px-10">
                        <h5>Top news</h5>

                        <div className="w-[70%]">
                            <p> Our mission is to help students grow through disciplined taekwondo training building
                                confidence, focus, respect, and strength that extends beyond the mat.</p>
                        </div>

                        <div>
                            {/* white space */}
                        </div>

                    </div>
                </section>

                {/* Right column - 40% */}
                <section
                    ref={rightColumnRef}
                    className="
                                relative z-10
                                min-h-dvh bg-black
                                motion-safe:max-lg:h-dvh
                                motion-safe:max-lg:overflow-hidden
                                lg:contents
                               "
                >
                    <div
                        ref={newsContentRef}
                        className="flow-root lg:contents"
                    >
                        <NewsScrollColumn>
                            {/* Latest news */}
                            <div className="mt-18 mb-12">
                                <h2 className="text-[clamp(2.5rem,4vw,5rem)] text-[#7F7F7F] font-medium leading-none mb-2">
                                    Recent News
                                </h2>

                                <div className="flex flex-col gap-6">
                                    <NewsCard />
                                    <NewsCard />
                                </div>
                            </div>

                            {/* News list */}
                            <div className="flex">
                                <NewsList />
                            </div>
                        </NewsScrollColumn>
                    </div>
                </section>

            </main>
        </div>
    );
}
