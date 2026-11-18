import SlideUpText from "../../animations/SlideUpText.jsx";
import galleryImgOne from "../../../assets/images/gallery-images/IMG_7550.JPG";

export default function NewsCard() {

    return (
        <article>
            {/* Image */}
            <img
                src={galleryImgOne}
                className="py-4"
                alt="Powerkicks news image"/>

            {/* News title */}
            <div>
                <h4
                    className="text-[clamp(1rem,1.75vw,2rem)] font-medium">
                    Powerkicks Taekwondo won 1st runner up in 2026 Cavite Taekwondo Championship
                </h4>
                {/* Description */}
                <p className="py-4 text-[#7F7F7F]">
                    Our mission is to help students grow through disciplined taekwondo training building confidence, focus,
                    respect, and strength that extends beyond the mat.</p>
            </div>

            {/* Read Article */}
            <div className="flex justify-end pt-2">
                <button className="uppercase font-semibold">
                    <SlideUpText
                        isArrowRight={true}
                    >
                        Read more
                    </SlideUpText>
                </button>
            </div>

        </article>
    );
}