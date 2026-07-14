import SchedulePicture from "./SchedulePicture.jsx";
import TextReveal from "../../animations/TextReveal.jsx";
import { scheduleImages } from "./schedule.js"

export default function ScheduleGallery() {

    const firstImage = scheduleImages[0];
    const secondImage = scheduleImages[1];
    const thirdImage = scheduleImages[2];
    const fourImage = scheduleImages[3];
    const fiveImage = scheduleImages[4];
    const sixImage = scheduleImages[5];
    const sevenImage = scheduleImages[6];

    return (
        <section className="grid grid-cols-12 px-10 pb-[2rem]">
            {/* 1st Row */}
            <div className="col-span-4">
                {/* header */}
                <TextReveal
                    as="h3"
                    type="words"
                    className="text-[clamp(2.25rem,4vw,3rem)] leading-[0.9] font-bold pt-4 mb-6"
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
                    src={fourImage.src}
                    alt={fourImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={fourImage.centerPercentage}
                    delay={0.3}
                />
            </div>
            {/* 4th row */}
            <div className="col-span-4 pt-4 pr-2">
                <SchedulePicture
                    src={fiveImage.src}
                    alt={fiveImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={fiveImage.centerPercentage}
                />
            </div>
            <div className="col-span-8 pt-12 pl-2">
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
                        Waltermart Dasmarinas
                    </TextReveal>
                </div>

                {/* paragraph */}
                <div className="flex justify-around px-4">

                    {/* Tuesday */}
                    <div className="flex flex-col">
                        {/* header */}
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
                            Tuesday
                        </TextReveal>

                        {/* novice category */}
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

                        {/* time */}
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

                        {/* advance category */}
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

                        {/* time */}
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

                    {/* Thursday */}
                    <div className="flex flex-col">
                        {/* header */}
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

                        {/* novice category */}
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

                        {/* time */}
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

                        {/* advance category */}
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

                        {/* time */}
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
                        {/* header */}
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

                        {/* novice category */}
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

                        {/* time */}
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

                        {/* advance category */}
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

                        {/* time */}
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
                </div>

            </div>

            {/* 5th row */}
            <div className="col-span-3 pt-6 pl-2">
                {/* Whitespace */}
            </div>
            <div className="col-span-3 pt-6 pr-2">
                <SchedulePicture
                    src={sixImage.src}
                    alt={sixImage.alt}
                    className="h-[300px] w-full"
                    centerPercentage={sixImage.centerPercentage}
                />
            </div>
            <div className="col-span-6 pt-6">
                <SchedulePicture
                    src={sevenImage.src}
                    alt={sevenImage.alt}
                    className="h-[500px] w-full"
                    centerPercentage={sevenImage.centerPercentage}
                    delay={0.3}
                />
            </div>

        </section>
    );
}