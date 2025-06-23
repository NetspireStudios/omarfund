import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/80 via-white/60 to-sky-200/80 z-0" />
      {/* Dynamic Background Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full blur-3xl opacity-30 float transition-all duration-700 hover:scale-105 hover:shadow-2xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-sky-200 to-primary-400 rounded-full blur-2xl opacity-20 float-delayed transition-all duration-700 hover:scale-110 hover:shadow-xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full blur-3xl opacity-30 float transition-all duration-700 hover:scale-105 hover:shadow-2xl" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-br from-primary-300 to-sky-100 rounded-full blur-2xl opacity-20 float-delayed transition-all duration-700 hover:scale-110 hover:shadow-xl" />
      </div>
      {/* Content */}
      <div className="container text-center z-10 relative py-16 md:py-24">
        <h1
          className="bubble-text-lg gradient-text mb-4 md:mb-6 px-2 md:px-4 smooth-entrance sparkle"
        >
          The Omar Fund
        </h1>
        <p
          className="text-base sm:text-lg md:text-2xl text-gray-700 mb-6 md:mb-10 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2 md:px-4 font-medium smooth-entrance-delayed"
        >
          Making dreams come true, one story at a time. Join us in creating positive change in our community through the power of kindness and generosity.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2 md:px-4 smooth-entrance-delayed"
          style={{ animationDelay: '0.6s' }}
        >
          <a href="#donate" className="relative inline-flex items-center justify-center px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-primary-500 to-sky-400 text-white shadow-lg transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) group overflow-hidden border-4 border-transparent w-full sm:w-auto hover:shadow-2xl hover:scale-[1.05] hover:border-primary-300">
            <span className="relative z-10">Start Your Story</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute left-0 top-0 w-full h-full rounded-full border-2 border-white opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
          </a>
          <a href="#mission" className="inline-flex items-center justify-center text-center px-6 md:px-7 py-3 text-base md:text-lg font-semibold rounded-full border-2 border-primary-400 text-primary-600 bg-white/80 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) shadow group relative overflow-hidden w-full sm:w-auto hover:bg-primary-50 hover:text-primary-700 hover:scale-[1.05] hover:border-primary-600">
            <span className="flex items-center justify-center w-full">
              Learn Our Mission <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <span className="absolute left-0 top-0 w-full h-full rounded-full border-2 border-primary-200 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
