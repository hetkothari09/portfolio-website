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

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="SKILL_MATRIX // SUBJECT: HET KOTHARI // PROFICIENCY: ADVANCED"
    >
      <div className="mb-20">
        <motion.h3 
          className="text-xl font-bold text-center mb-12 font-mono text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mr-2"
          >
            &gt;
          </motion.span>
          TECHNICAL_CAPABILITIES
        </motion.h3>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 h-full bg-[#0A101F]/80 border border-primary/20 rounded-lg relative overflow-hidden hover:border-primary/50 hover:shadow-[0_8px_20px_rgba(2,6,23,0.5)]"
            >
              <div className="flex items-center mb-8 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center text-primary mr-4">
                  {category.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary/90 font-mono">{category.title}</h4>
                  <div className="h-0.5 w-16 bg-primary/20 rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="flex flex-col items-center justify-center bg-black/40 p-2.5 rounded-lg border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(26,219,188,0.2)]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center h-8 mb-2">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] text-center font-mono text-slate-300 leading-tight">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-primary/10">
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-mono text-slate-500">ID: {category.id}</div>
                  <div className="text-[10px] font-mono text-primary/80 flex items-center">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    PROFICIENCY: HIGH
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div>
        <motion.h3 
          className="text-xl font-bold text-center mb-12 font-mono text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mr-2"
          >
            &gt;
          </motion.span>
          HUMAN_ATTRIBUTES
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-8 border border-primary border-opacity-20 relative overflow-hidden"
          whileHover={{ 
            boxShadow: "0 15px 30px rgba(2, 6, 23, 0.8)",
            borderColor: "rgba(26, 219, 188, 0.5)"
          }}
        >
          {/* Animated background effect */}
          <motion.div 
            className="absolute inset-0 bg-primary opacity-0 z-0"
            whileHover={{ opacity: 0.03 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Animated scan lines */}
          <motion.div 
            className="absolute left-0 w-full h-0.5 bg-primary opacity-10 z-0"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="flex items-center mb-8 relative z-10">
            <div className="w-12 h-12 rounded-md bg-primary bg-opacity-10 border border-primary border-opacity-30 flex items-center justify-center text-primary mr-4 relative">
              <FiHeart size={24} />
              <motion.div 
                className="absolute inset-0 border border-primary opacity-30 rounded-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary font-mono">Personal Attributes</h4>
              <div className="h-1 w-16 bg-primary opacity-20 rounded-full mt-1"></div>
            </div>
          </div>
          
          <motion.div
            className="flex flex-wrap gap-3 justify-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <motion.span
                  className="bg-black/40 text-primary/90 text-xs px-4 py-2 rounded-lg border border-primary/20 inline-block font-mono relative overflow-hidden hover:border-primary/50 hover:shadow-[0_0_15px_rgba(26,219,188,0.2)]"
                >
                  {skill}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <div className="text-xs font-mono text-slate-500">ID: SOFT_SKILLS</div>
              <div className="text-xs font-mono text-primary flex items-center">
                <motion.div 
                  className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                ASSESSMENT: EXCEPTIONAL
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills; 