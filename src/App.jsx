import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
// Import section components (placeholders for now)
// import HeroSection from './components/HeroSection';
// import StorySection from './components/StorySection';
// import ServicesSection from './components/ServicesSection';
// import WhyHueneuSection from './components/WhyHueneuSection';
// import AboutUsSection from './components/AboutUsSection';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';

// Placeholder components until they are fully defined
const HeroSection = React.forwardRef(({ id }, ref) => <section id={id} ref={ref} className="min-h-screen bg-gray-100 flex items-center justify-center"><h1 className="text-4xl">Hero Section ({id})</h1></section>);
const StorySection = React.forwardRef(({ id }, ref) => <section id={id} ref={ref} className="min-h-screen bg-gray-200 flex items-center justify-center"><h2 className="text-3xl">Story Section ({id})</h2></section>);
const ServicesSection = React.forwardRef(({ id }, ref) => <section id={id} ref={ref} className="min-h-screen bg-gray-300 flex items-center justify-center"><h2 className="text-3xl">Services Section ({id})</h2></section>);
const WhyHueneuSection = React.forwardRef(({ id }, ref) => <section id={id} ref={ref} className="min-h-screen bg-gray-400 flex items-center justify-center"><h2 className="text-3xl">Why Section ({id})</h2></section>);
const AboutUsSection = React.forwardRef(({ id }, ref) => <section id={id} ref={ref} className="min-h-screen bg-gray-500 flex items-center justify-center"><h2 className="text-3xl">About Section ({id})</h2></section>);
const ContactSection = React.forwardRef(({ id }, ref) => <section id={id} ref={ref} className="min-h-screen bg-gray-600 flex items-center justify-center"><h2 className="text-3xl">Contact Section ({id})</h2></section>);
const Footer = () => <footer className="py-10 bg-gray-700 text-white text-center"><p>Footer Content</p></footer>;


const App = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    home: useRef(null),
    story: useRef(null),
    services: useRef(null),
    why: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const navItems = [
    { id: 'story', label: 'Story' },
    { id: 'services', label: 'What We Do' },
    { id: 'why', label: 'Why hueneu' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = sectionRefs.home.current;
      if (heroSection) {
        // Navbar visibility based on scrolling past a certain point of the hero section
        // The sample shows nav bar after 80% of window.innerHeight, let's use that as a starting point
        if (window.scrollY > window.innerHeight * 0.7) {
          setIsNavVisible(true);
        } else {
          setIsNavVisible(false);
        }
      }

      // Active section highlighting
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height').replace('px', '')) || 80;
      let currentSectionId = 'home'; // Default to home

      // Check hero first
      if (sectionRefs.home.current) {
        const heroBottom = sectionRefs.home.current.offsetTop + sectionRefs.home.current.offsetHeight - navHeight;
        if (window.scrollY < heroBottom) {
           currentSectionId = 'home';
        } else {
            // Iterate over navItems to check other sections
            for (const item of navItems) {
                const section = sectionRefs[item.id].current;
                if (section) {
                const sectionTop = section.offsetTop - navHeight - 1; // 1px buffer for precision
                const sectionBottom = sectionTop + section.offsetHeight;
        
                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    currentSectionId = item.id;
                    break;
                }
                }
            }
        }
      }
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]); // navItems is stable, added to dependency array as good practice

  return (
    <>
      <Navbar navItems={navItems} isVisible={isNavVisible} activeSection={activeSection} />
      
      <main>
        <HeroSection id="home" ref={sectionRefs.home} />
        <StorySection id="story" ref={sectionRefs.story} />
        <ServicesSection id="services" ref={sectionRefs.services} />
        <WhyHueneuSection id="why" ref={sectionRefs.why} />
        <AboutUsSection id="about" ref={sectionRefs.about} />
        <ContactSection id="contact" ref={sectionRefs.contact} />
      </main>
      
      <Footer />
    </>
  );
};

export default App;