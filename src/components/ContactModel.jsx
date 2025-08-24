import { Loader2, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending message...");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_SEND_MAIL_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent!", { id: toastId });
        e.target.reset();
      } else {
        toast.error("Failed to send message.", { id: toastId });
      }
    } catch {
      toast.error("Something went wrong!", { id: toastId });
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-red-500"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">We’d love to hear from you!</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission"
              />
              <input type="hidden" name="from_name" value="My Website" />

              {["Full Name", "Email", "Phone"].map((label, i) => {
                const type = i === 1 ? "email" : i === 2 ? "tel" : "text";
                const name = i === 0 ? "name" : i === 1 ? "email" : "phone";
                const pattern = name === "phone" ? "[6-9][0-9]{9}" : undefined;
                return (
                  <div key={name}>
                    <label className="block text-sm font-medium">{label}</label>
                    <input
                      type={type}
                      name={name}
                      required={name !== "phone"}
                      maxLength={name === "phone" ? 10 : undefined}
                      pattern={pattern}
                      placeholder={
                        name === "phone"
                          ? "Enter 10-digit mobile number"
                          : name === "email"
                          ? "info@gmail.com"
                          : "john doe"
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      autoComplete="off"
                    />
                  </div>
                );
              })}

              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-blue-700 cursor-pointer hover:bg-blue-900 text-white font-semibold rounded-md flex items-center justify-center"
              >
                {loading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
