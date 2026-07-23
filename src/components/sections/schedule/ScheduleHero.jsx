import TextReveal from "../../animations/TextReveal.jsx";
import {forwardRef} from "react";

const ScheduleHero = forwardRef((props, ref) => {

    return (
        <section ref={ref} className="w-full h-full pt-[8rem] pl-0 flex justify-center items-center overflow-hidden tablet:h-full tablet:pt-[4rem]">
            <TextReveal
                as="h1"
                type="letters"
                className="uppercase -ml-[0.15em] text-[clamp(6rem,28vw,35rem)] font-bold leading-none whitespace-nowrap"
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