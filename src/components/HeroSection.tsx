import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiGit,
  SiGithub
} from 'react-icons/si';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    { icon: SiReact, name: "React Native", color: "#61DAFB" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express.js", color: "#FFFFFF" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { icon: SiRedux, name: "Redux Toolkit", color: "#764ABC" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-blue-400 text-lg font-medium"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Kuldeep Singh
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300"
            >
              React Native & MERN Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              I build high-performance mobile apps with React Native and scalable web backends using the MERN stack.
              I love working on clean UI, smooth UX, and production-quality code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>

              <motion.button
                onClick={() => {
                  window.open(
                    "https://docs.google.com/document/d/15cvymp-xdPccV790XfvUPJ-cNPpK6jhmrNKdDtkVmbE/edit?usp=sharing",
                    "_blank"
                  );
                }}
                className="px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 border-2 border-gray-600 rounded-lg font-semibold text-gray-300 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-8"
            >
              <p className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">
                Tech I work with
              </p>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="group relative"
                  >
                    <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-gray-800">
                      <tech.icon
                        className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                        style={{ color: tech.color }}
                      />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 py-1 rounded text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {tech.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30"
              ></motion.div>

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                <img
                  src="/lovable-uploads/6ccf50b9-ce85-42e4-a900-bbcc57e42d94.png"
                  alt="Kuldeep Singh"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 shadow-lg"
              >
                <div className="text-white text-center">
                  <p className="text-2xl font-bold">6+</p>
                  <p className="text-xs">Years Exp</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
