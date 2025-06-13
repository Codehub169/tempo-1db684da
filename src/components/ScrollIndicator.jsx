import React from 'react';

const ScrollIndicator = () => {
  return (
    <a 
      href="#story" // Make sure a section with id "story" exists
      aria-label="Scroll down to next section"
      className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 w-7 h-11 border-2 border-brand-neutral/70 rounded-full opacity-0 animate-fadeIn animation-delay-\[1500ms\] group transition-opacity hover:opacity-80"
    >
      <span 
        className="absolute top-2.5 left-1/2 -translate-x-1/2 w-1 h-2.5 bg-brand-neutral/70 rounded-sm animate-scrollDownIndicator group-hover:animate-none"
        // The animate-scrollDownIndicator class should be defined in src/index.css
        // Its keyframes should handle the vertical movement and opacity changes.
      ></span>
    </a>
  );
};

export default ScrollIndicator;
