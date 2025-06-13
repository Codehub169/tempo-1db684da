import React, { forwardRef } from 'react';

// Basic placeholder component for WhyHueneuSection
const WhyHueneuSection = forwardRef(({ id, title = "Why hueneu?" }, ref) => (
  <section 
    id={id} 
    ref={ref} 
    className="min-h-screen bg-gray-200 flex items-center justify-center p-8 animate-on-scroll"
  >
    <div className="text-center">
      <h2 className="text-3xl font-poppins text-gray-700">{title} ({id})</h2>
      <p className="text-gray-500 mt-2">Content for this section is under development.</p>
    </div>
  </section>
));

WhyHueneuSection.displayName = "WhyHueneuSection";

export default WhyHueneuSection;