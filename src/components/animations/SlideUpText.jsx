import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Circle, ArrowRight, ArrowLeft } from "lucide-react";

export default function SlideUpText({
                                        children,
                                        padding,
                                        isButton,
                                        isArrowRight,
                                        isArrowLeft,
                                        disabled=false }) {

    const containerRef = useRef(null);

    // Reusable timeline for the text transition.
    const tl = useRef(null);

    // References for the button indicator animation.
    const circleRef = useRef(null);
    const circleTween = useRef(null);

    useGSAP(() => {
        const top = containerRef.current.querySelector(".slide-text-top");
        const bottom = containerRef.current.querySelector(".slide-text-bottom");

        // Keep both text layers composited consistently during the transition.
        gsap.set([top, bottom], { force3D: true });

        // Build the hover transition once and control it through play/reverse.
        tl.current = gsap.timeline({ paused: true });

        tl.current
            .to(
                top,
                {
                    yPercent: -100,
                    duration: 0.28,
                    ease: "power2.out",
                    force3D: true,
                },
                0
            )
            .to(
                bottom,
                {
                    yPercent: -100,
                    duration: 0.28,
                    ease: "power2.out",
                    force3D: true,
                },
                0
            );
    }, { scope: containerRef });

    // Reset the text transition when the control becomes unavailable.
    // This prevents a previously triggered hover state from being preserved.
    useEffect(() => {
        if (!tl.current) return;

        if (disabled) {
            tl.current.pause(0);
        }
    }, [disabled]);

    const handleMouseEnter = () => {
        if (disabled) return;

        // Always replay from the initial state so repeated hovers
        // produce a consistent transition.
        tl.current?.timeScale(1).play(0);

        if (isButton && circleRef.current) {
            // Cancel the previous indicator animation before starting a new one.
            circleTween.current?.kill();

            circleTween.current = gsap.to(circleRef.current, {
                fill: "#ffffff",
                duration: 0.25,
                ease: "power3.out",
                scale: 0.6,
                force3D: true,
            });
        }
    };

    const handleMouseLeave = () => {
        if (disabled) return;

        // Reverse the same timeline instead of creating a second animation.
        tl.current?.timeScale(1).reverse();

        if (isButton && circleRef.current) {
            // Prevent overlapping indicator tweens when the pointer
            // enters and leaves quickly.
            circleTween.current?.kill();

            circleTween.current = gsap.to(circleRef.current, {
                fill: "transparent",
                duration: 0.25,
                ease: "power3.out",
                scale: 1,
                force3D: true,
            });
        }
    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={
                isButton
                    ? `inline-flex items-center ${padding}`
                    : "inline-flex items-center"}
            style={{ contain: "layout paint" }}
        >
            {/* Two stacked text layers create the vertical slide transition. */}
            <div
                className={`
                            relative overflow-hidden leading-none
                            ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
                `}
            >
                {/* Visible text layer. */}
                <div className={`slide-text-top will-change-transform transform-gpu ${(isArrowRight || isArrowLeft) && "inline-flex items-center gap-1"}`}>
                    { isArrowLeft && (
                        <ArrowLeft size={12} strokeWidth={3}/>
                    )}
                    {children}
                    { isArrowRight && (
                        <ArrowRight size={12} strokeWidth={3}></ArrowRight>
                    )}
                </div>

                {/* Offset text layer that slides into view on hover. */}
                <div className={`slide-text-bottom absolute left-0 top-full will-change-transform transform-gpu ${(isArrowRight || isArrowLeft) && "inline-flex items-center gap-1"}`}>
                    { isArrowLeft && (
                        <ArrowLeft size={12} strokeWidth={3}/>
                    )}
                    {children}
                    { isArrowRight && (
                        <ArrowRight size={12} strokeWidth={3}></ArrowRight>
                    )}
                </div>
            </div>

            {/* Optional button indicator animated independently of the text. */}
            {isButton && (
                <span className="inline-flex items-center pl-3">
                    <Circle
                        ref={circleRef}
                        size={8}
                        strokeWidth={2}
                        className="will-change-transform transform-gpu"
                    />
                </span>
            )}

        </div>
    );
}