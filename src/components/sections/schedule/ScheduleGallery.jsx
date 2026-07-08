import SchedulePicture from "./SchedulePicture.jsx";
import TextReveal from "../../animations/TextReveal.jsx";
import { scheduleImages } from "./schedule.js"

export default function ScheduleGallery() {

    const firstImage = scheduleImages[0];
    const secondImage = scheduleImages[1];
    const thirdImage = scheduleImages[2];

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
                    src={firstImage.src}
                    alt={firstImage.alt}
                    className="ml-auto h-[420px] w-[75%] overflow-hidden"
                    centerPercentage={firstImage.centerPercentage}
                />
            </div>
            {/* 2nd Row */}
            <div className="col-span-12 pt-4 pb-4">
                <SchedulePicture
                    src={secondImage.src}
                    alt={secondImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={secondImage.centerPercentage}
                />
            </div>
            {/* 3rd Row */}
            <div className="col-span-6 pr-2">
                <SchedulePicture
                    src={thirdImage.src}
                    alt={thirdImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={thirdImage.centerPercentage}
                />
            </div>
            <div className="col-span-6 pl-2">
                <SchedulePicture
                    src={thirdImage.src}
                    alt={thirdImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={thirdImage.centerPercentage}
                />
            </div>

        </section>
    );
}