import React, { useState } from 'react';

const Navbar = ({ navItems, isVisible, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const defaultNavItems = [
    // Fallback if navItems prop is not provided
    { id: 'story', label: 'Story' },
    { id: 'services', label: 'What We Do' },
    { id: 'why', label: 'Why hueneu' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const currentNavItems = navItems && navItems.length > 0 ? navItems : defaultNavItems;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out print:hidden 
                  ${isVisible || isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                  bg-brand-beige/90 dark:bg-brand-text-primary/95 backdrop-blur-md border-b border-black/[.05] dark:border-white/[.05]`}
      style={{ height: 'var(--nav-height)' }}
      aria-label="Main navigation"
    >
      <div className="container-custom h-full flex items-center justify-between">
        <a 
          href="#home" 
          onClick={closeMobileMenu} // Close mobile menu if open when logo is clicked
          className="text-2xl font-poppins font-medium text-brand-text-primary dark:text-brand-beige hover:text-brand-coral dark:hover:text-brand-coral transition-colors duration-300"
          aria-label="hueneu homepage"
        >
          hueneu
        </a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-7 lg:space-x-10">
          {currentNavItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={`relative text-sm font-inter py-2 nav-link-underline 
                            ${activeSection === item.id 
                              ? 'is-active font-medium text-brand-coral dark:text-brand-coral' 
                              : 'font-normal text-brand-text-primary dark:text-brand-beige hover:text-brand-coral dark:hover:text-brand-coral'}
                            transition-colors duration-300`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-panel" // Links button to the panel for accessibility
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-brand-text-primary dark:text-brand-beige hover:text-brand-coral dark:hover:text-brand-coral focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-coral"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div> 
      </div>
      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu-panel"
          className="md:hidden absolute top-[var(--nav-height)] left-0 w-full bg-brand-beige dark:bg-brand-text-primary shadow-xl py-4 animate-fadeIn"
        >
          <ul className="flex flex-col items-center space-y-4">
            {currentNavItems.map((item) => (
              <li key={`${item.id}-mobile`}>
                <a 
                  href={`#${item.id}`}
                  onClick={closeMobileMenu} // Close menu on link click
                  className={`text-lg py-2 px-4 rounded-md 
                              ${activeSection === item.id 
                                ? 'font-medium text-brand-coral dark:text-brand-coral bg-brand-coral/10' 
                                : 'font-normal text-brand-text-primary dark:text-brand-beige hover:text-brand-coral dark:hover:text-brand-coral hover:bg-brand-coral/5'}
                              transition-all duration-200 ease-in-out w-full text-center`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
