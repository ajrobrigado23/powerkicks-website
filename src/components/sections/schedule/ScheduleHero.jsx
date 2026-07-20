import TextReveal from "../../animations/TextReveal.jsx";
import {forwardRef} from "react";

const ScheduleHero = forwardRef((props, ref) => {

    return (
        <section ref={ref} className="w-full h-full pt-[4rem] pl-0 flex justify-center items-center overflow-hidden">
            <TextReveal
                as="h1"
                type="letters"
                className="uppercase -ml-[0.15em] text-[clamp(22rem,28vw,35rem)] font-bold leading-none whitespace-nowrap"
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