import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set the scroll threshold
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const listItems = [
    { name: "tbm", path: "/" },
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
  ];

  return (
    <div
      className={`fixed flex justify-between items-center w-full md:w-2/5 px-6 md:px-10 py-3 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md text-white z-10 transition-all duration-300 ${
        isScrolled ? "bg-[#1c2321] shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Hamburger Menu (Tablet and Smaller Screens) */}
      <button
        className="lg:hidden flex flex-col gap-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute lg:relative top-[60px] lg:top-0 left-0 w-full lg:w-auto flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-6 lg:gap-16 bg-[#1c2321] lg:bg-transparent py-4 lg:py-0 transition-all duration-300 ${
          isMenuOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        {listItems.map(({ name, path }) => (
          <li
            className="relative group cursor-pointer"
            key={name}
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            <Link to={path}>
              {name === "tbm" ? (
                <span
                  style={{
                    // fontFamily: "Croogla",
                    fontSize: "1.5rem",
                    // position: "absolute",
                  }}
                >
                  <span style={{ color: "#cfc9a3" }}>t</span>
                  <span style={{ color: "#f85a23" }}>b</span>
                  <span style={{ color: "#cfc9a3" }}>m</span>
                </span>
              ) : (
                <span>{name}</span>
              )}
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl transition-all duration-300 group-hover:w-full bg-gradient-to-r from-[#f85a23] to-[#cfc9a3]"></span>
            </Link>
          </li>
        ))}

        {/* Contact Button (Tablet and Smaller Screens) */}
        <li className="lg:hidden">
          <Link to="/contact">
            <button className="py-1 px-6 rounded-3xl text-white text-lg font-semibold transition-all duration-300 bg-[#f85a23] hover:scale-105 hover:shadow-lg">
              Contact
            </button>
          </Link>
        </li>
      </ul>

      {/* Contact Button (Larger Screens Only) */}
      <Link
        to="/contact"
        className="hidden lg:block py-1 px-6 rounded-3xl text-white text-lg font-semibold transition-all duration-300 bg-[#f85a23] hover:scale-105 hover:shadow-lg ml-6"
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
