import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Wrench, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Terminal className="text-blue-500" />,
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="text-purple-500" />,
      skills: ['HTML5', 'CSS3', 'ReactJS', 'Tailwind CSS'],
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="text-emerald-500" />,
      skills: ['NodeJS', 'ExpressJS', 'Flask', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench className="text-orange-500" />,
      skills: ['Git', 'GitHub', 'Postman', 'Figma', 'Canva'],
    },
    {
      title: 'Core Concepts',
      icon: <Code2 className="text-indigo-500" />,
      skills: ['Data Structures', 'Algorithms', 'OOPS', 'DBMS'],
    },
    {
      title: 'Others',
      icon: <BrainCircuit className="text-pink-500" />,
      skills: ['Generative AI', 'Flutter', 'Business Systems'],
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-300 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-4 py-1.5 bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
