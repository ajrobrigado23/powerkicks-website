import togashiImg from "../../../assets/images/togashi.jpg";

export default function TestimonialCard() {

    return (
        <div className="flex flex-col gap-4">
            <p>quotes</p>
            <p className="font-medium max-w-full tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                “We build Discipline that carries into school and work. We push limits. We demand focus. We celebrate
                growth.”</p>
            <hr className="border-t border-gray-300"/>
            {/* details section */}
            <div className="flex gap-2">
                <img
                    className="h-15 w-15 object-cover object-center rounded-full"
                    src={togashiImg} alt=""/>
                <div className="flex flex-col">
                    <p>stars</p>
                    <p>Albert Joshua T. Robrigado</p>
                    <p>Member of Junior National Team</p>
                </div>
            </div>
        </div>
    );
}