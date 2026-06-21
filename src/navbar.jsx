import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "animate.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setMenuTop(rect.bottom);
    }
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/#Home" },
    { name: "About", path: "/#About" },
    { name: "Programs", path: "/#programs" },
    { name: "Trainers", path: "/#Trainers" },
    { name: "Pricing", path: "/#Plans" },
    { name: "Contact", path: "/#Contact" },
    { name: "Timmings", path: "/Timmings" },
    { name: "Gallery", path: "/Gallery" },

  ];

  return (

    <nav ref={navRef} className="font-sans relative animate__animated animate__fadeInRight">
      {/* Desktop row */}
      <div className="flex items-center justify-between px-8 h-16">
        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 max-lg:gap-5 list-none">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-white text-md font-semibold tracking-wide hover:text-red-600 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}

          
        </ul>
        {/* Mobile menu */}
        <ul
          className={`md:hidden absolute left-0 right-0 list-none flex flex-col bg-[#1a1a1a] overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"
            }`}
          style={{ top: "100%", width: "100vw" }}
        >
          {links.map((link, index) => (
            <li
              key={link.name}
              className={`animate__animated ${isOpen ? "animate__fadeInRight" : ""
                }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <Link
                to={link.path}
                className="block text-white font-semibold px-5 py-3 border-b border-[#222] hover:bg-[#222] hover:text-red-600 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}

         
        </ul>
        {/* Hamburger */}
        <button
          className="md:hidden translate-x-5 flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-transform duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-transform duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
