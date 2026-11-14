import TextTicker from "../../animations/TextTicker.jsx";

export default function PowerkicksMarqueeSection({backgroundColorBlack= true, textIsBlack=true}) {
    return (
        <section className={`w-full py-[2rem] ${backgroundColorBlack && "bg-black"} -mt-px -mb-px overflow-hidden overflow-x-clip"`}>
            <TextTicker
                textIsBlack={textIsBlack}
                className="mx-7 shrink-0 text-[8rem] leading-none min-[700px]:text-[10rem] min-[900px]:text-[12rem] tracking-[0.075rem] font-semibold">
                    Powerkicks
            </TextTicker>
        </section>
    );
}