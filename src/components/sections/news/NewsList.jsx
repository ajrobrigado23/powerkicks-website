import galleryImgOne from "../../../assets/images/gallery-images/IMG_7550.JPG";

// Temporary news data for the layout.
const newsItems = [
    {
        id: 1,
        category: "Training",
        title: "Powerkicks Training Updates",
        description: "Latest stories from our training sessions.",
        img: galleryImgOne,
    },
    {
        id: 2,
        category: "Competitions",
        title: "Tournament Highlights",
        description: "Highlights from Powerkicks competitions.",
        img: galleryImgOne,
    },
    {
        id: 3,
        category: "Announcements",
        title: "What's New at Powerkicks",
        description: "Important news and upcoming activities.",
        img: galleryImgOne,
    },
    {
        id: 4,
        category: "Achievements",
        title: "Celebrating Our Athletes",
        description: "Recognizing the dedication of our students.",
        img: galleryImgOne,
    },
    {
        id: 5,
        category: "Community",
        title: "Life at Powerkicks Taekwondo",
        description: "Stories from our growing community.",
        img: galleryImgOne,
    },
];

export default function NewsList() {

    return (
        <div className="flex flex-wrap gap-6">
            {newsItems.map((news) => (
                <article
                    key={news.id}
                    className="flex-1 basis-[250px] min-[1024px]:basis-[150px] min-[1300px]:basis-[200px] min-w-0 py-8"
                >
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                        {news.category}
                    </p>

                    <h2 className="text-[clamp(1.5rem,2.5vw,3rem)] font-semibold leading-tight">
                        {news.title}
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-gray-400">
                        {news.description}
                    </p>
                </article>
            ))}
        </div>
    );
}