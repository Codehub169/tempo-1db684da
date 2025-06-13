import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = React.forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref} className="contact bg-brand-beige py-20 md:py-36 animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-12 md:gap-16 justify-between items-start">
          <div className="contact__intro flex-1 basis-[400px] animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-brand-text-primary mb-6 font-poppins">
              Let's Work Together
            </h2>
            <p className="text-brand-text-secondary text-base md:text-lg leading-relaxed mb-8 font-inter max-w-md">
              Have a story waiting to be told? We'd love to hear it. Fill out this little note, and we'll be in touch soon.
            </p>
            <div className="contact__social">
              <a 
                href="https://instagram.com/hueneu_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base md:text-lg text-brand-text-primary font-medium font-inter relative
                           after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] 
                           after:bg-brand-coral after:scale-x-0 after:origin-right 
                           after:transition-transform after:duration-400 after:ease-[cubic-bezier(0.19,1,0.22,1)] 
                           hover:after:scale-x-100 hover:after:origin-left"
              >
                Find us on Instagram @hueneu_
              </a>
            </div>
          </div>
          <div className="contact__form-wrapper flex-1 basis-[500px] bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-brand-gray-light animate-on-scroll delay-200">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
