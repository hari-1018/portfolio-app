import { useState } from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoWhatsapp, IoIosSend } from "react-icons/io";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        website: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div id="contact" className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-20 md:px-8">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                <span className="block sm:inline">Thank you for your message! We'll get back to you soon.</span>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can I help?*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto flex font-semibold items-center justify-center gap-2 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Get In Touch
                <IoIosSend size={16} />
              </button>
            </form>
            
            <div className="mt-6 flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-600 hover:text-gray-900 bg-gray-200 p-2 rounded-full transition-colors">
                <IoLogoGithub size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 bg-gray-200 p-2 rounded-full transition-colors">
                <IoLogoLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 bg-gray-200 p-2 rounded-full transition-colors">
                <IoLogoInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 bg-gray-200 p-2 rounded-full transition-colors">
                <IoLogoWhatsapp size={20} />
              </a>
            </div>
          </div>
          
          {/* Info Section */}
          <div className="w-full md:w-1/2 bg-black text-white p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
            <p className="mb-8 text-gray-300 text-lg">
              Let's Talk for Something Special
            </p>
            
            <div className="space-y-3 text-lg">
              <p>harikrishnanclt2001@gmail.com</p>
              <p>8086765870</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="w-full max-w-6xl mx-auto mt-6 text-center text-gray-600 text-sm">
        <p>© {currentYear} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
}