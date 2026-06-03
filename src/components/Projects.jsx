import { motion } from 'framer-motion';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-slate-50/50 dark:bg-slate-950/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-400/10 px-3 py-1 rounded-md">
                  {project.topic}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 dark:text-white">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Technology Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/Srilakshmi-06"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
          >
            See more project on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
