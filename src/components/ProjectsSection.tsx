import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "ZED - Ride Hailing App",
      description: "Comprehensive ride hailing application with cab booking, scheduling, and rhythm creation features. Integrated with AppsFlyer analytics, Stripe payments, and FreshChat support.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop",
      tech: ["React Native", "AppsFlyer", "Stripe", "DataDog", "Deep Linking"],
      playStore: "#",
      appStore: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Reporter App",
      description: "News reporting application enabling reporters to capture and submit news directly from their phones with camera, video recording, and Google Maps integration.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop",
      tech: ["React Native", "Camera API", "Google Maps", "Video Upload", "Text Editor"],
      playStore: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Daily Thanthi News",
      description: "Million-download news application with dark mode, social login, dynamic UI, iOS widgets, cricket scoreboard, and config-based UI pattern.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop",
      tech: ["React Native", "iOS Widgets", "Social Login", "Dynamic UI", "WebView"],
      playStore: "#",
      appStore: "#"
    },
    {
      id: 4,
      title: "Medical Dialogues",
      description: "Customized medical content platform for doctors and students with premium accounts, dynamic linking, and specialized medical articles.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop",
      tech: ["React Native", "Dynamic Linking", "Premium Features", "Medical Content"],
      playStore: "#",
      appStore: "#"
    },
    {
      id: 5,
      title: "Madhyamam Online",
      description: "Multi-language news app with dark mode, profile upload, social login, offline support, push notifications, and dynamic UI rendering.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop",
      tech: ["React Native", "Multi-language", "Offline Support", "Push Notifications"],
      playStore: "#",
      appStore: "#"
    },
    {
      id: 6,
      title: "Thanthi TV",
      description: "News and entertainment app with live TV streaming, zodiac content, and all features of Daily Thanthi News application.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&h=300&fit=crop",
      tech: ["React Native", "Live Streaming", "Entertainment Content", "TV Features"],
      playStore: "#",
      appStore: "#"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing mobile applications that demonstrate my expertise in React Native development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="p-2 rounded-full bg-gray-700 hover:bg-purple-600 text-gray-300 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                  </motion.a>
                  
                  {project.playStore && (
                    <motion.a
                      href={project.playStore}
                      className="p-2 rounded-full bg-gray-700 hover:bg-green-600 text-gray-300 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Smartphone size={16} />
                    </motion.a>
                  )}
                  
                  {project.appStore && (
                    <motion.a
                      href={project.appStore}
                      className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Smartphone size={16} />
                    </motion.a>
                  )}
                  
                  <motion.a
                    href={project.demo}
                    className="p-2 rounded-full bg-gray-700 hover:bg-purple-600 text-gray-300 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
