import { Star } from "lucide-react"
import quotesImg from "../../../assets/images/quotes-2.png"

export default function TestimonialCard({ name, title, quotes, image }) {

    return (
        <div className="box-border flex h-full min-h-full w-full flex-col gap-1 border-r border-black/20 p-6 pb-[98px]">
            <img
                className="block h-8 w-8 object-contain"
                src={quotesImg}
                alt="quotes"
            />

            <p
                className="
                    font-regular
                    italic
                    max-w-full
                    tracking-[0.025rem]
                    text-[clamp(0.85rem,1.5vw,1.20rem)]
                    py-8
                "
            >
                {quotes}
            </p>

            {/* Push this whole bottom area to the bottom */}
            <div className="mt-auto">
                <div className="ml-1 w-12 border-t pb-4" />

                <div className="flex min-w-0 gap-2">
                    <img
                        className="h-15 w-15 rounded-full object-cover object-center"
                        src={image}
                        alt=""
                    />

                    <div className="flex min-w-0 flex-col">
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

                        <p className="truncate pt-2 font-semibold tracking-[0.025rem] text-[clamp(0.55rem,1.5vw,0.75rem)]">
                            {name}
                        </p>

                        <p className="truncate font-medium tracking-[0.025rem] text-[clamp(0.45rem,1.5vw,0.65rem)] text-[#7F7F7F]">
                            {title}
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}