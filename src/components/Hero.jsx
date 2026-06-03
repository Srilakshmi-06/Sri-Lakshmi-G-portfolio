import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Mail, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import Sri_Lakshmi_Resume from '../assets/Sri_Lakshmi_Resume.pdf';
import heroImage from '../assets/hero.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse transition-delay-700"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-medium text-blue-500 dark:text-blue-400 mb-4">
              Hello, I am
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
              Sri Lakshmi G
            </h1>
            <div className="text-2xl md:text-4xl font-semibold mb-8 text-slate-700 dark:text-slate-300 h-12">
              <span className="gradient-text">
                <Typewriter
                  words={['B.Tech CSBS Student', 'Frontend Developer', 'AI Enthusiast', 'Full Stack Developer']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>

            <p className="max-w-2xl mx-auto md:mx-0 text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              A passionate Computer Science and Business Systems student dedicated to building innovative software solutions.
              Merging technology and business to create impactful user experiences.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 transition-all"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={Sri_Lakshmi_Resume}
                download="Sri_Lakshmi_Resume.pdf"
                className="px-8 py-3 glass text-slate-900 dark:text-white rounded-full font-semibold shadow-lg transition-all"
              >
                Download CV
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-slate-600 dark:text-slate-400">
              <motion.a whileHover={{ y: -5, color: '#2563eb' }} href="https://github.com/Srilakshmi-06" target="_blank">
                <Github size={28} />
              </motion.a>
              <motion.a whileHover={{ y: -5, color: '#0077b5' }} href="https://www.linkedin.com/in/sri-lakshmi-g-2b128b330/" target="_blank">
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, color: '#ea4335' }}
                href="mailto:srjish0609@gmail.com"
                className="flex items-center gap-3 text-sm font-medium"
              >
                <Mail size={28} />
                <span className="text-slate-700 dark:text-slate-200">srjish0609@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[22rem] rounded-[2rem] overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
              <img src={heroImage} alt="Sri Lakshmi" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => document.getElementById('about').scrollIntoView()}
        >
          <ArrowDown className="text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
