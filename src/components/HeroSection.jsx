import React from 'react';
import { forwardRef } from 'react';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = forwardRef((props, ref) => {
  const logoName = "hueneu".split('');

  return (
    <section 
      ref={ref} 
      id={props.id || "home"} // Use id from props
      className="h-screen min-h-[700px] flex flex-col justify-center items-center text-center relative bg-brand-beige px-6 overflow-hidden"
    >
      {/* Main hero content container */}
      <div className="container mx-auto">
        {/* Animated logo */}
        <h1 className="font-poppins text-brand-text-primary mb-6 md:mb-8 text-[clamp(3rem,12vw,7rem)] font-medium tracking-tighter">
          {logoName.map((letter, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-logoReveal"
              style={{ animationDelay: `${0.2 + index * 0.08}s` }} // Slightly faster stagger
            >
              {letter}
            </span>
          ))}
        </h1>
        {/* Tagline */}
        <p className="font-inter text-brand-text-primary text-[clamp(1.125rem,3vw,1.625rem)] leading-snug font-normal opacity-0 animate-fadeIn animation-delay-\[1s\] max-w-md mx-auto">
          Where stories find their aesthetic.
        </p>
        {/* Subtext (optional, can be added if needed based on final copy) */}
        {/* <p className="font-inter text-brand-neutral text-base mt-3 opacity-0 animate-fadeIn animation-delay-\[1.2s\]">
          Designs that whisper loud stories.
        </p> */}
      </div>
      {/* Scroll down indicator */}
      <ScrollIndicator />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
