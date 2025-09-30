import React from "react";
import { useSEO } from "../../hooks/useSEO";

const AboutPage = () => {
  useSEO("about");

  return (
    <div className="container mx-auto px-4 py-12 mt-30">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Dr. Joshi's Care & Cure Dental Clinic
      </h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Welcome to Dr. Joshi's Care & Cure The Dental Wellness Clinic!
            Established in 2007, we have over 19 years of experience serving the
            Nashik Road community with exceptional dental care.
          </p>
          <p className="text-lg mb-4">
            Our clinic has successfully treated over 13,000 happy patients,
            making us one of the most trusted dental practices in the region. We
            are committed to making your dental visit as pleasant as possible.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Expert Team</h2>
          <p className="text-lg mb-4">Our highly skilled team is led by:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="text-lg">Dr. Pushkar Joshi</li>
            <li className="text-lg">Dr. Chinmay Joshi</li>
            <li className="text-lg">Dr. Dipti Joshi</li>
            <li className="text-lg">Dr. Nikita Joshi</li>
          </ul>
          <p className="text-lg">
            Together, we are committed to enhancing your smile with the latest
            technology and techniques in a patient-centric environment.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            To provide comprehensive, high-quality dental care in a comfortable,
            friendly environment where patients of all ages can achieve and
            maintain optimal oral health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
