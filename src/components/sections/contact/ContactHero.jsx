import TextReveal from "../../animations/TextReveal.jsx";

export default function ContactHero() {

    return(
        <section className="grid grid-cols-12 px-10 pt-[10rem] w-full">
            <div className="col-span-12 text-white">
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

        </section>
    );
}