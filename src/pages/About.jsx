import { useState } from "react";
import s1 from "@/about/s1.png";
import s2 from "@/about/s2.jpeg";
import r from "@/about/r.png"

<<<<<<< HEAD
const About = () => {
=======
const ExpandableCards = () => {
>>>>>>> 9afe76ded022e433b56c3d153b28e95e7f63b457
  const [active, setActive] = useState(null);

  const cards = [
    {
      title: "Abhishek Kumar",
      desc: "I’m Abhishek Kumar, a dedicated digital marketer. Since founding Abhishek Digital Marketing Agency on October 3, 2024, I’ve helped businesses grow online by creating innovative websites and effective marketing strategies that increase visibility, drive traffic, and deliver measurable results.",
      img: s2,
    },
    {
      title: "Abhishek Digital Marketing Agency",
      desc: "Founded on October 3, 2024, Abhishek Digital Marketing Agency specializes in crafting responsive websites and result-driven digital marketing strategies. We help businesses enhance online presence, attract more traffic, and grow revenue through SEO, social media, and creative solutions, delivering measurable results that empower brands digitally.",
      img: s1,
    },
    {
      title: "Rahul Developer",
      desc: "I’m a Full Stack developer who builds modern, responsive, and scalable web applications. I focus on creating real-time, user-friendly digital products — from blogging platforms to admin dashboards — with clean code and creative design.",
      img: r,
    },
  ];

  return (
    <section id="about" className="scroll-m-20 bg-white/25 py-16">
      <div className="w-full max-w-7xl mx-auto p-4">
        <div className="text-start sm:text-center lg:text-center mb-4">
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            About Us
          </h2>
          <p className="text-slate-600 mb-15 max-w-2xl mx-auto text-sm lg:text-lg leading-tight">
            Crafting websites that convert and digital strategies that drive real growth.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[420px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer 
                ${active === index ? "md:flex-[3]" : "md:flex-[1]"} 
                w-full h-[280px] md:h-full`}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-white p-6">
                <h2 className="text-lg md:text-xl font-bold">{card.title}</h2>
                {active === index && (
                  <p className="mt-3 text-sm md:text-base text-center leading-snug">
                    {card.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default About;
=======
export default ExpandableCards;
>>>>>>> 9afe76ded022e433b56c3d153b28e95e7f63b457
