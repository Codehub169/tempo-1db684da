import React from 'react';

const ScrollIndicator = () => {
  return (
    <a 
      href="#story" 
      aria-label="Scroll down to story section"
      className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-brand-neutral rounded-full opacity-0 animate-fadeIn animation-delay-[1500ms] group"
    >
      <span 
        className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-brand-neutral rounded-sm animate-scrollDownIndicator group-hover:animate-none"
        // The `animate-scrollDownIndicator` should be defined in tailwind.config.js or index.css
        // Example: 'scrollDownIndicator': 'scrollDown 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1)'
        // Keyframes for scrollDown: 0% { opacity: 0; transform: translate(-50%, -4px); } 50% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, 12px); }
      ></span>
    </a>
  );
};

export default ScrollIndicator;
