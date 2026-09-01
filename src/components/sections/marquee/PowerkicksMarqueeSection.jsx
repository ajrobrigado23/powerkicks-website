import TextTicker from "../../animations/TextTicker.jsx";

export default function PowerkicksMarqueeSection({backgroundColorBlack= true, textIsBlack=true}) {
    return (
        <section className={`w-full py-[2rem] ${backgroundColorBlack && "bg-black"} -mt-px -mb-px overflow-hidden overflow-x-clip"`}>
            <TextTicker textIsBlack={textIsBlack}>
                Powerkicks
            </TextTicker>
        </section>
    );
}