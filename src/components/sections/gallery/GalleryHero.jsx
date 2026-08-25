import TextReveal from "../../animations/TextReveal.jsx";

export default function GalleryHero() {

    return (
        <section className="grid grid-cols-12 px-10 pt-[10rem]">
            {/* gallery hero section */}
            <div className="col-span-5">
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
            <div className="col-span-7">
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

        </section>
    );
}