import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Phone,
  MessageCircle,
  ChevronDown,
  Award,
  Users,
  Shield,
  Star,
  Heart,
  GraduationCap,
  Clock,
  MapPin,
} from "lucide-react";
import { useSEO } from "../../hooks/useSEO";
import ClinicInfo from "../../components/ClinicInfo";
import { doctorsData } from "../../constants/doctorsData";

const Doctors = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useSEO("doctors");

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedDoctor(null);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {doctorsData.page.title}
            </h1>
            <p className="text-xl opacity-90 mb-8">
              {doctorsData.page.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-teal-50 transition-colors"
              onClick={() => setShowBookingModal(true)}
            >
              Book Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Our Core Dental Experts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
            Our Core Dental Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctorsData.doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBookAppointment={handleBookAppointment}
              />
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">
            {doctorsData.whyChooseUs.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorsData.whyChooseUs.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  {index === 0 && <Award className="text-teal-600" size={20} />}
                  {index === 1 && <Users className="text-teal-600" size={20} />}
                  {index === 2 && (
                    <Shield className="text-teal-600" size={20} />
                  )}
                  {index > 2 && <Award className="text-teal-600" size={20} />}
                </div>
                <p className="text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">
            FAQs About Our Doctors
          </h2>
          <div className="space-y-4">
            {doctorsData.faqs.map((faq, index) => (
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

        {/* CTA Section */}
        <section className="bg-teal-50 rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">
            {doctorsData.cta.title}
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            {doctorsData.cta.description}
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <div className="flex items-center">
              <Phone className="text-teal-600 mr-2" size={20} />
              <span className="text-gray-700 font-medium">
                {doctorsData.cta.phone}
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-teal-600 mr-2" size={20} />
              <span className="text-gray-700">{doctorsData.cta.address}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            onClick={() => setShowBookingModal(true)}
          >
            <Calendar size={20} className="inline mr-2" />
            Book Appointment Now
          </motion.button>
        </section>
      </div>

      {/* Clinic Info Section */}
      <ClinicInfo />

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-teal-800 mb-4">
              {selectedDoctor
                ? `Book Appointment with ${selectedDoctor.name}`
                : "Book Appointment"}
            </h3>

            {selectedDoctor && (
              <div className="mb-4 p-3 bg-teal-50 rounded-lg">
                <p className="text-teal-800 font-medium">
                  {selectedDoctor.name}
                </p>
                <p className="text-gray-600 text-sm">{selectedDoctor.title}</p>
              </div>
            )}

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Any specific concerns or notes"
                ></textarea>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeBookingModal}
                  className="flex-1 border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Doctor Card Component
const DoctorCard = ({ doctor, onBookAppointment }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative h-64 overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.alt}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
            <p className="text-teal-200 text-sm">{doctor.title}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
              {doctor.experience}
            </div>
          </div>

          <p className="text-gray-600 mb-4">{doctor.description}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-teal-800 mb-2">
              Specialization:
            </h4>
            <p className="text-gray-700">{doctor.specialization}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {doctor.achievements.slice(0, 2).map((achievement, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {achievement}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={toggleModal}
              className="flex-1 bg-teal-700 hover:bg-teal-800 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <MessageCircle size={16} className="mr-2" />
              View Profile
            </button>
            <button
              onClick={() => onBookAppointment(doctor)}
              className="flex-1 border border-teal-700 text-teal-700 hover:bg-teal-50 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <Calendar size={16} className="mr-2" />
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Doctor Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-teal-800">
                {doctor.name} - Full Profile
              </h3>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/3">
                  <img
                    src={doctor.image}
                    alt={doctor.alt}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-semibold text-teal-800 mb-2">
                    {doctor.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{doctor.experience}</p>
                  <p className="text-gray-700 mb-4">{doctor.description}</p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        toggleModal();
                        onBookAppointment(doctor);
                      }}
                      className="bg-teal-700 hover:bg-teal-800 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
                    >
                      <Calendar size={16} className="mr-2" />
                      Book Appointment
                    </button>
                    <a
                      href={`tel:${doctorsData.cta.phone}`}
                      className="border border-teal-700 text-teal-700 hover:bg-teal-50 font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
                    >
                      <Phone size={16} className="mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-teal-800 mb-3">
                  Specialization
                </h4>
                <p className="text-gray-700">{doctor.specialization}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-teal-800 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {doctor.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-teal-800 mb-3">
                  Services Keywords
                </h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.seoKeywords.split(", ").map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Doctors;
