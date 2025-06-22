const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white fade-in-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="bubble-text-md gradient-text mb-6 transition-all duration-300 hover:scale-105 hover:text-primary-600 hover:drop-shadow-xl sparkle">About Us</h2>
          <p className="text-section max-w-3xl mx-auto transition-colors duration-300 hover:text-primary-600">
            The Omar Fund was created in memory of Omar El-Hassan — a kind, generous soul who left a lasting impact on everyone around him. We honour his legacy by hosting community events and sports tournaments to raise money for the Omar El-Hassan Medical Centre in Sudan, run by his father. Every event keeps Omar's spirit alive and turns remembrance into meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <div className="card-hover scale-in animate-fade-in-up transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl hover:border-primary-300 border-2 border-transparent">
              <h3 className="bubble-text-sm text-primary-600 mb-4 transition-colors duration-300 hover:text-primary-800">Our History</h3>
              <p className="text-section transition-colors duration-300 hover:text-primary-600">
                Since 2023, The Omar Fund has grown from a memorial initiative into a grassroots movement built on community and compassion. Over the past two years, we've hosted soccer, basketball, and dodgeball tournaments, along with BBQs, community events, and fundraisers — all to honour the legacy of Omar El-Hassan.
              </p>
              <div className="relative w-full mt-4 rounded-xl overflow-hidden lg:hidden" style={{ paddingTop: '125%' }}>
                <img 
                  src="/Images/Omar1.webp"
                  alt="Omar at event"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:brightness-110"
                />
              </div>
            </div>

            <div className="card-hover scale-in animate-fade-in-up transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl hover:border-primary-300 border-2 border-transparent">
              <h3 className="bubble-text-sm text-primary-600 mb-4 transition-colors duration-300 hover:text-primary-800">Our Impact</h3>
              <p className="text-section transition-colors duration-300 hover:text-primary-600">
                We've raised thousands for the Omar El-Hassan Medical Centre in Sudan and launched emergency campaigns for Gaza. Every event brings people together to give back and carry Omar's spirit forward through meaningful action.
              </p>
              <div className="relative w-full mt-4 rounded-xl overflow-hidden lg:hidden" style={{ paddingTop: '125%' }}>
                <img 
                  src="/Images/omar2.webp"
                  alt="Omar smiling"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:brightness-110"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="card-3d rounded-xl overflow-hidden scale-in animate-fade-in-up transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl hover:border-primary-300 border-2 border-transparent">
              <div className="relative w-full" style={{ paddingTop: '125%' }}>
                <img 
                  src="/Images/Omar1.webp"
                  alt="Omar at event"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:brightness-110"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium transition-colors duration-300 hover:text-primary-600">Omar at Event</p>
              </div>
            </div>

            <div className="card-3d rounded-xl overflow-hidden scale-in animate-fade-in-up transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl hover:border-primary-300 border-2 border-transparent">
              <div className="relative w-full" style={{ paddingTop: '125%' }}>
                <img 
                  src="/Images/omar2.webp"
                  alt="Omar smiling"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:brightness-110"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium transition-colors duration-300 hover:text-primary-600">Omar Smiling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
