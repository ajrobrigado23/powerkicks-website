import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function LocationPreview({ activeLocation, activeRow }) {
    const panelRef = useRef(null);
    const imageWrapRef = useRef(null);
    const imageRef = useRef(null);

    // hide the panel when null
    useGSAP(() => {
        if (!panelRef.current) return;

        if (!activeLocation) {
            gsap.to(panelRef.current, {
                autoAlpha: 0,
                duration: 0.25,
                ease: "power2.out",
            });
            return;
        }

        gsap.to(panelRef.current, {
            autoAlpha: 1,
            duration: 0.25,
            ease: "power2.out",
        });
    }, [activeLocation]);

    useGSAP(() => {

        if (!panelRef.current || !activeRow || !activeLocation) return;

        const rowTop = activeRow.offsetTop;
        const rowHeight = activeRow.offsetHeight;
        const panelHeight = panelRef.current.offsetHeight;

        const targetY = rowTop + rowHeight / 2 - panelHeight / 2;

        gsap.to(panelRef.current, {
            y: targetY,
            duration: 0.65,
            ease: "power3.out",
        });
    }, [activeRow, activeLocation]);

    useGSAP(() => {

        if (!imageWrapRef.current || !imageRef.current || !activeLocation) return;

        gsap.killTweensOf([imageWrapRef.current, imageRef.current]);

        gsap.fromTo(
            imageWrapRef.current,
            {
                autoAlpha: 0,
            },
            {
                autoAlpha: 1,
                duration: 0.2,
                ease: "power2.out",
            }
        );

        gsap.fromTo(
            imageRef.current,
            {
                autoAlpha: 0,
                scale: 1.06,
            },
            {
                autoAlpha: 1,
                scale: 1,
                duration: 0.65,
                ease: "power3.out",
            }
        );
    }, [activeLocation]);

    return (
        <div
            ref={panelRef}
            className="pointer-events-none absolute left-1/2 top-0 z-20 w-full max-w-[16rem] -translate-x-1/2 opacity-0 tablet:max-w-[18rem] desktop:pr-6"
        >
            {activeLocation && (
                <div
                    ref={imageWrapRef}
                    className="aspect-[4/5] overflow-hidden bg-neutral-200"
                >
                    <img
                        key={activeLocation.id}
                        ref={imageRef}
                        src={activeLocation.image}
                        alt={activeLocation.title}
                        className="h-full w-full object-cover"
                    />
                </div>
            )}
        </div>
    );
}