import { motion } from "framer-motion";
import { ArrowRight, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-clinic.jpg";

const stats = [
  { value: "5,000+", label: "Patients Treated" },
  { value: "15+ Yrs", label: "Clinical Excellence" },
  { value: "FDA", label: "Approved Devices" },
  { value: "98%", label: "Satisfaction Rate" },
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Nexus Clinic luxury reception in Kuala Lumpur"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-gradient" />
    </div>

    <div className="relative z-10 container mx-auto px-4 md:px-8 pt-32 pb-20 md:pt-24 flex-grow flex flex-col justify-center">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <Shield className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-gold tracking-wide uppercase">MOH Accredited Clinic</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-primary-foreground mb-6"
        >
          Where Medical Precision Meets{" "}
          <span className="text-gradient-gold italic">Natural Beauty</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl"
        >
          Doctor-led aesthetic and weight loss treatments in Kuala Lumpur.
          Every plan starts with an honest assessment — not a sales pitch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 lg:gap-8"
        >
          <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold text-base px-8" asChild>
            <a href="https://wa.link/q64h1l" target="_blank" rel="noopener noreferrer">
              Book Your Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/50 text-foreground hover:text-white hover:bg-primary-foreground/10 text-base backdrop-blur-sm px-10 xl:px-12 transition-all duration-300" asChild>
            <a href="/treatments">
              Explore Treatments
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-2 mt-6 text-primary-foreground/60 text-sm"
        >
          <Award className="w-4 h-4" />
          <span>Claim your RM100 new patient voucher</span>
        </motion.div>
      </div>
    </div>

    {/* Stats Bar */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative md:absolute md:bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border mt-auto md:mt-0"
    >
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
