import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiTool, FiHeart, FiCpu, FiLayers } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: <FiCode size={24} />,
      skills: ['HTML 5', 'CSS', 'Javascript', 'Java', 'Bootstrap', 'Tailwind', 'React.js'],
      id: 'WEB_DEV'
    },
    {
      title: 'Python',
      icon: <FiLayers size={24} />,
      skills: ['Pandas', 'Numpy', 'Matplotlib', 'Flask', 'Django', 'PHP', 'Pytorch', 'Scikit-learn', 'Streamlit', 'Keras', 'Openai', 'TensorFlow', 'JINJA2'],
      id: 'PYTHON'
    },
    {
      title: 'Database',
      icon: <FiDatabase size={24} />,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'DBeaver', 'SQLite'],
      id: 'DATABASE'
    },
    {
      title: 'Cloud Computing',
      icon: <FiCloud size={24} />,
      skills: ['AWS EC2', 'MobaXterm'],
      id: 'CLOUD'
    },
    {
      title: 'Tools',
      icon: <FiTool size={24} />,
      skills: ['Git', 'Github', 'Postman', 'Docker', 'Tableau', 'Jira', 'Kali Linux', 'Ubuntu'],
      id: 'TOOLS'
    },
    {
      title: 'Other',
      icon: <FiCpu size={24} />,
      skills: ['C', 'C++', 'OpenAI API', 'Azure OpenAI', 'Fine-tuning'],
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 h-full border border-primary border-opacity-20 relative overflow-hidden"
              whileHover={{ 
                y: -10,
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
              
              {/* Animated scan line */}
              <motion.div 
                className="absolute left-0 w-full h-0.5 bg-primary opacity-10 z-0"
                initial={{ top: -10 }}
                whileHover={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-12 h-12 rounded-md bg-primary bg-opacity-10 border border-primary border-opacity-30 flex items-center justify-center text-primary mr-4 relative">
                  {category.icon}
                  <motion.div 
                    className="absolute inset-0 border border-primary opacity-30 rounded-md"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary font-mono">{category.title}</h4>
                  <div className="h-1 w-16 bg-primary opacity-20 rounded-full mt-1"></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex} 
                    className="bg-black text-primary text-xs px-3 py-1 rounded-md border border-primary border-opacity-30 hover:border-opacity-70 transition-all duration-300 font-mono"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(26, 219, 188, 0.1)",
                      borderColor: "rgba(26, 219, 188, 0.5)"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-primary border-opacity-10 relative z-10">
                <div className="flex justify-between items-center">
                  <div className="text-xs font-mono text-slate-500">ID: {category.id}</div>
                  <div className="text-xs font-mono text-primary flex items-center">
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
            className="flex flex-wrap gap-4 justify-center relative z-10"
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
                  className="bg-black text-primary text-xs px-4 py-2 rounded-md border border-primary border-opacity-30 inline-block font-mono relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(26, 219, 188, 0.3)",
                    borderColor: "rgba(26, 219, 188, 0.5)"
                  }}
                >
                  {/* Animated highlight effect */}
                  <motion.div 
                    className="absolute inset-0 bg-primary opacity-0"
                    whileHover={{ 
                      opacity: 0.1,
                      x: ['-100%', '100%'],
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  {skill}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8 pt-4 border-t border-primary border-opacity-10 relative z-10">
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