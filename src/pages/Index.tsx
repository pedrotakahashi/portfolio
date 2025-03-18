
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
// import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize animations on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.rpg-card');
      
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          if (element instanceof HTMLElement) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          }
        }
      });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize element animations
    const initializeElementAnimations = () => {
      const skillBars = document.querySelectorAll('.bg-rpg-light-blue.h-2.5.rounded-full');
      
      skillBars.forEach((bar) => {
        if (bar instanceof HTMLElement) {
          const width = bar.getAttribute('data-width') || '0%';
          bar.style.width = width;
        }
      });
    };
    
    // Initialize after a short delay to ensure elements are rendered
    setTimeout(initializeElementAnimations, 100);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
      
      <style>
        {`
          @keyframes expand-width {
            from { width: 0%; }
            to { width: var(--width); }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
