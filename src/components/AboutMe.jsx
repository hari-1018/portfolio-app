import React from "react";
import { FaBuilding, FaRegLightbulb, FaCalendarAlt, FaSchool, FaUniversity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import Button from "../styles/Connect";
import Download from "../styles/Download";

const AboutMe = () => {
  return (
    <section id="about" className="bg-white text-black py-10 sm:py-20 px-6 md:px-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Heading and Intro Line */}
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">#About <span className="font-extrabold">Me</span></h2>
          <p className="text-base sm:text-lg font-semibold mb-8">A Snapshot of My Story</p>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Image Section with Circular Motion Div and Buttons */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] flex items-center justify-center shadow-4xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black via-gray-500 to-white p-1.5 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>
            <img
              src="/Profile.jpeg"
              alt="About me illustration"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[340px] lg:h-[340px] rounded-full object-contain z-10"
            />
          </div>
          {/* Buttons Section */}
          <div className="mt-6 flex gap-4">
            <a href="#contact"><Button /></a>
            <a href="/Harikrishnan-K.pdf" download><Download/></a>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 p-4 rounded-lg shadow-xl bg-gray-100">
          <p className="mb-2 text-sm sm:text-base text-black">
            I'm a passionate MERN stack developer with a strong foundation in building modern, responsive web applications. With the experience in building dynamic, responsive web applications using technologies like React.js, Node.js, Express.js and Tailwind CSS, I focus on creating intuitive user experiences and scalable back-end systems. 
          </p>
          <p className="mb-4 text-sm sm:text-base text-black">
            I began my journey as a web developer in 2023, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col bg-gray-50 p-2 rounded-lg">
              <div className="flex items-start">
                <FaBuilding className="text-blue-600 text-xl mt-1 mr-2 sm:mr-3" />
                <div>
                  <h2 className="font-bold text-lg sm:text-xl">Experience</h2>
                  <h2 className="text-base sm:text-lg font-semibold text-yellow-700">Bridgeon Solutions</h2>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaLocationDot className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Kakkanchery, Malappuram, Kerala
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex items-center bg-yellow-100 ml-6 sm:ml-7 text-yellow-800 text-xs sm:text-sm px-3 py-2 sm:py-1 rounded-full font-medium w-fit">
                  <FaCalendarAlt className="w-4 h-4 mr-1" />
                  JUNE 2024 – PRESENT
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-2 ml-6 sm:ml-7">MERN Stack Developer Intern</h3>
                  <ul className="text-gray-700 text-sm md:text-base list-disc list-outside ml-6 sm:ml-7">
                    {[
                      "Developed 3 full-stack projects using the MERN stack, demonstrating proficiency in both front-end and back-end.",
                      "Collaborated with the team to implement features, resolve bugs, and optimize performance.",
                      "Handled version control with Git to efficiently track changes and maintain streamlined workflows.",
                    ].map((point, index) => (
                      <li key={index}>
                        {point}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>

            <div className="flex flex-col bg-gray-50 p-2 rounded-lg">
              <div className="flex items-start">
                <IoSchool className="text-blue-600 text-xl mt-1 mr-2 sm:mr-3" />
                <div>
                  <h2 className="font-bold text-lg sm:text-xl">Education</h2>
                  <h2 className="text-base sm:text-lg font-semibold text-yellow-700 mt-2 mb-2">B.Tech in CSE</h2>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <FaSchool className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        KMCT College of Engineering
                  </div>
                  <div className="md:flex items-center text-sm text-gray-600 hidden">
                    <FaUniversity className="w-4 h-4 mr-1" />
                        APJ Abdul Kalam Technological University
                  </div>
                  <div className="flex md:hidden items-center text-sm text-gray-600">
                    <FaUniversity className="w-4 h-4 mr-1" />
                        KTU
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex items-center bg-yellow-100 ml-6 sm:ml-7 text-yellow-800 text-sm px-3 py-2 sm:py-1 rounded-full font-medium w-fit">
                  <FaCalendarAlt className="w-4 h-4 mr-1" />
                  2020 – 2024
                </div>
              </div>

                <div className="ml-6 sm:ml-7 mt-4 sm:mt-16">
                  <h2 className="text-base sm:text-lg font-semibold text-yellow-700 mb-2">Diploma in CSE</h2>
                  <div className="hidden md:flex items-center text-sm text-gray-600 mb-2">
                    <FaSchool className="w-4 h-4 mr-1" />
                        Kerala Gov Polytechnic College, Westhill
                  </div>
                  <div className="flex md:hidden items-center text-sm text-gray-600 mb-2">
                    <FaSchool className="w-4 h-4 mr-1" />
                        KGPTC, Westhill
                  </div>
                  <div className="hidden sm:flex items-center text-sm text-gray-600">
                    <FaUniversity className="w-4 h-4 mr-1" />
                        State Board of Technical Education, Kerala
                  </div>
                  <div className="flex md:hidden items-center text-sm text-gray-600">
                    <FaUniversity className="w-4 h-4 mr-1" />
                        SBTE, Kerala
                  </div>
                </div>
                <div className="mt-3">
                    <div className="flex items-center bg-yellow-100 ml-6 sm:ml-7 text-yellow-800 text-sm px-3 py-2 sm:py-1 rounded-full font-medium w-fit">
                    <FaCalendarAlt className="w-4 h-4 mr-1" />
                    2018 – 2020
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;