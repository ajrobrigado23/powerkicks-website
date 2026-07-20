import TextReveal from "../../animations/TextReveal.jsx";
import {forwardRef} from "react";

const ScheduleHero = forwardRef((props, ref) => {

    return (
        <section ref={ref} className="w-full h-full pt-[2rem] flex justify-center items-center overflow-hidden pr-[2rem]">
            <TextReveal
                as="h1"
                type="letters"
                className="uppercase text-[clamp(22rem,8vw,24rem)] font-bold leading-none whitespace-nowrap"
                duration={2.50}
                stagger={0.07}
            >
                Power
            </TextReveal>
        </section>
    );
});

ScheduleHero.displayName = "ScheduleHero";
export default ScheduleHero;