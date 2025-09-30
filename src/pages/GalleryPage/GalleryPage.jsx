// pages/GalleryPage.jsx
import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { ChevronLeft, ChevronRight, X, MapPin, Phone } from "lucide-react";
import { useSEO } from "../../hooks/useSEO";
import {
  deolalicamptreatment1,
  deolalicamptreatment2,
  deolalicamptreatment3,
  deolalicamptreatment4,
  deolalicamptreatment5,
  deolalicamptreatment6,
  deolalicamptreatment7,
  deolalicamptreatment8,
  deolalicamptreatment9,
  nashikroadclinic1,
  nashikroadclinic10,
  nashikroadclinic11,
  nashikroadclinic12,
  nashikroadclinic13,
  nashikroadclinic14,
  nashikroadclinic15,
  nashikroadclinic16,
  nashikroadclinic17,
  nashikroadclinic18,
  nashikroadclinic19,
  nashikroadclinic2,
  nashikroadclinic20,
  nashikroadclinic21,
  nashikroadclinic22,
  nashikroadclinic23,
  nashikroadclinic24,
  nashikroadclinic25,
  nashikroadclinic26,
  nashikroadclinic27,
  nashikroadclinic28,
  nashikroadclinic29,
  nashikroadclinic3,
  nashikroadclinic30,
  nashikroadclinic31,
  nashikroadclinic32,
  nashikroadclinic33,
  nashikroadclinic34,
  nashikroadclinic35,
  nashikroadclinic36,
  nashikroadclinic37,
  nashikroadclinic38,
  nashikroadclinic39,
  nashikroadclinic4,
  nashikroadclinic40,
  nashikroadclinic41,
  nashikroadclinic42,
  nashikroadclinic43,
  nashikroadclinic44,
  nashikroadclinic45,
  nashikroadclinic46,
  nashikroadclinic47,
  nashikroadclinic48,
  nashikroadclinic49,
  nashikroadclinic5,
  nashikroadclinic50,
  nashikroadclinic51,
  nashikroadclinic52,
  nashikroadclinic53,
  nashikroadclinic54,
  nashikroadclinic55,
  nashikroadclinic56,
  nashikroadclinic57,
  nashikroadclinic58,
  nashikroadclinic59,
  nashikroadclinic6,
  nashikroadclinic60,
  nashikroadclinic61,
  nashikroadclinic62,
  nashikroadclinic63,
  nashikroadclinic64,
  nashikroadclinic65,
  nashikroadclinic66,
  nashikroadclinic67,
  nashikroadclinic68,
  nashikroadclinic69,
  nashikroadclinic7,
  nashikroadclinic70,
  nashikroadclinic71,
  nashikroadclinic72,
  nashikroadclinic73,
  nashikroadclinic74,
  nashikroadclinic75,
  nashikroadclinic76,
  nashikroadclinic77,
  nashikroadclinic78,
  nashikroadclinic79,
  nashikroadclinic8,
  nashikroadclinic80,
  nashikroadclinic81,
  nashikroadclinic82,
  nashikroadclinic83,
  nashikroadclinic84,
  nashikroadclinic85,
  nashikroadclinic9,
} from "../../assets";

const GalleryPage = () => {
  const location = useLocation();
  const { clinicId } = useParams();

  // Extract clinic ID from URL pathname if useParams doesn't work
  const pathname = location.pathname;
  const extractedClinicId = clinicId || pathname.split("/").pop();

  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Clinic gallery data
  const clinics = {
    "deolali-camp-gallery": {
      name: "Deolali Camp Clinic Gallery",
      // address:
      //   "59-60, Howson Rd, near MSEB office, Deolali Camp, Nashik, Maharashtra 422401",
      // phone: "0253 249 6350 – 9021256647",
      images: [
        {
          id: 1,
          src: deolalicamptreatment1,
          alt: "Aparna_bhalerao_Kids_Treatment_Dr._Joshi_s_Care_&_Cure_Dental_Clinic",
          //category: "Clinic Interior",
          category: "Treatments",
        },
        {
          id: 2,
          src: deolalicamptreatment2,
          alt: "Aparna_bhalerao_Kids_Treatment_Dr._Joshi_s_Care_&_Cure_Dental_Clinic2",
          category: "Treatments",
        },
        {
          id: 3,
          src: deolalicamptreatment3,
          alt: "Malvika_Thakur_Kids_Treatment_Dr._Joshi_s_Care_&_Cure_Dental_Clinic",
          //category: "Our Team",
          category: "Treatments",
        },
        {
          id: 4,
          src: deolalicamptreatment4,
          alt: "Malvika_Thakur_Kids_Treatment_Dr._Joshi_s_Care_&_Cure_Dental_Clinic1",
          //category: "Clinic Interior",
          category: "Treatments",
        },
        {
          id: 5,
          src: deolalicamptreatment5,
          alt: "Rashi_Singh_ortho_treatment_Dr._Joshi_s_Care_&_Cure_Dental_Clinic_02532496350",
          //category: "Pediatric Dentistry",
          category: "Treatments",
        },
        {
          id: 6,
          src: deolalicamptreatment6,
          alt: "Rushikesh_dheringe_orthodontic_treatment_Dr._Joshi_s_Care_&_Cure_Dental_Clinic1",
          // category: "Consultations",
          category: "Treatments",
        },
        {
          id: 7,
          src: deolalicamptreatment7,
          alt: "Sheetal_gaikwad_Dr_Joshi_s_Care_&_Care_Dental_Clinic",
          category: "Treatments",
        },
        {
          id: 8,
          src: deolalicamptreatment8,
          alt: "Shravan_abhang_Dr_Joshi_s_Care_&_Care_Dental_Clinic",
          category: "Treatments",
        },
        {
          id: 9,
          src: deolalicamptreatment9,
          alt: "Sujal_Patil_ortho_treatment_Dr._Joshi_s_Care_&_Cure_Dental_Clinic_02532496350",
          category: "Treatments",
        },
      ],
    },
    "nashik-road-gallery": {
      name: "Nashik Road Clinic Gallery",
      // address:
      //   "203-204, Hari Amantran, Datta Mandir Rd, near Dattamandir, Nashik Road, Nashik, Maharashtra 422101",
      // phone: "081490 49104",
      images: [
        {
          id: 1,
          src: nashikroadclinic1,
          alt: "Sterilisation Room",
          category: "Clinic Interior",
        },
        {
          id: 2,
          src: nashikroadclinic3,
          alt: "Sterilisation Room",
          category: "Clinic Interior",
        },
        {
          id: 3,
          src: nashikroadclinic6,
          alt: "Expert dental team",
          //category: "Technology",
          category: "Our Team",
        },
        {
          id: 4,
          src: nashikroadclinic8,
          alt: "Dr. Chinmay Joshi",
          category: "Our Team",
        },
        {
          id: 5,
          src: nashikroadclinic10,
          alt: "Teeth cleaning procedure",
          //category: "Treatments",
          category: "Clinic Interior",
        },
        {
          id: 6,
          src: nashikroadclinic11,
          alt: "Clinic Interior",
          //category: "Consultations",
          category: "Clinic Interior",
        },
        {
          id: 7,
          src: nashikroadclinic12,
          alt: "Clinic Interior",
          //category: "Treatments",
          category: "Clinic Interior",
        },
        {
          id: 8,
          src: nashikroadclinic13,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 9,
          src: nashikroadclinic14,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 10,
          src: nashikroadclinic15,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 11,
          src: nashikroadclinic16,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 12,
          src: nashikroadclinic17,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 13,
          src: nashikroadclinic18,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 14,
          src: nashikroadclinic19,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 15,
          src: nashikroadclinic21,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 16,
          src: nashikroadclinic22,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 17,
          src: nashikroadclinic23,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 18,
          src: nashikroadclinic24,
          alt: "Dr. Dipti Joshi",
          //alt: "Comfortable waiting area",
          category: "Our Team",
        },
        {
          id: 19,
          src: nashikroadclinic30,
          //alt: "Clinic Interior",
          alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 20,
          src: nashikroadclinic32,
          alt: "Dr. Nikita Joshi",
          //alt: "Comfortable waiting area",
          category: "Our Team",
        },
        {
          id: 21,
          src: nashikroadclinic41,
          alt: "Dr. Pushkar Joshi",
          //alt: "Comfortable waiting area",
          category: "Our Team",
        },
        {
          id: 22,
          src: nashikroadclinic58,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 23,
          src: nashikroadclinic61,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 24,
          src: nashikroadclinic63,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 25,
          src: nashikroadclinic64,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 26,
          src: nashikroadclinic67,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 27,
          src: nashikroadclinic68,
          //alt: "Clinic Interior",
          alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 28,
          src: nashikroadclinic70,
          alt: "Clinic Interior",
          //alt: "Comfortable waiting area",
          category: "Clinic Interior",
        },
        {
          id: 29,
          src: nashikroadclinic72,
          alt: "Treatment",
          //alt: "Comfortable waiting area",
          category: "Treatment",
        },
        {
          id: 30,
          src: nashikroadclinic73,
          alt: "Treatment",
          //alt: "Comfortable waiting area",
          category: "Treatment",
        },
        {
          id: 31,
          src: nashikroadclinic80,
          alt: "Treatment",
          //alt: "Comfortable waiting area",
          category: "Treatment",
        },
        {
          id: 32,
          src: nashikroadclinic81,
          alt: "Treatment",
          //alt: "Comfortable waiting area",
          category: "Treatment",
        },
        {
          id: 33,
          src: nashikroadclinic83,
          alt: "Treatment",
          //alt: "Comfortable waiting area",
          category: "Treatment",
        },
        {
          id: 34,
          src: nashikroadclinic84,
          alt: "Treatment",
          //alt: "Comfortable waiting area",
          category: "Treatment",
        },
        {
          id: 35,
          src: nashikroadclinic85,
          alt: "Treatment",
          //alt: "Comfortable waiting area",
          category: "Treatment",
        },
      ],
    },
  };

  const clinic = clinics[extractedClinicId] || clinics["deolali-camp-gallery"];

  // Get unique categories
  const categories = [...new Set(clinic.images.map((image) => image.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter images by category
  const filteredImages =
    selectedCategory === "All"
      ? clinic.images
      : clinic.images.filter((image) => image.category === selectedCategory);

  const openLightbox = (index) => {
    setSelectedImage(filteredImages[index]);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1;
    } else {
      newIndex =
        lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1;
    }
    setSelectedImage(filteredImages[newIndex]);
    setLightboxIndex(newIndex);
  };

  useSEO("gallery");

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20"
    >
      {/* Clinic Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-8 pt-10"
      >
        <h1 className="text-4xl font-extrabold text-[#0a8583] mb-4">
          {clinic.name}
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto"></div>

        {/* <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-4 text-gray-600">
          <div className="flex items-center">
            <MapPin className="text-green-500 mr-2" size={20} />
            <span>{clinic.address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="text-green-500 mr-2" size={20} />
            <span>{clinic.phone}</span>
          </div>
        </div> */}
      </motion.div>

      {/* Category Filters */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === "All"
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-green-100"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-green-100"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            variants={fadeIn("up", "spring", index * 0.1, 1)}
            className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{image.alt}</p>
                <span className="text-sm bg-green-500 px-2 py-1 rounded-full mt-2 inline-block">
                  {image.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 object-fill">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 text-white hover:text-green-400 transition-colors"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 text-white hover:text-green-400 transition-colors"
          >
            <ChevronRight size={40} />
          </button>

          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-white text-center mt-4">
              <p className="text-xl font-semibold">{selectedImage.alt}</p>
              <p className="text-green-400">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GalleryPage;
