import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  CheckCircle,
  Award,
  Users,
  Shield,
  Star,
  Heart,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";
import ClinicInfo from "../../components/ClinicInfo";
import { treatmentsData } from "../../constants/treatmentsData";
import { slugToSeoKeyMap } from "../../utils/seoMapping";

const TreatmentPage = () => {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Extract the slug from the pathname
  const pathParts = location.pathname.split("/");
  const treatmentSlug = pathParts[pathParts.length - 1];

  useSEO(slugToSeoKeyMap[treatmentSlug] || "notFound");

  useEffect(() => {
    const fetchTreatmentData = () => {
      setLoading(true);

      const treatmentData = Object.entries(treatmentsData).find(
        ([key, treatment]) => key === treatmentSlug
      )?.[1];

      setTimeout(() => {
        if (treatmentData) {
          setTreatment(treatmentData);
        }
        setLoading(false);
      }, 300);
    };

    fetchTreatmentData();
  }, [treatmentSlug]);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 mt-32 flex items-center justify-center">
        <div className="text-teal-700 text-lg">Loading...</div>
      </div>
    );
  }

  const { h1, intro, sections, faqs } = treatment?.content || {};

  return (
    <div className="min-h-screen bg-gray-50 mt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-700 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{h1}</h1>
            <p className="text-xl opacity-90 mb-8">{intro}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-white text-teal-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-teal-50 transition-colors"
            >
              Book Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content */}
          <div className="w-full lg:w-2/3">
            {sections.map((section, index) => (
              <Section key={index} section={section} index={index} />
            ))}

            {/* FAQ Section */}
            <section className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      className="flex justify-between items-center w-full p-4 text-left font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`transition-transform ${
                          activeFAQ === index ? "rotate-180" : ""
                        }`}
                        size={20}
                      />
                    </button>
                    <AnimatePresence>
                      {activeFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-white text-gray-700">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Consultation Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 mb-6 sticky top-6"
            >
              <h3 className="text-xl font-bold text-teal-800 mb-4">
                Book Your Appointment
              </h3>
              <p className="text-gray-600 mb-6">
                Get expert care for your dental needs. Schedule a consultation
                today.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="text-teal-600 mr-3" size={20} />
                  <span>Mon - Sat: 9:30 AM - 9:00 PM</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <Phone className="text-teal-600 mr-3" size={20} />
                    <a
                      href="tel:+919021256647"
                      className="hover:text-teal-700 transition-colors"
                    >
                      +91 90212 56647
                    </a>
                  </div>
                  <small className="text-gray-500 ml-8">Deolali Camp</small>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <Phone className="text-teal-600 mr-3" size={20} />
                    <a
                      href="tel:+918149049104"
                      className="hover:text-teal-700 transition-colors"
                    >
                      +91 81490 49104
                    </a>
                  </div>
                  <small className="text-gray-500 ml-8">Nashik Road</small>
                </div>

                <div className="flex items-center">
                  <MessageCircle className="text-teal-600 mr-3" size={20} />
                  <span>WhatsApp Available</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 hover:bg-teal-800 transition-colors"
              >
                Call Now
              </motion.button>
            </motion.div>

            {/* Clinic Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-teal-50 rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold text-teal-800 mb-4">
                Why Choose Us
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="text-teal-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">19+ Years Experience</h4>
                    <p className="text-sm text-gray-600">
                      Expert care you can trust
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="text-teal-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">13,000+ Happy Patients</h4>
                    <p className="text-sm text-gray-600">Proven track record</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="text-teal-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Sterilized Equipment</h4>
                    <p className="text-sm text-gray-600">
                      Your health is our priority
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Star className="text-teal-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">4.9/5 Google Rating</h4>
                    <p className="text-sm text-gray-600">
                      Based on 113 reviews
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Clinic Info Section */}
      <ClinicInfo />
    </div>
  );
};

// Section Component
const Section = ({ section, index }) => {
  const { h2, content, list, subsections, orderedList, note } = section;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      className="bg-white rounded-xl shadow-md p-6 mb-8"
    >
      <h2 className="text-2xl font-bold text-teal-800 mb-4">{h2}</h2>

      {content && <p className="text-gray-700 mb-4">{content}</p>}

      {list && (
        <>
          {list.title && (
            <p className="text-gray-700 font-semibold mb-2">{list.title}</p>
          )}
          <ul className="space-y-2 mb-4">
            {list.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle
                  className="text-teal-500 mr-2 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {subsections && (
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {subsections.map((subsection, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-teal-50 p-4 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-teal-700 mb-2">
                {subsection.h3}
              </h3>
              <p className="text-gray-700">{subsection.content}</p>
            </motion.div>
          ))}
        </div>
      )}

      {orderedList && (
        <div className="mt-6">
          <ol className="space-y-4">
            {orderedList.map((item, i) => (
              <li key={i} className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold mr-4">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          {note && <p className="text-gray-600 mt-4 italic">{note}</p>}
        </div>
      )}

      {note && !orderedList && (
        <p className="text-gray-600 mt-4 italic">{note}</p>
      )}
    </motion.section>
  );
};

export default TreatmentPage;
