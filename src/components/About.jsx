import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Business Systems',
      institution: 'Sri Eshwar College of Engineering', 
      duration: '2024 - 2028',
      details: 'Current CGPA: 8.3 (Till 3rd Semester)',
    },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-slate-950/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">My Journey</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              I am a dedicated Computer Science and Business Systems (CSBS) student with a strong foundation in both 
              technical problem-solving and business fundamentals. I enjoy building web applications that are not only 
              functional but also visually appealing and user-centric.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
              My core interests lie in Full-Stack Development, Artificial Intelligence, and Data Structures. I love 
              tackling complex challenges and turning ideas into real-world applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                <MapPin size={20} className="text-blue-500" />
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                <GraduationCap size={20} className="text-blue-500" />
                <span>B.Tech Student</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-2 dark:text-white">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="glass p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{edu.degree}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
                  <span>{edu.duration}</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200">{edu.details}</span>
                </div>
              </div>
            ))}

            <div className="glass p-6 rounded-2xl">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2 flex items-center">
                <Award className="mr-2 text-yellow-500" /> Key Achievements
              </h3>
              <ul className="text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
                <li>LeetCode: 200+ Problems Solved</li>
                <li>SkillRack: 1500+ Problems Solved</li>
                <li>HackerRank: 3 Star in C</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
