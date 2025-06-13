import React from 'react';
import { forwardRef } from 'react';

const AboutUsSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id={props.id || "about"} className="about bg-white py-20 md:py-32 px-6">
      <div className="container-custom mx-auto grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        {/* Content part */}
        <div className="about__content animate-on-scroll">
          <h3 className="font-poppins text-brand-coral text-sm font-semibold mb-3 tracking-wider uppercase">
            The Studio
          </h3>
          <h2 className="font-poppins text-brand-text-primary text-[clamp(2rem,5vw,3rem)] mb-6 md:mb-8 leading-tight">
            Quietly Bold, Subtly Playful.
          </h2>
          <div className="space-y-5 font-inter text-brand-text-secondary text-lg leading-relaxed">
            <p>
              hueneu was founded on a quiet belief: that the most powerful stories are told in the space between the vibrant and the serene. We are a small team of designers and storytellers who find joy in the details 
              	othe texture of paper, the perfect color pairing, the rhythm of a layout.
            </p>
            <p>
              Our approach is personal and collaborative. We see ourselves as partners in bringing your vision to life, ensuring every element feels intentional, balanced, and truly yours. We champion calm mystery and subtle playfulness in all we do.
            </p>
          </div>
        </div>
        {/* Image part */}
        <div className="about__image-wrapper h-[380px] md:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl animate-on-scroll animation-delay-200 group">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Placeholder for studio/team image
            alt="The hueneu studio team or a creative workspace" 
            className="w-full h-full object-cover scale-105 transition-transform duration-[1200ms] ease-out group-[.is-visible]:scale-100"
          />
        </div>
      </div>
    </section>
  );
});

AboutUsSection.displayName = 'AboutUsSection';
export default AboutUsSection;
