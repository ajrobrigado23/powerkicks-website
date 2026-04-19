export default function InfoRow({ label, children}) {
    return (
        <div
            className="
                        col-span-2
                        grid grid-cols-[1fr_1.8fr]
                        gap-[2rem]
                        min-[1090px]:flex
                        min-[1090px]:col-start-2
                        min-[1090px]:col-span-1
                        min-[1090px]:justify-between
            "
        >
            {/* Label */}
            <p className="
                                col-start-1
                                font-semibold text-[clamp(0.75rem,1.25vw,0.90rem)]
                                min-[1090px]:col-auto
                              ">
                {label}
            </p>

            {/* Paragraph */}
            <p className="
                                col-start-2
                                max-w-[32rem]
                                font-light tracking-[0.025rem]
                                text-[clamp(0.85rem,1.5vw,1rem)]
                                min-[1090px]:col-auto
                              ">
                {children}
            </p>

        </div>
    );
}