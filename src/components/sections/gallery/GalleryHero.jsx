import TextReveal from "../../animations/TextReveal.jsx";
import SchedulePicture from "../schedule/SchedulePicture.jsx";
import { galleryImages } from "./gallery.js";
import {forwardRef} from "react";

const GalleryHero = forwardRef( (props, ref) => {

    const firstImage = galleryImages[0];

    return (
        <section ref={ref} className="grid grid-cols-12 px-10 pt-[12rem]">
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
            </div>

            <div className="col-span-0 min-[751px]:col-span-4">

            </div>

            <div className="col-span-12 pt-2 min-[751px]:col-span-8 pt-0">
                {/* picture */}
                <SchedulePicture
                    src={firstImage.src}
                    alt={firstImage.alt}
                    className="h-[800px] w-full py-2"
                    centerPercentage={firstImage.centerPercentage}
                />
            </div>

            {/* 3nd row */}
            <div className="col-span-4 pt-[3rem]">
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
            <div className="col-span-8 pt-[3rem] pb-10">
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

        </section>
    );
});

GalleryHero.displayName = "GalleryHero";
export default GalleryHero;