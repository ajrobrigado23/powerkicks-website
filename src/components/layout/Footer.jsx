export default function Footer() {

    return (
        <footer className="w-full px-10 pt-[2rem] pb-[1rem] bg-black text-white">
            <div className="grid grid-cols-1 gap-10 min-[500px]:grid-cols-2">
                {/* Terms of Service */}
                <div className="flex flex-col">
                    <h4 className="text-[clamp(0.90rem,1.5vw,1.50rem)] font-semibold pb-2">Terms of Service</h4>
                    <p className="text-[#7F7F7F] text-[clamp(0.80rem,1.2vw,0.90rem)] font-medium tracking-[0.025rem]">By accessing www.powerkickstkd.com, you agree to abide by these Terms of Service and to comply
                        with all applicable laws and regulations. If you do not agree with these Terms of Service,
                        you are prohibited from using or accessing this website or using any other services provided
                        by Powerkicks platforms.</p>
                </div>
                {/* Social Media */}
                <div className="hidden flex-col items-center min-[501px]:flex">
                    <div className="w-full max-w-[220px] text-left">
                        <h4 className="text-[clamp(0.90rem,1.5vw,1.50rem)] font-semibold pb-2">Social Media</h4>
                        <div className="flex flex-col gap-3">
                            <p className="text-[clamp(0.60rem,1.5vw,0.80rem)] font-medium tracking-[0.025rem] uppercase">Facebook</p>
                            <p className="text-[clamp(0.60rem,1.5vw,0.80rem)] font-medium tracking-[0.025rem] uppercase">Instagram</p>
                            <p className="text-[clamp(0.60rem,1.5vw,0.80rem)] font-medium tracking-[0.025rem] uppercase">Tiktok</p>
                        </div>
                    </div>
                </div>
                {/* Privacy Policy */}
                <div className="flex flex-col">
                    <h4 className="text-[clamp(0.90rem,1.5vw,1.50rem)] font-semibold pb-2">Privacy Policy</h4>
                    <p className="text-[#7F7F7F] text-[clamp(0.80rem,1.2vw,0.90rem)] font-medium tracking-[0.025rem]">Your privacy is important to us. It is Powerkicks policy to respect your privacy and comply
                        with any applicable law and regulation regarding any personal information we may collect
                        about you, including across our website, www.powerkickstkd.com, and other sites we
                        own and operate.</p>
                </div>
                {/* Contact Us */}
                <div className="hidden flex-col items-center min-[501px]:flex">
                    <div className="w-full max-w-[220px] text-left">
                        <h4 className="text-[clamp(0.90rem,1.5vw,1.50rem)] font-semibold pb-2">Contact Us</h4>
                        <p className="text-[#7F7F7F] text-[clamp(0.80rem,1.2vw,0.90rem)] font-medium tracking-[0.025rem]">+639-19-826-2504</p>
                        <p className="text-[#7F7F7F] text-[clamp(0.80rem,1.2vw,0.90rem)] font-medium tracking-[0.025rem]">powerkicks@gmail.com</p>
                    </div>
                </div>

            </div>
            {/* Credits part */}
            <div className="flex justify-between pt-20 text-[clamp(0.35rem,1.2vw,0.55rem)] text-[#7F7F7F] font-semibold">
                <h4>Made & Curated By <span className="text-white">Albert Robrigado</span></h4>
                <p className="flex items-center gap-1">
                    <span className="text-[clamp(0.65rem,1.2vw,0.80rem)] leading-none">&copy;</span>
                    2026 Powerkicks, All rights reserved
                </p>
            </div>

        </footer>
    );
}