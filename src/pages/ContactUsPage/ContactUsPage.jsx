import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ArrowLeft,
  User,
} from "lucide-react";
import { useSEO } from "../../hooks/useSEO";

// Clinic information
const clinics = [
  {
    id: 1,
    name: "Deolali Camp Clinic",
    slug: "deolali-camp",
    address:
      "59-60, Howson Rd, near MSEB office, Deolali Camp, Nashik, Maharashtra 422401",
    phone: "0253 249 6350",
    secondaryPhone: "9021256647",
    hours: "Mon–Sat: 10:30 AM – 9:00 PM",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5211240099898!2d73.8303748!3d19.902432999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd958535bd1099%3A0x4813ba22d2d1d82!2sDr.%20Joshi%27s%20Care%20%26%20Cure%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1756881602062!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Nashik Road Clinic",
    slug: "nashik-road",
    address:
      "203-204, Hari Amantran, Datta Mandir Rd, near Dattamandir, Nashik Road, Nashik, Maharashtra 422101",
    phone: "081490 49104",
    hours: "Mon–Sat: 10:30 AM – 9:00 PM",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2780598558447!2d73.8344327!3d19.9548052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9553a6822c55%3A0xb1e4f0ae27957fe2!2sDr.%20Joshi%27s%20Care%20%26%20Cure%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1756881578216!5m2!1sen!2sin",
  },
];

// Doctors list
const doctors = [
  { id: 1, name: "Dr. Yatin Joshi" },
  { id: 2, name: "Dr. Namrata Joshi" },
  { id: 3, name: "Dr. Pravin Joshi" },
  { id: 4, name: "Dr. Pranav Joshi" },
  { id: 5, name: "Dr. Kalyani Joshi" },
];

const ContactUsPage = () => {
  useSEO("contact");
  const { clinicSlug } = useParams();
  const navigate = useNavigate();
  const [selectedClinic, setSelectedClinic] = useState(clinics[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    clinic: "",
    doctor: "",
    appointmentDate: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (clinicSlug) {
      const clinic = clinics.find((c) => c.slug === clinicSlug);
      if (clinic) {
        setSelectedClinic(clinic);
        setFormData((prev) => ({ ...prev, clinic: clinic.name }));
      }
    }
  }, [clinicSlug]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        clinic: selectedClinic.name,
        doctor: "",
        appointmentDate: "",
      });
    }, 2000);
  };

  // Get today's date in YYYY-MM-DD format for min date
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto pt-4 md:pt-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-teal-600 hover:text-teal-800 mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>

        {/* Clinic Selector */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Select a Clinic:
          </h2>
          <div className="flex flex-wrap gap-3">
            {clinics.map((clinic) => (
              <button
                key={clinic.id}
                onClick={() => navigate(`/contact/${clinic.slug}`)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedClinic.id === clinic.id
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-800"
                }`}
              >
                {clinic.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Clinic Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              {selectedClinic.name}
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin
                  className="text-teal-600 mt-1 mr-3 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">{selectedClinic.address}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-teal-600 mr-3" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <div className="text-gray-600">
                    <a
                      href={`tel:${selectedClinic.phone.replace(/\s/g, "")}`}
                      className="hover:text-teal-600"
                    >
                      {selectedClinic.phone}
                    </a>
                    {selectedClinic.secondaryPhone && (
                      <>
                        <span className="mx-2">/</span>
                        <a
                          href={`tel:${selectedClinic.secondaryPhone.replace(
                            /\s/g,
                            ""
                          )}`}
                          className="hover:text-teal-600"
                        >
                          {selectedClinic.secondaryPhone}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="text-teal-600 mr-3" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a
                    href="mailto:drjoshidental@gmail.com"
                    className="text-gray-600 hover:text-teal-600"
                  >
                    drjoshidental@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="text-teal-600 mr-3" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800">Hours</h3>
                  <p className="text-gray-600">{selectedClinic.hours}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <iframe
                src={selectedClinic.mapEmbed}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Location of ${selectedClinic.name}`}
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Book an Appointment
            </h2>

            {submitStatus === "success" ? (
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 text-center">
                <div className="text-teal-600 font-semibold mb-2">
                  Thank you for your appointment request!
                </div>
                <p className="text-teal-700">
                  We'll get back to you as soon as possible to confirm your
                  appointment.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                {/* <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div> */}

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="doctor"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Doctor
                    </label>
                    <select
                      id="doctor"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="">Select a doctor</option>
                      {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.name}>
                          {doctor.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="appointmentDate"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      min={getTodayDate()}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="clinic"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Clinic
                  </label>
                  <select
                    id="clinic"
                    name="clinic"
                    value={formData.clinic}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">Select a clinic</option>
                    {clinics.map((clinic) => (
                      <option key={clinic.id} value={clinic.name}>
                        {clinic.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any specific concerns or additional information..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {submitStatus === "sending" ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Calendar size={18} className="mr-2" />
                      Book Appointment
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Emergency Notice */}
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">
                Dental Emergency?
              </h3>
              <p className="text-amber-700 text-sm">
                For urgent dental issues, please call us directly at{" "}
                <a
                  href={`tel:${selectedClinic.phone.replace(/\s/g, "")}`}
                  className="font-semibold hover:text-amber-900"
                >
                  {selectedClinic.phone}
                </a>{" "}
                for immediate assistance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Both Clinics Overview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
            Our Clinics
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {clinics.map((clinic) => (
              <div
                key={clinic.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-teal-800 mb-3">
                  {clinic.name}
                </h3>
                <p className="text-gray-600 mb-4">{clinic.address}</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm hover:bg-teal-200 transition-colors"
                  >
                    <Phone size={14} className="mr-1" />
                    {clinic.phone}
                  </a>
                  <button
                    onClick={() => navigate(`/contact/${clinic.slug}`)}
                    className="inline-flex items-center bg-teal-600 text-white px-3 py-1 rounded-full text-sm hover:bg-teal-700 transition-colors"
                  >
                    <Calendar size={14} className="mr-1" />
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
