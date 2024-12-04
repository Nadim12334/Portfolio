import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { nameRegex } from '../constants/regularexpressions'
import { EMAIL_REGEX } from '../constants/regularexpressions'
const Contact = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: "" })); // Clear errors as the user types
  };

  const validateForm = () => {
    const { name, email, message } = credentials;
    const newErrors = {};

    if (!name || !nameRegex.test(name)) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
      // Handle form submission logic here (e.g., API call)
      setCredentials({ name: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
            >
              Let's Talk
            </h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:pnadim275@gmail.com" className="hover:underline">
                pnadim275@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>+917040545840</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>Satara, Maharashtra, India, 415002</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={credentials.name}
                  onChange={handleChange}
                  className={`w-full p-2 rounded bg-gray-800 border ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-green-400`}
                  placeholder="Enter Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  className={`w-full p-2 rounded bg-gray-800 border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-green-400`}
                  placeholder="Enter Your Email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={credentials.message}
                  onChange={handleChange}
                  className={`w-full p-2 rounded bg-gray-800 border ${
                    errors.message ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-green-400`}
                  rows="5"
                  placeholder="Enter Your Message"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;