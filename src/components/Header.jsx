import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import logo from "@/logo.png";

const navList = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");

  // Helper for handling both actions
  const handleNavClick = (label) => {
    setIsActive(label);
    setIsMenuOpen(false);
  };

  return (
    <header
      id="hero"
      className="scroll-mt-20 sticky top-0 z-50 bg-white/20 backdrop-blur-md shadow-md border-b border-white/30"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="lOGO" className="w-50" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navList.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsActive(link.label)}
              className={`hover:text-green-700 transition ${
                isActive === link.label ? "text-green-600" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center space-x-2">
          <PhoneCall className="text-green-600" />
          <a
            href="#contact"
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition text-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="text-gray-700" />
            ) : (
              <Menu className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/25 border-t border-gray-200 shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium">
          {navList.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.label)}
              className={`block hover:text-green-500 transition ${
                isActive === link.label ? "text-green-600" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
