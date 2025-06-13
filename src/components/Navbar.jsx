import React from 'react';

const Navbar = ({ navItems, isVisible, activeSection }) => {
  // Default navItems structure for clarity if not passed or during development
  const defaultNavItems = [
    { id: 'story', label: 'Story' },
    { id: 'services', label: 'What We Do' },
    { id: 'why', label: 'Why hueneu' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const currentNavItems = navItems && navItems.length > 0 ? navItems : defaultNavItems;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out print:hidden 
                  ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                  bg-brand-beige/80 dark:bg-brand-text-primary/90 backdrop-blur-md border-b border-black/[.05] dark:border-white/[.05]`}
      style={{ height: 'var(--nav-height)' }}
      aria-label="Main navigation"
    >
      <div className="container-custom h-full flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-poppins font-medium text-brand-text-primary dark:text-brand-beige hover:text-brand-coral dark:hover:text-brand-coral transition-colors duration-300"
          aria-label="hueneu homepage"
        >
          hueneu
        </a>
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-10">
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
        {/* Mobile menu button placeholder - to be implemented later */}
        <div className="md:hidden">
          <button 
            aria-label="Open menu" 
            className="p-2 rounded-md text-brand-text-primary dark:text-brand-beige hover:text-brand-coral dark:hover:text-brand-coral focus:outline-none focus:ring-2 focus:ring-brand-coral"
          >
            {/* SVG Hamburger Icon would go here */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;