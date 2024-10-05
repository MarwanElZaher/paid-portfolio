import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSendEmail = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const { fullName, email, message } = formData;
      const subject = `Message from ${fullName}`;
      const body = `Full Name: ${fullName}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      
      window.location.href = `mailto:webdesignhossam@gmail.com?subject=${subject}&body=${body}`;
      setErrors(null)
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form>
      <div className="mb-6">
        <label className="block text-[#F8F8F599] font-clash mb-2">
          Full Name
        </label>
        <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full p-4 bg-black rounded-xl text-white placeholder-[#F8F8F599] border ${errors?.fullName ? 'border-red-500' : 'border-[#F8F8F599]'} focus:outline-none focus:ring-2 focus:ring-gray-500`}
            required
          />
          {errors?.fullName && <p className="text-red-500 text-sm">{errors?.fullName}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-[#F8F8F599] font-clash mb-2">
          Email
        </label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full p-4 bg-black rounded-xl text-white placeholder-[#F8F8F599] border ${errors?.email ? 'border-red-500' : 'border-[#F8F8F599]'} focus:outline-none focus:ring-2 focus:ring-gray-500`}
            required
          />
          {errors?.email && <p className="text-red-500 text-sm">{errors?.email}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-[#F8F8F599] font-clash mb-2">
          Message
         </label>
         <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className={`w-full p-4 bg-black rounded-xl text-white placeholder-[#F8F8F599] border ${errors?.message ? 'border-red-500' : 'border-[#F8F8F599]'} focus:outline-none focus:ring-2 focus:ring-gray-500`}
            required
          />
          {errors?.message && <p className="text-red-500 text-sm">{errors?.message}</p>}

      </div>

      <button
        type="button"
        onClick={handleSendEmail}
        className="block font-clash font-medium rounded-full uppercase transition-all duration-250 ease-in-out bg-white text-black py-4 px-8 duration-300 hover:bg-gray-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
