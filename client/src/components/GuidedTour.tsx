import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const tourSteps = [
  {
    title: "Welcome to INJU",
    content: "This interactive guide will help you understand how to use our platform effectively."
  },
  {
    title: "Navigation Menu",
    content: "The circular buttons around the center provide quick access to different sections. Hover over them to see what each one does."
  },
  {
    title: "Main Features",
    content: "Explore our tools, join our Discord community, and get help with troubleshooting when needed."
  },
  {
    title: "Getting Started",
    content: "We recommend joining our Discord server first for the latest updates and community support."
  }
];

export default function GuidedTour() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTourComplete, setIsTourComplete] = useState(false);

  useEffect(() => {
    const tourCompleted = localStorage.getItem('guidedTourCompleted');
    if (tourCompleted === 'true') {
      setIsTourComplete(true);
    }
  }, []);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTour();
    }
  };

  const completeTour = () => {
    setIsTourComplete(true);
    localStorage.setItem('guidedTourCompleted', 'true');
    setIsVisible(false);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  if (!isVisible || isTourComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-8 right-8 w-96 bg-black border-2 border-red-500 rounded-lg p-6 shadow-lg z-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-bold text-white mb-2">
          {tourSteps[currentStep].title}
        </h3>
        <p className="text-gray-300 mb-4">
          {tourSteps[currentStep].content}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {tourSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-red-500' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}