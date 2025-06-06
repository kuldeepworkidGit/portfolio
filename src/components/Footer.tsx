
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-purple-500/20 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <motion.div
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Alex Chen
            </motion.div>
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>

          <div className="flex space-x-6">
            <motion.a
              href="#home"
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Back to Top
            </motion.a>
            <motion.a
              href="mailto:alex.chen@example.com"
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Email Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-500 text-xs">
            Designed & developed with 💜 by Alex Chen
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
