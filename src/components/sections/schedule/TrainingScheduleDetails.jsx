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

            {/* dasmarinas */}
            <div className={className}>
                {location === "dasmarinas" && (
                    <>
                        {/* Thursday */}
                        <div className="flex flex-col min-w-[120px]">
                            <ScheduleDay
                                day="Thursday"
                            >
                                5:00<span className="text-sm font-light">pm</span> - 7:00<span className="text-sm font-light">pm</span>
                            </ScheduleDay>
                        </div>

                        {/* Saturday */}
                        <div className="flex flex-col min-w-[120px] px-6">
                            <ScheduleDay
                                day="Saturday"
                            >
                                5:00<span className="text-sm font-light">pm</span> - 7:00<span className="text-sm font-light">pm</span>
                            </ScheduleDay>
                        </div>

                        {/* Sunday */}
                        <div className="flex flex-col min-w-[120px]">
                            <ScheduleDay
                                day="Sunday"
                            >
                                4:00<span className="text-sm font-light">pm</span> - 6:00<span className="text-sm font-light">pm</span>
                            </ScheduleDay>
                        </div>
                    </>
                )}
            </div>

            {/* robinson general trias */}
            <div className={className}>
                {location === "gentri" && (
                    <>
                        {/* Saturday */}
                        <div className="flex flex-col min-w-[120px]">
                            <ScheduleDay
                                day="Saturday"
                            >
                                11:30<span className="text-sm font-light">am</span> - 2:30<span className="text-sm font-light">pm</span>
                            </ScheduleDay>
                        </div>

                        {/* Sunday */}
                        <div className="flex flex-col min-w-[120px] mr-[10%] min-[751px]:mr-0 min-[1246px]:mr-[25%]">
                            <ScheduleDay
                                day="Sunday"
                            >
                                11:30<span className="text-sm font-light">am</span> - 2:30<span className="text-sm font-light">pm</span>
                            </ScheduleDay>
                        </div>
                    </>
                )}
            </div>

            {/* imus bucandala gym */}
            <div className={className}>
                {location === "bucandala" && (
                    <>
                        {/* Monday */}
                        <div className="flex flex-col min-w-[120px]">
                            <ScheduleDay
                                day="Monday"
                            >
                                5:00<span className="text-sm font-light">pm</span> - 7:00<span className="text-sm font-light">pm</span>
                            </ScheduleDay>
                        </div>

                        {/* Wednesday */}
                        <div className="flex flex-col min-w-[120px] px-6">
                            <ScheduleDay
                                day="Wednesday"
                            >
                                5:00<span className="text-sm font-light">pm</span> - 7:00<span className="text-sm font-light">pm</span>
                            </ScheduleDay>
                        </div>

                        {/* Friday */}
                        <div className="flex flex-col min-w-[120px]">
                            <ScheduleDay
                                day="Friday"
                            >
                                5:00<span className="text-sm font-light">pm</span> - 7:00<span className="text-sm font-light">pm</span>
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
                duration={0.40}
                stagger={0.025}
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