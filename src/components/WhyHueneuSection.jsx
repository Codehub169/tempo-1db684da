import React, { forwardRef } from 'react';
import { CheckCircleIcon, LightBulbIcon, HeartIcon } from '@heroicons/react/24/outline'; // Example icons

const features = [
  {
    name: 'Story-First Approach',
    description: 'We believe every brand has a unique narrative. Our design process starts with understanding your story to create visuals that are not just beautiful, but meaningful and resonant.',
    icon: LightBulbIcon,
  },
  {
    name: 'Aesthetic & Intentional Design',
    description: 'We focus on creating designs that are both aesthetically pleasing and serve a clear purpose. Every color, typeface, and layout choice is made with intention to enhance your brand message.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Collaborative Partnership',
    description: 'Your vision is our guide. We work closely with you at every step, ensuring the final product is a true reflection of your brand and aspirations. We value open communication and feedback.',
    icon: HeartIcon,
  },
];

const WhyHueneuSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id={props.id || "why"} className="why-hueneu bg-white py-20 md:py-32 px-6">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <h3 className="font-poppins text-brand-coral text-sm font-semibold mb-3 tracking-wider uppercase">
            Our Difference
          </h3>
          <h2 className="font-poppins text-brand-text-primary text-[clamp(2rem,5vw,3.25rem)] mb-4">
            Why Choose hueneu?
          </h2>
          <p className="font-inter text-brand-neutral max-w-2xl mx-auto text-lg">
            We blend artistry with strategy, crafting visual identities that not only look stunning but also speak volumes. Here’s what makes our approach special.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.name}
              className="feature-item p-8 bg-brand-beige-light rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center justify-center mb-5 w-12 h-12 rounded-full bg-brand-coral text-white mx-auto">
                <feature.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="font-poppins text-xl font-semibold text-brand-text-primary mb-3 text-center">
                {feature.name}
              </h4>
              <p className="font-inter text-brand-text-secondary text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

WhyHueneuSection.displayName = "WhyHueneuSection";
export default WhyHueneuSection;
