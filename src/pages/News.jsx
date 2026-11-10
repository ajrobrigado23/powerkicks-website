import NewsNavbar from "../components/layout/NewsNavbar.jsx";

// Temporary news data for the layout.
const newsItems = [
    {
        id: 1,
        category: "Training",
        title: "Powerkicks Training Updates",
        description: "Latest stories from our training sessions.",
    },
    {
        id: 2,
        category: "Competitions",
        title: "Tournament Highlights",
        description: "Highlights from Powerkicks competitions.",
    },
    {
        id: 3,
        category: "Announcements",
        title: "What's New at Powerkicks",
        description: "Important news and upcoming activities.",
    },
    {
        id: 4,
        category: "Achievements",
        title: "Celebrating Our Athletes",
        description: "Recognizing the dedication of our students.",
    },
    {
        id: 5,
        category: "Community",
        title: "Life at Powerkicks Taekwondo",
        description: "Stories from our growing community.",
    },
];

export default function News() {
    return (
        <div className="
            flex min-h-dvh flex-col
            bg-black text-white
            lg:h-dvh lg:overflow-hidden
        ">

            <NewsNavbar />

            <main className="
                grid flex-1 grid-cols-1
                lg:min-h-0
                lg:grid-cols-[60%_40%]
            ">

                {/* Left column - 60% */}
                <section className="
                    relative flex h-[45dvh]
                    items-center overflow-hidden
                    bg-[#FBC352]
                    lg:h-full lg:min-h-0
                ">
                    {/* Text ticker */}

                    <div className="
                        absolute bottom-8 left-10
                        text-black
                    ">
                        <p className="
                            text-xs font-semibold
                            uppercase tracking-widest
                        ">
                            More than kicks.
                            Built on discipline.
                        </p>
                    </div>
                </section>

                {/* Right column - 40% */}
                <section
                    data-lenis-prevent
                    className="
                        min-h-0 bg-[#171717]
                        px-6 py-10
                        lg:overflow-y-auto
                        lg:overscroll-contain
                        lg:px-10
                    "
                >
                    <div className="mb-12">
                        <h1 className="
                            text-[clamp(2.5rem,4vw,5rem)]
                            font-bold uppercase
                            leading-none
                        ">
                            Latest News
                        </h1>

                        <p className="mt-4 text-sm text-gray-400">
                            The latest stories, competitions,
                            and updates from Powerkicks Taekwondo.
                        </p>
                    </div>

                    {/* News list */}
                    <div className="flex flex-col">
                        {newsItems.map((news) => (
                            <article
                                key={news.id}
                                className="
                                    border-b border-white/20
                                    py-8 first:pt-0
                                "
                            >
                                <p className="
                                    mb-4 text-xs
                                    font-semibold uppercase
                                    tracking-widest text-gray-400
                                ">
                                    {news.category}
                                </p>

                                <h2 className="
                                    text-[clamp(1.5rem,2.5vw,3rem)]
                                    font-semibold leading-tight
                                ">
                                    {news.title}
                                </h2>

                                <p className="
                                    mt-4 text-sm
                                    leading-relaxed text-gray-400
                                ">
                                    {news.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}
