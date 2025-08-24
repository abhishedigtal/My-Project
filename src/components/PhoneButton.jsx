import { PhoneCall } from "lucide-react";

const PhoneButton = () => {
  return (
    <div className="fixed bottom-25 right-5 z-50 flex items-center justify-center ">
      <a
        href="tel:+919266594942"
        className="bg-blue-500 p-2 rounded-xl text-white shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <PhoneCall className="text-6xl w-10 h-10" />
      </a>
    </div>
  );
};

export default PhoneButton;
