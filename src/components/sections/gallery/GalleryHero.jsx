import TextReveal from "../../animations/TextReveal.jsx";
import SchedulePicture from "../schedule/SchedulePicture.jsx";
import { galleryImages } from "../gallery/gallery.js";

export default function GalleryHero() {

    const firstImage = galleryImages[0];
    const secondImage = galleryImages[1];

    return (
        <section className="grid grid-cols-12 px-10 pt-[12rem]">
            {/* gallery hero section */}
            <div className="col-span-4">
                {/* sub header */}
                <TextReveal
                    as="h3"
                    type="words"
                    className="text-[clamp(0.90rem,1.25vw,1.25rem)] leading-[0.9] font-bold uppercase"
                    duration={1.6}
                    delay={1}
                    stagger={0.07}
                >
                    Gallery
                </TextReveal>
            </div>
            <div className="col-span-8">
                {/* paragraph */}
                <TextReveal
                    as="p"
                    type="words"
                    className="font-semibold max-w-full tracking-[0.025rem] text-[clamp(1.15rem,2.50vw,3rem)]"
                    duration={1.2}
                    delay={1.25}
                    stagger={0.025}
                >
                    A visual story of Powerkicks Taekwondo capturing our students, coaches, training sessions,
                    competitions, <span className="text-[#7F7F7F]">and the moments that define our discipline-driven community.</span>
                </TextReveal>

                {/* picture */}
                <SchedulePicture
                    src={firstImage.src}
                    alt={firstImage.alt}
                    className="h-[800px] w-full py-2"
                    centerPercentage={firstImage.centerPercentage}
                />
            </div>

            {/* 2nd row */}
            <div className="col-span-4 pt-10">
                {/* sub header */}
                <TextReveal
                    as="h3"
                    type="words"
                    className="text-[clamp(0.90rem,1.25vw,1.25rem)] leading-[0.9] font-bold uppercase"
                    duration={1.6}
                    delay={1}
                    stagger={0.07}
                >
                    Our Mission
                </TextReveal>
            </div>
            <div className="col-span-8 pt-10 pb-10">
                {/* paragraph */}
                <TextReveal
                    as="p"
                    type="words"
                    className=""
                    triggerOnScroll
                    duration={1.2}
                    stagger={0.025}
                >
                    Our mission is to help students grow through disciplined taekwondo training building confidence,
                    focus, respect, and strength that extends beyond the mat.
                </TextReveal>
            </div>
            {/* step by step training journey */}
            <div className="col-span-12 py-10 -mx-10">
                <div className="relative overflow-hidden h-[750px]">
                    {/* Image */}
                    <img
                        src={secondImage.src}
                        alt=""
                        className="absolute inset-0 z-0 h-full w-full object-cover object-[center_40%]"
                    />

                    {/* Dark filter */}
                    <div className="absolute inset-0 z-10 bg-black/50" />

                    {/* Text */}
                    <h3 className="absolute top-10 left-10 z-20 text-white text-[clamp(0.90rem,1.25vw,1.25rem)] leading-[0.9] font-semibold uppercase">
                        Our
                        <br />
                        Step-by-Step
                        <br/>Training Journey
                    </h3>
                </div>

            </div>

        </section>
    );
}