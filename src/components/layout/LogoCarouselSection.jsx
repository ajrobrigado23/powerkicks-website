import BrandCarousel from "../animations/BrandCarousel.jsx";

export default function LogoCarouselSection() {
    return (
        <section className="w-full px-10 py-10">
            <div className="flex flex-col min-[700px]:gap-15 tablet:gap-20">
                <div className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold">
                    <p className="mb-1 text-sm font-semibold text-[#7F7F7F]">Partners / Affiliation</p>
                    <h3>Backed by</h3>
                    <h3>trusted institutions</h3>
                </div>
                <div className="flex flex-col gap-4 pb-12 min-[700px]:pb-0 min-[700px]:flex-row min-[700px]:justify-between">
                    <p className="opacity-0 min-[700px]:opacity-100 min-[700px]:font-semibold min-[700px]:tracking-[0.025rem] min-[700px]:text-[clamp(0.6rem,2.2vw,0.75rem)] tablet:text-[clamp(0.65rem,1vw,0.80rem)]">
                        Recognized by
                    </p>
                    <p className="font-medium max-w-full tracking-[0.025rem] text-[clamp(1rem,1.5vw,1.375rem)] min-[700px]:max-w-md tablet:max-w-2xl">
                        Powerkicks is aligned with recognized national and international organizations, ensuring
                        structured training, certified standards, and consistent athlete development. </p>
                </div>
                {/* Brand Carousel */}
                <BrandCarousel></BrandCarousel>
            </div>
        </section>
    )
}