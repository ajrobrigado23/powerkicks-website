import TextReveal from "../../animations/TextReveal.jsx";
import ScheduleDay from "./ScheduleDay.jsx";

export default function TrainingScheduleDetails({ location }) {
    return (
        <div className="flex justify-around px-4">
            {location === "dasmarinas" && (
                <>
                    {/* Tuesday */}
                    <div className="flex flex-col">
                        <ScheduleDay
                            day="Tuesday"
                            noviceTime="4:00pm - 5:30pm"
                            advanceTime="4:00pm - 5:30pm"
                        />
                    </div>

                    {/* Thursday */}
                    <div className="flex flex-col">
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
                            Thursday
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
                            4:00pm - 5:30pm
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
                            4:00pm - 5:30pm
                        </TextReveal>
                    </div>

                    {/* Saturday */}
                    <div className="flex flex-col">
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
                            Saturday
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
                            4:00pm - 5:30pm
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
                            4:00pm - 5:30pm
                        </TextReveal>
                    </div>
                </>
            )}
        </div>
    );
}