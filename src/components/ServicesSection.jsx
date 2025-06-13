import React, { useState, useEffect, forwardRef } from 'react';
import ServiceItem from './ServiceItem';
import SparklesIcon from '../assets/icons/SparklesIcon';
import PackageIcon from '../assets/icons/PackageIcon';
import DevicePhoneMobileIcon from '../assets/icons/DevicePhoneMobileIcon';
import BookOpenIcon from '../assets/icons/BookOpenIcon';

const servicesData = [
  {
    id: 'branding',
    title: 'Branding',
    copy: 'Giving your story a soul and a face.',
    icon: <SparklesIcon />,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'packaging',
    title: 'Packaging',
    copy: 'Packaging, but make it poetic.',
    icon: <PackageIcon />,
    image: 'https://images.unsplash.com/photo-1586528116311-069241519758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'social-media',
    title: 'Social Media',
    copy: 'Curating digital spaces that feel like home.',
    icon: <DevicePhoneMobileIcon />,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coffee-table-books',
    title: 'Coffee Table Books',
    copy: 'Turning narratives into treasured objects.',
    icon: <BookOpenIcon />,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const ServicesSection = forwardRef((props, ref) => {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const [previewImage, setPreviewImage] = useState(servicesData[0].image);
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    const activeService = servicesData.find(s => s.id === activeServiceId);
    if (activeService && previewImage !== activeService.image) {
      setImageLoaded(false);
      const img = new Image();
      img.src = activeService.image;
      img.onload = () => {
        setPreviewImage(activeService.image);
        setImageLoaded(true);
      };
    }
  }, [activeServiceId, previewImage]);

  return (
    <section ref={ref} id="services" className="services bg-white py-28 md:py-36 px-6">
      <div className="container-custom mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-20 animate-on-scroll">
          <h2 className="font-poppins text-brand-text-primary text-[clamp(2rem,5vw,3.5rem)] mb-4">
            What We Do
          </h2>
          <p className="font-inter text-brand-neutral max-w-2xl mx-auto">
            We craft visual narratives across a spectrum of mediums, each with intention and a touch of play.
          </p>
        </div>

        {/* Services layout: list and preview image */}
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 md:gap-20 items-start">
          {/* Services list */}
          <div className="flex flex-col gap-4 animate-on-scroll">
            {servicesData.map((service) => (
              <ServiceItem
                key={service.id}
                icon={service.icon} // Icon components are now passed directly
                title={service.title}
                copy={service.copy}
                isActive={activeServiceId === service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
              />
            ))}
          </div>

          {/* Services preview image */}
          <div className="services__preview sticky top-[calc(var(--nav-height)_+_40px)] h-[400px] md:h-[600px] animate-on-scroll animation-delay-[0.2s]">
            <img 
              src={previewImage}
              alt={`${servicesData.find(s=>s.id === activeServiceId)?.title} preview`} 
              className={`w-full h-full object-cover rounded-2xl transition-opacity duration-400 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;
