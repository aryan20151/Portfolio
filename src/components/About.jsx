import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Full-Stack Web Development',
      description: 'React, Node.js, Express, MongoDB, EJS, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Database size={32} />,
      title: 'Backend & APIs',
      description: 'REST APIs, MongoDB Atlas, Mongoose',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Palette size={32} />,
      title: 'CMS & Platforms',
      description: 'WordPress, Shopify, Elementor, Custom Themes',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Technologies',
      description: 'HTML5, CSS3, JavaScript,JSON',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Real-Time Apps',
      description: 'Socket.io, WebRTC, Chat Apps, Video Streaming',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Zap size={32} />,
      title: 'Projects & Internships',
      description: 'UniTalk, Weather App, Navodita InfoTech,Roi Minds',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
           I'm a full-stack MERN developer passionate about building real-time, dynamic web apps. I've built projects like UniTalk, a university-based video chat platform using Socket.io and WebRTC, and a weather app during my internship at Navodita InfoTech. With experience as a Junior Web Developer, I enjoy blending clean UI with solid backend logic and constantly learn through hands-on projects.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative p-8 bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-600">
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {skill.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>

                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-8 p-8 bg-white dark:bg-dark-700 rounded-2xl shadow-lg">
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-primary-600 dark:text-primary-400"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                10+
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-primary-600 dark:text-primary-400"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                1+
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300">Internships</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-primary-600 dark:text-primary-400"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                5+
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300">Tech Stacks</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
