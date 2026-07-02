import TextReveal from "../../animations/TextReveal.jsx";

export default function ScheduleHero() {
    return (
        <section className="w-full h-full pt-[2rem] flex justify-center items-center overflow-hidden">
            <TextReveal
                as="h1"
                className="uppercase text-[clamp(24rem,8vw,28rem)] font-bold leading-none whitespace-nowrap ms-[-2rem]"
            >
                Power
            </TextReveal>
        </section>
    );
}