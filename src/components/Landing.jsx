import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import RotatingText from "../styles/RotatingText";
import TrueFocus from "../styles/TrueFocus";

const Landing = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
      <div 
        id="home" 
        className="flex flex-col md:flex-row items-center py-8 sm:py-16 md:py-32 px-8 md:px-16 lg:px-48 mt-16 sm:mt-20"
      >
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <TrueFocus 
            sentence="I'm Harikrishnan!"
            manualMode={false}
            blurAmount={3}
            borderColor="black"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />

          <div className="flex space-x-2 sm:space-x-3 mt-3 mb-3">
            <RotatingText
              texts={['Full-Stack', 'Front-End', 'Web']}
              mainClassName="text-xl sm:text-2xl md:text-3xl text-black font-bold overflow-hidden"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <span className="text-xl sm:text-2xl md:text-3xl text-black font-bold">Developer</span>
          </div>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            I'm Harikrishnan, a Full-Stack Developer with a strong focus on crafting clean, responsive, and user-friendly web applications. I specialize in building modern front-end interfaces using React and creating robust back-end services with Node.js and MongoDB. 
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-2 sm:space-x-3 mt-4 justify-center md:justify-start">
            <a href="https://github.com/hari-1018" className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <IoLogoGithub className="size-5 sm:size-6 md:size-7" />
            </a>
            <a href="https://www.linkedin.com/in/harikrishnan-k2001/" className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <IoLogoLinkedin className="size-5 sm:size-6 md:size-7" />
            </a>
            <a href="https://www.instagram.com/__hari__1810__/" className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <IoLogoInstagram className="size-5 sm:size-6 md:size-7" />
            </a>
            <a href="https://wa.me/+918086765870?text=Hello%20I%20have%20a%20question" className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <IoLogoWhatsapp className="size-5 sm:size-6 md:size-7" />
            </a>
          </div>
        </div>

        {/* Right Section: Illustration Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img 
            src="/Group 1000015839.png" 
            alt="Illustration" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Landing;