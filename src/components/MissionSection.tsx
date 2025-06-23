const MissionSection = () => {
  return (
    <section id="mission" className="section-padding bg-gradient-to-br from-primary-50 to-white fade-in-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="bubble-text-md gradient-text mb-6 smooth-entrance sparkle">Our Mission & Goals</h2>
          <p className="text-section max-w-3xl mx-auto smooth-entrance-delayed">
            The Omar Fund exists to turn the memory of one life into lasting impact. While many never had the chance to meet Omar El-Hassan, his story reflects something universal — the power of kindness, loyalty, and community.
          </p>
          <p className="text-section max-w-3xl mx-auto mt-4 smooth-entrance-delayed" style={{ animationDelay: '0.5s' }}>
            Our mission is to continue that legacy by supporting the Omar El-Hassan Medical Centre in Sudan, sponsoring orphans in the future, and raising funds for urgent causes around the world. Through sports tournaments, fundraisers, and community events, we turn grief into action — and invite others to join us in building something bigger than ourselves.
          </p>
          <p className="text-section max-w-3xl mx-auto mt-4 smooth-entrance-delayed" style={{ animationDelay: '0.7s' }}>
            <strong>Upcoming Project:</strong> We are excited to launch our Global Aid initiative, which will support urgent causes and communities in need around the world. Stay tuned for more details!
          </p>
          <p className="text-section max-w-3xl mx-auto mt-4 font-semibold text-primary-600 smooth-entrance-delayed" style={{ animationDelay: '0.9s' }}>
            You don't have to know Omar to be part of what he inspired.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          <div className="smooth-scale-in bg-white/80 rounded-2xl p-8 flex flex-col items-center text-center" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mb-6 flex items-center justify-center shadow-lg">
              <span className="text-3xl">🏥</span>
            </div>
            <h3 className="bubble-text-sm text-primary-600 mb-3">Support Medical Centre</h3>
            <p className="text-section text-base">
              Raise funds and provide support for the Omar El-Hassan Medical Centre in Sudan, ensuring quality healthcare for those in need.
            </p>
          </div>

          <div className="smooth-scale-in bg-white/80 rounded-2xl p-8 flex flex-col items-center text-center" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-sky-light to-primary-500 rounded-full mb-6 flex items-center justify-center shadow-lg">
              <span className="text-3xl">👶</span>
            </div>
            <h3 className="bubble-text-sm text-primary-600 mb-3">Sponsor Orphans</h3>
            <p className="text-section text-base">
              Provide care, education, and support for orphaned children, giving them hope and opportunities for a better future.
            </p>
          </div>

          <div className="smooth-scale-in bg-white/80 rounded-2xl p-8 flex flex-col items-center text-center" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-primary-300 to-sky-medium rounded-full mb-6 flex items-center justify-center shadow-lg">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="bubble-text-sm text-primary-600 mb-3">Global Aid</h3>
            <p className="text-section text-base">
              Raise funds for urgent causes around the world, responding to crises and supporting communities in need.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-2xl overflow-hidden smooth-scale-in border-2 border-transparent" style={{ animationDelay: '0.8s' }}>
              <img 
                src="/Images/mission.jpg"
                alt="Mission project photo 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium"><strong>Project:</strong> Omar Elhassan Medical Center Abdoun Gazira Sudan</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden smooth-scale-in border-2 border-transparent" style={{ animationDelay: '1s' }}>
              <img 
                src="/Images/mission1.jpg"
                alt="Upcoming Global Aid Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-medium"><strong>Upcoming Project:</strong> Global Aid – Supporting urgent causes and communities in need worldwide.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="smooth-scale-in bg-white/90 rounded-2xl p-6 shadow-md border-2 border-transparent" style={{ animationDelay: '1.2s' }}>
              <h3 className="bubble-text-sm text-primary-600 mb-4">2025 Goals</h3>
              <ul className="space-y-3 text-section text-base">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  Raise up to $10,000 in overall donations this year
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  Host 4-5 different events
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  Gather new volunteers
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  Complete development of medical center
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-sky-medium p-6 rounded-2xl text-white smooth-scale-in shadow-lg flex flex-col items-center justify-center" style={{ animationDelay: '1.4s' }}>
              <h4 className="font-bold text-lg mb-2">Funds Raised So Far</h4>
              <div className="text-3xl font-bold">$9,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
