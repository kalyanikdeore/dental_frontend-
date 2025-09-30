import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Heart,
  Calendar,
  Phone,
} from "lucide-react";
import { videoHero } from "../../assets";

const HeroSection = () => {
  const heroContent = [
    {
      id: 1,
      video_url: videoHero,
      ctaHighlight: "Expert Dental Care",
      title: "Your Smile Deserves the Best Care",
      description:
        "19+ years of experience in providing quality dental treatments with 13,000+ happy patients.",
      appointmentLink: "/contact/deolali-camp",
    },
    {
      id: 2,
      video_url: videoHero,
      ctaHighlight: "Advanced Technology",
      title: "Modern Dentistry with a Gentle Touch",
      description:
        "State-of-the-art equipment for painless treatments and faster recovery.",
      appointmentLink: "/book-appointment",
    },
    {
      id: 3,
      video_url: videoHero,
      ctaHighlight: "4.9/5 Rating",
      title: "Trusted by Nashik Road Families Since 2007",
      description:
        "Join our family of satisfied patients with 113+ positive reviews.",
      appointmentLink: "/book-appointment",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || heroContent.length === 0) return;
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    setIsFavorite(false);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
    setIsFavorite(false);
  };

  const selectImage = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setIsFavorite(false);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const currentItem = heroContent[currentIndex] || {};

  return (
    <div className="relative w-full overflow-hidden mt-20">
      {/* Main Hero Slider */}
      <div
        className="relative w-full h-[90vh] flex items-center"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover object-center"
            >
              <source src={currentItem.video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-teal-800/60"></div> */}
          </motion.div>
        </AnimatePresence>

        {/* Content Container */}
        <div
          className="relative z-10 container mx-auto px-4 md:px-6"
          style={{ marginBottom: isMobile ? "-100px" : "-148px" }}
        >
          <div
            className="max-w-2xl"
            style={{ marginLeft: isMobile ? "20px" : "60px" }}
          >
            {currentItem.ctaHighlight && (
              <motion.div
                className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-full mb-4 text-sm font-medium"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {currentItem.ctaHighlight}
              </motion.div>
            )}

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {currentItem.title}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-teal-50 mb-6 md:mb-8 max-w-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {currentItem.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href={currentItem.appointmentLink}
                className="bg-white text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-full font-semibold flex items-center justify-center transition-all shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
              <a
                href="tel:+918149049104"
                className="bg-teal-700 text-white hover:bg-teal-800 px-6 py-3 rounded-full font-semibold flex items-center justify-center transition-all shadow-lg border border-teal-600"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </motion.div>

            {/* Key Services Highlights */}
            <motion.div
              className="hidden md:flex gap-6 mt-8 text-teal-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                <span>Braces & Aligners</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                <span>Dental Implants</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                <span>Teeth Whitening</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows - Hidden on mobile */}
        {heroContent.length > 1 && !isMobile && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-teal-700/80 hover:bg-teal-800 p-4 rounded-full z-10 backdrop-blur-sm transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-teal-700/80 hover:bg-teal-800 p-4 rounded-full z-10 backdrop-blur-sm transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </>
        )}

        {/* Emergency Badge */}
        <div className="absolute top-20 right-4 md:right-8 bg-amber-500 text-white px-4 py-2  rounded-full backdrop-blur-sm z-10 font-medium">
          Dental Emergencies Welcome
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {/* {heroContent.length > 1 && (
        <div
          className="container mx-auto px-4 md:px-6"
          style={{ marginTop: isMobile ? "-80px" : "-16px" }}
        >
          <div className="bg-teal-50/90 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-2xl max-w-4xl mx-auto border border-teal-100">
            <div className="flex justify-center gap-2 md:gap-4 overflow-x-auto py-1">
              {heroContent.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => selectImage(index)}
                  className={`flex-shrink-0 relative cursor-pointer rounded-lg overflow-hidden transition-all ${
                    isMobile ? "w-20 h-12" : "w-32 h-20"
                  } ${
                    currentIndex === index
                      ? "ring-4 ring-teal-500 transform scale-105"
                      : "opacity-80 hover:opacity-100 hover:scale-102"
                  }`}
                  aria-label={`View slide ${index + 1}: ${item.title}`}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={item.video_url} type="video/mp4" />
                  </video>
                  <div
                    className={`absolute inset-0 ${
                      currentIndex === index
                        ? "bg-teal-900/40"
                        : "bg-teal-800/20"
                    } flex items-center justify-center`}
                  >
                    {currentIndex === index && (
                      <Play className="text-white w-3 h-3 md:w-5 md:h-5" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default HeroSection;
