import kikoImg from "../../assets/images/coach-kiko.webp"
import EditorialPicture from "../ui/EditoriaIPicture.jsx";

export default function InstructorsSection() {
    return(
        <section
            className="grid grid-cols-[1fr_1.8fr] grid-rows-[auto_auto_auto_auto_auto_auto] w-full px-10 py-10 gap-[2rem] bg-black text-white"
        >
            {/* 1st Row */}
            <div className="row-start-1 col-span-2">
                <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold max-w-2xl">
                    Instructors
                </h2>
            </div>
            {/* 2nd Row */}
            <div className="row-start-2 col-start-2 justify-self-start pt-[4rem] min-[1090px]:justify-self-end">
                <p className="max-w-[32rem] font-light tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                    Our instructors are certified, experienced, and committed
                    to developing not just skills, but discipline, confidence,
                    and strong character in every student.
                </p>
            </div>
            { /* 3rd Row */ }
            <div className="
                              row-start-3
                              col-span-2
                              grid grid-cols-[1fr_1.8fr]
                              gap-[2rem]
                              min-[1090px]:flex
                              min-[1090px]:col-start-2
                              min-[1090px]:col-span-1
                              min-[1090px]:justify-between
                            ">

                {/* Label */}
                <p className="
                                col-start-1
                                font-semibold text-[clamp(0.75rem,1.25vw,0.90rem)]
                                min-[1090px]:col-auto
                              ">
                    Powerkicks Coaches
                </p>

                {/* Paragraph */}
                <p className="
                                col-start-2
                                max-w-[32rem]
                                font-light tracking-[0.025rem]
                                text-[clamp(0.85rem,1.5vw,1rem)]
                                min-[1090px]:col-auto
                              ">
                    Each coach at Powerkicks brings a hands-on approach to training guiding every student with
                    precision, consistency, and a deep understanding of taekwondo fundamentals.
                </p>

            </div>
            {/* 4th Row */}
            <div className="row-start-4 col-start-1">
                <p className="font-normal text-[clamp(0.75rem,1.25vw,0.90rem)]">
                    Francisco SA. Robrigado
                </p>
            </div>
            <div className="row-start-4 h-full desktop:col-start-2 desktop:justify-self-start">
                <EditorialPicture src={kikoImg} alt="Coach kiko" />
            </div>
            {/* 5th Row */}
            <div className="
                              row-start-5
                              col-span-2
                              grid grid-cols-[1fr_1.8fr]
                              gap-[2rem]
                              min-[1090px]:flex
                              min-[1090px]:col-start-2
                              min-[1090px]:col-span-1
                              min-[1090px]:justify-between
                            ">

                {/* Label */}
                <p className="
                                col-start-1
                                font-semibold text-[clamp(0.75rem,1.25vw,0.90rem)]
                                min-[1090px]:col-auto
                              ">
                    Head Coach
                </p>

                {/* Paragraph */}
                <p className="
                                col-start-2
                                max-w-[32rem]
                                font-light tracking-[0.025rem]
                                text-[clamp(0.85rem,1.5vw,1rem)]
                                min-[1090px]:col-auto
                              ">
                    Each coach at Powerkicks brings a hands-on approach to training guiding every student with
                    precision, consistency, and a deep understanding of taekwondo fundamentals.
                </p>
            </div>
            {/* 6th Row */}
            <div className="
                              row-start-6
                              col-span-2
                              grid grid-cols-[1fr_1.8fr]
                              gap-[2rem]
                              min-[1090px]:flex
                              min-[1090px]:col-start-2
                              min-[1090px]:col-span-1
                              min-[1090px]:justify-between
                            ">

                {/* Label */}
                <p className="
                                col-start-1
                                font-semibold text-[clamp(0.75rem,1.25vw,0.90rem)]
                                min-[1090px]:col-auto
                              ">
                    Achievements
                </p>

                {/* Paragraph */}
                <p className="
                                col-start-2
                                max-w-[32rem]
                                font-light tracking-[0.025rem]
                                text-[clamp(0.85rem,1.5vw,1rem)]
                                min-[1090px]:col-auto
                              ">
                    Each coach at Powerkicks brings a hands-on approach to training guiding every student with
                    precision, consistency, and a deep understanding of taekwondo fundamentals.
                </p>
            </div>

        </section>
    );
}