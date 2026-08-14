import TextReveal from "../../animations/TextReveal.jsx";

export default function ScheduleDay({ children, day }) {

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
                className="text-[clamp(0.90rem,1.75vw,1.35rem)] font-semibold"
                duration={1.2}
                delay={0.4}
                stagger={0.07}
            >
                {children}
            </TextReveal>

            <TextReveal
                as="p"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="text-[clamp(0.40rem,0.90vw,0.60rem)] leading-[0.9] text-[#9F9F9F]"
                duration={1.2}
                delay={0.3}
                stagger={0.09}
            >
                All Belt Categories (from White Belt to Black Belt)
            </TextReveal>

        </>
    );
}