import TextReveal from "../../animations/TextReveal.jsx";
import ContactInformation from "./ContactInformation.jsx";

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

            <div className="col-span-6 grid grid-cols-2 gap-x-10 gap-y-10">
                <ContactInformation
                    label={"Email Address"}
                    value={"powerkickstkd2018@gmail.com"}
                />

                <ContactInformation
                    label={"Facebook"}
                    value={"powerkickstkd2018@gmail.com"}
                />

                <ContactInformation
                    label={"Email Address"}
                    value={"powerkickstkd2018@gmail.com"}
                />

                <ContactInformation
                    label={"Facebook"}
                    value={"powerkickstkd2018@gmail.com"}
                />

                <ContactInformation
                    label={"Email Address"}
                    value={"powerkickstkd2018@gmail.com"}
                />

                <ContactInformation
                    label={"Facebook"}
                    value={"powerkickstkd2018@gmail.com"}
                />
            </div>

        </section>
    );
}