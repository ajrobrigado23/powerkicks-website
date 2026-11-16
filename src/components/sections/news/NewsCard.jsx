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
                    className="text-[clamp(1rem,1.50vw,2rem)] font-semibold">
                    Powerkicks Taekwondo won 1st runner up in 2026 Cavite Taekwondo Championship
                </h4>
                {/* Description */}
                <p className="py-4">
                    Our mission is to help students grow through disciplined taekwondo training building confidence, focus,
                    respect, and strength that extends beyond the mat.</p>
            </div>

            {/* Read Article */}
            <div className="flex justify-end">
                <button>
                    <SlideUpText
                        isArrowRight={true}
                    >
                        Next
                    </SlideUpText>
                </button>
            </div>

        </article>
    );
}