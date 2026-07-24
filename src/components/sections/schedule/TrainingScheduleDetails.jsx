import TextReveal from "../../animations/TextReveal.jsx";
import ScheduleDay from "./ScheduleDay.jsx";

export default function TrainingScheduleDetails({ className, location }) {
    return (
        <div className={className}>
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
                        <ScheduleDay
                            day="Thursday"
                            noviceTime="4:00pm - 5:30pm"
                            advanceTime="4:00pm - 5:30pm"
                        />
                    </div>

                    {/* Saturday */}
                    <div className="flex flex-col">
                        <ScheduleDay
                            day="Saturday"
                            noviceTime="4:00pm - 5:30pm"
                            advanceTime="4:00pm - 5:30pm"
                        />
                    </div>
                </>
            )}
        </div>
    );
}