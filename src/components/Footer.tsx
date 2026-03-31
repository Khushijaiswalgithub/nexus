import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground" id="contact">
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-semibold mb-4">Nexus Clinic</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            MOH-accredited aesthetic and weight loss clinic in Kuala Lumpur. Doctor-led, results-focused care since 2001.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Treatments", href: "/treatments" },
              { label: "Our Doctors", href: "/#doctors" },
              { label: "Weight Loss", href: "/treatments#weight-loss" },
              { label: "Blog", href: "/#blog" },
            ].map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Treatments */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Popular Treatments</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Botox & Anti-Wrinkle</li>
            <li>Dermal Fillers</li>
            <li>Ozempic Weight Loss</li>
            <li>Pico Laser</li>
            <li>PRP Hair Restoration</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Visit Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:+60321110318" className="hover:text-primary-foreground transition-colors">+603-2111 0318</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:hello@nexus-clinic.com" className="hover:text-primary-foreground transition-colors">hello@nexus-clinic.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Mon–Sat: 10am – 7pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Nexus Clinic. All rights reserved. KKM Licensed Medical Aesthetic Clinic.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
