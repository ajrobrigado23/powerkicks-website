import NewsNavbar from "../components/layout/NewsNavbar.jsx";
import NewsScrollColumn from "../components/sections/news/NewsScrollColumn.jsx";
import TextTicker from "../components/animations/TextTicker.jsx";
import NewsCard from "../components/sections/news/NewsCard.jsx";
import NewsList from "../components/sections/news/NewsList.jsx";

export default function News() {
    return (
        <div className="
            flex min-h-dvh flex-col
            bg-black text-white
            lg:h-dvh lg:overflow-hidden
        ">

            <NewsNavbar/>

            <main className="
                grid flex-1 grid-cols-1
                lg:min-h-0
                lg:grid-cols-[60%_40%]
            ">

                {/* Left column - 60% */}
                <section className="relative flex h-[45dvh] flex-col overflow-hidden bg-[#FBC352] lg:h-full lg:min-h-0">
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
                <NewsScrollColumn>
                    {/* Latest news */}
                    <div className="mt-18 mb-12">
                        <h2 className="text-[clamp(2.5rem,4vw,5rem)] text-[#7F7F7F] font-medium leading-none mb-2">
                            Recent News
                        </h2>

                        <div className="flex flex-col gap-6">
                            <NewsCard/>

                            <NewsCard/>
                        </div>

                    </div>

                    {/* News list */}
                    <div className="flex">
                        <NewsList></NewsList>
                    </div>
                </NewsScrollColumn>

            </main>
        </div>
    );
}
