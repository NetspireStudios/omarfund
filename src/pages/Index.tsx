
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MissionSection from '../components/MissionSection';
import EventsSection from '../components/EventsSection';
import DonateSection from '../components/DonateSection';
import Footer from '../components/Footer';
import StickyDonateButton from '../components/StickyDonateButton';
import FloatingElements from '../components/FloatingElements';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize GSAP animations with reduced motion respect
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      // Fade in sections on scroll
      gsap.fromTo('.fade-in-section', 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.fade-in-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Parallax effect for hero background
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-bg',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Scale animation for cards
      gsap.fromTo('.scale-in',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.scale-in',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <EventsSection />
      <DonateSection />
      <Footer />
      <StickyDonateButton />
    </div>
  );
};

export default Index;
