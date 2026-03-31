import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyNexusSection from "@/components/WhyNexusSection";
import TreatmentsPreview from "@/components/TreatmentsPreview";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
    <>
        <Helmet>
            <title>Nexus Clinic KL | Top Aesthetic & Weight Loss Clinic Malaysia</title>
            <meta
                name="description"
                content="MOH-accredited aesthetic and medical weight loss clinic in Kuala Lumpur. Doctor-led Botox, fillers, Ozempic, Pico laser & more. Book your assessment today."
            />
            <meta name="keywords" content="aesthetic clinic KL, Botox Malaysia, dermal fillers Kuala Lumpur, Ozempic weight loss Malaysia, Pico laser KL, Nexus Clinic" />
            <link rel="canonical" href="https://www.nexus-clinic.com/en/" />
        </Helmet>
        <Navbar />
        <main>
            <HeroSection />
            <WhyNexusSection />
            <TreatmentsPreview />
            <DoctorsSection />
            <TestimonialsSection />
            <CTASection />
        </main>
        <Footer />
    </>
);

export default Index;