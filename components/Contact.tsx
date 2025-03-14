import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageSquare, FiTerminal, FiCpu } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
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
  
  // Generate random data points for the background
  const dataPoints = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5
  }));
  
  return (
    <SectionWrapper
      id="contact"
      title="Contact Me"
      subtitle="COMMUNICATION_PORTAL // SUBJECT: HET KOTHARI // STATUS: ONLINE"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="card p-8 h-full border border-primary border-opacity-20 relative overflow-hidden"
            whileHover={{ 
              boxShadow: "0 15px 30px rgba(2, 6, 23, 0.8)",
              borderColor: "rgba(26, 219, 188, 0.5)"
            }}
          >
            {/* Animated background effect */}
            <motion.div 
              className="absolute inset-0 bg-primary opacity-0 z-0"
              animate={{ opacity: [0, 0.02, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Data points */}
            {dataPoints.map((point, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  width: point.size,
                  height: point.size
                }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  delay: point.delay
                }}
              />
            ))}
            
            {/* Animated scan line */}
            <motion.div 
              className="absolute left-0 w-full h-0.5 bg-primary opacity-10 z-0"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-12 h-12 rounded-md bg-primary bg-opacity-10 border border-primary border-opacity-30 flex items-center justify-center text-primary mr-4 relative">
                <FiTerminal size={20} />
                <motion.div 
                  className="absolute inset-0 border border-primary opacity-30 rounded-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary font-mono">CONTACT_DATA</h3>
                <motion.div 
                  className="h-1 w-16 bg-primary opacity-20 rounded-full mt-1"
                  animate={{ width: ['4rem', '6rem', '4rem'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 font-mono text-sm relative z-10">
              <motion.span 
                className="text-primary inline-block mr-1"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &gt;
              </motion.span>
              Feel free to reach out to me for any questions, opportunities, or just to say hello. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <motion.div 
              className="space-y-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={itemVariants}
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={() => setHoveredContact('email')}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <div className="w-10 h-10 rounded-md bg-primary bg-opacity-10 flex items-center justify-center text-primary mr-4 border border-primary border-opacity-30 relative">
                  <FiMail size={18} />
                  {hoveredContact === 'email' && (
                    <motion.div 
                      className="absolute inset-0 border border-primary rounded-md"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">EMAIL_ADDRESS</p>
                  <a href="mailto:hetkothari.work@gmail.com" className="text-white hover:text-primary transition-colors font-mono text-sm group">
                    hetkothari.work@gmail.com
                    <motion.span 
                      className="block h-px w-0 bg-primary"
                      animate={hoveredContact === 'email' ? { width: '100%' } : {}}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={() => setHoveredContact('phone')}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <div className="w-10 h-10 rounded-md bg-primary bg-opacity-10 flex items-center justify-center text-primary mr-4 border border-primary border-opacity-30 relative">
                  <FiPhone size={18} />
                  {hoveredContact === 'phone' && (
                    <motion.div 
                      className="absolute inset-0 border border-primary rounded-md"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">COMM_CHANNEL</p>
                  <a href="tel:+919324119268" className="text-white hover:text-primary transition-colors font-mono text-sm">
                    +91 9324119268
                    <motion.span 
                      className="block h-px w-0 bg-primary"
                      animate={hoveredContact === 'phone' ? { width: '100%' } : {}}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={() => setHoveredContact('linkedin')}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <div className="w-10 h-10 rounded-md bg-primary bg-opacity-10 flex items-center justify-center text-primary mr-4 border border-primary border-opacity-30 relative">
                  <FiLinkedin size={18} />
                  {hoveredContact === 'linkedin' && (
                    <motion.div 
                      className="absolute inset-0 border border-primary rounded-md"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">PROFESSIONAL_NETWORK</p>
                  <a 
                    href="https://linkedin.com/in/het-kothari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors font-mono text-sm"
                  >
                    linkedin.com/in/het-kothari
                    <motion.span 
                      className="block h-px w-0 bg-primary"
                      animate={hoveredContact === 'linkedin' ? { width: '100%' } : {}}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={() => setHoveredContact('github')}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <div className="w-10 h-10 rounded-md bg-primary bg-opacity-10 flex items-center justify-center text-primary mr-4 border border-primary border-opacity-30 relative">
                  <FiGithub size={18} />
                  {hoveredContact === 'github' && (
                    <motion.div 
                      className="absolute inset-0 border border-primary rounded-md"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">CODE_REPOSITORY</p>
                  <a 
                    href="https://github.com/hetkothari09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors font-mono text-sm"
                  >
                    github.com/hetkothari09
                    <motion.span 
                      className="block h-px w-0 bg-primary"
                      animate={hoveredContact === 'github' ? { width: '100%' } : {}}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="mt-8 pt-4 border-t border-primary border-opacity-10 relative z-10">
              <div className="flex justify-between items-center">
                <div className="text-xs font-mono text-slate-500">RESPONSE_TIME: 24-48 HRS</div>
                <div className="text-xs font-mono text-primary flex items-center">
                  <motion.div 
                    className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  STATUS: ACTIVE
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="card p-8 border border-primary border-opacity-20 relative overflow-hidden">
            {/* Animated background effect */}
            <motion.div 
              className="absolute inset-0 bg-primary opacity-0 z-0"
              animate={{ opacity: [0, 0.02, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Animated scan line */}
            <motion.div 
              className="absolute left-0 w-full h-0.5 bg-primary opacity-10 z-0"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-12 h-12 rounded-md bg-primary bg-opacity-10 border border-primary border-opacity-30 flex items-center justify-center text-primary mr-4 relative">
                <FiSend size={20} />
                <motion.div 
                  className="absolute inset-0 border border-primary opacity-30 rounded-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary font-mono">MESSAGE_FORM</h3>
                <motion.div 
                  className="h-1 w-16 bg-primary opacity-20 rounded-full mt-1"
                  animate={{ width: ['4rem', '6rem', '4rem'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>
            
            {submitSuccess && (
              <motion.div 
                className="bg-black text-primary p-4 rounded-md mb-6 flex items-center border border-primary relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiSend className="mr-2" />
                <span className="font-mono text-sm">TRANSMISSION_SUCCESSFUL // AWAITING_RESPONSE</span>
                
                {/* Animated success indicator */}
                <motion.div 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            )}
            
            {submitError && (
              <motion.div 
                className="bg-black text-red-400 p-4 rounded-md mb-6 border border-red-500 font-mono text-sm relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-primary">&gt; ERROR:</span> {submitError}
                
                {/* Animated error indicator */}
                <motion.div 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            )}
            
            <motion.div 
              className="space-y-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="name" className="flex items-center text-slate-200 font-mono text-xs mb-2">
                  <FiUser className="mr-2 text-primary" />
                  NAME_IDENTIFIER
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-primary border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-white font-mono"
                    placeholder="Enter your name"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: formData.name ? '100%' : '0%' }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="email" className="flex items-center text-slate-200 font-mono text-xs mb-2">
                  <FiMail className="mr-2 text-primary" />
                  EMAIL_ADDRESS
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-primary border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-white font-mono"
                    placeholder="Enter your email"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: formData.email ? '100%' : '0%' }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="subject" className="flex items-center text-slate-200 font-mono text-xs mb-2">
                  <FiMessageSquare className="mr-2 text-primary" />
                  MESSAGE_SUBJECT
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-primary border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-white font-mono"
                    placeholder="Enter message subject"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: formData.subject ? '100%' : '0%' }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-8">
                <label htmlFor="message" className="flex items-center text-slate-200 font-mono text-xs mb-2">
                  <FiMessageSquare className="mr-2 text-primary" />
                  MESSAGE_CONTENT
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-primary border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-white font-mono"
                    placeholder="Enter your message"
                  ></textarea>
                  <motion.div 
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: formData.message ? '100%' : '0%' }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-black text-primary border border-primary rounded-md font-mono text-sm hover:bg-primary hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
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
              
              {isSubmitting ? (
                <>
                  <span className="mr-2">PROCESSING</span>
                  <motion.div 
                    className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </>
              ) : (
                <>
                  <FiSend className="mr-2" />
                  SEND_TRANSMISSION
                </>
              )}
            </motion.button>
            
            <div className="mt-4 text-xs text-slate-500 font-mono text-center relative z-10">
              <motion.span 
                className="text-primary inline-block mr-1"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &gt;
              </motion.span>
              All fields are required for successful transmission
            </div>
            
            {/* Terminal-like status indicator */}
            <div className="absolute bottom-2 right-2 text-xs font-mono text-primary opacity-50 flex items-center">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <FiCpu size={10} className="mr-1" />
              FORM_ACTIVE
            </div>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact; 