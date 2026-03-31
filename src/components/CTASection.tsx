import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden bg-primary p-10 md:p-16 text-center"
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-light/10 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/75 text-lg mb-8 max-w-lg mx-auto">
            Book a no-obligation consultation. Our doctors will assess your concerns, explain your options honestly, and create a plan that fits your goals and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold text-base px-8" asChild>
              <a href="https://wa.link/q64h1l" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:+60321110318">
                Call +603-2111 0318
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
          <p className="text-primary-foreground/50 text-sm mt-6">
            🎁 New patients receive a RM100 voucher on their first visit
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
