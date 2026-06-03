import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack Intern',
      company: 'BYTES-MERN',
      duration: '1 Month',
      description: 'Worked on building full-stack web applications using MongoDB, Express.js, React, and Node.js. Focused on creating responsive UIs and RESTful APIs.',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-slate-50/50 dark:bg-slate-950/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Experience</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-blue-500 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900"></div>
              <div className="glass p-8 rounded-3xl">
                <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center">
                    <Briefcase className="mr-3 text-blue-500" size={24} />
                    {exp.title}
                  </h3>
                  <span className="px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4 tracking-wide">
                  {exp.company}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
