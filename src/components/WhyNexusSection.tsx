import { motion } from "framer-motion";
import { Stethoscope, ShieldCheck, FlaskConical } from "lucide-react";
import clinicImg from "@/assets/clinic-interior.jpg";

const reasons = [
  {
    icon: Stethoscope,
    title: "Doctor-Led Care",
    description: "All injectables and prescriptions are assessed and performed by qualified doctors — never delegated to untrained staff.",
  },
  {
    icon: ShieldCheck,
    title: "MOH-Registered Clinic",
    description: "Full compliance with Ministry of Health standards. Medical protocols, hygiene, and patient safety are non-negotiable.",
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based Planning",
    description: "We explain expected outcomes, risks, downtime, and alternatives before you commit. No pressure, no upselling.",
  },
];

const WhyNexusSection = () => (
  <section className="py-20 md:py-28 bg-section-alt">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={clinicImg}
            alt="Nexus Clinic treatment room in Kuala Lumpur"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gold/20 -z-10" />
        </motion.div>

        {/* Content */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-gold uppercase tracking-widest"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-8"
          >
            A Medical Aesthetic Clinic, Not a Beauty Salon
          </motion.h2>

          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * (i + 1) }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyNexusSection;
