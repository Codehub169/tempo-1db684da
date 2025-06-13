import React, { useState, useEffect, forwardRef } from 'react';
import ServiceItem from './ServiceItem';
import SparklesIcon from '../assets/icons/SparklesIcon';
import PackageIcon from '../assets/icons/PackageIcon';
import DevicePhoneMobileIcon from '../assets/icons/DevicePhoneMobileIcon';
import BookOpenIcon from '../assets/icons/BookOpenIcon';

const servicesData = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    copy: 'Giving your story a soul, a voice, and a memorable face.',
    icon: <SparklesIcon className="w-full h-full" />,
    image: 'https://images.unsplash.com/photo-1558368141-55f41aa4d75d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // New: logo design process, sketches
  },
  {
    id: 'packaging',
    title: 'Packaging Design',
    copy: 'Crafting tangible experiences that tell your brand\u2019s story on shelves.',
    icon: <PackageIcon className="w-full h-full" />,
    image: 'https://images.unsplash.com/photo-1599056037042-600350bd70b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // New: coffee bag packaging
  },
  {
    id: 'social-media',
    title: 'Social Media Curation',
    copy: 'Designing digital narratives that resonate and build community.',
    icon: <DevicePhoneMobileIcon className="w-full h-full" />,
    image: 'https://images.unsplash.com/photo-1516970080063-27838e09848c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // New: Flatlay of phone with curated content
  },
  {
    id: 'print-editorial',
    title: 'Print & Editorial',
    copy: 'Turning narratives into treasured objects, from books to brochures.',
    icon: <BookOpenIcon className="w-full h-full" />,
    image: 'https://images.unsplash.com/photo-1519680000207-1d7005de08e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // New: Close up of magazine pages
  },
];

const ServicesSection = forwardRef((props, ref) => {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const [previewImage, setPreviewImage] = useState(servicesData[0].image);
  const [imageKey, setImageKey] = useState(0); // Used to force re-render for transition

  useEffect(() => {
    const activeService = servicesData.find(s => s.id === activeServiceId);
    if (activeService && previewImage !== activeService.image) {
      // Preload image for smoother transition (optional, basic version just sets it)
      const img = new Image();
      img.src = activeService.image;
      img.onload = () => {
        setPreviewImage(activeService.image);
        setImageKey(prevKey => prevKey + 1); // Change key to trigger animation
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeServiceId]); // Removed previewImage from dependencies to avoid loop with key change

  return (
    <section ref={ref} id={props.id || "services"} className="services bg-brand-beige-light py-20 md:py-32 px-6">
      <div className="container-custom mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <h2 className="font-poppins text-brand-text-primary text-[clamp(2rem,5vw,3.25rem)] mb-4">
            What We Do
          </h2>
          <p className="font-inter text-brand-neutral max-w-2xl mx-auto text-lg">
            We craft visual narratives across a spectrum of mediums, each with intention and a touch of play.
          </p>
        </div>

        {/* Services layout: list and preview image */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
          {/* Services list */}
          <div className="flex flex-col gap-5 animate-on-scroll animation-delay-200">
            {servicesData.map((service) => (
              <ServiceItem
                key={service.id}
                icon={service.icon} 
                title={service.title}
                copy={service.copy}
                isActive={activeServiceId === service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
              />
            ))}
          </div>

          {/* Services preview image */}
          <div className="services__preview sticky top-[calc(var(--nav-height)_+_40px)] h-[350px] sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl animate-on-scroll animation-delay-400">
            <img 
              key={imageKey} // Use key to re-trigger animation on image change
              src={previewImage}
              alt={`${servicesData.find(s=>s.id === activeServiceId)?.title} preview`} 
              className="w-full h-full object-cover animate-fadeInZoomIn hover:scale-105 transition-transform duration-300 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;
