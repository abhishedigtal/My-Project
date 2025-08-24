
import { FaWhatsapp } from "react-icons/fa";

const links = [
  {
    href: "https://wa.me/919266594942",
    icon: <FaWhatsapp className="text-6xl w-10 h-10" />,
  },
];

const ButtonWhatsApp = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center">
      {links.map((link, index) => {
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white shadow-lg rounded-xl p-2 bg-green-500 hover:bg-green-600 transition duration-300"
          >
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};

export default ButtonWhatsApp;
