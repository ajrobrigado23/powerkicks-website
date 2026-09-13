import TextReveal from "../../animations/TextReveal.jsx";

export default function ContactHero() {

    return(
        <section className="grid grid-cols-12 px-10 pt-[10rem] w-full">
            <div className="col-span-12">
                <TextReveal
                    as="h1"
                    type="letters"
                    className="uppercase text-[clamp(6rem,16vw,24rem)] font-bold tracking-[-0.30rem] leading-none whitespace-nowrap text-white"
                    duration={2.50}
                    stagger={0.07}
                >
                    Contact
                </TextReveal>
            </div>

            <div className="col-span-6">
                <TextReveal
                    as="p"
                    type="words"
                    className="text-[clamp(1rem,1.25vw,1.75rem)] leading-[0.9] font-light"
                    triggerOnScroll
                    duration={1.2}
                    delay={1.25}
                    stagger={0.025}
                >
                    For any enquiries, or just to say hello, get in touch and contact us.
                </TextReveal>
            </div>

            <div className="col-span-6">
                {/* Contact Information */}
                <TextReveal
                    as="h3"
                    type="words"
                    triggerOnScroll
                    scrollStart="top 85%"
                    className="text-[clamp(0.90rem,1.25vw,1.25rem)] leading-[0.9] font-bold uppercase pb-2"
                    duration={1.2}
                    delay={0.1}
                    stagger={0.07}
                >
                    Robinson General Trias
                </TextReveal>

                <TextReveal
                    as="p"
                    type="words"
                    triggerOnScroll
                    scrollStart="top 85%"
                    className="text-[clamp(0.50rem,1vw,0.60rem)] leading-[0.9] font-medium text-[#7F7F7F] w-[47%]"
                    duration={1.2}
                    delay={0.1}
                    stagger={0.07}
                >
                    Km. 30, Emilio Aguinaldo Highway, Barangay Burol, Dasmariñas City, Cavite, 4114, Philippines
                </TextReveal>
            </div>

        </section>
    );
}