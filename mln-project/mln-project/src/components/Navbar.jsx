import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur shadow-sm">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-indigo-600"
        >
          MLN
        </motion.div>
        <div className="flex gap-6 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/ai-usage", label: "AI Usage" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-indigo-600 transition ${
                  isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
