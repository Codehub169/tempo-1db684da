import React, { forwardRef } from 'react';

const StorySection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id={props.id || "story"} className="story bg-brand-beige-light py-20 md:py-32 px-6">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <h3 className="font-poppins text-brand-coral text-sm font-semibold mb-3 tracking-wider uppercase">
            Our Journey
          </h3>
          <h2 className="font-poppins text-brand-text-primary text-[clamp(2rem,5vw,3.25rem)] mb-4">
            The hueneu Story
          </h2>
          <p className="font-inter text-brand-neutral max-w-3xl mx-auto text-lg">
            At hueneu, we believe that every brand, every project, every idea has a unique hue and a narrative waiting to unfold. Our name itself is a play on 'hue' and 'new' 
            	
            reflecting our passion for fresh perspectives and the vibrant spectrum of stories we help bring to life.
          </p>
        </div>

        {/* Story Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Image Part */}
          <div className="story__image-wrapper h-[380px] md:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl animate-on-scroll group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Placeholder: team brainstorming or creative process
              alt="Creative process at hueneu studio" 
              className="w-full h-full object-cover scale-105 transition-transform duration-[1200ms] ease-out group-[.is-visible]:scale-100"
            />
          </div>

          {/* Text Part */}
          <div className="story__content animate-on-scroll animation-delay-200">
            <h3 className="font-poppins text-brand-text-primary text-2xl md:text-3xl font-semibold mb-6">
              Crafting Aesthetics with Meaning.
            </h3>
            <div className="space-y-5 font-inter text-brand-text-secondary text-lg leading-relaxed">
              <p>
                Founded from a desire to blend artistic intuition with strategic thinking, hueneu began as a small collective of creatives. We saw a world rich with stories but often lacking the visual language to express them authentically. We wanted to change that.
              </p>
              <p>
                Our philosophy is simple: design should be more than just visually appealing; it should be an experience. It should evoke emotion, spark curiosity, and create a lasting connection. We delve deep into the essence of each project, exploring its nuances to uncover the most compelling way to tell its story.
              </p>
              <p>
                From nascent ideas to established brands, we partner with clients who value thoughtful design and authentic storytelling. Our journey is one of continuous exploration, always seeking new ways to articulate the unique 'hue' of every narrative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

StorySection.displayName = "StorySection";
export default StorySection;
