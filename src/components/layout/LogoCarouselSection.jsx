import BrandCarousel from "../animations/BrandCarousel.jsx";

export default function LogoCarouselSection() {
    return (
        <section className="w-full px-10 py-10">
            <div className="flex flex-col gap-20">
                <div className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold">
                    <p className="mb-1 text-sm font-semibold text-[#7F7F7F]">Partners / Affiliation</p>
                    <h3>Backed by</h3>
                    <h3>trusted institutions</h3>
                </div>
                <div className="flex justify-between">
                    <p className="font-semibold tracking-[0.025rem] text-[clamp(0.875rem,1vw,1rem)]">Partners & Affiliation</p>
                    <p className="font-medium max-w-2xl tracking-[0.025rem] text-[clamp(1rem,1.2vw,1.375rem)]">Powerkicks works alongside national and international organizations to ensure high-quality training.</p>
                </div>
                <div>
                    <BrandCarousel></BrandCarousel>
                </div>
            </div>
        </section>
    )
}