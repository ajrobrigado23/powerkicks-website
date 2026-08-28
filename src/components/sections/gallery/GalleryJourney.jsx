import {galleryImages} from "./gallery.js";

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
                        <h3 className="absolute top-10 left-10 z-20 text-white text-[clamp(0.90rem,1.25vw,1.25rem)] leading-[0.9] font-semibold uppercase">
                            Our
                            <br />
                            Step-by-Step
                            <br/>Training Journey
                        </h3>
                    </div>
                </div>

            </section>
        </>
    );
}