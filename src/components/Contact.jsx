import { motion } from 'framer-motion';
import { Mail, Send, ExternalLink, MapPin, Phone } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
            I'm always open to discussing new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl flex items-start space-x-6">
              <div className="p-4 bg-blue-500/10 rounded-2xl">
                <Mail className="text-blue-500" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-white mb-1">Email Me</h3>
                <p className="text-slate-600 dark:text-slate-400">srijish0609@gmail.com</p>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl flex items-start space-x-6">
              <div className="p-4 bg-purple-500/10 rounded-2xl">
                <Linkedin className="text-purple-500" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-white mb-1">LinkedIn</h3>
                <p className="text-slate-600 dark:text-slate-400">linkedin.com/in/sri-lakshmi-g-2b128b330/</p>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl flex items-start space-x-6">
              <div className="p-4 bg-emerald-500/10 rounded-2xl">
                <Github className="text-emerald-500" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-white mb-1">GitHub</h3>
                <p className="text-slate-600 dark:text-slate-400">github.com/Srilakshmi-06</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-0 transition-all outline-none dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-0 transition-all outline-none dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Collaboration"
                  className="w-full px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-0 transition-all outline-none dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-0 transition-all outline-none dark:text-white resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 transition-all"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
