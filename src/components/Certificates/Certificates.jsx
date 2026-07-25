import { motion } from "framer-motion";
import { useState } from "react";

import CertificatesBackground from "./CertificatesBackground";
import CertificateCard from "./CertificateCard";
import { certificates } from "./certificatesData";

import CertificateModal from "../CertificateModal/CertificateModal";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setIsOpen(false);
  };

  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#08111F] py-28 text-white"
    >
      <CertificatesBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Achievements
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold">
            My <span className="text-cyan-400">Certificates</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            Certifications that reflect my continuous learning in MERN Stack,
            Frontend Development and Modern Web Technologies.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <CertificateCard
                certificate={certificate}
                onClick={() => openModal(certificate)}
              />
            </motion.div>

          ))}

        </div>

      </div>

      {/* Certificate Modal */}

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isOpen}
        onClose={closeModal}
      />

    </section>
  );
};

export default Certificates;