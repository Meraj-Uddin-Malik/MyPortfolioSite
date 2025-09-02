"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaFigma,
  FaPhp,
  FaGithub,
  FaPython,
  FaDatabase,
  FaBootstrap,
  FaElementor,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiCsharp,
  SiLaravel,
  SiExpress,
  SiTailwindcss,
  SiJquery,
  SiWordpress,
  SiShopify,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiMicrosoft,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "As a Computer Science student, I’m eager to apply my skills in front-end development and UX design in a professional setting. Known for my quick learning, attention to detail, and enthusiasm, I’m ready to contribute to a dynamic team and grow within the industry.",
  info: [
    {
      feildName: "Name:",
      feildValue: "Meraj Uddin Malik",
    },

    {
      feildName: "Experiance:",
      feildValue: "4+ Years",
    },

    {
      feildName: "Phone:",
      feildValue: "+92-3002953272",
    },

    {
      feildName: "Email:",
      feildValue: "merajuddinmalilk136@gmail.com",
    },

    {
      feildName: "Nationality:",
      feildValue: "Pakistani",
    },
    {
      feildName: "Location:",
      feildValue: "Karachi",
    },
    {
      feildName: "Language:",
      feildValue: "English, Urdu",
    },

    {
      feildName: "Freelance:",
      feildValue: "Avaliable",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: " My Experiences",
  description:
    "As a Computer Science student, I’m eager to apply my skills in front-end development and UX design in a professional setting. Known for my quick learning, attention to detail, and enthusiasm, I’m ready to contribute to a dynamic team and grow within the industry while embracing great opportunities.",

  items: [

    {
      company: "ZEMIMAAS",
      position: "Shopify | Marketing Specialist.",
      location: "Karachi",
      duration: "2023 - 2024",
    },

    {
      company: "Interact CX",
      position: "Software Developer ",
      location: "Karachi",
      duration: "2022 - 2023",
    },

    {
      company: "Logicose Software",
      position: "Lead Generation Officer",
      location: "Karachi",
      duration: "2020 - 2022",
    },

    {
      company: "SOCOL",
      position: "Data Entry Officer",
      location: "Karachi",
      duration: "2019 - 2020",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Educations",
  description:
    "Completed comprehensive studies in relevant fields, gaining valuable knowledge, skills, and practical experience for professional and personal growth, enhancing analytical and problem-solving abilities.",

  items: [
    {
      institution: "Indus University",
      degree: "Bachelor of Computer Science",
      location: "Karachi",
      duration: "2021 - Present",
    },
    {
      institution: "Indus University",
      degree: "Certification MERN Stack",
      location: "Karachi",
      duration: "4 Weeks - 2024",
    },
    {
      institution: "Digi9",
      degree: "Certification Graphic Designing",
      location: "Karachi",
      duration: "2021 - 2022",
    },
    {
      institution: "PIAIC Initiative",
      degree: "Diploma AI Engineering",
      location: "Karachi",
      duration: "2018 - 2022",
    },
    {
      institution: "Aptech Learning",
      degree: "Certification Advanced Excel",
      location: "Karachi",
      duration: "2017 - 3 Days Workshop",
    },
    {
      institution: "Aptech Learning",
      degree: "Diploma Software Engineering",
      location: "Karachi",
      duration: "2017 - 2021",
    },
    {
      institution: "MTI College",
      degree: "Intermediate (FSC)",
      location: "Karachi",
      duration: "2014 - 2016",
    },
    {
      institution: "TUELC",
      degree: "English Language",
      location: "Karachi",
      duration: "2014 - 2015",
    },

    {
      institution: "Dawn Public Secondary School",
      degree: "Matric (SSC)",
      location: "",
      duration: "2004 - 2014",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Proactive learner skilled in various technologies. Proficient in problem-solving, and collaborating within divers teams to achieve project goals, with a focus on continuous improvement and innovation.",

  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiJquery />, name: "Jquery" },
    { icon: <FaNode />, name: "Node Js" },
    { icon: <SiExpress />, name: "Express Js" },
    { icon: <FaReact />, name: "React Js" },
    { icon: <SiNextdotjs />, name: "Next Js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiDart />, name: "Dart" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <SiLaravel />, name: "Laravel" },
    { icon: <SiCsharp />, name: "C#" },
    { icon: <FaDatabase />, name: "DataBase" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiAdobephotoshop />, name: "Photoshop" },
    { icon: <SiAdobeillustrator />, name: "Illustrator" },
    { icon: <SiShopify />, name: "Shopify" },
    { icon: <SiWordpress />, name: "WordPress" },
    { icon: <FaElementor />, name: "Elementor" },
    { icon: <SiMicrosoft />, name: "MS Office" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center pt-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Eduction</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-2-[600px] text-white/60 mx-auto xl:mx-0 text-left">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>{" "}
                            <p> {"-"}</p>{" "}
                            <p className="text-white/60">{item.location}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-2-[600px] text-white/60 mx-auto xl:mx-0 text-left">
                  {education.description}
                </p>

                <ScrollArea className="h-[440px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>{" "}
                            <p> {"-"}</p>{" "}
                            <p className="text-white/60">{item.location}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <ScrollArea className="h-[440px]">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold"> {skills.title}</h3>
                    <p className=" max-2-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="capitalize">
                                {skill.name}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {about.title}</h3>
                <p className=" max-2-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.feildName}</span>
                        <span className="text-lg">{item.feildValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
