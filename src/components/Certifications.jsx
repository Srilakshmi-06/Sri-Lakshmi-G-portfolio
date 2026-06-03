import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    'Python Certification',
    'Java Certification',
    'SQL Certification',
    'Generative AI Certification',
    'Flutter Development',
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Certifications</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex items-center space-x-4 group hover:bg-blue-500/5 transition-all"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Award size={24} className="text-blue-500 group-hover:text-white" />
              </div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">
                {cert}
              </div>
              <CheckCircle2 className="ml-auto text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
