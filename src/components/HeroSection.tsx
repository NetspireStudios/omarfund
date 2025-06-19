
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && titleRef.current && subtitleRef.current && ctaRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'back.out(1.7)' }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="parallax-bg absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full blur-3xl float"></div>
        <div className="parallax-bg absolute top-32 right-16 w-48 h-48 bg-gradient-to-br from-sky-light to-primary-400 rounded-full blur-2xl float-delayed"></div>
        <div className="parallax-bg absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full blur-3xl float"></div>
        <div className="parallax-bg absolute bottom-32 right-1/3 w-56 h-56 bg-gradient-to-br from-primary-300 to-sky-light rounded-full blur-2xl float-delayed"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-8 h-8 bg-primary-400 rounded-full opacity-60 float"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-sky-light rounded-full opacity-40 float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-primary-300 rounded-full opacity-50 float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-primary-500 rounded-full opacity-70 float-delayed"></div>
      </div>

      <div className="container text-center z-10 relative">
        <h1 
          ref={titleRef}
          className="bubble-text-lg gradient-text mb-6 px-4"
        >
          Sky Blue Heart Stories
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Making dreams come true, one story at a time. Join us in creating positive change 
          in our community through the power of kindness and generosity.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <button className="btn-primary group relative overflow-hidden">
            <span className="relative z-10">Start Your Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-sky-medium transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          
          <button className="btn-secondary group">
            Learn Our Mission
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
