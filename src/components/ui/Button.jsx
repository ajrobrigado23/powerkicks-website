import SlideUpText from "../animations/SlideUpText.jsx";
import { forwardRef } from "react";

const Button = forwardRef(({
        textColor= "white",
        backgroundColor= "black",
        className= "",
        isButton = true,
        isMenu = false,
        onClick,
        children,
        ...props
    }, ref) => {

    return(
        isMenu
            ?   <button
                    className={className}
                    ref={ref}
                    onClick={onClick}
                    {...props}
                >
                    <span className="font-semibold text-sm uppercase">{children}</span>
                </button>
            :   <a className={`text-${textColor} bg-${backgroundColor} ${className}`}>
                    <SlideUpText isButton={isButton}>{children}</SlideUpText>
                </a>
    );
});

export default Button;