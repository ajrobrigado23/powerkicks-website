import powerkicksLogoBlack from "/logo/powerkicks-black-logo.png";
import powerkicksLogoWhite from "/logo/powerkicks-white-logo.png";

export default function Logo({ isBlack}) {

    return (
        <img
            src={ isBlack ?  powerkicksLogoWhite : powerkicksLogoBlack}
            className="w-14 h-auto"
            alt="Powerkicks Black Logo" />
    );
}