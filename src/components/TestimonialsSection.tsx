import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sean Ng",
    treatment: "Botox & Fillers",
    text: "Nexus Clinic didn't push treatments. They explained what I didn't need, which made me trust them even more. The results look completely natural.",
    rating: 5,
  },
  {
    name: "Aisha Rahman",
    treatment: "Ozempic Programme",
    text: "After years of failed diets, the team at Nexus helped me understand the medical side of weight loss. I've lost 12kg in 4 months with proper monitoring.",
    rating: 5,
  },
  {
    name: "Dr. Li Wei",
    treatment: "Pico Laser",
    text: "As a doctor myself, I appreciate their evidence-based approach. The Pico laser treatment for my melasma was expertly handled with realistic expectations set from day one.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <span className="text-sm font-medium text-gold uppercase tracking-widest">Patient Stories</span>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-3">
          Trusted by Thousands in Kuala Lumpur
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
          >
            <Quote className="w-8 h-8 text-gold/60 mb-4" />
            <p className="text-primary-foreground/85 leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <div>
              <p className="font-semibold text-primary-foreground">{t.name}</p>
              <p className="text-sm text-primary-foreground/60">{t.treatment}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
