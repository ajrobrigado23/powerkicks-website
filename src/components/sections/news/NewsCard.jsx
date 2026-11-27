import SlideUpText from "../../animations/SlideUpText.jsx";
import galleryImgOne from "../../../assets/images/gallery-images/IMG_7550.JPG";

export default function NewsCard({ title, description }) {

    return (
        <article>
            {/* Image */}
            <img
                src={galleryImgOne}
                className="py-4"
                alt="Powerkicks news image"/>

            {/* News */}
            <div>
                {/* Title */}
                <h4
                    className="text-[clamp(1rem,1.75vw,2rem)] font-medium">
                    { title }
                </h4>
                {/* Description */}
                <p className="py-4 text-[#7F7F7F]">{description}</p>
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