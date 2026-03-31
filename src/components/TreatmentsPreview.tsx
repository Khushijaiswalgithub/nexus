import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import facialImg from "@/assets/facial-treatment.jpg";
import weightImg from "@/assets/weight-loss.jpg";
import hairImg from "@/assets/hair-restoration.jpg";
import skinImg from "@/assets/skin-treatment.jpg";

const treatments = [
  {
    title: "Facial & Anti-Aging",
    description: "Botox, dermal fillers, Sculptra collagen therapy, and HIFU for natural-looking rejuvenation.",
    image: facialImg,
    href: "/treatments#facial",
  },
  {
    title: "Medical Weight Loss",
    description: "Doctor-supervised Ozempic, Wegovy, Saxenda, and CoolSculpting programmes with ongoing monitoring.",
    image: weightImg,
    href: "/treatments#weight-loss",
  },
  {
    title: "Hair Restoration",
    description: "PRP, mesotherapy, and medical-grade scalp treatments to address thinning and hair loss.",
    image: hairImg,
    href: "/treatments#hair",
  },
  {
    title: "Skin & Pigmentation",
    description: "Pico laser, chemical peels, and acne scar resurfacing designed for Asian skin types.",
    image: skinImg,
    href: "/treatments#skin",
  },
];

const TreatmentsPreview = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <span className="text-sm font-medium text-gold uppercase tracking-widest">Our Specialisations</span>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3">
          Medically Guided Solutions
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          From facial rejuvenation to body contouring — every treatment is planned by doctors who prioritise safety, science, and natural results.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {treatments.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link
              to={t.href}
              className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={600}
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {t.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.description}</p>
                <div className="flex items-center gap-1 mt-4 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TreatmentsPreview;
