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
        { opacity: 0, y: 80, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'back.out(1.7)' }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.7'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.5'
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/80 via-white/60 to-sky-200/80 z-0" />
      {/* Dynamic Background Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full blur-3xl opacity-30 animate-pulse-slow transition-transform duration-500 hover:scale-105 hover:shadow-2xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-sky-200 to-primary-400 rounded-full blur-2xl opacity-20 animate-float transition-transform duration-500 hover:scale-110 hover:shadow-xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full blur-3xl opacity-30 animate-float-delayed transition-transform duration-500 hover:scale-105 hover:shadow-2xl" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-br from-primary-300 to-sky-100 rounded-full blur-2xl opacity-20 animate-pulse-slow transition-transform duration-500 hover:scale-110 hover:shadow-xl" />
      </div>
      {/* Content */}
      <div className="container text-center z-10 relative py-16 md:py-24">
        <h1
          ref={titleRef}
          className="bubble-text-lg gradient-text mb-4 md:mb-6 px-2 md:px-4 animate-gradient-x transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl sparkle"
        >
          The Omar Fund
        </h1>
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-2xl text-gray-700 mb-6 md:mb-10 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2 md:px-4 font-medium transition-colors duration-300 hover:text-primary-600"
        >
          Making dreams come true, one story at a time. Join us in creating positive change in our community through the power of kindness and generosity.
        </p>
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2 md:px-4"
        >
          <button className="relative inline-flex items-center justify-center px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-primary-500 to-sky-400 text-white shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 group overflow-hidden border-4 border-transparent hover:border-primary-300 w-full sm:w-auto">
            <span className="relative z-10">Start Your Story</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute left-0 top-0 w-full h-full rounded-full border-2 border-white opacity-0 group-hover:opacity-60 animate-pulse pointer-events-none" />
          </button>
          <button className="inline-flex items-center px-6 md:px-7 py-3 text-base md:text-lg font-semibold rounded-full border-2 border-primary-400 text-primary-600 bg-white/80 hover:bg-primary-50 hover:text-primary-700 transition-all duration-300 hover:scale-105 hover:border-primary-600 shadow group relative overflow-hidden w-full sm:w-auto">
            Learn Our Mission
            <span className="ml-2 text-xl">→</span>
            <span className="absolute left-0 top-0 w-full h-full rounded-full border-2 border-primary-200 opacity-0 group-hover:opacity-60 animate-pulse pointer-events-none" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
