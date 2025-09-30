// pages/Treatments/DentalImplants.jsx
import React from "react";
import { motion } from "framer-motion";
import { useSEO } from "../../hooks/useSEO";
import ClinicInfo from "../../components/ClinicInfo";
import FAQ from "../../components/FAQ";

const DentalImplants = () => {
  useSEO("dentalImplants");

  const faqs = [
    {
      question: "Are dental implants painful?",
      answer:
        "No. The procedure is done under local anesthesia, and most patients report minimal discomfort. Mild soreness post-surgery is normal and manageable with medication.",
    },
    {
      question: "How long do dental implants last?",
      answer:
        "With good oral hygiene and regular checkups, dental implants can last 20+ years or even a lifetime.",
    },
    {
      question: "What is the cost of dental implants in Nashik?",
      answer:
        "The cost varies based on the number of implants, type of restoration, and bone health. We provide a detailed quote after your consultation.",
    },
    {
      question: "Can anyone get dental implants?",
      answer:
        "Most healthy adults are candidates. We'll assess your jawbone density and overall health during your initial visit.",
    },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-8 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Dental Implants in Nashik – Permanent, Natural-Looking Tooth Replacement
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Are you missing one or more teeth? At Dr. Joshi's Care & Cure Dental, we
        offer high-quality dental implants in Nashik that restore both function
        and aesthetics — just like natural teeth. With 22+ years of experience
        and over 7,500+ successful implant procedures, we are proud to be one of
        the most trusted choices for tooth replacement in Nashik. Whether you're
        dealing with a single missing tooth or need full-mouth rehabilitation,
        our dental implant specialists provide safe, durable, and pain-free
        solutions tailored to your needs.
      </motion.p>

      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            What Are Dental Implants?
          </h2>
          <p className="text-gray-700 mb-4">
            A dental implant is a titanium screw that acts as an artificial
            tooth root, placed into the jawbone to support a crown, bridge, or
            denture. It fuses with your bone (osseointegration) to provide a
            stable and long-lasting solution.
          </p>
          <p className="text-gray-700 font-semibold">
            Dental implants are ideal for patients who:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
            <li>Have missing teeth</li>
            <li>Want to avoid removable dentures</li>
            <li>Desire a permanent, natural-feeling restoration</li>
            <li>Have good oral and bone health</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Benefits of Choosing Dental Implants at Our Nashik Clinic
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>Look, feel, and function like natural teeth</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>Prevent bone loss and facial sagging</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>No impact on neighboring teeth</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>Long-lasting (often 20+ years with care)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>Improved speech and chewing ability</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>Boosts self-confidence and smile aesthetics</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Types of Dental Implants We Offer in Nashik
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Single Tooth Implants
            </h3>
            <p className="text-gray-700">
              Perfect for replacing a single missing tooth without affecting
              surrounding teeth.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              All-on-4 / All-on-6 Implants
            </h3>
            <p className="text-gray-700">
              Full arch replacement using just 4 or 6 strategically placed
              implants.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Implant-Supported Bridges & Dentures
            </h3>
            <p className="text-gray-700">
              Stable and comfortable alternative to traditional removable
              dentures.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Immediate Load / Same-Day Implants
            </h3>
            <p className="text-gray-700">
              In select cases, we can place a temporary crown on the implant the
              same day.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Our Dental Implant Procedure – Step-by-Step
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li className="font-semibold">Consultation & 3D Scanning</li>
            <p className="text-gray-600 ml-6 mb-3">
              Bone assessment and smile planning
            </p>

            <li className="font-semibold">Implant Placement</li>
            <p className="text-gray-600 ml-6 mb-3">
              Performed under local anesthesia with minimal discomfort
            </p>

            <li className="font-semibold">Healing & Osseointegration</li>
            <p className="text-gray-600 ml-6 mb-3">Typically 3–6 months</p>

            <li className="font-semibold">Crown Placement</li>
            <p className="text-gray-600 ml-6">
              A custom-designed crown, bridge, or denture is placed
            </p>
          </ol>
          <p className="text-gray-700 mt-4">
            We use advanced imaging, guided surgery, and biocompatible materials
            for the best results.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Why Patients Choose Dr. Joshi's Care & Cure Dental for Dental
            Implants in Nashik
          </h2>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
            <li>22+ years of experience in implant dentistry</li>
            <li>7,500+ implants successfully placed</li>
            <li>Use of top implant brands (Nobel Biocare, Straumann, etc.)</li>
            <li>Minimal pain, faster healing</li>
            <li>Personalized treatment plans</li>
            <li>Full transparency on cost, time, and care</li>
          </ul>
        </section>
      </motion.div>

      <FAQ faqs={faqs} />
      <ClinicInfo />
    </motion.div>
  );
};

export default DentalImplants;
