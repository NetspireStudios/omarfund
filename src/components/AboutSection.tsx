const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white fade-in-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="bubble-text-md gradient-text mb-6 smooth-entrance sparkle">About Us</h2>
          <p className="text-section max-w-3xl mx-auto smooth-entrance-delayed">
            The Omar Fund was created in memory of Omar El-Hassan — a kind, generous soul who left a lasting impact on everyone around him. We honour his legacy by hosting community events and sports tournaments to raise money for the Omar El-Hassan Medical Centre in Sudan, run by his father. Every event keeps Omar's spirit alive and turns remembrance into meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <div className="card-hover smooth-scale-in smooth-hover-lift border-2 border-transparent" style={{ animationDelay: '0.3s' }}>
              <h3 className="bubble-text-sm text-primary-600 mb-4">Our History</h3>
              <p className="text-section">
                Since 2023, The Omar Fund has grown from a memorial initiative into a grassroots movement built on community and compassion. Over the past two years, we've hosted soccer, basketball, and dodgeball tournaments, along with BBQs, community events, and fundraisers — all to honour the legacy of Omar El-Hassan.
              </p>
              <div className="relative w-full mt-4 rounded-xl overflow-hidden lg:hidden" style={{ paddingTop: '125%' }}>
                <img 
                  src="/Images/Omar1.webp"
                  alt="Omar at event"
                  className="absolute inset-0 w-full h-full object-cover smooth-image-hover"
                />
              </div>
            </div>

            <div className="card-hover smooth-scale-in smooth-hover-lift border-2 border-transparent" style={{ animationDelay: '0.5s' }}>
              <h3 className="bubble-text-sm text-primary-600 mb-4">Our Impact</h3>
              <p className="text-section">
                We've raised thousands for the Omar El-Hassan Medical Centre in Sudan and launched emergency campaigns for Gaza. Every event brings people together to give back and carry Omar's spirit forward through meaningful action.
              </p>
              <div className="relative w-full mt-4 rounded-xl overflow-hidden lg:hidden" style={{ paddingTop: '125%' }}>
                <img 
                  src="/Images/omar2.webp"
                  alt="Omar smiling"
                  className="absolute inset-0 w-full h-full object-cover smooth-image-hover"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="card-3d rounded-xl overflow-hidden smooth-scale-in smooth-hover-lift border-2 border-transparent" style={{ animationDelay: '0.7s' }}>
              <div className="relative w-full" style={{ paddingTop: '125%' }}>
                <img 
                  src="/Images/Omar1.webp"
                  alt="Omar at event"
                  className="absolute inset-0 w-full h-full object-cover smooth-image-hover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium">Omar at Event</p>
              </div>
            </div>

            <div className="card-3d rounded-xl overflow-hidden smooth-scale-in smooth-hover-lift border-2 border-transparent" style={{ animationDelay: '0.9s' }}>
              <div className="relative w-full" style={{ paddingTop: '125%' }}>
                <img 
                  src="/Images/omar2.webp"
                  alt="Omar smiling"
                  className="absolute inset-0 w-full h-full object-cover smooth-image-hover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium">Omar Smiling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
