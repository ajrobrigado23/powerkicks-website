export default function TrainingSection() {
    return (
        <section className="grid grid-cols-[1fr_1.5fr] grid-rows-[auto_auto_auto_auto] w-full px-10 py-10 bg-black text-white">
            <div className="row-start-1 col-span-2 pb-[8rem]">
                <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold max-w-2xl">
                    Disciplines defines everything
                </h2>
            </div>
            <div className="row-start-2 col-start-1">
                <p className="max-w-[16rem] font-semibold text-[clamp(0.75rem,1.25vw,0.90rem)]">
                    Powerkicks (noun) - <br/>
                    Modern taekwondo training built on discipline, focus, and growth.
                </p>
            </div>
            <div className="row-start-2 col-start-2 justify-self-end">
                <p className="max-w-[32rem] font-light tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                    Taekwondo is more than just movement it’s discipline in action.
                    At Powerkicks, we focus on building strong fundamentals, confidence, and mindset through structured training.
                    Every session is designed to help students grow, both physically and mentally.
                </p>
            </div>
        </section>
    );
}