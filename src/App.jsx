<<<<<<< HEAD
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonWhatsApp from "./components/ButtonWhatsapp";
import PhoneButton from "./components/PhoneButton";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      {/* toast */}
      <Toaster position="top-center" reverseOrder="false"/>
=======
import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import About from "./pages/About";
import ButtonWhatsapp from "./components/ButtonWhatsapp";
import PhoneButton from "./components/PhoneButton";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <div className="">
      {/* toaster */}
      <Toaster position="top-center" reverseOrder="false" />
>>>>>>> 9afe76ded022e433b56c3d153b28e95e7f63b457

      <Header />

      <Hero />
      <About />
      <Service />
      <ContactUs />

      <Footer />

<<<<<<< HEAD
      <ButtonWhatsApp />
=======
      <ButtonWhatsapp />
>>>>>>> 9afe76ded022e433b56c3d153b28e95e7f63b457
      <PhoneButton />
    </div>
  );
};

export default App;
