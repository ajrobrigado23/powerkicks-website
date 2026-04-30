import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function LocationPreview({ activeLocation, activeRow }) {
    // floating preview container (moves up/down)
    const panelRef = useRef(null);
    // wrapper of the image (for fade animation)
    const imageWrapRef = useRef(null);
    // image itself (for zoom + fade animation)
    const imageRef = useRef(null);

    // Show and Hide Panel - (run whenever dependencies change)
    useGSAP(() => {
        if (!panelRef.current) return;

        // hide the panel when null (if nothing is hovered)
        if (!activeLocation) {
            gsap.to(panelRef.current, {
                // opacity + visibility
                autoAlpha: 0,
                duration: 0.25,
                ease: "power2.out",
            });
            return;
        }
        // has an active location
        gsap.to(panelRef.current, {
            // fade in panel
            autoAlpha: 1,
            duration: 0.25,
            ease: "power2.out",
        });
    }, [activeLocation]);

    // Position panel (code logic)
    useGSAP(() => {

        if (!panelRef.current || !activeRow || !activeLocation) return;

        // exact position of the hovered row on the screen (works with - scrolling, complex layout, transforms and responsive design)
        const rect = activeRow.getBoundingClientRect();
        // position of the panel’s parent container
        const parentRect = panelRef.current.offsetParent.getBoundingClientRect();
        // height of preview panel
        const panelHeight = panelRef.current.offsetHeight;
        // formula, it aligns center to center with the row
        const targetY = rect.top - parentRect.top + rect.height / 2 - panelHeight / 2;
        // moves the panel vertically
        gsap.to(panelRef.current, {
            y: targetY,
            duration: 0.65,
            ease: "power3.out",
        });
    }, [activeRow, activeLocation]);

    // Image animation (on hover change)
    useGSAP(() => {

        if (!imageWrapRef.current || !imageRef.current || !activeLocation) return;
        // kills previous animation (prevents animation stacking)
        gsap.killTweensOf([imageWrapRef.current, imageRef.current]);
        // fade in wrapper
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
        // image zoom + fade
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
                    // hide overflow (for clean animation)
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