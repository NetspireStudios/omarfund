const AboutSection = () => {
  return (
    <section className="section-padding bg-white fade-in-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="bubble-text-md gradient-text mb-6 transition-all duration-300 hover:scale-105 hover:text-primary-600 hover:drop-shadow-xl sparkle">About Us</h2>
          <p className="text-section max-w-3xl mx-auto transition-colors duration-300 hover:text-primary-600">
            Founded with love and driven by compassion, Sky Blue Heart Stories began as a simple idea: 
            every person deserves a chance to dream and every dream deserves a chance to come true.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="card-hover scale-in transition-transform duration-500 ease-out animate-fade-in-up hover:scale-105 hover:shadow-lg hover:border-primary-300 border-2 border-transparent">
              <h3 className="bubble-text-sm text-primary-600 mb-4 transition-colors duration-300 hover:text-primary-800">Our Beginning</h3>
              <p className="text-section transition-colors duration-300 hover:text-primary-600">
                What started as weekend volunteer work has blossomed into a community movement. 
                We believe in the power of small acts of kindness to create ripples of positive change 
                that touch countless lives.
              </p>
            </div>

            <div className="card-hover scale-in transition-transform duration-500 ease-out animate-fade-in-up hover:scale-105 hover:shadow-lg hover:border-primary-300 border-2 border-transparent">
              <h3 className="bubble-text-sm text-primary-600 mb-4 transition-colors duration-300 hover:text-primary-800">Our Community</h3>
              <p className="text-section transition-colors duration-300 hover:text-primary-600">
                With over 500 volunteers and thousands of supporters, we've become a family united 
                by our shared belief that together, we can make the world a little brighter, 
                one story at a time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card-3d rounded-xl overflow-hidden scale-in transition-transform duration-500 ease-out animate-fade-in-up hover:scale-105 hover:shadow-lg hover:border-primary-300 border-2 border-transparent">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&crop=center"
                alt="Community volunteers working together"
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 hover:brightness-110 hover:shimmer"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium transition-colors duration-300 hover:text-primary-600">Volunteers in Action</p>
              </div>
            </div>

            <div className="card-3d rounded-xl overflow-hidden scale-in transition-transform duration-500 ease-out animate-fade-in-up hover:scale-105 hover:shadow-lg hover:border-primary-300 border-2 border-transparent">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&crop=center"
                alt="Beautiful community gathering space"
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 hover:brightness-110 hover:shimmer"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium transition-colors duration-300 hover:text-primary-600">Community Gathering</p>
              </div>
            </div>

            <div className="col-span-2 card-3d rounded-xl overflow-hidden scale-in transition-transform duration-500 ease-out animate-fade-in-up hover:scale-105 hover:shadow-lg hover:border-primary-300 border-2 border-transparent">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=200&fit=crop&crop=center"
                alt="Inspiring starry night representing hope and dreams"
                className="w-full h-32 object-cover transition-transform duration-500 hover:scale-110 hover:brightness-110 hover:shimmer"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium transition-colors duration-300 hover:text-primary-600">Hope Under the Stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
