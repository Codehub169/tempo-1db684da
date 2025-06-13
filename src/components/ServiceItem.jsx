import React from 'react';

// A basic ServiceItem component as required by ServicesSection.jsx
// It receives an icon (assumed to be an SVG component), title, copy, isActive state, and onMouseEnter handler.
const ServiceItem = ({ icon, title, copy, isActive, onMouseEnter }) => {
  return (
    <div
      className={`service-item p-6 md:p-8 rounded-xl transition-all duration-300 ease-in-out cursor-pointer 
                  transform hover:-translate-y-1 
                  ${isActive 
                    ? 'bg-brand-coral text-white shadow-xl scale-[1.02]' 
                    : 'bg-white hover:bg-brand-beige-light shadow-md hover:shadow-lg'}`}
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter} // Allow click for touch devices as well
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onMouseEnter(); }}
      aria-pressed={isActive}
      aria-label={`Select service: ${title}`}
    >
      <div className="flex items-start gap-4 md:gap-5">
        <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-brand-coral'}`}>
          {icon} {/* Icon component is passed directly */}
        </div>
        <div>
          <h3 className={`font-poppins text-lg md:text-xl font-semibold mb-1.5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-brand-text-primary'}`}>
            {title}
          </h3>
          <p className={`font-inter text-sm md:text-base transition-colors duration-300 ${isActive ? 'text-white/90' : 'text-brand-neutral'}`}>
            {copy}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
