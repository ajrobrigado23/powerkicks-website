import TextReveal from "../../animations/TextReveal.jsx";

export default function ScheduleDay({ day, noviceTime }) {

    return (
        <>
            <TextReveal
                as="p"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="font-semibold text-[clamp(0.90rem,1.25vw, 1.15rem)] leading-[0.9] pt-2 pb-8 text-[#9F9F9F] uppercase"
                duration={1.2}
                delay={0.2}
                stagger={0.07}
            >
                {day}
            </TextReveal>

            <TextReveal
                as="p"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="text-[clamp(0.80rem,1.25vw,1.15rem)] font-bold"
                duration={1.2}
                delay={0.4}
                stagger={0.07}
            >
                {noviceTime}
            </TextReveal>

            <TextReveal
                as="p"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="text-[clamp(0.50rem,1vw,0.60rem)] leading-[0.9] text-[#9F9F9F]"
                duration={1.2}
                delay={0.3}
                stagger={0.09}
            >
                All Belts Category (from white belt to black belt)
            </TextReveal>

        </>
    );
}