import SlideUpText from "../animations/SlideUpText.jsx";

export default function Button({
        textColor= "white",
        backgroundColor= "black",
        className= "",
        isButton = true,
        children,
        ...props
    }
    ) {

    return(
        <a className={`text-${textColor} bg-${backgroundColor} ${className}`}>
            <SlideUpText isButton={isButton}>{children}</SlideUpText>
        </a>
    );
}