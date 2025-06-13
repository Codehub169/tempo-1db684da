import React from 'react';

const AboutUsSection = React.forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="about bg-white py-20 md:py-36 animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="about__content animate-on-scroll">
            <h3 className="text-sm font-medium text-brand-neutral tracking-widest uppercase mb-4 font-poppins">
              The Studio
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-brand-text-primary mb-8 font-poppins">
              Behind the Name
            </h2>
            <p className="text-brand-text-secondary text-base md:text-lg leading-relaxed mb-6 font-inter max-w-xl">
              hueneu was founded on a quiet belief: that the most powerful stories are told in the space between the vibrant and the serene. We are a small team of designers and storytellers who find joy in the details—the texture of paper, the perfect color pairing, the rhythm of a layout.
            </p>
            <p className="text-brand-text-secondary text-base md:text-lg leading-relaxed font-inter max-w-xl">
              Our approach is personal and collaborative. We see ourselves as partners in bringing your vision to life, ensuring every element feels intentional, balanced, and truly yours.
            </p>
          </div>
          <div className="about__image-wrapper h-[400px] md:h-[500px] rounded-2xl overflow-hidden animate-on-scroll delay-200">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="The hueneu studio team" 
              className="about__image w-full h-full object-cover scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.165,0.84,0.44,1)]"
            />
            {/* The parent 'animate-on-scroll' combined with an 'is-visible' class (added by App.jsx's IntersectionObserver) 
                will trigger the image scale animation by overriding scale-105 to scale-100, 
                assuming .is-visible .about__image { transform: scale(1); } is defined or handled by the observer logic. */}
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutUsSection;
