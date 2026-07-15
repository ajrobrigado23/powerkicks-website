import TextReveal from "../../animations/TextReveal.jsx";

export default function ScheduleDay({ day, noviceTime, advanceTime }) {

    return (
        <>
            <TextReveal
                as="p"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="font-semibold text-lg py-2"
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
                className="text-xs"
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
                className="font-bold italic"
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
                className="text-xs pt-2"
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
                className="font-bold italic"
                duration={1.2}
                delay={0.4}
                stagger={0.07}
            >
                {advanceTime}
            </TextReveal>
        </>
    );
}