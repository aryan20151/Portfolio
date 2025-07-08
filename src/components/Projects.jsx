import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Real-Time Chat Application',
      description: 'A responsive chat application built using React and Socket.io enabling instant messaging with real-time WebSocket communication, dynamic user avatars, and styled message alignment for sender and receiver.',
      image: 'ChatApp.png',
      tech: ['React', 'Socket.io', 'Express', 'Node.js', 'CSS'],
      github: 'https://github.com/aryan20151/ChatApp-React', 
      demo: 'https://chatapp-ek9c.onrender.com',       
      featured: true
    },
    {
      title: 'WorkWise – Job & Freelance Portal',
      description: 'A job and freelance platform built with REST APIs, allowing users to explore companies, upload resumes, and apply to jobs. Included session handling, application cart system, Multer for file uploads, and MongoDB for efficient data queries.',
      image: 'Workwise.png',
      tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'EJS', 'Multer', 'Bootstrap'],
      github: 'https://github.com/aryan20151/Workwise',
      demo: '147.93.107.44:5001/login',
      featured: true,
    },
    {
      title: 'Weather Forecasting Web App',
      description: 'Created a clean, responsive weather forecasting app using third-party weather APIs. Displayed real-time weather conditions including temperature, humidity, and wind speed based on the user\'s city input. Used async/await functions for data fetching and implemented strong error handling for smoother performance on all devices.',
      image: 'weather.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      github: 'https://github.com/aryan20151/weather-forecast-app',
      demo: 'https://weather-forecating.vercel.app/',
      featured: false,
    },
    {
      title: 'Tic‑Tac‑Toe Web App',
      description: 'An advanced two-player Tic‑Tac‑Toe game featuring dynamic board size and custom win conditions chosen by players. Includes smooth animations, real-time win/tie detection logic, and a clean, interactive UI for enhanced user engagement.',
      image: 'Tic-Tac-Toe.png',
      tech: ['React', 'Custom CSS'],
      github: 'https://github.com/aryan20151/Tic-Tac-Toe-Advanced',
      demo: 'https://tictactoearyan.vercel.app/',
      featured: true,
    },
    {
      title: 'UniTalk – Real-Time University Chat & Video Platform',
      description: 'A student communication platform with real-time text and video chat using WebRTC and Socket.io. Included student ID login, full mobile support, and better error handling through smart validations and UX improvements.',
      image: 'unitalk.png',
      tech: ['HTML', 'CSS','Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebRTC'],
      github: 'https://github.com/aryan20151/video-call-app',
      demo: 'https://modern-meet.vercel.app',
      featured: true,
    },
    {
      title: 'Crypto Tracker App',
      description: 'A responsive crypto dashboard built using React and TypeScript with live data from CoinGecko API. Includes real-time search, dynamic styling based on price changes, and a clean responsive UI.',
      image: 'Crypto.png',
      tech: ['React', 'TypeScript', 'CoinGecko API', 'Custom CSS'],
      github: 'https://github.com/aryan20151/crypto',
      demo: 'https://crypto-tracker-aryan.vercel.app/',
      featured: false,
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`group relative ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-600">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-900 dark:text-white rounded-full font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
