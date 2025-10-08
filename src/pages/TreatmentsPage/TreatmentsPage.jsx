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
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";
import ClinicInfo from "../../components/ClinicInfo";
import axiosInstance from "../../services/api";

const TreatmentPage = () => {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  // Extract the slug from the pathname
  const pathParts = location.pathname.split("/");
  const treatmentSlug = pathParts[pathParts.length - 1];

  // Use dynamic SEO data from backend
  useSEO(
    treatment?.meta || {
      title: treatment?.meta_title || "Dental Treatment",
      description:
        treatment?.meta_description || "Professional dental treatment",
      url: treatment?.meta_url || location.pathname,
    }
  );

  useEffect(() => {
    const fetchTreatmentData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axiosInstance.get(
          `/treatments/${treatmentSlug}`
        );

        if (response.data.success) {
          setTreatment(response.data.data);
        } else {
          throw new Error("Failed to fetch treatment data");
        }
      } catch (error) {
        console.error("Error fetching treatment:", error);
        setError("Failed to load treatment information");
        setTreatment(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatmentData();
  }, [treatmentSlug]);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Icon mapping function for why choose items
  const getIconComponent = (iconName) => {
    const iconMap = {
      Award: Award,
      Users: Users,
      Shield: Shield,
      Star: Star,
      CheckCircle: CheckCircle,
      Heart: Heart,
      Clock: Clock,
      Calendar: Calendar,
      default: CheckCircle,
    };

    return iconMap[iconName] || iconMap.default;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 mt-32 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-teal-700 text-lg font-semibold">
            Preparing your treatment journey...
          </div>
        </motion.div>
      </div>
    );
  }

  if (error || !treatment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 mt-32 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Treatment Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              {error || "The requested treatment could not be found."}
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const { h1, intro, hero_image, sections, faqs, whyChooseItems } = treatment;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 mt-32 overflow-hidden">
      {/* Hero Section with Modern Design */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-600/20 to-blue-600/10"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-6">{h1}</h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                {intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300 flex items-center"
                >
                  Book Consultation
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-gray-700 font-medium py-4 px-6 hover:text-teal-600 transition-colors"
                >
                  <PlayCircle className="mr-2 text-teal-600" size={20} />
                  Watch Procedure
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 max-w-md">
                {[
                  { number: "19+", label: "Years Experience" },
                  { number: "13K+", label: "Happy Patients" },
                  { number: "4.9/5", label: "Google Rating" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-teal-600">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={
                    hero_image
                      ? `${axiosInstance.defaults.baseURL.replace(
                          "/api",
                          ""
                        )}/uploads/${hero_image}`
                      : "/images/default-treatment.jpg"
                  }
                  alt={h1}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-200/30 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative -mt-20">
        {/* Wave Divider */}
        <div className="absolute top-0 left-0 right-0 -translate-y-1">
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-12 text-white fill-current"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Content */}
            <div className="w-full lg:w-2/3">
              {sections?.map((section, index) => (
                <Section
                  key={section.id || index}
                  section={section}
                  index={index}
                />
              ))}

              {/* FAQ Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-16"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-gray-600">
                    Get answers to common questions about your treatment
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {faqs?.map((faq, index) => (
                    <motion.div
                      key={faq.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 group-hover:border-teal-200 transition-all duration-300 h-full">
                        <button
                          className="w-full text-left"
                          onClick={() => toggleFAQ(index)}
                        >
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-gray-800 text-lg pr-4">
                              {faq.question}
                            </h3>
                            <ChevronDown
                              className={`transition-transform duration-300 text-teal-600 ${
                                activeFAQ === index ? "rotate-180" : ""
                              }`}
                              size={20}
                            />
                          </div>
                        </button>
                        <AnimatePresence>
                          {activeFAQ === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-gray-100">
                                <div
                                  className="text-gray-600 leading-relaxed"
                                  dangerouslySetInnerHTML={{
                                    __html: faq.answer,
                                  }}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              {/* Consultation Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="sticky top-6"
              >
                <div className="bg-gradient-to-br from-white to-teal-50/30 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/50">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Book Your Appointment
                    </h3>
                  </div>

                  <div className="space-y-6 mb-8">
                    {[
                      { icon: Clock, text: "Mon - Sat: 9:30 AM - 9:00 PM" },
                      {
                        icon: Phone,
                        text: "+91 90212 56647",
                        subtext: "Deolali Camp",
                      },
                      {
                        icon: Phone,
                        text: "+91 81490 49104",
                        subtext: "Nashik Road",
                      },
                      { icon: MessageCircle, text: "WhatsApp Available" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-white/50 rounded-xl border border-white/50"
                      >
                        <item.icon className="text-teal-600 mr-4" size={24} />
                        <div>
                          <p className="font-semibold text-gray-800">
                            {item.text}
                          </p>
                          {item.subtext && (
                            <p className="text-sm text-gray-500">
                              {item.subtext}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate("/contact")}
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-lg transition-all duration-300 text-lg"
                  >
                    Book Appointment Now
                  </motion.button>
                </div>

                {/* Why Choose Us Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-3xl p-8 text-white"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Why Choose Us</h3>
                    <p className="text-teal-100">
                      Experience the difference in dental care
                    </p>
                  </div>

                  <div className="space-y-6">
                    {whyChooseItems && whyChooseItems.length > 0 ? (
                      whyChooseItems.map((item, index) => {
                        const IconComponent = getIconComponent(item.icon);
                        return (
                          <motion.div
                            key={item.id || index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                          >
                            <IconComponent
                              className="text-teal-300 mr-4 mt-1 flex-shrink-0"
                              size={20}
                            />
                            <div>
                              <h4 className="font-semibold text-lg mb-1">
                                {item.title}
                              </h4>
                              <p className="text-teal-100 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })
                    ) : (
                      // Fallback content if no whyChooseItems are available
                      <div className="text-center py-4">
                        <p className="text-teal-200">
                          Premium dental care features
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </div>
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
  const { h2, content, list_items, subsections, ordered_list, note, image } =
    section;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 + 0.4 }}
      className="mb-16"
    >
      <div
        className={`flex flex-col ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 items-center`}
      >
        {/* Image Side */}
        {image && (
          <div className="lg:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img
                src={
                  image
                    ? `${axiosInstance.defaults.baseURL.replace(
                        "/api",
                        ""
                      )}/uploads/${image}`
                    : "/images/default-section.jpg"
                }
                alt={h2}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Floating Number */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span className="text-teal-600 font-bold text-lg">
                  {index + 1}
                </span>
              </div>
            </motion.div>
          </div>
        )}

        {/* Content Side */}
        <div className={image ? "lg:w-1/2" : "w-full"}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{h2}</h2>

            {content && (
              <p className="text-gray-600 mb-6 leading-relaxed">{content}</p>
            )}

            {list_items && list_items.length > 0 && (
              <div className="mb-6">
                <div className="grid gap-3">
                  {list_items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-600"
                    >
                      <CheckCircle
                        className="text-teal-500 mr-3 flex-shrink-0"
                        size={18}
                      />
                      <span>{item.item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {subsections && subsections.length > 0 && (
              <div className="grid gap-4 mt-6">
                {subsections.map((subsection, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="bg-teal-50/50 p-4 rounded-xl border border-teal-100"
                  >
                    <h3 className="font-semibold text-teal-700 mb-2">
                      {subsection.h3}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {subsection.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {ordered_list && ordered_list.length > 0 && (
              <div className="mt-6">
                <div className="space-y-4">
                  {ordered_list.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {note && (
                  <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4 mt-4">
                    <p className="text-blue-800 text-sm italic">{note}</p>
                  </div>
                )}
              </div>
            )}

            {note && !ordered_list && (
              <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4 mt-4">
                <p className="text-blue-800 text-sm italic">{note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TreatmentPage;
