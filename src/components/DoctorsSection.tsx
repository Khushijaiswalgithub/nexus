import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor-portrait.jpg";

const doctors = [
  { name: "Dr. Ashvinia Bala", role: "Lead Aesthetic Physician", speciality: "Injectables & Facial Contouring" },
  { name: "Dr. Aris Fadzillah", role: "Aesthetic Doctor", speciality: "Laser & Skin Rejuvenation" },
  { name: "Dr. Preetha Nair", role: "Aesthetic Doctor", speciality: "Weight Management & Body Contouring" },
  { name: "Dr. Charmaine Grace", role: "Aesthetic Doctor", speciality: "Hair Restoration & Regenerative Therapy" },
];

const DoctorsSection = () => (
  <section className="py-20 md:py-28 bg-section-alt" id="doctors">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <span className="text-sm font-medium text-gold uppercase tracking-widest">Our Team</span>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3">
          Meet Your Doctors
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Qualified aesthetic physicians with years of clinical experience, committed to honest assessments and safe results.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={doctorImg}
                alt={doc.name}
                className="w-full h-full object-cover"
                loading="lazy"
                width={600}
                height={800}
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-heading text-lg font-semibold text-foreground">{doc.name}</h3>
              <p className="text-sm text-primary font-medium mt-1">{doc.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{doc.speciality}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
