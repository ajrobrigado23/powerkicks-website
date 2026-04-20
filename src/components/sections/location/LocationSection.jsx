export default function LocationSection() {

    return(
        <section className="w-full px-10 pt-[2rem] pb-[2rem]">
            <div className="flex flex-col min-[700px]:gap-15 tablet:gap-20 pb-8 border-b-2">
                <div className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold pb-6">
                    <p className="mb-1 text-sm font-semibold text-[#7F7F7F]">Partners / Affiliation</p>
                    <h3>Find a Powerkicks</h3>
                    <h3>Near You</h3>
                </div>
                <div
                    className="flex flex-col gap-4 min-[700px]:flex-row min-[700px]:justify-between"
                >
                    <p className="opacity-0
                                  min-[700px]:opacity-100
                                  min-[700px]:font-semibold
                                  min-[700px]:tracking-[0.025rem]
                                  min-[700px]:text-[0.80rem]
                                  tablet:text-[clamp(0.80rem,1.25vw,1rem)]
                                ">
                        Recognized by
                    </p>
                    <p className="font-medium max-w-full tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)] min-[700px]:max-w-md tablet:max-w-2xl">
                        Powerkicks is aligned with recognized national and international organizations, ensuring
                        structured training, certified standards, and consistent athlete development. </p>
                </div>

            </div>
        </section>
    );
}