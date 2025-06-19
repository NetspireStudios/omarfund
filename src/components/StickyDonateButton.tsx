
import { useState, useEffect } from 'react';

const StickyDonateButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrolled > heroHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDonate = () => {
    console.log('Sticky donate button clicked');
    // Scroll to donate section
    const donateSection = document.querySelector('[class*="bg-gradient-to-br from-primary-600"]');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleDonate}
      className={`fixed bottom-6 right-6 z-50 btn-primary shadow-xl transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{
        background: 'linear-gradient(135deg, #4A90E2 0%, #87CEEB 100%)',
        boxShadow: '0 8px 32px rgba(74, 144, 226, 0.4)'
      }}
    >
      <span className="flex items-center">
        <span className="mr-2">💙</span>
        Donate Now
      </span>
    </button>
  );
};

export default StickyDonateButton;
