import TextReveal from "../../animations/TextReveal.jsx";
import ScheduleDay from "./ScheduleDay.jsx";

export default function TrainingScheduleDetails({ className, location }) {
    return (
        <>
            <TextReveal
                as="h4"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="text-[clamp(0.90rem,1.25vw,1.25rem)] leading-[0.9] font-bold uppercase pb-10"
                duration={1.2}
                delay={0.3}
                stagger={0.07}
            >
                Training Schedule
            </TextReveal>

            <div className={className}>
                {location === "dasmarinas" && (
                    <>
                        {/* Tuesday */}
                        <div className="flex flex-col">
                            <ScheduleDay
                                day="Tuesday"
                            >
                                4:00<span className="text-sm font-light">pm</span> - 5:00<span className="text-sm font-light">pm</span>
                            </ScheduleDay>
                        </div>

                        {/* Thursday */}
                        <div className="flex flex-col">
                            <ScheduleDay
                                day="Thursday"
                            >
                                4:00<span className="text-sm font-light">pm</span> - 5:00<span className="text-sm font-light">pm</span>
                            </ScheduleDay>
                        </div>

                        {/* Saturday */}
                        <div className="flex flex-col">
                            <ScheduleDay
                                day="Saturday"
                            >
                                4:00<span className="text-sm font-light">pm</span> - 5:00<span className="text-sm font-light">pm</span>
                            </ScheduleDay>
                        </div>
                    </>
                )}
            </div>
            <TextReveal
                as="h4"
                type="words"
                triggerOnScroll
                scrollStart="top 85%"
                className="py-20"
                duration={0.6}
                delay={0.2}
                stagger={0.02}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the
                librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to
                make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the
                leap into electronic typesetting, remaining essentially unchanged.
            </TextReveal>

        </>

    );
}