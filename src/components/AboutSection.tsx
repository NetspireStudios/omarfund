const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white fade-in-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="bubble-text-md gradient-text mb-6 transition-all duration-300 hover:scale-105 hover:text-primary-600 hover:drop-shadow-xl sparkle">About Us</h2>
          <p className="text-section max-w-3xl mx-auto transition-colors duration-300 hover:text-primary-600">
            Founded with love and driven by compassion, Sky Blue Heart Stories began as a simple idea: 
            every person deserves a chance to dream and every dream deserves a chance to come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="card-hover scale-in animate-fade-in-up transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl hover:border-primary-300 border-2 border-transparent">
              <h3 className="bubble-text-sm text-primary-600 mb-4 transition-colors duration-300 hover:text-primary-800">Our Beginning</h3>
              <p className="text-section transition-colors duration-300 hover:text-primary-600">
                What started as weekend volunteer work has blossomed into a community movement. 
                We believe in the power of small acts of kindness to create ripples of positive change 
                that touch countless lives.
              </p>
              <img 
                src="/Images/Omar1.webp"
                alt="Omar at event"
                className="w-full h-48 object-cover rounded-xl mt-4 transition-transform duration-300 hover:scale-110 hover:brightness-110 block lg:hidden"
              />
            </div>

            <div className="card-hover scale-in animate-fade-in-up transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl hover:border-primary-300 border-2 border-transparent">
              <h3 className="bubble-text-sm text-primary-600 mb-4 transition-colors duration-300 hover:text-primary-800">Our Community</h3>
              <p className="text-section transition-colors duration-300 hover:text-primary-600">
                With over 500 volunteers and thousands of supporters, we've become a family united 
                by our shared belief that together, we can make the world a little brighter, 
                one story at a time.
              </p>
              <img 
                src="/Images/omar2.webp"
                alt="Omar smiling"
                className="w-full h-48 object-cover rounded-xl mt-4 transition-transform duration-300 hover:scale-110 hover:brightness-110 block lg:hidden"
              />
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="card-3d rounded-xl overflow-hidden scale-in animate-fade-in-up transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl hover:border-primary-300 border-2 border-transparent">
              <img 
                src="/Images/Omar1.webp"
                alt="Omar at event"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 hover:brightness-110"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium transition-colors duration-300 hover:text-primary-600">Omar at Event</p>
              </div>
            </div>

            <div className="card-3d rounded-xl overflow-hidden scale-in animate-fade-in-up transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl hover:border-primary-300 border-2 border-transparent">
              <img 
                src="/Images/omar2.webp"
                alt="Omar smiling"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 hover:brightness-110"
              />
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
