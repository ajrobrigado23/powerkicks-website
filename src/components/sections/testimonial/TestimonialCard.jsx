import { Star } from "lucide-react"
import quotesImg from "../../../assets/images/quotes-2.png"

export default function TestimonialCard({ name, title, quotes, image }) {

    return (
        <div className="flex h-full w-full flex-col gap-1 border border-black/20 p-6">
            <img
                className="block object-contain w-10 h-10"
                src={quotesImg}
                alt="quotes" />

            <p className="
                font-regular
                italic
                max-w-full
                tracking-[0.025rem]
                text-[clamp(0.85rem,1.5vw,1.20rem)]
                py-8
                min-h-[210px]
            ">
                {quotes}
            </p>

            <div className="ml-1 border-t w-12 pb-4" />

            <div className="flex gap-2">
                <img
                    className="h-15 w-15 rounded-full object-cover object-center"
                    src={image}
                    alt=""
                />

                <div className="flex flex-col">
                    {/* loop through the stars */}
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                            <Star
                                key={index}
                                size={15}
                                color="#B91C1C"
                                fill="#B91C1C"
                            />
                        ))}
                    </div>
                    <p className="pt-2 font-semibold tracking-[0.025rem] text-[clamp(0.55rem,1.5vw,0.75rem)]">
                        {name}
                    </p>

                    <p className="font-medium tracking-[0.025rem] text-[clamp(0.45rem,1.5vw,0.65rem)] text-[#7F7F7F]">
                        {title}
                    </p>
                </div>

            </div>

        </div>
    );
}