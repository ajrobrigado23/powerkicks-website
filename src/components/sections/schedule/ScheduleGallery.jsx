import scheduleImgOne from "../../../assets/images/schedule-images/section-2-blackandwhite.jpg"
import scheduleImgTwo from "../../../assets/images/schedule-images/section-3-blackandwhite.jpg"
import SchedulePicture from "./SchedulePicture.jsx";

export default function ScheduleGallery() {

    return (
        <section className="grid grid-cols-12 px-10 pb-[2rem]">
            {/* 1st Row */}
            <div className="col-span-4">
                <h3 className="text-[clamp(2.25rem,4vw,2.75rem)] leading-[0.9] font-bold mb-[2rem]">
                    Training Schedule
                </h3>
                <p className="font-medium max-w-full tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                    Powerkicks is aligned with recognized national and international organizations, ensuring structured
                    training, certified standards, and consistent athlete development.
                </p>
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
                    className="h-[500px] w-[100%] overflow-hidden"
                    centerPercentage="45%"
                />
            </div>

        </section>
    );
}