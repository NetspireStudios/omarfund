
const AboutSection = () => {
  return (
    <section className="section-padding bg-white fade-in-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-section">About Our Heart</h2>
          <p className="text-section max-w-3xl mx-auto">
            Founded with love and driven by compassion, Sky Blue Heart Stories began as a simple idea: 
            every person deserves a chance to dream and every dream deserves a chance to come true.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="card-hover scale-in">
              <h3 className="bubble-text-sm text-primary-600 mb-4">Our Beginning</h3>
              <p className="text-section">
                What started as weekend volunteer work has blossomed into a community movement. 
                We believe in the power of small acts of kindness to create ripples of positive change 
                that touch countless lives.
              </p>
            </div>

            <div className="card-hover scale-in">
              <h3 className="bubble-text-sm text-primary-600 mb-4">Our Community</h3>
              <p className="text-section">
                With over 500 volunteers and thousands of supporters, we've become a family united 
                by our shared belief that together, we can make the world a little brighter, 
                one story at a time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card-3d rounded-xl overflow-hidden scale-in">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&crop=center"
                alt="Community volunteers working together"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium">Volunteers in Action</p>
              </div>
            </div>

            <div className="card-3d rounded-xl overflow-hidden scale-in">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&crop=center"
                alt="Beautiful community gathering space"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium">Community Gathering</p>
              </div>
            </div>

            <div className="col-span-2 card-3d rounded-xl overflow-hidden scale-in">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=200&fit=crop&crop=center"
                alt="Inspiring starry night representing hope and dreams"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium">Hope Under the Stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
