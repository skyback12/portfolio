import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, ExternalLink, Download,
  Code2, Cpu, Database, Globe, Sparkles, ArrowRight,
  ChevronDown, Moon, Sun, Briefcase, GraduationCap,
  Award, Target, Zap, Send
} from 'lucide-react';
import anime from 'animejs/lib/anime.es.js';

const ModernPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState({});

  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    anime({
      targets: '.hero-title',
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1200,
      easing: 'easeOutCubic',
      delay: 300
    });

    anime({
      targets: '.hero-subtitle',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      easing: 'easeOutCubic',
      delay: 600
    });

    anime({
      targets: '.hero-cta',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      easing: 'easeOutElastic(1, .8)',
      delay: 900
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      if (el.id) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const TypewriterText = () => {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = ['Building AI Solutions', 'Crafting Experiences', 'Solving Problems'];

    useEffect(() => {
      const currentRole = roles[roleIndex];
      let currentIndex = 0;
      let isDeleting = false;

      const type = () => {
        if (!isDeleting && currentIndex <= currentRole.length) {
          setText(currentRole.slice(0, currentIndex));
          currentIndex++;
          setTimeout(type, 100);
        } else if (!isDeleting && currentIndex > currentRole.length) {
          isDeleting = true;
          setTimeout(type, 2000);
        } else if (isDeleting && currentIndex >= 0) {
          setText(currentRole.slice(0, currentIndex));
          currentIndex--;
          setTimeout(type, 50);
        } else {
          isDeleting = false;
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      };

      type();
    }, [roleIndex]);

    return (
      <span className="text-accent-blue font-mono">
        {text}
        <span className="animate-pulse">|</span>
      </span>
    );
  };

  const projects = [
    {
      id: 1,
      title: 'AI Dress Studio',
      category: 'AI/ML',
      description: 'Multi-studio fashion-tech platform with Pattern Generation, Outfit Visualization, and AI Body Measurement',
      tech: ['Flask', 'React', 'Supabase', 'TensorFlow', 'OpenCV', 'OpenAI'],
      image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://drive.google.com/file/d/1uxsLV_FTCdDkOfMWZ-LazaLIAk7vgBNW/view',
      status: 'In Development'
    },
    {
      id: 2,
      title: 'Gesture Controlled Presentation',
      category: 'AI/ML',
      description: 'Hands-free presentation controller using real-time hand gesture recognition with computer vision',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://github.com/skyback12/Gesture-Controlled-Presentation-System',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Credit Card Fraud Detection',
      category: 'AI/ML',
      description: 'ML model achieving 96.3% accuracy using Logistic Regression & Random Forest for fraud detection',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://github.com/skyback12/Credit-Card-Fraud-Detection-Repo',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Production Dashboard',
      category: 'Full Stack',
      description: 'Real-time manufacturing monitoring dashboard with automated PDF reports and email alerts',
      tech: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Confidential'
    }
  ];

  const skills = {
    'AI/ML': ['Python', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Keras', 'NLP', 'Deep Learning'],
    'Frontend': ['React', 'Vite', 'TailwindCSS', 'JavaScript', 'TypeScript', 'shadcn/ui'],
    'Backend': ['Flask', 'FastAPI', 'Node.js', 'Express', 'MongoDB', 'Supabase'],
    'Tools': ['Git', 'Docker', 'Postman', 'VS Code', 'OpenAI API', 'Firebase']
  };

  const experiences = [
    {
      title: 'Full Stack Python Developer & AI/ML Intern',
      company: 'InStyle Retail Inc',
      period: 'Aug 2024 - Present',
      achievements: [
        'Leading development of AI Dress Studio - fashion-tech platform',
        'Built automated reporting pipelines using Python & Streamlit',
        'Integrated Stable Diffusion for pattern generation',
        'Implemented OpenCV-based measurement preprocessing pipeline'
      ],
      tech: ['Python', 'Flask', 'React', 'TensorFlow', 'OpenCV']
    },
    {
      title: 'Freelancer - Full Stack Developer',
      company: 'Fiverr',
      period: 'Oct 2024 - Present',
      achievements: [
        'Delivered custom Flask + React applications',
        'Built workflow automation solutions for clients',
        'API/database integrations across multiple domains'
      ],
      tech: ['Python', 'React', 'Flask', 'MongoDB']
    },
    {
      title: 'Data Analytics Intern',
      company: 'IBM SkillsBuild',
      period: 'Jun 2024 - Aug 2024',
      achievements: [
        'Analyzed large datasets and created dashboards',
        'Built visualizations for actionable business insights',
        'Data collection, cleaning, and reporting'
      ],
      tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy']
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-dark-bg text-white' : 'bg-white text-gray-900'}`}>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-dark-surface border border-dark-border hover:border-accent-blue transition-all duration-300 hover:scale-110"
      >
        {darkMode ? <Sun className="w-5 h-5 text-accent-blue" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-float"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="hero-title opacity-0">
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green bg-clip-text text-transparent">
              Aditya Malik
            </h1>
            <div className="text-2xl md:text-4xl font-heading mb-4">
              Full Stack + AI/ML Developer
            </div>
          </div>

          <div className="hero-subtitle opacity-0 mt-8">
            <div className="text-xl md:text-2xl text-gray-400 mb-8">
              <TypewriterText />
            </div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              B.Tech AI & ML Graduate (2025) specializing in building production-ready AI solutions
              with modern full stack development. Transforming complex problems into elegant applications.
            </p>
          </div>

          <div className="hero-cta opacity-0 flex flex-wrap gap-6 justify-center">
            <a
              href="#projects"
              className="group px-8 py-4 bg-accent-blue text-white rounded-xl font-semibold hover:shadow-glow-blue transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/CV.pdf"
              download
              className="px-8 py-4 border-2 border-accent-blue text-accent-blue rounded-xl font-semibold hover:bg-accent-blue hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-6">
            <a href="https://github.com/skyback12" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full border border-dark-border hover:border-accent-blue hover:scale-110 transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/aditya-malik-946a61253" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full border border-dark-border hover:border-accent-blue hover:scale-110 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:adityamalik081203@gmail.com"
               className="p-3 rounded-full border border-dark-border hover:border-accent-blue hover:scale-110 transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-accent-blue" />
        </div>
      </section>

      {/* About Section - Bento Grid */}
      <section id="about" ref={aboutRef} data-animate className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="md:col-span-2 md:row-span-2 p-8 bg-dark-surface border border-dark-border rounded-2xl hover:border-accent-blue transition-all duration-300 hover:shadow-glow-blue group">
              <Sparkles className="w-12 h-12 text-accent-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-heading font-bold mb-4">Bridging AI & Development</h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-6">
                I'm a B.Tech Artificial Intelligence & Machine Learning graduate (GGSIPU, 2025),
                currently working as a Full Stack Python Developer & AI/ML Intern. I specialize in
                building AI-powered, end-to-end applications that bridge machine learning with modern full stack development.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                As a Fiverr Freelancer, I deliver projects in full stack development and workflow automation.
                My goal is to create solutions that not only work in theory but scale in real-world production.
              </p>
            </div>

            {/* Stats Card */}
            <div className="p-8 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 border border-accent-blue/30 rounded-2xl hover:scale-105 transition-all">
              <Target className="w-10 h-10 text-accent-blue mb-4" />
              <div className="text-4xl font-bold text-accent-blue mb-2">15+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>

            {/* Quick Info Card */}
            <div className="p-8 bg-dark-surface border border-dark-border rounded-2xl hover:border-accent-green transition-all hover:shadow-glow-green">
              <GraduationCap className="w-10 h-10 text-accent-green mb-4" />
              <div className="text-xl font-semibold mb-2">Education</div>
              <div className="text-gray-400 text-sm">B.Tech AI & ML</div>
              <div className="text-gray-500 text-sm">GGSIPU, 2025</div>
            </div>

            {/* Skills Preview */}
            <div className="md:col-span-2 p-8 bg-dark-surface border border-dark-border rounded-2xl hover:border-accent-purple transition-all hover:shadow-glow-purple">
              <Zap className="w-10 h-10 text-accent-purple mb-4" />
              <h4 className="text-xl font-semibold mb-4">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'React', 'TensorFlow', 'Flask', 'OpenCV', 'MongoDB', 'OpenAI API'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-dark-bg rounded-lg text-sm border border-dark-border hover:border-accent-purple transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Location Card */}
            <div className="p-8 bg-gradient-to-br from-accent-green/10 to-accent-blue/10 border border-accent-green/30 rounded-2xl hover:scale-105 transition-all">
              <Globe className="w-10 h-10 text-accent-green mb-4" />
              <div className="text-xl font-semibold mb-2">Location</div>
              <div className="text-gray-400">Delhi, India</div>
              <div className="text-sm text-accent-green mt-2">Open to Remote</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-animate className="py-24 px-6 bg-dark-surface/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-8 bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Showcasing AI-powered applications, full stack solutions, and innovative projects
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'AI/ML', 'Full Stack', 'Web Apps'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-accent-blue text-white shadow-glow-blue'
                    : 'bg-dark-surface border border-dark-border hover:border-accent-blue'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-dark-surface border border-dark-border rounded-2xl overflow-hidden hover:border-accent-blue transition-all duration-500 hover:shadow-glow-blue hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60"></div>
                  <span className="absolute top-4 right-4 px-3 py-1 bg-accent-blue rounded-full text-xs font-semibold">
                    {project.status}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-sm text-accent-green mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-dark-bg rounded-lg text-xs border border-dark-border">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-dark-bg rounded-lg text-xs border border-dark-border">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-green transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" data-animate className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-accent-purple to-accent-green bg-clip-text text-transparent">
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, techs], index) => (
              <div
                key={category}
                className="p-8 bg-dark-surface border border-dark-border rounded-2xl hover:border-accent-blue transition-all duration-300 hover:shadow-glow-blue hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  {category === 'AI/ML' && <Cpu className="w-8 h-8 text-accent-blue" />}
                  {category === 'Frontend' && <Code2 className="w-8 h-8 text-accent-green" />}
                  {category === 'Backend' && <Database className="w-8 h-8 text-accent-purple" />}
                  {category === 'Tools' && <Sparkles className="w-8 h-8 text-accent-blue" />}
                  <h3 className="text-2xl font-bold">{category}</h3>
                </div>

                <div className="space-y-3">
                  {techs.map((tech) => (
                    <div
                      key={tech}
                      className="px-4 py-3 bg-dark-bg rounded-xl border border-dark-border hover:border-accent-blue transition-all hover:translate-x-2 cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" data-animate className="py-24 px-6 bg-dark-surface/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-12 border-l-2 border-accent-blue"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-accent-blue border-4 border-dark-bg"></div>

                <div className="bg-dark-surface border border-dark-border rounded-2xl p-8 hover:border-accent-blue transition-all duration-300 hover:shadow-glow-blue">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-accent-blue">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-lg text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-gray-400">
                        <span className="text-accent-green mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-dark-bg rounded-lg text-sm border border-dark-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-center mb-8 bg-gradient-to-r from-accent-green to-accent-purple bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:adityamalik081203@gmail.com"
              className="p-8 bg-dark-surface border border-dark-border rounded-2xl hover:border-accent-blue transition-all hover:shadow-glow-blue group"
            >
              <Mail className="w-12 h-12 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">adityamalik081203@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-malik-946a61253"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-dark-surface border border-dark-border rounded-2xl hover:border-accent-blue transition-all hover:shadow-glow-blue group"
            >
              <Linkedin className="w-12 h-12 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me professionally</p>
            </a>

            <a
              href="https://github.com/skyback12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-dark-surface border border-dark-border rounded-2xl hover:border-accent-green transition-all hover:shadow-glow-green group"
            >
              <Github className="w-12 h-12 text-accent-green mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">Check out my code & projects</p>
            </a>

            <a
              href="https://www.fiverr.com/s/lj29pDa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-dark-surface border border-dark-border rounded-2xl hover:border-accent-green transition-all hover:shadow-glow-green group"
            >
              <Briefcase className="w-12 h-12 text-accent-green mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Fiverr</h3>
              <p className="text-gray-400 text-sm">Hire me for freelance work</p>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              📍 Based in Delhi, India • Open to Remote Opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-dark-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Designed & Built by Aditya Malik with React + TailwindCSS
          </p>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
