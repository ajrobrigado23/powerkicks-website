import TextReveal from "../../animations/TextReveal.jsx";

export default function ScheduleDay({ day, noviceTime, advanceTime }) {

    return (
        <>
            <TextReveal
                as="p"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="font-semibold text-[clamp(0.65rem,2.50vw,1.25rem)] py-2"
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
                className="text-[clamp(0.25rem,1.50vw,0.75rem)]"
                duration={1.2}
                delay={0.3}
                stagger={0.09}
            >
                Novice
            </TextReveal>

            <TextReveal
                as="p"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="text-[clamp(0.40rem,1.75vw,1.00rem)] font-bold italic"
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
                className="text-[clamp(0.25rem,1.50vw,0.75rem)] pt-2"
                duration={1.2}
                delay={0.3}
                stagger={0.09}
            >
                Advance
            </TextReveal>

            <TextReveal
                as="p"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="text-[clamp(0.40rem,1.75vw,1.00rem)] font-bold italic"
                duration={1.2}
                delay={0.4}
                stagger={0.07}
            >
                {advanceTime}
            </TextReveal>
        </>
    );
}