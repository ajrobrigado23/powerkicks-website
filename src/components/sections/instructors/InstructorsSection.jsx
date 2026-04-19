import InfoRow from "../../ui/InfoRow.jsx";
import CoachProfile from "./CoachProfile.jsx";

export default function InstructorsSection() {
    return(
        <section
            className="grid grid-cols-[1fr_1.8fr] w-full px-10 py-10 gap-[2rem] bg-black text-white"
        >
            {/* 1st Row */}
            <div className="col-span-2">
                <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold max-w-2xl">
                    Instructors
                </h2>
            </div>
            {/* 2nd Row */}
            <div className="col-start-2 justify-self-start pt-[6rem] min-[1090px]:justify-self-end">
                <p className="max-w-[32rem] font-light tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)]">
                    Our instructors are certified, experienced, and committed
                    to developing not just skills, but discipline, confidence,
                    and strong character in every student.
                </p>
            </div>
            { /* 3rd Row */ }
            <InfoRow label="Powerkicks Coaches">
                Each coach at Powerkicks brings a hands-on approach to training guiding every student with
                precision, consistency, and a deep understanding of taekwondo fundamentals.
            </InfoRow>
            {/* 4th Row */}
            <CoachProfile></CoachProfile>


        </section>
    );
}