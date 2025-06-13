import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-beige py-12 md:py-16 px-6 border-t border-black/[.07]">
      <div className="container-custom mx-auto text-center">
        <a 
          href="#home" 
          className="font-poppins text-xl font-medium text-brand-text-primary hover:text-brand-coral transition-colors duration-300 mb-4 inline-block"
        >
          hueneu
        </a>
        <p className="font-inter text-sm text-brand-neutral mb-1">
          Designs that whisper loud stories.
        </p>
        <p className="font-inter text-xs text-brand-neutral/80">
          &copy; {currentYear} hueneu Studio. All Rights Reserved.
        </p>
        {/* Optional: Add social links or other footer links here if needed */}
        {/* <div className="mt-4 space-x-4">
          <a href="#" className="text-xs text-brand-neutral hover:text-brand-coral">Privacy Policy</a>
          <a href="#" className="text-xs text-brand-neutral hover:text-brand-coral">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
