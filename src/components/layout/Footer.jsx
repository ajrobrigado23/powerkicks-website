export default function Footer() {

    return (
        <footer className="w-full px-10 pt-[2rem] pb-[2rem] bg-black text-white">
            <div className="grid grid-cols-2 gap-10">
                {/* Terms of Service */}
                <div className="flex flex-col">
                    <h4>Terms of Service</h4>
                    <p>By accessing www.powerkickstkd.com, you agree to abide by these Terms of Service and to comply
                        with all applicable laws and regulations. If you do not agree with these Terms of Service,
                        you are prohibited from using or accessing this website or using any other services provided
                        by Powerkicks platforms.</p>
                </div>
                {/* Social Media */}
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full max-w-[220px] text-left">
                        <h4>Social Media</h4>
                        <p>Facebook</p>
                        <p>Facebook</p>
                        <p>Facebook</p>
                    </div>
                </div>
                {/* Privacy Policy */}
                <div className="flex flex-col">
                    <h4>Privacy Policy</h4>
                    <p>Your privacy is important to us. It is Powerkicks policy to respect your privacy and comply
                        with any applicable law and regulation regarding any personal information we may collect
                        about you, including across our website, www.powerkickstkd.com, and other sites we
                        own and operate.</p>
                </div>
                {/* Contact Us */}
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full max-w-[220px] text-left">
                        <h4>Contact Us</h4>
                        <p>+639-19-826-2504</p>
                        <p>powerkicks@gmail.com</p>
                    </div>
                </div>

            </div>

        </footer>
    );
}