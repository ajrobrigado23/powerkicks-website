import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Circle } from "lucide-react";
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from "lucide-react";

export default function SlideUpText({ children, isButton, isArrowRight, isArrowLeft }) {
    const containerRef = useRef(null);
    // Text slide up animation
    const tl = useRef(null);
    // Circle animation
    const circleRef = useRef(null);
    const circleTween = useRef(null);

    useGSAP(() => {
        const top = containerRef.current.querySelector(".slide-text-top");
        const bottom = containerRef.current.querySelector(".slide-text-bottom");

        gsap.set([top, bottom], { force3D: true });
        tl.current = gsap.timeline({ paused: true });

        tl.current
            .to(top, {
                yPercent: -100,
                duration: 0.28,
                ease: "power2.out",
                force3D: true,
            }, 0)
            .to(bottom, {
                yPercent: -100,
                duration: 0.28,
                ease: "power2.out",
                force3D: true,
            }, 0);

    }, { scope: containerRef });

    const handleMouseEnter = () => {
        tl.current?.timeScale(1).play();

        if (isButton && circleRef.current) {
            circleTween.current?.kill();
            circleTween.current = gsap.to(circleRef.current, {
                fill: "#ffffff",   // or any color
                duration: 0.25,
                ease: "power3.out",
                scale: 0.60,
                force3D: true,
            });
        }

    };

    const handleMouseLeave = () => {
        tl.current?.timeScale(1).reverse();

        if (isButton && circleRef.current) {
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
            className={isButton ? "inline-flex items-center bg-black px-4 py-3" : "inline-flex items-center"}
            style={{ contain: "layout paint" }}
        >
            <div className="relative overflow-hidden cursor-pointer leading-none">
                <div className={`slide-text-top will-change-transform transform-gpu ${(isArrowRight || isArrowLeft) && "inline-flex items-center gap-1"}`}>
                    { isArrowLeft && (
                        <ArrowLeft size={12} strokeWidth={3}/>
                    )}
                    {children}
                    { isArrowRight && (
                        <ArrowRight size={12} strokeWidth={3}></ArrowRight>
                    )}
                </div>

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