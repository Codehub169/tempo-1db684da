import React from 'react';
import { forwardRef } from 'react';
import ScrollIndicator from './ScrollIndicator'; // Updated import

const HeroSection = forwardRef((props, ref) => {
  const logoName = "hueneu".split('');

  return (
    <section ref={ref} id="home" className="h-screen min-h-[700px] flex flex-col justify-center items-center text-center relative bg-brand-beige px-6">
      {/* Main hero content container */}
      <div className="container mx-auto">
        {/* Animated logo */}
        <h1 className="font-poppins text-brand-text-primary mb-8 text-[clamp(3rem,12vw,7rem)] font-medium tracking-[-0.02em]">
          {logoName.map((letter, index) => (
            <span
              key={index}
              className="inline-block opacity-0 translate-y-12 animate-logoReveal"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        {/* Tagline */}
        <p className="font-inter text-brand-text-primary text-[clamp(1.25rem,3vw,1.75rem)] font-normal opacity-0 animate-fadeIn animation-delay-[1s]">
          Where stories find their aesthetic.
        </p>
        {/* Subtext */}
        <p className="font-inter text-brand-neutral text-base mt-2 opacity-0 animate-fadeIn animation-delay-[1.2s]">
          Designs that whisper loud stories.
        </p>
      </div>
      {/* Scroll down indicator */}
      <ScrollIndicator />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
