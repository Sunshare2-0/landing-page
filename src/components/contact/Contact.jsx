import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    userType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-20">
      <div className="small-title text-center">
        <div className="small-title-container">
          <div className="left-dash text-[#FEA803] px-10 pt-1 inline">-</div>
          <h5 className="text-2xl text-[#FEA803] inline">Contact Us</h5>
          <div className="right-dash text-[#FEA803] px-10 inline">-</div>
        </div>
      </div>
      <div className="large-title pb-14 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Join the Clean Energy Movement
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Be among the first to trade solar energy in the Philippines. No cost. No risk. Just real impact.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full lg:max-w-2xl lg:mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location">
              Location
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="location"
              name="location"
              type="text"
              placeholder="City, Province"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-8">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="userType">
              Are you a:
            </label>
            <select
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="">Select your role</option>
              <option value="solar-owner">Solar Owner</option>
              <option value="consumer">Consumer</option>
              <option value="partner">Partner</option>
            </select>
          </div>
        </div>
        
        <div className="btn-container flex flex-wrap">
          <div className="w-full text-center">
            <button
              className="py-4 px-8 rounded-lg bg-[#FEA803] text-white font-semibold text-lg hover:bg-[#e69500] transition-colors duration-200"
              type="submit">
              Apply for Early Access
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
