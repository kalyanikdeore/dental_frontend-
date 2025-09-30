import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Play,
  ChevronLeft,
  ChevronRight,
  Heart,
  Calendar,
  Phone,
  Star,
  Clock,
  MapPin,
  Shield,
  Smile,
  Award,
  Users,
  CheckCircle2,
  ChevronRightCircle,
  ChevronLeftCircle,
  SmilePlus,
} from "lucide-react";
import { TbDental, TbSparkles, TbMedicalCross } from "react-icons/tb";
import { FaTooth, FaChild, FaHeartbeat } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";
import { Link } from "react-router-dom";
import { videoHero } from "../../assets";
import HeroSection from "./HeroSection";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const Home = () => {
  // Welcome Section
  const WelcomeSection = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-extrabold text-[#0a8583] mb-6">
                Welcome to Dr. Joshi's Care & Cure Dental – Your Trusted Dentist
                in Nashik
              </h2>
              <p className="text-gray-600 mb-6">
                With 22+ years of experience and 17,000+ happy patients, we are
                among the most trusted dentists in Nashik. Our team is led by
                specialists in cosmetic dentistry, dental implants, root canal
                therapy, and child dental care, using modern techniques to
                deliver pain-free and effective treatments.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex items-center">
                  <CheckCircle2 className="text-teal-600 mr-2" size={20} />
                  <span className="text-gray-700">22+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-teal-600 mr-2" size={20} />
                  <span className="text-gray-700">17,000+ Happy Patients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-teal-600 mr-2" size={20} />
                  <span className="text-gray-700">Pain-Free Treatments</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-teal-600 mr-2" size={20} />
                  <span className="text-gray-700">Modern Technology</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-teal-100 h-80 w-64 absolute -bottom-4 -left-4 rounded-lg"></div>
                <div className="bg-teal-200 h-80 w-64 absolute -top-4 -right-4 rounded-lg"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-lg border border-teal-100 h-80 w-64 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="text-teal-600 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Family Dentistry
                    </h3>
                    <p className="text-gray-600">
                      Caring for all ages from children to seniors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Services Section
  const ServicesSection = () => {
    const services = [
      {
        title: "Dental Implants in Nashik",
        description:
          "Permanent tooth replacement solutions using biocompatible titanium implants that feel, look, and function like your natural teeth.",
        icon: <TbDental size={32} className="text-teal-600" />,
        path: "treatments/dental-implants-nashik",
      },
      {
        title: "Cosmetic Dentistry",
        description:
          "We enhance your smile using teeth reshaping, veneers, composite bonding, teeth whitening, and more—all customized to your facial aesthetics.",
        icon: <SmilePlus size={32} className="text-teal-600" />,
        path: "treatments/cosmetic-dentist-nashik",
      },
      {
        title: "Root Canal Treatment",
        description:
          "Say goodbye to tooth pain. We use rotary endodontic and digital X-rays to provide fast and comfortable root canal procedures.",
        icon: <FaTooth size={32} className="text-teal-600" />,
        path: "/treatments/root-canal-treatment-nashik",
      },
      {
        title: "Paediatric Dentistry",
        description:
          "Our child-friendly environment ensures stress-free dental visits. We offer preventive care, cavity fillings, and oral hygiene counselling for kids.",
        icon: <FaChild size={32} className="text-teal-600" />,
        path: "treatments/pediatric-dentist-nashik",
      },
      {
        title: "Teeth Whitening in Nashik",
        description:
          "Safe and instant results with laser teeth whitening or home kits for a radiant, stain-free smile.",
        icon: <TbSparkles size={32} className="text-teal-600" />,
        path: "treatments/teeth-whitening-nashik",
      },
      {
        title: "Periodontics (Gum Treatment)",
        description:
          "We treat bleeding gums, bad breath, and bone loss with deep cleaning (scaling and root planing) and advanced laser therapies.",
        icon: <LuHeartPulse size={32} className="text-teal-600" />,
        path: "treatments/gum-disease-treatment-nashik",
      },
    ];

    return (
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0a8583] mb-4">
              Our Specialized Dental Services in Nashik
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care using the latest technology and
              techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-4xl shadow-md hover:shadow-lg transition-shadow border border-teal-100"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.path} // ✅ Dynamic redirect here
                  className="text-teal-600 hover:text-teal-800 font-medium flex items-center"
                >
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/treatments"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View All Services <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    );
  };

  // Why Choose Us Section
  const WhyChooseUsSection = () => {
    const features = [
      {
        title: "Experienced Team",
        description: "Dentists with 22+ years of trust and expertise",
        icon: <Users size={24} className="text-teal-600" />,
      },
      {
        title: "Modern Facility",
        description: "Comfortable, hygienic, and state-of-the-art setup",
        icon: <Award size={24} className="text-teal-600" />,
      },
      {
        title: "Advanced Technology",
        description:
          "Latest equipment including digital X-rays, laser, and rotary tools",
        icon: <Shield size={24} className="text-teal-600" />,
      },
      {
        title: "Gentle Care for All Ages",
        description: "Specialized treatments for children, adults, and seniors",
        icon: <Smile size={24} className="text-teal-600" />,
      },
      {
        title: "Affordable Options",
        description: "Quality treatments with flexible payment plans",
        icon: <CheckCircle2 size={24} className="text-teal-600" />,
      },
      {
        title: "Central Location",
        description: "Conveniently located in Nashik Road for easy access",
        icon: <MapPin size={24} className="text-teal-600" />,
      },
    ];

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0a8583] mb-4">
              Why Choose Us as Your Family Dentist in Nashik?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional dental care with a
              personal touch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-teal-50 p-6 rounded-lg border border-teal-100 flex items-start"
              >
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Testimonials Section
  const TestimonialsSection = () => {
    const testimonials = [
      {
        name: "Ravi P.",
        location: "Nashik",
        rating: 5,
        comment:
          "The best dental implant experience I've ever had. Completely pain-free and super professional.",
        treatment: "Dental Implants",
      },
      {
        name: "Shraddha M.",
        location: "Deolali",
        rating: 5,
        comment:
          "My child loves visiting the dentist now. Dr. Joshi's team is so kind and patient!",
        treatment: "Paediatric Dentistry",
      },
      {
        name: "Vikram D.",
        location: "Nashik Road",
        rating: 5,
        comment:
          "Professional team with modern equipment. My root canal procedure was smooth and comfortable.",
        treatment: "Root Canal Treatment",
      },
    ];

    const scrollClients = (direction) => {
      if (clientsRef.current) {
        const scrollAmount = direction === "left" ? -300 : 300;
        clientsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    // Animation variants
    const slideVariants = {
      enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      },
      exit: (direction) => ({
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        transition: { duration: 0.3 },
      }),
    };
    const clientsRef = useRef();

    return (
      <section className="py-16 bg-white">
        <div className="mt-28 max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center text-[#0a8583] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            className="h-1 w-16 bg-[#00786F] mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <div className="relative">
            <button
              onClick={() => scrollClients("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#00786F] hover:bg-[#00635A] text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollClients("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#00786F] hover:bg-[#00635A] text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={clientsRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2 justify-center"
            >
              {testimonials.map((client, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] max-w-[350px] bg-white rounded-xl shadow-md border border-gray-100 flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-5 flex flex-col h-full justify-between">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        {client.name}
                      </h4>
                      <p className="text-sm text-[#00786F] mb-2">
                        {client.treatment}
                      </p>
                      <p className="text-gray-500 text-sm mb-4">
                        {client.location}
                      </p>
                      <p className="text-gray-600 italic mb-4 text-sm">
                        "{client.comment}"
                      </p>
                    </div>
                    <div className="flex gap-1 text-[#00786F] mt-auto">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < client.rating ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://www.google.com/search?sca_esv=e126eb4d051b0442&hl=en-IN&sxsrf=AE3TifNr_Dtdbla7hIZPea5IYv8ZDv9R2w:1757507049932&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMYoQmT4ohuML6aQ2PsEJljXCqJtIR5FaZP8LvlO3lHcOmmVTAnZMmofty28cA7GXa_gdxY2ompeOKMyZBQp2esPbePTO5knQp1Wfb43CWHjUKjtwXwUwiOOFEGTjDwRl6Wqtqpo%3D&q=Dr.+Joshi%27s+Care+%26+Cure+Dental+Clinic+Reviews&sa=X&ved=2ahUKEwiw7Zr7l86PAxVB2DgGHcRVO44Q0bkNegQIJhAE&biw=1478&bih=708&dpr=1.3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold"
              >
                Read all 113 reviews on Google{" "}
                <ChevronRight size={20} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // FAQ Section
  const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
      {
        question: "How long does a dental implant procedure take?",
        answer:
          "A dental implant typically requires 2 to 3 visits over a span of 3 to 6 months. First, the implant is placed, followed by healing (osseointegration), and finally the crown placement. We use advanced techniques to ensure fast healing and long-lasting results.",
      },
      {
        question: "Is root canal treatment painful?",
        answer:
          "No, modern root canal treatments at our clinic are virtually painless. We use local anaesthesia and advanced rotary tools to clean and seal the infected area with minimal discomfort, often completed in a single visit.",
      },
      {
        question: "What cosmetic dental services do you provide?",
        answer:
          "We offer smile makeovers, veneers, composite bonding, teeth whitening, crowns, and reshaping. All treatments are customized based on your smile goals and facial profile to ensure natural, aesthetic results.",
      },
      {
        question: "Where is your dental clinic located in Nashik?",
        answer:
          "We have two convenient locations: 1) Dr. Joshi, 59-60, Howson Rd, near MSEB office, Deolali Camp, Nashik. 2) Dr Joshi's Care and Cure - The Dental Wellness Clinic, Hari Amantran, 203-204, Datta Mandir Rd, near Dattamandir, Nashik Road, Nashik.",
      },
      {
        question: "Do you serve areas outside Nashik Road?",
        answer:
          "Yes. We welcome patients from across Nashik, including Deolali, Panchavati, College Road, and Ambad MIDC.",
      },
      {
        question:
          "How can I book an appointment at Dr. Joshi's Care & Cure Dental?",
        answer:
          "You can call us directly, WhatsApp us, or use our online appointment form. We offer same-day and weekend slots for your convenience.",
      },
    ];

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0a8583] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our dental services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b border-teal-100">
                <button
                  className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 hover:text-teal-600"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`transform transition-transform ${
                      activeIndex === index ? "rotate-90" : ""
                    }`}
                    size={20}
                  />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // CTA Section
  const CTASection = () => {
    return (
      <section className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">
                Book Your Appointment Today – Your Smile Deserves Expert Care
              </h2>
              <p className="text-xl mb-6">
                We're here to answer your questions and help you regain your
                smile with confidence.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Clinic No. 1</h3>
                <div className="flex items-start mb-3">
                  <MapPin className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <p>
                    Dr. Joshi, 59-60, Howson Rd, near MSEB office, Deolali Camp,
                    Nashik, Deolali, Maharashtra 422401
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <Phone className="mr-3" size={20} />
                  <a href="tel:02532496350" className="hover:underline">
                    0253 249 6350
                  </a>{" "}
                  –{" "}
                  <a href="tel:9021256647" className="hover:underline">
                    9021256647
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <p>Mon–Sat: 9:30 AM – 9:00 PM</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Clinic No. 2</h3>
                <div className="flex items-start mb-3">
                  <MapPin className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <p>
                    Dr Joshi's Care and Cure - The Dental Wellness Clinic, Hari
                    Amantran, 203-204, Datta Mandir Rd, near Dattamandir, Nashik
                    Road, Nashik, Maharashtra 422101
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <Phone className="mr-3" size={20} />
                  <a href="tel:08149049104" className="hover:underline">
                    081490 49104
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <p>Mon–Sat: 9:30 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-teal-800 mb-6">
                  Schedule Your Visit
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Preferred Service
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-800">
                      <option>Dental Implants</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Root Canal Treatment</option>
                      <option>Paediatric Dentistry</option>
                      <option>Teeth Whitening</option>
                      <option>Periodontics (Gum Treatment)</option>
                      <option>General Checkup</option>
                      <option>Emergency Dental Care</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Preferred Location
                    </label>
                    <select className="w-full p-3 border border-gray-300  text-gray-800 rounded-lg">
                      <option>Deolali Camp Clinic</option>
                      <option>Nashik Road Clinic</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="homepage">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-12 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-700 mb-2">22+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-700 mb-2">17K+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-700 mb-2">4.9</div>
              <div className="text-gray-600">Google Rating</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-700 mb-2">113+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      <WelcomeSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
