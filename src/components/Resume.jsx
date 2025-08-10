import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'Software Intern',
      company: '5bix It Solutions',
      location: 'Mohali',
      period: 'Present',
      description: [
        'Undergoing training in core web development technologies including Git, GitHub, JavaScript, React, and Redux',
        'Learning to consume and integrate REST APIs for dynamic web applications',
        'Building a strong foundation in modern front-end development practices',
        'Collaborating on code version control and workflow management using Git and GitHub'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Navodita InfoTech',
      location: 'Remote',
      period: 'March 2025 – April 2025',
      description: [
        'Successfully completed an online internship building a weather forecasting application',
        'Used external APIs to fetch real-time weather data',
        'Designed responsive UI to display city-based weather details like temperature, humidity, and wind speed',
        'Focused on clean code, asynchronous API handling, and improving user experience across devices'
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      university: 'Lovely Professional University',
      location: 'Punjab',
      period: '2022 - 2025',
      description: 'Graduated from Lovely Professional University with a BCA, specializing in Web Development.',
    },
    {
      Intermedia: 'DAV Sr Sec Public School',
      Board: 'CBSE',
      location: 'Haryana',
      period: '2019 - 2020',
      description: 'Completed my intermediate education from DAV Sr Sec Public School.',
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="visible"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            My <span className="gradient-text">Resume</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            A comprehensive overview of my professional journey, skills, and achievements
            in software development and design.
          </motion.p>

          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {

              window.open('/CV React.pdf', '_blank');
            }}
          >
            <Download size={20} />
            Download PDF Resume
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div
              className="flex items-center gap-3 mb-8"
              variants={itemVariants}
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                <Briefcase size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </motion.div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full" />

                  <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h4>
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{job.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                      <span className="font-medium">{job.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div
              className="flex items-center gap-3 mb-8"
              variants={itemVariants}
            >
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <GraduationCap size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800"
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full" />

                  <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree} {edu.Intermedia}
                      </h4>
                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{edu.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                      <span className="font-medium">{edu.university} {edu.Board}</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Section */}
            <motion.div
              className="mt-12"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Core Skills
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'JavaScript',
                  'React Js',
                  'Node.js',
                  'MongoDB',
                  'Redux',
                  'Express',
                  'HTML/CSS',
                  'Responsive Design'
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-dark-800 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
