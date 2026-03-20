export default function HeroSection({ children }) {

    return(
        <section className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/Powerkicks-Video-compress.mp4"
                autoPlay muted loop playsInline
            />

            {/* Renders the nav passed from Header */}
            {children}

            {/* Hero Content */}

        </section>
    );
}