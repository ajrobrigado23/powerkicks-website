import BrandCarousel from "./BrandCarousel.jsx";

const brands = [
    { name: "kukkiwon", logo: "/logo/kukkiwon.png" },
    { name: "pta", logo: "/logo/pta-logo-black.png" },
    { name: "robinson", logo: "/logo/robinson-logo.png" },
    { name: "waltermart", logo: "/logo/waltermart-logo.png" },
    { name: "world taekwondo", logo: "/logo/world-taekwondo.png" },
    { name: "district imus", logo: "/logo/district-logo.png" },
    { name: "shift", logo: "/logo/shift-logo.png" },
    { name: "kix", logo: "/logo/kix-logo.png" },
    { name: "kwon", logo: "/logo/kwon-logo.png" },
    { name: "adidas", logo: "/logo/adidas-logo.png" },
];

export default function BrandSection() {
    return (
        <section className="w-full px-10 pt-[4rem] pb-[8rem]">
            <div className="flex flex-col min-[700px]:gap-15 tablet:gap-20">
                <div className="text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] font-bold pb-6">
                    <p className="mb-1 text-sm font-semibold text-[#7F7F7F]">Partners / Affiliation</p>
                    <h3>Backed by</h3>
                    <h3>trusted institutions</h3>
                </div>
                <div
                    className="flex flex-col gap-4 pb-12 min-[700px]:pb-0 min-[700px]:flex-row min-[700px]:justify-between"
                >
                    <p className="opacity-0
                                  min-[700px]:opacity-100
                                  min-[700px]:font-semibold
                                  min-[700px]:tracking-[0.025rem]
                                  min-[700px]:text-[0.90rem]
                                  tablet:text-[clamp(0.75rem,1.25vw,0.90rem)]
                                ">
                        Recognized by
                    </p>
                    <p className="font-medium max-w-full tracking-[0.025rem] text-[clamp(0.85rem,1.5vw,1rem)] min-[700px]:max-w-md tablet:max-w-2xl">
                        Our commitment to excellence is reflected in the brands we trust and our affiliations with
                        recognized Taekwondo organizations, supporting quality training, established standards, and the
                        growth of every student.
                    </p>
                </div>
                {/* Brand Carousel */}
                <BrandCarousel brands={brands}></BrandCarousel>
            </div>
        </section>
    );
}