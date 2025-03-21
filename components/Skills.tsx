import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiDatabase, FiCloud, FiTool, FiHeart, FiCpu, FiLayers, FiGrid, FiMonitor, FiServer
} from 'react-icons/fi';
import { 
  SiHtml5, SiCss3, SiJavascript, SiOpenjdk, SiBootstrap, SiTailwindcss, SiReact,
  SiPython, SiPandas, SiNumpy, SiFlask, SiDjango, SiPhp,
  SiPytorch, SiScikitlearn, SiStreamlit, SiKeras, SiOpenai, SiTensorflow,
  SiJinja, SiMysql, SiFirebase, SiSupabase, SiMongodb, SiPostgresql,
  SiAwsamplify, SiAmazonec2, SiGit, SiGithub, SiPostman, 
  SiDocker, SiTableau, SiJira, SiKalilinux, SiUbuntu, SiC, SiCplusplus,
  SiHuggingface
} from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import { BsWindowStack, BsMicrosoft } from 'react-icons/bs';
import SectionWrapper from './SectionWrapper';
import Section3DCard from './Section3DCard';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: <FiCode size={24} />,
      skills: [
        { name: 'HTML 5', icon: <SiHtml5 size={32} className="text-[#E34F26]" /> },
        { name: 'CSS', icon: <SiCss3 size={32} className="text-[#1572B6]" /> },
        { name: 'Javascript', icon: <SiJavascript size={32} className="text-[#F7DF1E]" /> },
        { name: 'Java', icon: <SiOpenjdk size={32} className="text-[#007396]" /> },
        { name: 'Bootstrap', icon: <SiBootstrap size={32} className="text-[#7952B3]" /> },
        { name: 'Tailwind', icon: <SiTailwindcss size={32} className="text-[#06B6D4]" /> },
        { name: 'React.js', icon: <SiReact size={32} className="text-[#61DAFB]" /> }
      ],
      id: 'WEB_DEV'
    },
    {
      title: 'Python',
      icon: <FiLayers size={24} />,
      skills: [
        { name: 'Pandas', icon: <SiPandas size={32} className="text-[#150458]" /> },
        { name: 'Numpy', icon: <SiNumpy size={32} className="text-[#013243]" /> },
        { name: 'Matplotlib', icon: <DiPython size={32} className="text-[#11557C]" /> },
        { name: 'Flask', icon: <SiFlask size={32} className="text-white" /> },
        { name: 'Django', icon: <SiDjango size={32} className="text-[#092E20]" /> },
        { name: 'PHP', icon: <SiPhp size={32} className="text-[#777BB4]" /> },
        { name: 'Pytorch', icon: <SiPytorch size={32} className="text-[#EE4C2C]" /> },
        { name: 'Scikit-learn', icon: <SiScikitlearn size={32} className="text-[#F7931E]" /> },
        { name: 'Streamlit', icon: <SiStreamlit size={32} className="text-[#FF4B4B]" /> },
        { name: 'Keras', icon: <SiKeras size={32} className="text-[#D00000]" /> },
        { name: 'Openai', icon: <SiOpenai size={32} className="text-white" /> },
        { name: 'TensorFlow', icon: <SiTensorflow size={32} className="text-[#FF6F00]" /> },
        { name: 'JINJA2', icon: <SiJinja size={32} className="text-[#B41717]" /> }
      ],
      id: 'PYTHON'
    },
    {
      title: 'Database',
      icon: <FiDatabase size={24} />,
      skills: [
        { name: 'MySQL', icon: <SiMysql size={32} className="text-[#4479A1]" /> },
        { name: 'Firebase', icon: <SiFirebase size={32} className="text-[#FFCA28]" /> },
        { name: 'Supabase', icon: <SiSupabase size={32} className="text-[#3ECF8E]" /> },
        { name: 'MongoDB', icon: <SiMongodb size={32} className="text-[#47A248]" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={32} className="text-[#4169E1]" /> },
        { name: 'DBeaver', icon: <FiDatabase size={32} className="text-white" /> },
        { name: 'SQLite', icon: <SiMysql size={32} className="text-[#003B57]" /> }
      ],
      id: 'DATABASE'
    },
    {
      title: 'Cloud Computing',
      icon: <FiCloud size={24} />,
      skills: [
        { name: 'AWS EC2', icon: <SiAmazonec2 size={32} className="text-[#FF9900]" /> },
        { name: 'MobaXterm', icon: <FiMonitor size={32} className="text-white" /> }
      ],
      id: 'CLOUD'
    },
    {
      title: 'Tools',
      icon: <FiTool size={24} />,
      skills: [
        { name: 'Git', icon: <SiGit size={32} className="text-[#F05032]" /> },
        { name: 'Github', icon: <SiGithub size={32} className="text-white" /> },
        { name: 'Postman', icon: <SiPostman size={32} className="text-[#FF6C37]" /> },
        { name: 'Docker', icon: <SiDocker size={32} className="text-[#2496ED]" /> },
        { name: 'Tableau', icon: <SiTableau size={32} className="text-[#E97627]" /> },
        { name: 'Jira', icon: <SiJira size={32} className="text-[#0052CC]" /> },
        { name: 'Kali Linux', icon: <SiKalilinux size={32} className="text-white" /> },
        { name: 'Ubuntu', icon: <SiUbuntu size={32} className="text-[#E95420]" /> }
      ],
      id: 'TOOLS'
    },
    {
      title: 'Other',
      icon: <FiCpu size={24} />,
      skills: [
        { name: 'C', icon: <SiC size={32} className="text-[#A8B9CC]" /> },
        { name: 'C++', icon: <SiCplusplus size={32} className="text-[#00599C]" /> },
        { name: 'OpenAI API', icon: <SiOpenai size={32} className="text-white" /> },
        { name: 'Azure OpenAI', icon: <BsMicrosoft size={32} className="text-[#0078D4]" /> },
        { name: 'Fine-tuning', icon: <SiOpenai size={32} className="text-white" /> },
        { name: 'RAG', icon: <FiLayers size={32} className="text-white" /> },
        { name: 'Hugging Face', icon: <SiHuggingface size={32} className="text-[#FFD21E]" /> }
      ],
      id: 'OTHER'
    }
  ];

  const softSkills = [
    'Organized', 'Teamwork', 'Problem Solving', 'Leadership Quality', 
    'Project Management', 'Communication', 'Trustworthy', 'Critical Thinking', 
    'Meeting Deadlines', 'Resilience'
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getIconSize = (screenSize: string): number => {
    const sizes = {
      xs: 22,   // Extra small screens
      sm: 26,   // Small screens
      md: 28,   // Medium screens
      lg: 32    // Large screens
    };
    return sizes[screenSize as keyof typeof sizes];
  };

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="SKILL_MATRIX // SUBJECT: HET KOTHARI // PROFICIENCY: ADVANCED"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category, i) => (
          <Section3DCard key={i} className="h-full">
            <div className="h-full">
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary bg-opacity-10 flex items-center justify-center text-primary border border-primary border-opacity-30">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary font-mono">{category.title.toUpperCase()}</h3>
                  <div className="h-1 w-16 bg-primary opacity-20 rounded-full mt-1"></div>
                </div>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    className="flex flex-col items-center justify-center p-2 rounded-lg text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <div className="mb-2">
                      {skill.icon}
                    </div>
                    <span className="text-xs text-slate-300 font-mono">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section3DCard>
        ))}
      </div>
      
      <Section3DCard>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-primary bg-opacity-10 flex items-center justify-center text-primary border border-primary border-opacity-30">
              <FiHeart size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary font-mono">HUMAN_ATTRIBUTES</h3>
              <div className="h-1 w-16 bg-primary opacity-20 rounded-full mt-1"></div>
            </div>
          </div>
          
          {/* Animated scan line */}
          <motion.div 
            className="absolute left-0 w-full h-0.5 bg-primary opacity-10 z-0"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-lg border border-primary/20 inline-block font-mono text-sm">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section3DCard>
    </SectionWrapper>
  );
};

export default Skills; 