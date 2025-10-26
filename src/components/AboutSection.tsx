
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
                I'm a skilled React Native developer with over 6 years of experience 
                creating cross-platform mobile applications with optimal performance 
                and exceptional user experience. Currently working at HCLTECH 
                in Noida, I specialize in JavaScript, Typescript and modern mobile development.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise includes building scalable applications, optimizing performance, 
                and deploying to both Play Store and App Store. I've successfully reduced 
                type errors by 95%, improved location accuracy, and achieved 20% app size 
                reduction while cutting Google Places API calls by 80%.
              </p>

              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">Experience</h4>
                  <p className="text-gray-300">6+ Years</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">Projects</h4>
                  <p className="text-gray-300">10+ Apps Built</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">Platforms</h4>
                  <p className="text-gray-300">Android & iOS</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8">
                <img
                  src="/lovable-uploads/6ccf50b9-ce85-42e4-a900-bbcc57e42d94.png"
                  alt="Kuldeep Singh"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Kuldeep Singh</h3>
                  <p className="text-purple-400">React Native Developer</p>
                  <p className="text-gray-400 text-sm mt-2">Noida, India</p>
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
