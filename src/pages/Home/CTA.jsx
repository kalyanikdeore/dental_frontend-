import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

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
              We're here to answer your questions and help you regain your smile
              with confidence.
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
                  <label className="block text-gray-700 mb-2">Full Name</label>
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
                  <select className="w-full p-3 border border-gray-300 text-gray-800 rounded-lg">
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

export default CTASection;
