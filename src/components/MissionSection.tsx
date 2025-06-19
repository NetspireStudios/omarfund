const MissionSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white fade-in-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="bubble-text-md gradient-text mb-6 transition-all duration-300 hover:scale-105 hover:text-primary-600 hover:drop-shadow-xl sparkle">Our Mission & Goals</h2>
          <p className="text-section max-w-3xl mx-auto">
            We're on a mission to transform lives through compassionate action, 
            innovative fundraising, and the power of community connection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-hover scale-in transition-transform duration-500 ease-out animate-fade-in-up hover:scale-105 hover:shadow-lg hover:border-primary-300 border-2 border-transparent bg-white/80 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mb-6 flex items-center justify-center shadow-lg">
              <span className="text-3xl">💙</span>
            </div>
            <h3 className="bubble-text-sm text-primary-600 mb-3">Empower Dreams</h3>
            <p className="text-section text-base">
              Provide resources and support to help individuals and families achieve their goals and overcome challenges.
            </p>
          </div>

          <div className="card-hover scale-in transition-transform duration-500 ease-out animate-fade-in-up hover:scale-105 hover:shadow-lg hover:border-primary-300 border-2 border-transparent bg-white/80 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-light to-primary-500 rounded-full mb-6 flex items-center justify-center shadow-lg">
              <span className="text-3xl">🌟</span>
            </div>
            <h3 className="bubble-text-sm text-primary-600 mb-3">Build Community</h3>
            <p className="text-section text-base">
              Foster connections and create lasting relationships that strengthen our community fabric.
            </p>
          </div>

          <div className="card-hover scale-in transition-transform duration-500 ease-out animate-fade-in-up hover:scale-105 hover:shadow-lg hover:border-primary-300 border-2 border-transparent bg-white/80 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-300 to-sky-medium rounded-full mb-6 flex items-center justify-center shadow-lg">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="bubble-text-sm text-primary-600 mb-3">Create Impact</h3>
            <p className="text-section text-base">
              Generate measurable, positive change that extends far beyond our immediate community.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="card-3d glass-card rounded-2xl overflow-hidden scale-in transition-transform duration-500 ease-out animate-fade-in-up hover:scale-105 hover:shadow-lg hover:border-primary-300 border-2 border-transparent">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop&crop=center"
                alt="Mountain summit representing reaching goals"
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105 hover:brightness-105"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium">Reaching New Heights</p>
              </div>
            </div>

            <div className="card-3d glass-card rounded-2xl overflow-hidden scale-in transition-transform duration-500 ease-out animate-fade-in-up hover:scale-105 hover:shadow-lg hover:border-primary-300 border-2 border-transparent">
              <img 
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop&crop=center"
                alt="Beautiful architecture representing building community"
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105 hover:brightness-105"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium">Building Together</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-hover scale-in bg-white/90 rounded-2xl p-6 shadow-md border-2 border-transparent hover:border-primary-300 animate-fade-in-up">
              <h3 className="bubble-text-sm text-primary-600 mb-4">2024 Goals</h3>
              <ul className="space-y-3 text-section text-base">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  Support 1,000 families with emergency assistance
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  Launch 5 new community programs
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  Raise $500,000 for local initiatives
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  Recruit 200 new volunteer advocates
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-sky-medium p-6 rounded-2xl text-white card-3d scale-in animate-fade-in-up shadow-lg">
              <h4 className="font-bold text-lg mb-2">Impact This Year</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">847</div>
                  <div className="text-sm opacity-90">Families Helped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$425K</div>
                  <div className="text-sm opacity-90">Funds Raised</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
