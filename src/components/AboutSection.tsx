
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate mobile app developer with over 5 years of experience 
                creating innovative and user-friendly applications for iOS and Android platforms. 
                My expertise spans across React Native, Flutter, and native development.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in building scalable, performant mobile applications that 
                deliver exceptional user experiences. From concept to deployment, I handle 
                the entire development lifecycle with attention to detail and best practices.
              </p>

              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">Experience</h4>
                  <p className="text-gray-300">5+ Years</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">Projects</h4>
                  <p className="text-gray-300">50+ Completed</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">Platforms</h4>
                  <p className="text-gray-300">iOS & Android</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Alex Chen"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Alex Chen</h3>
                  <p className="text-purple-400">Senior Mobile Developer</p>
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl"
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
