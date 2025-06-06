
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Mobile Frameworks",
      skills: [
        { name: "React Native", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Flutter", level: 90, color: "from-cyan-400 to-cyan-600" },
        { name: "Swift (iOS)", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "Kotlin", level: 80, color: "from-purple-400 to-purple-600" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Firebase", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "MongoDB", level: 80, color: "from-green-500 to-green-700" },
        { name: "REST APIs", level: 95, color: "from-indigo-400 to-indigo-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95, color: "from-red-400 to-red-600" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-700" },
        { name: "AWS", level: 80, color: "from-orange-500 to-orange-700" },
        { name: "GraphQL", level: 85, color: "from-pink-400 to-pink-600" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS",
              "MongoDB", "GraphQL", "Redux", "TypeScript", "Git", "Docker"
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg text-purple-300 font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
