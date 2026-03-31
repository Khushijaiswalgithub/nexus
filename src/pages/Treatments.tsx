import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import facialImg from "@/assets/facial-treatment.jpg";
import weightImg from "@/assets/weight-loss.jpg";
import hairImg from "@/assets/hair-restoration.jpg";
import skinImg from "@/assets/skin-treatment.jpg";

const treatmentCategories = [
    {
        id: "facial",
        title: "Facial & Anti-Aging",
        subtitle: "Restore balance, not freeze expressions",
        description:
            "Our doctors specialise in subtle, harmonious enhancements that respect your natural facial structure. Every injectable treatment is personally assessed and administered by a qualified physician.",
        image: facialImg,
        treatments: [
            "Botox for wrinkles, jaw slimming & facial tension",
            "Dermal fillers for cheek, chin, jawline & under-eye",
            "Sculptra collagen biostimulation",
            "HIFU non-surgical face lifting",
            "Thread lift for mid-face volume",
        ],
    },
    {
        id: "weight-loss",
        title: "Medical Weight Loss",
        subtitle: "Science-backed, doctor-supervised programmes",
        description:
            "When diet and exercise alone haven't worked, there may be underlying metabolic or hormonal factors. Our programmes are blood-test guided, medically assessed, and include ongoing monitoring — not one-off injections.",
        image: weightImg,
        treatments: [
            "Ozempic (Semaglutide) weight loss programme",
            "Mounjaro (Tirzepatide) weight loss programme",
            "HCG medical programmes (doctor assessment required)",
            "CoolSculpting fat reduction for targeted areas",
            "IV drip metabolic support therapy",
        ],
    },
    {
        id: "skin",
        title: "Skin, Acne & Pigmentation",
        subtitle: "Precision treatments designed for Asian skin",
        description:
            "Asian skin requires careful device and protocol selection to minimise the risk of post-inflammatory hyperpigmentation. Our doctors recommend the safest, most effective option for your specific skin type and concern.",
        image: skinImg,
        treatments: [
            "Pico laser for pigmentation & texture refinement",
            "Acne and acne scar resurfacing & repair",
            "Melasma and uneven tone correction",
            "Medical-grade chemical peels",
            "Fractional CO2 laser resurfacing",
        ],
    },
    {
        id: "hair",
        title: "Hair Restoration & Scalp Health",
        subtitle: "Address the root cause, not just the symptom",
        description:
            "Hair thinning is often progressive and medical — not just cosmetic. We evaluate hormonal, genetic, and scalp factors to guide treatment, so you understand what's actually happening before you start.",
        image: hairImg,
        treatments: [
            "PRP for hair loss and scalp rejuvenation",
            "Hair mesotherapy and growth factor therapy",
            "Stem cell–based therapies (subject to suitability)",
            "Medical guidance for ongoing hair maintenance",
            "Scalp health assessment and treatment plan",
        ],
    },
];

const Treatments = () => (
    <>
        <Helmet>
            <title>Aesthetic Treatments KL | Botox, Fillers, Weight Loss | Nexus Clinic</title>
            <meta
                name="description"
                content="Explore doctor-led aesthetic treatments at Nexus Clinic KL: Botox, dermal fillers, Ozempic weight loss, Pico laser, PRP hair restoration. MOH-accredited care."
            />
            <link rel="canonical" href="https://www.nexus-clinic.com/en/treatments" />
        </Helmet>
        <Navbar />
        <main>
            {/* Page Header */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-primary">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm font-medium text-gold uppercase tracking-widest"
                    >
                        Our Specialisations
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl font-semibold text-primary-foreground mt-3 mb-4"
                    >
                        Treatments & Programmes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary-foreground/75 max-w-2xl mx-auto text-lg"
                    >
                        Every treatment is doctor-assessed, diagnosis-driven, and tailored to your unique anatomy.
                        We prioritise safety and long-term results over quick fixes.
                    </motion.p>
                </div>
            </section>

            {/* Treatment Categories */}
            {treatmentCategories.map((cat, i) => (
                <section
                    key={cat.id}
                    id={cat.id}
                    className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-background" : "bg-section-alt"}`}
                >
                    <div className="container mx-auto px-4 md:px-8">
                        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className={i % 2 !== 0 ? "lg:col-start-2" : ""}
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="rounded-2xl shadow-xl w-full object-cover aspect-square"
                                    loading="lazy"
                                    width={600}
                                    height={600}
                                />
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <span className="text-sm font-medium text-gold uppercase tracking-widest">{cat.subtitle}</span>
                                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-4">
                                    {cat.title}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-8">{cat.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {cat.treatments.map((t) => (
                                        <li key={t} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-foreground text-sm">{t}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="bg-primary hover:bg-teal-light text-primary-foreground" asChild>
                                    <a href="https://wa.link/q64h1l" target="_blank" rel="noopener noreferrer">
                                        Check Suitability
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            <CTASection />
        </main>
        <Footer />
    </>
);

export default Treatments;