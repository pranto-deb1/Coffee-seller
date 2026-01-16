import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navRef = useRef(null);
  const timeoutRef = useRef(null); // <-- for delayed close

  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isOutOfView, setIsOutOfView] = useState(false);

  // Hover handlers with delay
  const handleDesktopMenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopMenuOpen(true);
  };

  const handleDesktopMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopMenuOpen(false);
    }, 1000);
  };

  useEffect(() => {
    if (!navRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsOutOfView(!entry.isIntersecting);
    });

    observer.observe(navRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={navRef}>
      <motion.nav
        className={`z-50 w-full px-6 py-4 flex items-center justify-around
    transition-all  duration-500 delay-500 ease-out
    ${
      isOutOfView
        ? "fixed top-0 left-0 py-0  bg-black"
        : "absolute top-0 pt-8 left-0 bg-transparent"
    }
  `}
      >
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/"
          className="text-[#c9933f] text-2xl font-bold cursor-pointer"
        >
          Cafeteria TNC
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 relative">
          <motion.li whileHover={{ y: -2 }}>
            <NavLink
              to="/"
              className="text-white font-semibold hover:text-[#c9933f]"
            >
              Home
            </NavLink>
          </motion.li>

          <motion.li whileHover={{ y: -2 }}>
            <NavLink
              to="/about"
              className="text-white font-semibold hover:text-[#c9933f]"
            >
              About
            </NavLink>
          </motion.li>

          <motion.li whileHover={{ y: -2 }}>
            <NavLink
              to="/blog"
              className="text-white font-semibold hover:text-[#c9933f]"
            >
              Blog
            </NavLink>
          </motion.li>

          {/* Desktop Menu Dropdown */}
          <motion.li
            className="relative"
            onMouseEnter={handleDesktopMenuEnter}
            onMouseLeave={handleDesktopMenuLeave}
          >
            <span className="text-white font-semibold cursor-pointer hover:text-[#c9933f]">
              Menu
            </span>

            <AnimatePresence>
              {desktopMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  onMouseEnter={handleDesktopMenuEnter} // keep open on div hover
                  onMouseLeave={handleDesktopMenuLeave} // start delay on leave
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-5
                             bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl
                             p-6 min-w-[150px] shadow-secondary shadow-2xl "
                >
                  <div className="grid gap-y-3 items-center">
                    <NavLink to="/menus" className="menu-link">
                      Menus
                    </NavLink>
                    <NavLink to="/coffee-menu" className="menu-link">
                      Coffee Menu
                    </NavLink>
                    <NavLink to="/shop" className="menu-link">
                      Shop
                    </NavLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.07 }}
            className="bg-[#c9933f] text-white px-6 py-2.5 rounded-full font-bold"
          >
            Contact Us →
          </motion.a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span className="text-3xl">{mobileNavOpen ? "✕" : "☰"}</span>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden pt-11 bg-black/95 backdrop-blur-lg px-6 py-6 space-y-4"
          >
            <NavLink
              to="/"
              className="block text-white text-lg mt-8 font-semibold"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="block text-white text-lg font-semibold"
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              className="block text-white text-lg font-semibold"
            >
              Blog
            </NavLink>

            {/* Mobile Menu Accordion */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full text-left text-white text-lg font-semibold flex justify-between"
            >
              Menu
              <span>{mobileMenuOpen ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pl-4 space-y-2 "
                >
                  <NavLink to="/menus" className="block text-white/80">
                    Menus
                  </NavLink>
                  <NavLink to="/coffee-menu" className="block text-white/80">
                    Coffee Menu
                  </NavLink>
                  <NavLink to="/shop" className="block text-white/80">
                    Shop
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block bg-[#c9933f] text-center text-white py-3 rounded-full font-bold mt-4"
            >
              Contact Us →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
