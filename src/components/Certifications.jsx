import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: 'Web Development Training',
      issuer: 'Internshala',
      date: '2024',
      image: 'Internshala.png',
      description: 'Professional level certification for designing distributed systems on AWS.',
      credentialUrl: 'https://internshala.com',
    },

    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: '2023',
      image: 'Meta.png',
      description: 'Professional certificate in modern front-end development practices.',
      credentialUrl: 'https://developers.facebook.com',
    },
    {
      title: 'HTML, CSS & JS',
      issuer: 'Udemy',
      date: '2023',
      image: 'Udemy.png',
      description: 'Validated knowledge in building modern, user-focused web interfaces using latest front-end technologies.',
      credentialUrl: 'https://udemy.com',
    },

  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentCertifications = () => {
    const start = currentIndex * itemsPerPage;
    return certifications.slice(start, start + itemsPerPage);
  };

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
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-dark-800">
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
            <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Professional certifications that validate my expertise in various technologies 
            and development practices.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              onClick={prevSlide}
              className="p-3 bg-white dark:bg-dark-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} className="text-gray-600 dark:text-gray-300" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="p-3 bg-white dark:bg-dark-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentIndex === totalPages - 1}
            >
              <ChevronRight size={24} className="text-gray-600 dark:text-gray-300" />
            </motion.button>
          </div>

          {/* Certifications Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {getCurrentCertifications().map((cert, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-600">
                    {/* Certificate Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Award Icon */}
                      <div className="absolute top-4 right-4">
                        <motion.div
                          className="p-2 bg-white/90 rounded-full"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          <Award size={20} className="text-yellow-600" />
                        </motion.div>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium">
                          {cert.date}
                        </span>
                      </div>
                    </div>

                    {/* Certificate Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {cert.title}
                      </h3>
                      
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {cert.issuer}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {cert.description}
                      </p>
                      
                      {/* Credential Link */}
                      <motion.a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">View Credential</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 dark:bg-primary-400'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;