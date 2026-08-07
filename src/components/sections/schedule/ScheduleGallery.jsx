import SchedulePicture from "./SchedulePicture.jsx";
import TextReveal from "../../animations/TextReveal.jsx";
import { scheduleImages } from "./schedule.js"
import TrainingScheduleDetails from "./TrainingScheduleDetails.jsx";

export default function ScheduleGallery() {

    const firstImage = scheduleImages[0];
    const secondImage = scheduleImages[1];
    const thirdImage = scheduleImages[2];
    const fourImage = scheduleImages[3];
    const fiveImage = scheduleImages[4];
    const sixImage = scheduleImages[5];
    const sevenImage = scheduleImages[6];
    const eightImage = scheduleImages[7];
    const nineImage = scheduleImages[8];
    const tenthImage = scheduleImages[9];
    const eleventhImage = scheduleImages[10];

    return (
        <section className="grid grid-cols-12 px-10 pb-[2rem] text-white">
            {/* 1st Row */}
            <div className="col-span-5">
                {/* header */}
                <TextReveal
                    as="h3"
                    type="words"
                    className="text-[clamp(0.90rem,1.25vw,1.25rem)] leading-[0.9] font-bold uppercase"
                    duration={1.6}
                    delay={1}
                    stagger={0.07}
                >
                    Training Schedule
                </TextReveal>
            </div>
            <div className="col-span-7">
                {/* paragraph */}
                <TextReveal
                    as="p"
                    type="words"
                    className="font-semibold max-w-full tracking-[0.025rem] text-[clamp(1.75rem,2.50vw,3rem)] pb-24"
                    duration={1.2}
                    delay={1.25}
                    stagger={0.025}
                >
                    Powerkicks is aligned with recognized national and international organizations, ensuring structured
                    training,{" "} <span className="text-[#7F7F7F]">certified standards, and consistent athlete development.</span>
                </TextReveal>
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
            <div className="col-span-12 pr-0 phone:col-span-6 phone:pr-2">
                <SchedulePicture
                    src={thirdImage.src}
                    alt={thirdImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={thirdImage.centerPercentage}
                />
            </div>
            <div className="col-span-12 pt-4 pl-0 phone:col-span-6 phone:pl-2 phone:pt-0">
                <SchedulePicture
                    src={fourImage.src}
                    alt={fourImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={fourImage.centerPercentage}
                    delay={0.3}
                />
            </div>
            {/* 4th row */}
            <div className="col-span-12 pt-4">
                <SchedulePicture
                    src={firstImage.src}
                    alt={firstImage.alt}
                    className="ml-auto h-full w-full overflow-hidden"
                    centerPercentage={firstImage.centerPercentage}
                />
            </div>

            {/* 5th row */}
            <div className="col-span-5 pt-[10rem]">
                {/* header */}
                <TextReveal
                    as="h3"
                    type="words"
                    triggerOnScroll
                    scrollStart="top 85%"
                    className="text-[clamp(0.90rem,1.25vw,1.25rem)] leading-[0.9] font-bold uppercase pb-2"
                    duration={1.2}
                    delay={0.1}
                    stagger={0.07}
                >
                    Waltermart Dasmarinas
                </TextReveal>
                {/* header */}
                <TextReveal
                    as="p"
                    type="words"
                    triggerOnScroll
                    scrollStart="top 85%"
                    className="text-[clamp(0.50rem,1vw,0.60rem)] leading-[0.9] font-medium text-[#7F7F7F] w-[47%]"
                    duration={1.2}
                    delay={0.1}
                    stagger={0.07}
                >
                    Km. 30, Emilio Aguinaldo Highway, Barangay Burol, Dasmariñas City, Cavite, 4114, Philippines
                </TextReveal>
            </div>
            <div className="col-span-7 pt-[10rem] pb-[5rem]">
                {/* paragraph */}
                <TrainingScheduleDetails
                    className="flex justify-between"
                    location="dasmarinas"
                />
            </div>

            {/* **5th row */}
            <div className="col-span-0 pt-0 pl-0 min-[751px]:pt-4 min-[751px]:col-span-12 min-[751px]:pl-2">
                <SchedulePicture
                    src={fiveImage.src}
                    alt={fiveImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={fiveImage.centerPercentage}
                />
            </div>
            <div className="col-span-12 pt-4 pr-0 min-[751px]:col-span-3 min-[751px]:pr-2">
                <SchedulePicture
                    src={sixImage.src}
                    alt={sixImage.alt}
                    className="h-[300px] w-full"
                    centerPercentage={sixImage.centerPercentage}
                />
            </div>
            <div className="col-span-12 pt-4 pl-0 pb-2 min-[751px]:col-span-6 min-[751px]:pl-2">
                <SchedulePicture
                    src={sevenImage.src}
                    alt={sevenImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={sevenImage.centerPercentage}
                    delay={0.3}
                />
            </div>

            {/* 6th row */}
            <div className="col-span-12 py-[6rem] pr-0 min-[751px]:col-span-6 min-[751px]:pr-2 min-[751px]:pt-12 min-[751px]:py-0">
                {/* header */}
                <div className="text-center pb-4 min-[751px]:text-left">
                    <TextReveal
                        as="h3"
                        type="words"
                        triggerOnScroll
                        scrollStart="top 85%"
                        className="text-4xl w-full leading-[0.9] font-bold mb-2 tracking-wide min-[551px]:text-[clamp(0.25rem,7.00vw,3.50rem)] min-[751px]:text-[clamp(1.25rem,4.25vw,3.50rem)]"
                        duration={1.2}
                        delay={0.1}
                        stagger={0.07}
                    >
                        Robinson General Trias
                    </TextReveal>
                </div>
                {/* paragraph */}
                <TrainingScheduleDetails
                    className="flex justify-between px-2"
                    location="dasmarinas"
                />
            </div>
            <div className="col-span-12 pt-2 pl-2 min-[751px]:col-span-6 min-[751px]:pl-2">
                <SchedulePicture
                    src={eightImage.src}
                    alt={eightImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={eightImage.centerPercentage}
                    delay={0.3}
                />
            </div>

            {/* 7th row */}
            <div className="col-span-12 pt-4 pr-0 min-[751px]:col-span-4 min-[751px]:pr-2">
                <SchedulePicture
                    src={nineImage.src}
                    alt={nineImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={nineImage.centerPercentage}
                    horizontalPosition="left"
                />
            </div>
            <div className="col-span-12 py-[6rem] pl-0 min-[751px]:col-span-8 min-[751px]:pl-2 min-[751px]:pt-12">
                {/* header */}
                <div className="text-center pb-4">
                    <TextReveal
                        as="h3"
                        type="words"
                        triggerOnScroll
                        scrollStart="top 85%"
                        className="text-[clamp(2.25rem,4.50vw,3.50rem)] leading-[0.9] font-bold mb-2 tracking-wide"
                        duration={1.2}
                        delay={0.1}
                        stagger={0.07}
                    >
                        Imus Bucandala Gym
                    </TextReveal>
                </div>

                {/* paragraph */}
                <TrainingScheduleDetails
                    className="flex justify-between px-0 min-[751px]:px-4 min-[401px]:justify-around"
                    location="dasmarinas"
                />
            </div>

            {/* 8th row */}
            <div className="col-span-12 pt-4 pr-0 min-[751px]:col-span-4 min-[751px]:pr-2]">
                <SchedulePicture
                    src={tenthImage.src}
                    alt={tenthImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={tenthImage.centerPercentage}
                />
            </div>
            <div className="col-span-12 pt-4 pl-0 min-[751px]:col-span-8 min-[751px]:pl-2">
                <SchedulePicture
                    src={eleventhImage.src}
                    alt={eleventhImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={eleventhImage.centerPercentage}
                    delay={0.3}
                />
            </div>

        </section>
    );
}