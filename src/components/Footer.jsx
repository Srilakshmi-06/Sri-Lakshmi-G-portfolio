const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold gradient-text mb-6">Sri Lakshmi G</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          Building the future of web and business systems, one line of code at a time.
        </p>
        <div className="flex justify-center space-x-8 mb-8 text-sm font-medium text-slate-500 dark:text-slate-400">
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
        <div className="text-slate-500 dark:text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Sri Lakshmi G. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
