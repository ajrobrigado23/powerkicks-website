import InfoRow from "../../ui/InfoRow.jsx";
import EditorialPicture from "../../ui/EditorialPicture.jsx";

export default function CoachProfile({
        name,
        image,
        alt,
        description,
        achievements,
    }) {

    return (
        <>
            {/* 4th Row */}
            <div className="col-start-1 py-[2rem]">
                <p className="font-normal text-[clamp(0.75rem,1.25vw,0.90rem)]">
                    {name}
                </p>
            </div>
            <div className="h-full py-[2rem] desktop:col-start-2 desktop:justify-self-start">
                <EditorialPicture src={image} alt={alt} />
            </div>
            {/* 5th Row */}
            <InfoRow label="Head Coach">
                {description}
            </InfoRow>
            {/* 6th Row */}
            <InfoRow label="Achievements">
                {achievements}
            </InfoRow>
        </>
    )
}