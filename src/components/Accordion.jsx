import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function Accordion({ title, isOpen, onToggle, children }) {
  return (
<div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden w-full max-w-xl mx-auto mb-6 bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800 transition-shadow hover:shadow-xl">
<button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-8 py-5 text-left font-semibold text-lg text-gray-900 dark:text-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 hover:bg-indigo-50 dark:hover:bg-indigo-900"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="text-indigo-600 dark:text-indigo-400"
          aria-hidden="true"
        >
          <FiChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="px-8 pt-4 pb-6 overflow-hidden text-gray-700 dark:text-gray-300 text-base leading-relaxed select-text"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
