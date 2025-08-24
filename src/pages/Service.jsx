import CardFilter from "../components/CardFilter";

const Service = () => {
  return (
    <section id="services" className="scroll-m-20 bg-slate-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-start sm:text-center lg:text-center mb-4">
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What We Offer
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto text-sm lg:text-lg">
            Smart marketing meets scalable web development built to grow your
            business.
          </p>
        </div>

        {/* cardFilter */}
        <div className="flex items-center justify-center">
          <CardFilter />
        </div>
      </div>
    </section>
  );
};

export default Service;
