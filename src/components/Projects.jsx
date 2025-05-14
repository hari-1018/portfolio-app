import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: '01.',
      title: 'Intellecta - AI Powered Learning System',
      description: "An AI-powered learning platform built with the MERN stack and TypeScript through collaborative teamwork. Focuses on students aged 5 to 18, it uses a microservices architecture for scalability and efficient service management. Utilize the Gemini 1.5 Pro model to analyze user initial assessments and generate personalized learning paths based on each student’s age, potential, strengths, and weaknesses making the learning experience more focused and effective.",
      image: "/intellecta.jpg",
      githubLink: "https://github.com/hari-1018/intellecta.git",
    },
    {
      id: '02.',
      title: 'Doctime - Doctor Appointment Scheduling System',
      description: "A Doctor Appointment Scheduling System built with MERN stack. The application includes three modules: user, doctor, and a admin. The platform allows users to register via their Google Authentication or traditional email & password and after successful login, users can browse doctors based on specialization, view their profiles, check availability, and schedule appointments at their preferred time and date and also pay the consultation fee through online using Razorpay.",
      image: "/doctime.png",
      githubLink: "https://github.com/hari-1018/DOCTIME.git",
    },
    {
      id: '03.',
      title: 'Baby Buds - E Commerce Platform',
      description: "BabyBuds is an e-commerce platform designed for purchasing a wide range of baby products including clothing, medicines, nutritional food items, and care essentials. The application is built with React.js and Tailwind CSS on the frontend, with a backend powered by Node.js, Express.js, and MongoDB as the database. The platform offers a seamless shopping experience, allowing users to browse products, add them to a cart, and complete their purchases effortlessly.",
      image: "/babybuds.png",
      githubLink: "https://github.com/hari-1018/FullStack_E-Commerce.git",
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-black text-white px-4 py-20 md:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-light mb-4 text-center animate-fade-in-down">
            #My <span className="text-white font-extrabold">Projects</span>
          </h1>
          <p className="text-base sm:text-lg font-semibold mb-8 animate-fade-in-down animation-delay-200">
            What I've Built
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/2 transform transition-transform duration-500 hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-bounce">{project.id}</h2>
                  <h3 className="text-xl md:text-3xl font-medium mb-2 animate-pulse">{project.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:text-justify">{project.description}</p>
                  <button className="p-2 border border-white rounded-full hover:bg-gray-800 transition-colors animate-pulse-slow">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <FaGithub size={20} className="transform transition-transform duration-300 hover:scale-125" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;