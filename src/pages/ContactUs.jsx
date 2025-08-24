import { useState } from "react";
import { GiCometSpark } from "react-icons/gi";
import ContactModal from "../components/ContactModel";
import contact from "@/gif/contact.gif"

const ContactUs = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section id="contact" className="scroll-m-20 bg-white/25 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
        <div className="w-full lg:w-1/2 space-y-4 lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold pb-5">
            Contact <span className="text-green-600">Us</span>
          </h2>
          <p className="text-slate-600 pb-10">
            when shared with the right people. Whether you're building your brand from scratch or scaling something great, we're all ears. Reach out, and let’s turn conversations into creations.
          </p>
          <button
            className="text-xl font-medium py-1 px-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 flex items-center justify-center mt-4 cursor-pointer"
            onClick={() => setIsOpenModal(true)}
          >
            Contact Us <GiCometSpark />
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={contact}
            alt="contact"
            className="sm:w-80 lg:w-auto"
          />
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </section>
  );
};

export default ContactUs;
