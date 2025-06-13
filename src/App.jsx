import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ServicesSection from './components/ServicesSection';
import WhyHueneuSection from './components/WhyHueneuSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Placeholder components for sections if their dedicated files are not fully implemented or available.
// These are basic functional components accepting id and ref.
const PlaceholderSection = React.forwardRef(({ id, title = "Section Title" }, ref) => (
  <section 
    id={id} 
    ref={ref} 
    className="min-h-screen bg-gray-100 flex items-center justify-center p-8 animate-on-scroll"
  >
    <h2 className="text-3xl font-poppins text-gray-700">{title} ({id})</h2>
    <p className="text-gray-500 mt-2">Content for this section is loading or to be implemented.</p>
  </section>
));
PlaceholderSection.displayName = "PlaceholderSection";

const App = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navHeight, setNavHeight] = useState(80); // Default nav height

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

  // Intersection Observer for scroll-triggered animations
  const observerCallback = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        // Optional: remove class if you want animation to re-trigger on scroll up
        // entry.target.classList.remove('is-visible'); 
      }
    });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => elementsToObserve.forEach(el => observer.unobserve(el));
  }, [observerCallback]);

  // Effect for Navbar visibility and active section highlighting
  useEffect(() => {
    const currentNavHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height').replace('px', '')) || 80;
    setNavHeight(currentNavHeight);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = sectionRefs.home.current;
      
      if (heroSection) {
        // Show Nav after scrolling past a certain point of Hero section or if not at the very top
        if (scrollPosition > heroSection.offsetHeight * 0.7 || scrollPosition > 100) {
          setIsNavVisible(true);
        } else {
          setIsNavVisible(false);
        }
      }

      let currentSectionId = 'home';
      // Check hero section first
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - currentNavHeight;
         if (scrollPosition < heroBottom * 0.8) { // Give hero more space for active state
            currentSectionId = 'home';
        } else {
            // Check other sections
            for (const item of navItems) {
                const section = sectionRefs[item.id].current;
                if (section) {
                    const sectionTop = section.offsetTop - currentNavHeight - 1; // 1px buffer
                    const sectionBottom = sectionTop + section.offsetHeight;
            
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
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
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navItems]); // navItems is stable, sectionRefs themselves are stable. Adding eslint-disable for sectionRefs if it complains, but generally refs in dep array is fine if they don't change.

  // Determine which component to render for sections that might be placeholders
  const CurrentStorySection = StorySection || (props => <PlaceholderSection {...props} title="The hueneu Story"/>);
  const CurrentWhyHueneuSection = WhyHueneuSection || (props => <PlaceholderSection {...props} title="Why hueneu?"/>);

  return (
    <>
      <Navbar navItems={navItems} isVisible={isNavVisible} activeSection={activeSection} />
      
      <main>
        <HeroSection id="home" ref={sectionRefs.home} />
        <CurrentStorySection id="story" ref={sectionRefs.story} />
        <ServicesSection id="services" ref={sectionRefs.services} />
        <CurrentWhyHueneuSection id="why" ref={sectionRefs.why} />
        <AboutUsSection id="about" ref={sectionRefs.about} />
        <ContactSection id="contact" ref={sectionRefs.contact} />
      </main>
      
      <Footer />
    </>
  );
};

export default App;
