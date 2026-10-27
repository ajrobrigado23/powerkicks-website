import TextReveal from "../../animations/TextReveal.jsx";
import ContactInformation from "./ContactInformation.jsx";

export default function ContactHero() {

    return(
        <section className="grid grid-cols-12 px-10 pt-[8rem] pb-[2rem] w-full">
            <div className="col-span-12 text-white">
                <TextReveal
                    as="h1"
                    type="letters"
                    className="font-humane uppercase text-[clamp(3.25rem,34vw,24rem)] font-bold leading-none text-white"
                    duration={2.50}
                    stagger={0.07}
                >
                    Contact us
                </TextReveal>
            </div>

            <div className="col-span-6 tablet:-mt-[6rem]">
                <TextReveal
                    as="p"
                    type="words"
                    className="text-[clamp(0.70rem,1.25vw,1.75rem)] leading-[0.9] font-light"
                    triggerOnScroll
                    duration={1.2}
                    delay={1.25}
                    stagger={0.025}
                >
                    For any enquiries, or just to say hello, get in touch and contact us.
                </TextReveal>
            </div>

            <div className="col-span-12 mt-12 grid grid-cols-2 gap-x-10 gap-y-10 tablet:col-span-6 tablet:-mt-[6rem]">
                <ContactInformation
                    label={"Email Address"}
                    value={"powerkickstkd2018@gmail.com"}
                />

                <ContactInformation
                    label={"Facebook"}
                    value={"Powerkicks Taekwondo"}
                />

                <ContactInformation
                    label={"Business Address"}
                    value={"NIA Road, 210 Bucandala III, Imus, 4103 Cavite"}
                />

                <ContactInformation
                    label={"Instagram"}
                    value={"@powerkickstkd"}
                />

                <ContactInformation
                    label={"Contact number"}
                    value={"+63912-345-6789"}
                />

                <ContactInformation
                    label={"Tiktok"}
                    value={"Powerkicks Taekwondo"}
                />
            </div>

        </section>
    );
}