import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoIosGitBranch } from "react-icons/io";
import { FaReact, FaNode, FaFigma  } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiRedux } from "react-icons/si";


const skills = [
  { name: 'HTML 5', icon: <IoLogoHtml5 size={35} /> },
  { name: 'CSS 3', icon: <IoLogoCss3 size={35} /> },
  { name: 'Javascript', icon: <IoLogoJavascript size={35} />   },
  { name: 'React.Js', icon: <FaReact size={35} />  },   
  { name: 'Redux', icon: <SiRedux size={35} />  },
//   { name: 'Git', icon: <IoIosGitBranch size={35} />  },
  { name: 'Node.Js', icon: <FaNode size={35} />  },
  { name: 'Express.Js', icon: <SiExpress size={35} />  },
  { name: 'MongoDB', icon: <SiMongodb size={35} />  },
  { name: 'Typescript', icon: <SiTypescript size={35} />  },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={35} />  },
  { name: 'Figma', icon: <FaFigma size={35} />  },
];

const Skills = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">#My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border text-black hover:bg-gray-900 hover:text-white w-32 h-32 flex flex-col items-center justify-center shadow-lg rounded-md transition hover:scale-105"
            >
              <div className="mb-2">{skill.icon}</div>
              <p className="font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
