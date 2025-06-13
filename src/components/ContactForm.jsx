import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic alert for now. Replace with actual API call to /api/contact
    // console.log('Form data submitted:', formData);
    // alert('Thank you for your message! We will get back to you soon.');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const errorResult = await response.json();
        alert(errorResult.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form space-y-6">
      <div className="form-group">
        <label htmlFor="name" className="block mb-2 text-xs font-medium text-brand-neutral uppercase font-poppins">
          Your Name
        </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          className="form-control w-full p-4 border border-brand-gray-light rounded-lg bg-brand-beige-light font-inter text-base text-brand-text-primary transition-colors duration-300 ease-in-out focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral-light placeholder-brand-neutral"
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="block mb-2 text-xs font-medium text-brand-neutral uppercase font-poppins">
          Your Email
        </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          className="form-control w-full p-4 border border-brand-gray-light rounded-lg bg-brand-beige-light font-inter text-base text-brand-text-primary transition-colors duration-300 ease-in-out focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral-light placeholder-brand-neutral"
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="block mb-2 text-xs font-medium text-brand-neutral uppercase font-poppins">
          Your Story (or project idea)
        </label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="form-control w-full p-4 border border-brand-gray-light rounded-lg bg-brand-beige-light font-inter text-base text-brand-text-primary transition-colors duration-300 ease-in-out focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral-light placeholder-brand-neutral resize-vertical min-h-[120px]"
          required 
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="contact-form__button inline-block bg-brand-text-primary text-white py-3 px-8 rounded-lg font-inter text-base font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-brand-coral hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-coral focus:ring-offset-2 focus:ring-offset-white"
      >
        Let's design your story
      </button>
    </form>
  );
};

export default ContactForm;
