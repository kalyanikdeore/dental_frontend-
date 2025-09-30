import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  Calendar,
  MapPin,
} from "lucide-react";
import DentalLogo from "./DentalLogo";

// Clinic information
const clinics = [
  {
    id: 1,
    name: "Deolali Camp Clinic",
    address: "59-60, Howson Rd, near MSEB office, Deolali Camp, Nashik",
    phone: "+919021256647",
    // secondaryPhone: "9021256647",
    hours: "Mon–Sat: 10:30 AM – 9:00 PM",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2780598558447!2d73.8344327!3d19.9548052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9553a6822c55%3A0xb1e4f0ae27957fe2!2sDr.%20Joshi%27s%20Care%20%26%20Cure%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1756881578216!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Nashik Road Clinic",
    address:
      "203-204, Hari Amantran, Datta Mandir Rd, near Dattamandir, Nashik Road, Nashik",
    phone: "+918149049104",
    hours: "Mon–Sat: 10:30 AM – 9:00 PM",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5211240099898!2d73.8303748!3d19.902432999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd958535bd1099%3A0x4813ba22d2d1d82!2sDr.%20Joshi%27s%20Care%20%26%20Cure%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1756881602062!5m2!1sen!2sin",
  },
];

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Treatments",
    submenu: [
      { label: "Dental Implants", path: "/treatments/dental-implants-nashik" },
      {
        label: "Root Canal",
        path: "/treatments/root-canal-treatment-nashik",
      },
      {
        label: "Cosmetic Dentistry",
        path: "/treatments/cosmetic-dentist-nashik",
      },
      {
        label: "Pediatric Dentistry",
        path: "/treatments/pediatric-dentist-nashik",
      },
      { label: "Teeth Whitening", path: "/treatments/teeth-whitening-nashik" },
      {
        label: "Gum Disease",
        path: "/treatments/gum-disease-treatment-nashik",
      },
      {
        label: "Emergency Dental",
        path: "/treatments/emergency-dental-care-nashik",
      },
    ],
  },
  {
    label: "Our Doctors",
    path: "/doctors",
  },
  {
    label: "Patient Safety",
    path: "/patient-safety",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Gallery",
    path: "/gallery",
    submenu: [
      {
        label: "Deolali Camp Gallery",
        path: "/gallery/deolali-camp-gallery",
      },
      {
        label: "Nashik Road Gallery",
        path: "/gallery/nashik-road-gallery",
      },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    submenu: [
      { label: "Deolali Camp Clinic", path: "/contact/deolali-camp" },
      { label: "Nashik Road Clinic", path: "/contact/nashik-road" },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState(clinics[0]);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleNavItemClick = (item, index) => {
    if (item.submenu) {
      toggleDropdown(index);
    } else {
      navigate(item.path);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set clinic based on current path
    if (location.pathname.includes("deolali")) {
      setSelectedClinic(clinics[0]);
    } else if (location.pathname.includes("nashik-road")) {
      setSelectedClinic(clinics[1]);
    }
  }, [location.pathname]);

  const primaryColor = "#0E7C7B";
  const accentColor = "#F9C74F";
  const [hidden, setHidden] = useState(false);
  return (
    <header className="relative z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#0E7C7B] text-white text-sm px-4 fixed top-0 left-0 w-full z-[100]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center py-3 space-y-4 md:space-y-0">
          {/* Mobile View: Show clinics and working hours below */}
          <div className="flex flex-col md:hidden w-full space-y-4">
            <div className="flex flex-row justify-between">
              {clinics.map((clinic) => (
                <div
                  key={clinic.id}
                  className="flex flex-col space-y-1 break-words w-1/2"
                >
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} />
                    <span>{clinic.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={14} />
                    <a
                      href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                      className="hover:text-teal-200 text-xs transition-colors break-all"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* Working hours shown once below all clinics */}
            <div className="flex items-center justify-center space-x-2 text-xs">
              <Clock size={14} />
              <span>Mon–Sat: 10:30 AM – 9:00 PM</span>
            </div>
          </div>

          {/* Desktop View: Show full navbar */}
          <div className="hidden md:flex md:flex-row justify-between items-center w-full">
            {/* Left Section: Email and Working Hours */}
            <div className="flex items-center space-x-6">
              <a
                href="mailto:drjoshidental@gmail.com"
                className="hover:text-teal-200 text-sm transition-colors flex items-center break-all"
              >
                <Mail size={14} className="mr-1" />
                drjoshidental@gmail.com
              </a>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>Mon–Sat: 10:30 AM – 9:00 PM</span>
              </div>
            </div>

            {/* Right Section: Addresses */}
            <div className="flex items-center space-x-8">
              {clinics.map((clinic) => (
                <div
                  key={clinic.id}
                  className="flex flex-col space-y-1 break-words"
                >
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} />
                    <span>{clinic.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={14} />
                    <a
                      href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                      className="hover:text-teal-200 text-sm transition-colors"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full left-0 transition-all duration-300 z-[90] pt-8 md:pt-7 ${
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
        } ${hidden ? "-translate-y-full md:translate-y-0" : "translate-y-0"}`}
        style={{ top: scrolled ? "-5px" : "50px" }}
      >
        <div className="container mx-auto py-3 px-4 pt-6">
          <div className="flex justify-between items-center">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <DentalLogo />
            </div>
            <div className="flex flex-col justify-center items-end gap-2">
              {/* <div className="hidden my-4 md:flex items-center gap-6">
                <div className="text-gray-700 hover:text-[#0E7C7B] flex items-center gap-2 font-bold">
                  <div
                    className="border rounded-full p-3"
                    style={{ borderColor: primaryColor }}
                  >
                    <Mail size={16} style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <p className="text-sm">Email Us</p>
                    <a
                      href="mailto:drjoshidental@gmail.com"
                      className="text-gray-700 hover:text-[#0E7C7B] text-xs"
                    >
                      drjoshidental@gmail.com
                    </a>
                  </div>
                </div>
                <div className="text-gray-700 hover:text-[#0E7C7B] flex items-center gap-2 font-bold">
                  <div
                    className="border rounded-full p-3"
                    style={{ borderColor: primaryColor }}
                  >
                    <Phone size={16} style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <p className="text-sm">Call Us</p>
                    <a
                      href={`tel:${selectedClinic.phone.replace(/\s/g, "")}`}
                      className="text-gray-700 hover:text-[#0E7C7B] text-xs"
                    >
                      {selectedClinic.phone}
                      {selectedClinic.secondaryPhone &&
                        ` / ${selectedClinic.secondaryPhone}`}
                    </a>
                  </div>
                </div>
              </div> */}

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1 font-medium text-gray-800 relative">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => item.submenu && setOpenDropdown(index)}
                    onMouseLeave={() => item.submenu && setOpenDropdown(null)}
                  >
                    <button
                      onClick={() => handleNavItemClick(item, index)}
                      className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-all ${
                        openDropdown === index
                          ? `text-white bg-[#0E7C7B]`
                          : "hover:text-[#0E7C7B] hover:bg-teal-50"
                      }`}
                    >
                      {item.label}
                      {item.submenu && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === index && item.submenu && (
                      <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl py-2 min-w-[220px] z-[120] border border-gray-100">
                        {item.submenu.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            onClick={() => {
                              navigate(subItem.path);
                              setOpenDropdown(null);
                            }}
                            className="px-4 py-2 text-sm text-gray-700 cursor-pointer transition-all hover:bg-teal-50 hover:text-[#0E7C7B] hover:pl-5"
                          >
                            {subItem.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* CTA Button */}
                <button
                  onClick={() => navigate("/contact")}
                  className="ml-2 px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center text-sm"
                  style={{ backgroundColor: primaryColor }}
                >
                  <Calendar size={16} className="mr-2" />
                  Book Appointment
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:text-[#0E7C7B] p-2 transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-[110] shadow-xl p-6 space-y-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <DentalLogo />
            </div>
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#0E7C7B] p-2"
            >
              <X size={28} />
            </button>
          </div>

          {/* Clinic Selector for Mobile */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Clinic:
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={selectedClinic.id}
              onChange={(e) => {
                const clinic = clinics.find(
                  (c) => c.id === parseInt(e.target.value)
                );
                setSelectedClinic(clinic);
                navigate(
                  clinic.id === 1 ? "/contact/deolali" : "/contact/nashik-road"
                );
              }}
            >
              {clinics.map((clinic) => (
                <option key={clinic.id} value={clinic.id}>
                  {clinic.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => handleNavItemClick(item, index)}
                  className={`w-full text-left font-medium text-gray-800 py-3 flex justify-between items-center ${
                    item.submenu ? "" : "hover:text-[#0E7C7B]"
                  }`}
                >
                  <div className="flex items-center">{item.label}</div>
                  {item.submenu && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {/* Mobile Submenu */}
                {item.submenu && openDropdown === index && (
                  <div className="ml-4 space-y-2 mb-2">
                    {item.submenu.map((sub, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          navigate(sub.path);
                          setIsMenuOpen(false);
                        }}
                        className="pl-3 py-2 text-gray-700 hover:text-[#0E7C7B] cursor-pointer flex items-center"
                      >
                        <span style={{ color: primaryColor }} className="mr-2">
                          •
                        </span>
                        {sub.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Button */}
            <button
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 px-4 py-3 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
              style={{ backgroundColor: primaryColor }}
            >
              <Calendar size={18} className="mr-2" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:drjoshidental@gmail.com"
                className="text-gray-700 hover:text-[#0E7C7B] flex items-center"
              >
                <Mail size={16} className="mr-2" />
                drjoshidental@gmail.com
              </a>
              <a
                href={`tel:${selectedClinic.phone.replace(/\s/g, "")}`}
                className="text-gray-700 hover:text-[#0E7C7B] flex items-center"
              >
                <Phone size={16} className="mr-2" />
                {selectedClinic.phone}
                {selectedClinic.secondaryPhone &&
                  ` / ${selectedClinic.secondaryPhone}`}
              </a>
              <div className="text-gray-700 flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{selectedClinic.address}</span>
              </div>
              <div className="text-gray-700 flex items-center">
                <Clock size={16} className="mr-2" />
                {selectedClinic.hours}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
