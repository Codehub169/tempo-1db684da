import React, { useState, useEffect, forwardRef } from 'react';
import ServiceItem from './ServiceItem';

// Placeholder Icons - replace with actual SVG imports or components
const PlaceholderIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>;
const SparklesIcon = PlaceholderIcon; // Replace with actual import: import SparklesIcon from '../assets/icons/SparklesIcon';
const PackageIcon = PlaceholderIcon; // Replace with actual import: import PackageIcon from '../assets/icons/PackageIcon';
const DevicePhoneMobileIcon = PlaceholderIcon; // Replace with actual import: import DevicePhoneMobileIcon from '../assets/icons/DevicePhoneMobileIcon';
const BookOpenIcon = PlaceholderIcon; // Replace with actual import: import BookOpenIcon from '../assets/icons/BookOpenIcon';

const servicesData = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    copy: 'Giving your story a soul, a voice, and a memorable face.',
    icon: <SparklesIcon className="w-full h-full" />,
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Abstract color gradient
  },
  {
    id: 'packaging',
    title: 'Packaging Design',
    copy: 'Crafting tangible experiences that tell your brand’s story on shelves.',
    icon: <PackageIcon className="w-full h-full" />,
    image: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Minimal texture background
  },
  {
    id: 'social-media',
    title: 'Social Media Curation',
    copy: 'Designing digital narratives that resonate and build community.',
    icon: <DevicePhoneMobileIcon className="w-full h-full" />,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Abstract connection/network
  },
  {
    id: 'print-editorial',
    title: 'Print & Editorial',
    copy: 'Turning narratives into treasured objects, from books to brochures.',
    icon: <BookOpenIcon className="w-full h-full" />,
    image: 'https://images.unsplash.com/photo-1456325504446-381272441165?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Elegant paper texture or book
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
          <div className="flex flex-col gap-5 animate-on-scroll animation-delay-\[0\.2s\]">
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
          <div className="services__preview sticky top-[calc(var(--nav-height)_+_40px)] h-[350px] sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl animate-on-scroll animation-delay-\[0\.4s\]">
            <img 
              key={imageKey} // Use key to re-trigger animation on image change
              src={previewImage}
              alt={`${servicesData.find(s=>s.id === activeServiceId)?.title} preview`} 
              className="w-full h-full object-cover animate-fadeIn duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;
