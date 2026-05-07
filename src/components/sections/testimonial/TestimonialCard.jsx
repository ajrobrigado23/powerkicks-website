import togashiImg from "../../../assets/images/togashi.jpg";
import { Star, Quote } from "lucide-react"

export default function TestimonialCard() {

    return (
        <div className="flex h-full w-full flex-col gap-5 border border-black/20 p-6">
            <Quote />

            <p className="font-regular italic max-w-full tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1.20rem)] py-8">
                We build Discipline that carries into school and work. We push limits. We demand focus. We celebrate
                growth.
            </p>

            <div className="border-t w-10 pb-2" />

            <div className="mt-auto flex gap-2">
                <img
                    className="h-15 w-15 rounded-full object-cover object-center"
                    src={togashiImg}
                    alt=""
                />

                <div className="flex flex-col">
                    <Star size={16} color="#B91C1C" />

                    <p className="pt-2 font-medium italic tracking-[0.025rem] text-[clamp(0.65rem,1.5vw,0.85rem)]">
                        Albert Joshua T. Robrigado
                    </p>

                    <p className="font-medium tracking-[0.025rem] text-[clamp(0.65rem,1.5vw,0.75rem)] text-[#7F7F7F]">
                        Member of Junior National Team
                    </p>
                </div>
            </div>
        </div>
    );
}