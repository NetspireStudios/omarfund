import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur border-b border-primary-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo/Brand */}
        <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-primary-600 tracking-tight">
          <span className="inline-block w-8 h-8 bg-gradient-to-br from-primary-400 to-sky-400 rounded-full mr-2 shadow-md"></span>
          <span>Omar Fund</span>
        </a>
        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <a href="#about" className="hover:text-primary-500 transition-colors">About</a>
          <a href="#mission" className="hover:text-primary-500 transition-colors">Mission</a>
          <a href="#events" className="hover:text-primary-500 transition-colors">Events</a>
          <a href="#donate" className="hover:text-primary-500 transition-colors">Donate</a>
        </nav>
        {/* Donate Button */}
        <a href="#donate" className="ml-4 inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 to-sky-400 text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200">
          Donate
        </a>
        {/* Mobile Nav Hamburger */}
        <button className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-400 group">
          <span className="sr-only">Open navigation</span>
          <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 