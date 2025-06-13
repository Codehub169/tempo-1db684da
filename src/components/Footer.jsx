import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-brand-beige py-10 md:py-16 border-t border-brand-gray-light">
      <div className="container mx-auto px-6 text-center">
        <p className="text-brand-neutral text-sm font-inter">
          &copy; {currentYear} hueneu. A design studio for the quiet and the bold.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
