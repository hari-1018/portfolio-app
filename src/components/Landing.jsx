import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import RotatingText from "../styles/RotatingText";
import TrueFocus from "../styles/TrueFocus";
// import SplitText from "../styles/SplitText";

const Landing = () =>{
  //   const handleAnimationComplete = () => {
  //   console.log('Animation completed!');
  // };

  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

    return(
        <>
        <div id="home" className="flex flex-col md:flex-row items-center justify-center py-32 px-48 mt-6">
          {/* Left Section: Text Content */}
          <div className="md:w-1/2">
            {/* <h1 className="text-5xl font-bold leading-tight">
              Hello I’m <span className="text-black">Harikrishnan</span><br />
              Frontend Developer<br />
            </h1> */}
            {/* <BlurText
              text="Hello I'm Harikrishnan"
              delay={300}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl font-extrabold mb-2"
            /> */}
            {/* <SplitText
              text="Hello, I'm Harikrishnan!"
              className="text-5xl font-bold"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            /> */}

            <TrueFocus 
              sentence="I'm Harikrishnan!"
              className='bg-amber-500'
              manualMode={false}
              blurAmount={3}
              borderColor="black"
              animationDuration={1}
              pauseBetweenAnimations={1}
            />

            <div className="flex space-x-3 mt-3 mb-3">
              <RotatingText
                texts={['Full-Stack', 'Front-End', 'Web']}
                mainClassName="text-3xl text-black font-bold overflow-hidden"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
              <span className="text-3xl text-black font-bold">Developer</span>
            </div>

                        
            <p className="text-gray-600 text-lg">
              I'm Harikrishnan, a Full-Stack Developer with a strong focus on crafting clean, responsive, and user-friendly web applications. I specialize in building modern front-end interfaces using React and creating robust back-end services with Node.js and MongoDB. 
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
                <IoLogoGithub className="size-7" />
              </a>
              <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
                <IoLogoLinkedin className="size-7" />
              </a>
              <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
                <IoLogoInstagram className="size-7" />
              </a>
              <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
                <IoLogoWhatsapp className="size-7" />
              </a>
            </div>
          </div>

          {/* Right Section: Illustration Placeholder */}
          <div className="md:w-1/2 hidden md:flex justify-center mt-8 md:-mt-20">
            <img src="/Group 1000015839.png" alt="" />
          </div>
        </div>
        </>
    )
}

export default Landing;