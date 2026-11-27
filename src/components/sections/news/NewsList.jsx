import { newsItems } from "../../../data/news.js";

export default function NewsList() {

    return (
        <div className="
                         grid gap-x-6 gap-y-4
                         grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))]
                         min-[1024px]:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]
                         min-[1300px]:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
                       ">
            {newsItems.map((news) => (
                <article
                    key={news.id}
                    className="grid grid-rows-subgrid row-span-4 min-w-0 py-8">

                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        {news.category}
                    </p>

                    <img
                        src={news.img}
                        className="w-full aspect-[4/3] object-cover"
                        alt="Powerkicks news image"
                    />

                    <h2 className="text-[clamp(1.5rem,2.5vw,3rem)] font-semibold leading-tight">
                        {news.title}
                    </h2>

                    <p className="text-sm leading-relaxed text-gray-400">
                        {news.description}
                    </p>
                </article>
            ))}
        </div>
    );
}