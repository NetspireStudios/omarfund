
const DonateSection = () => {
  const handleDonate = (amount: number) => {
    // This will be connected to Stripe - for now, we'll log the amount
    console.log(`Donate button clicked: $${amount}`);
    // In a real implementation, this would redirect to Stripe Checkout
    alert(`Thank you for wanting to donate $${amount}! Stripe integration details are in the documentation.`);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-sky-medium text-white fade-in-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="bubble-text-md text-white mb-6">Make a Difference Today</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            Your generosity fuels our mission. Every donation, no matter the size, 
            helps us create more heart stories and transform lives in our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl card-3d scale-in">
              <h3 className="bubble-text-sm text-white mb-4">Where Your Money Goes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Direct Community Aid</span>
                  <span className="font-bold">65%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Program Development</span>
                  <span className="font-bold">25%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Operations</span>
                  <span className="font-bold">10%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl card-3d scale-in">
              <h4 className="font-bold text-lg mb-3">Impact Examples</h4>
              <ul className="space-y-2 text-sm">
                <li>• $25 provides a family meal for a week</li>
                <li>• $50 funds school supplies for a child</li>
                <li>• $100 covers emergency assistance</li>
                <li>• $250 sponsors a community event</li>
              </ul>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-xl card-3d scale-in">
            <h3 className="bubble-text-sm text-white mb-6 text-center">Choose Your Impact</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[25, 50, 100, 250].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleDonate(amount)}
                  className="bg-white text-primary-600 font-bold py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  ${amount}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleDonate(0)} // Custom amount
              className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300 mb-6"
            >
              Custom Amount
            </button>

            <div className="text-center">
              <p className="text-sm opacity-80 mb-4">
                Your donation is secure and tax-deductible
              </p>
              <div className="flex justify-center space-x-4 text-xs opacity-60">
                <span>🔒 Secure</span>
                <span>📄 Tax Receipt</span>
                <span>💳 All Cards Accepted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
