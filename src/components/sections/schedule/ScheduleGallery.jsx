import scheduleImgOne from "../../../assets/images/schedule-images/section-2-blackandwhite.jpg"
import scheduleImgTwo from "../../../assets/images/schedule-images/section-3-blackandwhite.jpg"

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
                <div className="ml-auto h-[420px] w-[75%] overflow-hidden">
                    <img
                        src={scheduleImgOne}
                        alt="powerkicks picture 1"
                        className="block h-full w-full object-cover object-[center_20%]"
                    />
                </div>
            </div>
            <div className="col-span-12 pt-4 pb-4">
                <div className="h-[500px] w-[100%] overflow-hidden">
                    <img
                        src={scheduleImgTwo}
                        alt="powerkicks picture 2"
                        className="block h-full w-full object-cover object-[center_45%]"
                    />
                </div>
            </div>

        </section>
    );
}