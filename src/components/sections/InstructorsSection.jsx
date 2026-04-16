import kikoImg from "../../assets/images/coach-kiko-1.png"

export default function InstructorsSection() {
    return(
        <section
            className="grid grid-cols-[1fr_1.8fr] grid-rows-[auto_auto_auto_auto] w-full px-10 py-10 gap-[2rem] bg-black text-white"
        >
            {/* 1st Row */}
            <div className="row-start-1 col-span-2">
                <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold max-w-2xl">
                    Instructors
                </h2>
            </div>
            {/* 2nd Row */}
            <div className="row-start-2 col-start-2 justify-self-end pt-[4rem]">
                <p className="max-w-[32rem] font-light tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                    Our instructors are certified, experienced, and committed
                    to developing not just skills, but discipline, confidence,
                    and strong character in every student.
                </p>
            </div>
            { /* 3rd Row */ }
            <div className="row-start-3 col-start-2 flex items-start justify-between gap-8">
                <p className="font-semibold text-[clamp(0.75rem,1.25vw,0.90rem)]">
                    Powerkicks Coaches
                </p>

                <p className="max-w-[32rem] font-light tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                    Our instructors are certified, experienced, and committed
                    to developing not just skills, but discipline, confidence,
                    and strong character in every student.
                </p>
            </div>
            {/* 4th Row */}
            <div className="row-start-4 col-start-1">
                <p className="font-normal text-[clamp(0.75rem,1.25vw,0.90rem)]">
                    Francisco SA. Robrigado
                </p>
            </div>
            <div className="row-start-4 col-start-2 justify-self-start">
                <div
                    className="w-full h-[550px] overflow-hidden"
                >
                    <img
                        src={kikoImg}
                        className="block h-full w-full object-contain"
                        style={{
                            filter: "grayscale(100%) brightness(0.80)",
                            transform: "scale(1)",
                            willChange: "transform, filter",
                        }}
                    />
                </div>
            </div>

        </section>
    );
}