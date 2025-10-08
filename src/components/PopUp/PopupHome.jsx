import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { deolalicamptreatment1 } from "../../assets";

function PopupHome({ setIsOpen, isOpen }) {
  // Show popup automatically after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 50000);
    return () => clearTimeout(timer);
  }, [setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed "
            onClick={() => setIsOpen(false)}
          />

          {/* Popup container (shorter width) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 400,
              duration: 0.3,
            }}
            className="relative w-full max-w-md bg-white/95 rounded-3xl  overflow-hidden border border-indigo-100 backdrop-blur-sm"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/70 hover:bg-white transition-all"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="p-5 sm:p-6 flex flex-col justify-center bg-blue-950"
              style={{ backgroundColor: "#96f7e4" }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-2xl font-extrabold bg-gradient-to-r from-indigo-700 to-sky-600 bg-clip-text text-transparent mb-3 leading-snug text-center"
              >
                Painless Root Canal Treatment in Nashik
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-gray-700 text-sm leading-relaxed mb-2 text-center"
              >
                Save your natural tooth with our{" "}
                <span className="font-semibold text-indigo-600">
                  advanced and painless
                </span>{" "}
                root canal treatment at{" "}
                <span className="font-semibold text-sky-600">
                  Dr. Joshi’s Care & Cure Dental
                </span>
                .
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-700 text-sm leading-relaxed mb-2 text-center"
              >
                If you're experiencing{" "}
                <span className="font-medium text-indigo-600">
                  tooth pain, swelling, or sensitivity
                </span>{" "}
                to hot and cold, a root canal might be the best solution for
                you.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="text-gray-700 text-sm leading-relaxed text-center"
              >
                Our expert endodontists use{" "}
                <span className="font-medium text-sky-600">
                  rotary endodontics, digital X-rays,
                </span>{" "}
                and{" "}
                <span className="font-medium text-indigo-600">
                  single-visit techniques
                </span>{" "}
                to ensure fast recovery and lasting comfort — all in just 1–2
                visits.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PopupHome;
