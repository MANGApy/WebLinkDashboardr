import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  id: number;
  label: string;
  info: string;
  link: string;
}

interface CircularMenuProps {
  items: MenuItem[];
}

export default function CircularMenu({ items }: CircularMenuProps) {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const radius = 250; // Radius of the circle

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {items.map((item, index) => {
        const angle = (index * 360) / items.length;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={item.id}
            className="absolute"
            style={{
              x: x,
              y: y,
            }}
          >
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-40 py-3 px-6 bg-transparent text-white font-bold text-center border-2 border-white rounded hover:border-red-500 transition-colors"
              onHoverStart={() => setActiveItem(item)}
              onHoverEnd={() => setActiveItem(null)}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#000",
                boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
              }}
            >
              {item.label}

              <AnimatePresence>
                {activeItem?.id === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-3 bg-black border border-gray-500 rounded shadow-lg z-50"
                  >
                    <p className="text-gray-300 text-sm">{item.info}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          </motion.div>
        );
      })}
    </div>
  );
}
