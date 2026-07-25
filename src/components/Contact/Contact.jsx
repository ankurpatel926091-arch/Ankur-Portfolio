import { motion } from "framer-motion";
import ContactBackground from "./ContactBackground";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#08111F] py-28 text-white"
    >
      {/* Background */}
      <ContactBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold">
            Contact{" "}
            <span className="text-cyan-400">
              Me
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            Have a project in mind, internship opportunity, freelance work
            or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8"
          >
            <ContactInfo />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8"
          >
            <ContactForm />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;