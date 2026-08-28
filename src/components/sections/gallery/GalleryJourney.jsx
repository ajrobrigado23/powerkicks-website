import {galleryImages} from "./gallery.js";
import TextReveal from "../../animations/TextReveal.jsx";

export default function GalleryJourney() {

    const secondImage = galleryImages[1];

    return (
        <>
            <section className="grid grid-cols-12 px-10">
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
                        <h3 className="absolute top-10 left-10 z-20 text-white text-[clamp(2rem,6vw,10rem)] leading-[1] font-semibold uppercase">
                            Our
                            <br />
                            Step-by-Step
                            <br/>
                            Training Journey
                        </h3>
                    </div>
                </div>
                {/* 2nd row */}
                <div className="col-span-4 pt-5">
                    {/* sub header */}
                    <TextReveal
                        as="h3"
                        type="words"
                        className="text-[clamp(0.90rem,1.25vw,1.25rem)] leading-[0.9] font-bold uppercase"
                        duration={1.6}
                        delay={1}
                        stagger={0.07}
                    >
                        Training Journey
                    </TextReveal>
                </div>
                <div className="col-span-8 py-5">
                    {/* paragraph */}
                    <TextReveal
                        as="p"
                        type="words"
                        className="font-semibold max-w-full tracking-[0.025rem] text-[clamp(1.15rem,2.50vw,3rem)]"
                        duration={1.2}
                        delay={1.25}
                        stagger={0.025}
                    >
                        From the first class to advanced training, every student follows a path built on
                        <span className="text-[#7F7F7F]"> discipline, consistency, confidence, and growth.</span>
                    </TextReveal>
                </div>

            </section>
        </>
    );
}