import scheduleImgOne from "../../../assets/images/schedule-images/section-2.jpg"
import scheduleImgTwo from "../../../assets/images/schedule-images/section-3.jpg"
import SchedulePicture from "./SchedulePicture.jsx";
import TextReveal from "../../animations/TextReveal.jsx";

export default function ScheduleGallery() {

    return (
        <section className="grid grid-cols-12 px-10 pb-[2rem]">
            {/* 1st Row */}
            <div className="col-span-4">
                {/* header */}
                <TextReveal
                    as="h3"
                    type="words"
                    className="text-[clamp(2.25rem,4vw,2.75rem)] leading-[0.9] font-bold mb-2"
                    duration={1.6}
                    delay={1}
                    stagger={0.07}
                >
                    Training Schedule
                </TextReveal>
                {/* paragraph */}
                <TextReveal
                    as="p"
                    type="words"
                    className="font-medium max-w-full tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]"
                    duration={1.2}
                    delay={1.25}
                    stagger={0.025}
                >
                    Powerkicks is aligned with recognized national and international organizations, ensuring structured
                    training, certified standards, and consistent athlete development.
                </TextReveal>
            </div>
            <div className="col-span-8">
                <SchedulePicture
                    src={scheduleImgOne}
                    className="ml-auto h-[420px] w-[75%] overflow-hidden"
                    centerPercentage="20%"
                />
            </div>
            <div className="col-span-12 pt-4 pb-4">
                <SchedulePicture
                    src={scheduleImgTwo}
                    className="h-[500px] w-full"
                    centerPercentage="45%"
                />
            </div>

        </section>
    );
}