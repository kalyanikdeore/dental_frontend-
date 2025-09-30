import React from "react";
import { useSEO } from "../../hooks/useSEO";

const PatientSafetyPage = () => {
  useSEO("patientSafety");

  // Icon components
  const SterilizationIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#0E7C7B"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  );

  const InfectionControlIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#0E7C7B"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m4 4h4a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm6-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
      />
    </svg>
  );

  const SafeEnvironmentIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#0E7C7B"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );

  const QualityMaterialsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#0E7C7B"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );

  const TrainedStaffIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#0E7C7B"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );

  const PeaceOfMindIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#0E7C7B"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  return (
    <div className="container mx-auto px-4 py-12 mt-30">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-[#0a8583]">
        Patient Safety
      </h1>

      <div className="max-w-8xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 w-full max-w-screen-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-[#0E7C7B]">
            Our Commitment to Your Safety
          </h2>

          <p className="text-lg mb-6 text-gray-700">
            At Dr. Joshi&apos;s Dental Clinic,{" "}
            <strong>your health and well-being are our highest priority</strong>
            . We strictly follow international standards of sterilization,
            hygiene, and patient care to ensure every visit is safe,
            comfortable, and stress-free.
          </p>

          <div className="space-y-12">
            {/* Sterilized Equipment - Right aligned */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <div className="bg-[#0E7C7B]/10 p-4 rounded-full">
                  <SterilizationIcon />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-semibold mb-2 text-[#0E7C7B]">
                  Sterilized Equipment
                </h3>
                <p className="text-gray-700">
                  All dental instruments are thoroughly cleaned and sterilized
                  after every use using{" "}
                  <strong>advanced hospital-grade autoclaves</strong> to
                  eliminate bacteria, viruses, and contaminants.
                </p>
              </div>
            </div>

            {/* Infection Control - Left aligned */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <div className="bg-[#0E7C7B]/10 p-4 rounded-full">
                  <InfectionControlIcon />
                </div>
              </div>
              <div className="md:w-2/3 md:pr-8">
                <h3 className="text-xl font-semibold mb-2 text-[#0E7C7B]">
                  Infection Control Protocols
                </h3>
                <p className="text-gray-700">
                  Our dental team follows{" "}
                  <strong>strict infection control measures</strong>: disposable
                  gloves, masks, and protective gear are used for every
                  procedure, and treatment areas are disinfected before and
                  after every patient.
                </p>
              </div>
            </div>

            {/* Safe Environment - Right aligned */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <div className="bg-[#0E7C7B]/10 p-4 rounded-full">
                  <SafeEnvironmentIcon />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-semibold mb-2 text-[#0E7C7B]">
                  Safe Environment
                </h3>
                <p className="text-gray-700">
                  The clinic environment is designed for your safety — with{" "}
                  <strong>
                    air purification, surface cleaning, and safe patient
                    distancing
                  </strong>{" "}
                  in waiting areas.
                </p>
              </div>
            </div>

            {/* Quality Materials - Left aligned */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <div className="bg-[#0E7C7B]/10 p-4 rounded-full">
                  <QualityMaterialsIcon />
                </div>
              </div>
              <div className="md:w-2/3 md:pr-8">
                <h3 className="text-xl font-semibold mb-2 text-[#0E7C7B]">
                  Quality Materials & Medicines
                </h3>
                <p className="text-gray-700">
                  We use only{" "}
                  <strong>
                    certified dental materials and approved medications
                  </strong>{" "}
                  from trusted suppliers, ensuring safety and reliability in
                  every treatment.
                </p>
              </div>
            </div>

            {/* Trained Staff - Right aligned */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <div className="bg-[#0E7C7B]/10 p-4 rounded-full">
                  <TrainedStaffIcon />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-semibold mb-2 text-[#0E7C7B]">
                  Trained & Caring Staff
                </h3>
                <p className="text-gray-700">
                  Our dental team undergoes <strong>continuous training</strong>{" "}
                  in the latest safety protocols. We take time to make every
                  patient feel informed, comfortable, and cared for.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#0E7C7B]/10 border-l-4 border-[#0E7C7B] rounded-lg flex items-center">
            <div className="mr-4">
              <PeaceOfMindIcon />
            </div>
            <p className="text-lg font-medium text-[#0E7C7B]">
              Your smile deserves the best care — and that includes protecting
              your overall health. At Dr. Joshi&apos;s Dental Clinic, you
              don&apos;t just get dental care, you get{" "}
              <strong>peace of mind</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSafetyPage;
