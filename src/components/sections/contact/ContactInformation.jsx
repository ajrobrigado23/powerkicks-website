import TextReveal from "../../animations/TextReveal.jsx";

export default function ContactInformation({ label, value }) {

    return (
        <div>
            {/* Contact Information */}
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
                {label}
            </TextReveal>
            {/* header */}
            <TextReveal
                as="h3"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="text-[clamp(0.90rem,1.15vw,1.25rem)] leading-[0.9] font-bold pb-2"
                duration={1.2}
                delay={0.1}
                stagger={0.07}
            >
                {value}
            </TextReveal>
        </div>
    );
}