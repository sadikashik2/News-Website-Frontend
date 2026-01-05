import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

const mobileCategories = ["Home", "National", "International", "Sports", "Technology"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const today = new Date();
  const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const handleMobileClick = (item) => {
    const url = item === "Home" ? "/" : `/?category=${item}`;
    navigate(url, { replace: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  const openMenu = () => {
    setMenuVisible(true);
    setMobileOpen(true);
  };

  const closeMenu = () => {
    setAnimateItems(false);
    setMobileOpen(false);
    setTimeout(() => setMenuVisible(false), 300);
  };

  // Animate items on open
  useEffect(() => {
    if (mobileOpen) {
      const timer = setTimeout(() => setAnimateItems(true), 50);
      return () => clearTimeout(timer);
    }
  }, [mobileOpen]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className="bg-white border-b shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">

        {/* Left: Desktop Home */}
        <nav className="hidden md:flex items-center gap-6 uppercase text-sm font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors px-2 py-1 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`
            }
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </NavLink>
        </nav>

        {/* Center: Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-tight mx-auto">
          News<span className="text-red-600 ml-1">Today</span>
        </h1>

        {/* Right: Desktop Date */}
        <div className="hidden md:flex flex-col items-end text-gray-600 text-sm font-medium">
          <span>{formattedDate}</span>
        </div>

        {/* Mobile Hamburger / Cross */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 z-50 text-gray-800"
          onClick={() => (mobileOpen ? closeMenu() : openMenu())}
        >
          {mobileOpen ? (
            <FiX size={24} className="transition-opacity duration-300" />
          ) : (
            <FiMenu size={24} className="transition-opacity duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu & Background */}
      {menuVisible && (
        <>
          {/* Blurred Background */}
          <div
            className={`fixed inset-0 bg-white/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          ></div>

          {/* Sliding Menu under header */}
          <div
            className={`fixed top-16 right-0 h-[calc(100%-64px)] w-64 bg-white/95 shadow-lg z-50 transform transition-transform duration-300 ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Menu Items */}
            <div className="mt-4 flex flex-col gap-2 px-4">
              {mobileCategories.map((item, idx) => (
                <button
                  key={item}
                  onClick={() => handleMobileClick(item)}
                  className={`text-left py-3 px-3 rounded text-gray-800 font-medium hover:bg-gray-100 transition-all duration-500 ${
                    animateItems
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-6"
                  }`}
                  style={{ transitionDelay: `${idx * 75}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Date */}
            <div className="absolute bottom-4 left-0 w-full text-center text-gray-500 text-xs">
              {formattedDate}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
