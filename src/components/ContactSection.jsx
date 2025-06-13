import React from 'react';
import { forwardRef } from 'react';
import ContactForm from './ContactForm'; // Assuming ContactForm.jsx is in the same directory

const ContactSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id={props.id || "contact"} className="contact bg-brand-beige py-20 md:py-32 px-6">
      <div className="container-custom mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 justify-between items-start">
        {/* Introduction part */}
        <div className="contact__intro flex-1 lg:max-w-lg animate-on-scroll">
          <h2 className="font-poppins text-brand-text-primary text-[clamp(2.25rem,6vw,3.5rem)] mb-5 md:mb-6 leading-tight">
            Let's Work Together
          </h2>
          <p className="font-inter text-brand-text-secondary text-lg md:text-xl leading-relaxed mb-8">
            Have a story waiting to be told, a brand ready to bloom, or an idea that needs a visual voice? We'd love to hear it. Fill out this little note, and we'll be in touch soon.
          </p>
          <div className="contact__social">
            <a 
              href="https://instagram.com/hueneu_" // Assuming this is the correct link
              target="_blank" 
              rel="noopener noreferrer"
              className="font-inter text-brand-text-primary text-lg font-medium relative hover-underline-coral inline-block"
            >
              Find us on Instagram @hueneu_
            </a>
          </div>
        </div>

        {/* Form wrapper part */}
        <div className="contact__form-wrapper flex-1 w-full max-w-2xl bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-subtle border border-brand-stroke animate-on-scroll animation-delay-\[0\.2s\]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
export default ContactSection;
