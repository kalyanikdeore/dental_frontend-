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
  MapPin,
} from "lucide-react";
import { useSEO } from "../../hooks/useSEO";
import ClinicInfo from "../../components/ClinicInfo";
import axiosInstance, { fileBaseURL } from "../../services/api";

const Doctors = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // State for dynamic data
  const [doctors, setDoctors] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [whyChooseUsPoints, setWhyChooseUsPoints] = useState([]);
  const [pageSettings, setPageSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useSEO("doctors");

  // Fetch all data including page settings
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [doctorsRes, faqsRes, pointsRes, pageSettingsRes] =
          await Promise.all([
            axiosInstance.get("/doctors"),
            axiosInstance.get("/doctor-faqs"),
            axiosInstance.get("/why-choose-us-points"),
            axiosInstance.get("/page-settings"),
          ]);

        setDoctors(doctorsRes.data.data || []);
        setFaqs(faqsRes.data.data || []);

        // Handle the why choose us points data structure
        const pointsData = pointsRes.data.data || [];
        setWhyChooseUsPoints(pointsData);

        setPageSettings(pageSettingsRes.data.data || null);

        console.log("Why Choose Us Points:", pointsData); // For debugging
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response?.data?.message || "Failed to load data");

        // Set empty arrays as fallback
        setDoctors([]);
        setFaqs([]);
        setWhyChooseUsPoints([]);
        setPageSettings(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = "/images/doctor-placeholder.jpg";
  };

  // Default static data as fallback
  const defaultPageSettings = {
    page: {
      title:
        "Meet Our Expert Dental Team at Dr. Joshi's Care & Cure Dental Clinic",
      description:
        "At Dr. Joshi's Care & Cure Dental Clinic in Nashik Road, we are proud to have a team of highly skilled and experienced dentists who are passionate about providing world-class dental care. With 22+ years of experience and thousands of successful treatments, our doctors ensure every patient receives personalized, comfortable, and advanced dental solutions.",
      seo_keywords:
        "Best Dentist in Nashik Road, Dental Implant Specialist, Orthodontist in Nashik, Root Canal Dentist, Pediatric Dentist",
    },
    cta: {
      title: "Book an Appointment with Our Expert Doctors",
      description:
        "Looking for the best dentist in Nashik Road? At Dr. Joshi's Care & Cure Dental Clinic, our team of experts is here to give you the smile you deserve.",
      phone: "+91 81490 49104",
      address:
        "203-204, Hari Amantran, Datta Mandir Road, Near Dattamandir, Nashik Road, Nashik 422101",
    },
  };

  // Use dynamic data if available, otherwise use default
  const currentPageSettings = pageSettings || defaultPageSettings;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 mt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading doctors information...</p>
        </div>
      </div>
    );
  }

  if (error && doctors.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 mt-32 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="text-lg font-semibold">Error loading data</p>
          <p className="mt-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
              {currentPageSettings.page.title}
            </h1>
            <p className="text-xl opacity-90 mb-8">
              {currentPageSettings.page.description}
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
          {doctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBookAppointment={handleBookAppointment}
                  onImageError={handleImageError}
                  phone={currentPageSettings.cta.phone}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No doctors found.</p>
            </div>
          )}
        </section>

        {/* Why Choose Us */}
        {whyChooseUsPoints.length > 0 && (
          <section className="bg-white rounded-xl shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">
              Why Choose Our Dental Experts?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUsPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-teal-100 p-2 rounded-full mr-4">
                    <Award className="text-teal-600" size={20} />
                  </div>
                  <div>
                    {point.title && (
                      <h3 className="font-semibold text-teal-800 mb-1">
                        {point.title}
                      </h3>
                    )}
                    <p className="text-gray-700">
                      {point.point || point.point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">
              FAQs About Our Doctors
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
        )}

        {/* CTA Section */}
        <section className="bg-teal-50 rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">
            {currentPageSettings.cta.title}
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            {currentPageSettings.cta.description}
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <div className="flex items-center">
              <Phone className="text-teal-600 mr-2" size={20} />
              <span className="text-gray-700 font-medium">
                {currentPageSettings.cta.phone}
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-teal-600 mr-2" size={20} />
              <span className="text-gray-700">
                {currentPageSettings.cta.address}
              </span>
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
        <BookingModal
          selectedDoctor={selectedDoctor}
          onClose={closeBookingModal}
          phone={currentPageSettings.cta.phone}
        />
      )}
    </div>
  );
};

// Doctor Card Component
const DoctorCard = ({ doctor, onBookAppointment, onImageError, phone }) => {
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
            onError={onImageError}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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

          <p className="text-gray-600 mb-4 line-clamp-3">
            {doctor.description}
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-teal-800 mb-2">
              Specialization:
            </h4>
            <p className="text-gray-700 line-clamp-2">
              {doctor.specialization}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {doctor.achievements?.slice(0, 2).map((achievement, index) => (
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
        <DoctorModal
          doctor={doctor}
          onClose={toggleModal}
          onBookAppointment={onBookAppointment}
          onImageError={onImageError}
          phone={phone}
        />
      )}
    </>
  );
};

// Separate Modal Components
const BookingModal = ({ selectedDoctor, onClose, phone }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Appointment booking functionality would be implemented here");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-teal-800 mb-4">
          {selectedDoctor
            ? `Book Appointment with ${selectedDoctor.name}`
            : "Book Appointment"}
        </h3>

        {selectedDoctor && (
          <div className="mb-4 p-3 bg-teal-50 rounded-lg">
            <p className="text-teal-800 font-medium">{selectedDoctor.name}</p>
            <p className="text-gray-600 text-sm">{selectedDoctor.title}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Preferred Date</label>
            <input
              type="date"
              required
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
              onClick={onClose}
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
  );
};

const DoctorModal = ({
  doctor,
  onClose,
  onBookAppointment,
  onImageError,
  phone,
}) => {
  const handleBookClick = () => {
    onClose();
    onBookAppointment(doctor);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-bold text-teal-800">
            {doctor.name} - Full Profile
          </h3>
          <button
            onClick={onClose}
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
                onError={onImageError}
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
                  onClick={handleBookClick}
                  className="bg-teal-700 hover:bg-teal-800 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
                >
                  <Calendar size={16} className="mr-2" />
                  Book Appointment
                </button>
                <a
                  href={`tel:${phone}`}
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
              {doctor.achievements?.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-teal-800 mb-3">
              Key Services
            </h4>
            <div className="flex flex-wrap gap-2">
              {doctor.seo_keywords?.split(", ").map((keyword, index) => (
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
  );
};

export default Doctors;
