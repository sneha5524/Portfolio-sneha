import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  Palette,
  Globe,
  GraduationCap,
  Award,
  User,
  Briefcase,
  Heart,
  Music,
  Search,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "E-Commerce Shopping Page",
      description: "Built a fully functional and responsive e-commerce website using HTML and CSS with modern design principles and user-friendly interface.",
      tech: ["HTML", "CSS", "Responsive Design"],
      icon: <Globe className="w-6 h-6" />,
      link: "https://e-commerce-shoping-page.vercel.app/"
    },
    {
      title: "Animal Haven",
      description: "Designed a mobile- and desktop-friendly website to provide a smooth user experience using only HTML and CSS with focus on accessibility.",
      tech: ["HTML", "CSS", "Mobile-First Design"],
      icon: <Heart className="w-6 h-6" />,
      link: "https://animal-haven-p9ea.vercel.app/"
    },
    {
      title: "Image Gallery Clone",
      description: "Created an interactive image gallery project using HTML, CSS, and JavaScript. Practiced layout styling and dynamic interactions.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: <Palette className="w-6 h-6" />,
      link: "https://cloning-project-as8jgkl5q-sneha5524s-projects.vercel.app/"
    }
  ];

  const skills = [
    { name: "HTML", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "CSS", level: 85, icon: <Palette className="w-5 h-5" /> },
    { name: "JavaScript", level: 80, icon: <Code className="w-5 h-5" /> },
    { name: "Responsive Design", level: 85, icon: <Globe className="w-5 h-5" /> },
    { name: "Git & GitHub", level: 75, icon: <Github className="w-5 h-5" /> }
  ];

  const education = [
    {
      degree: "School of Programming",
      institution: "NavGurukul Foundation for Social Welfare",
      location: "Pune",
      icon: <Code className="w-5 h-5" />
    },
    {
      degree: "Bachelor of Science",
      institution: "Gondwana University",
      location: "Gadchiroli",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "High School",
      institution: "Jilla Parishad High School",
      location: "Gadachiroli",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  const certifications = [
    { name: "General AI", provider: "GUVI", icon: <Award className="w-5 h-5" /> },
    { name: "Introduction to Git and GitHub", provider: "Google", icon: <Github className="w-5 h-5" /> }
  ];

  const hobbies = [
    { name: "Singing", icon: <Music className="w-5 h-5" /> },
    { name: "Helping Others", icon: <Heart className="w-5 h-5" /> },
    { name: "Exploring New Things", icon: <Search className="w-5 h-5" /> }
  ];

  return (
    <Routes>
      <Route path="/resume" element={<Navigate to="https://docs.google.com/document/d/1h2I8FLRlOW4u3TrikLd5v2I6w12hF81T_4h-pKg8-0c/edit?usp=sharing" replace />} />
      <Route path="/" element={
        <div className="min-h-screen bg-gray-50">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-800">Sneha Chaudhari</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                SC
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
                Sneha Chaudhari
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A passionate Web Developer from Pune, Maharashtra, dedicated to creating beautiful, 
              responsive websites and continuously learning new technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </button>
            </div>
            <div className="mt-16 animate-bounce">
              <ChevronDown className="w-6 h-6 mx-auto text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Creative & Detail-Oriented Developer
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a creative and detail-oriented Web Developer based in Pune, Maharashtra. 
                I'm passionate about building responsive, user-friendly websites and continuously 
                learning new technologies.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With strong foundational skills in HTML, CSS, and JavaScript, I enjoy working on 
                real-world projects that improve my problem-solving and design abilities. I believe 
                in creating web experiences that are both beautiful and functional.
              </p>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">My Hobbies</h4>
                <div className="flex flex-wrap gap-4">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                      <div className="text-blue-600">{hobby.icon}</div>
                      <span className="text-gray-700">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl">
                <User className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Problem Solver</h4>
                <p className="text-sm text-gray-600">
                  I enjoy tackling complex challenges and finding creative solutions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl">
                <Briefcase className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Team Player</h4>
                <p className="text-sm text-gray-600">
                  Strong communication and teamwork skills for collaborative projects.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                <Code className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Code Quality</h4>
                <p className="text-sm text-gray-600">
                  Committed to writing clean, maintainable, and efficient code.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                <Globe className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Responsive Design</h4>
                <p className="text-sm text-gray-600">
                  Creating websites that work perfectly on all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-blue-600">{skill.icon}</div>
                        <span className="font-semibold text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Communication", icon: <User className="w-5 h-5" /> },
                  { name: "Teamwork", icon: <Heart className="w-5 h-5" /> },
                  { name: "Problem Solving", icon: <Search className="w-5 h-5" /> },
                  { name: "Time Management", icon: <Briefcase className="w-5 h-5" /> }
                ].map((skill, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                    <div className="text-blue-600 mb-3 flex justify-center">{skill.icon}</div>
                    <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
                      <div className="text-blue-600">{cert.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.provider}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="p-6">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 mt-1">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about web development!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:snehachaudhari24@navgurukul.org" className="text-blue-600 hover:text-blue-700">
                      snehachaudhari24@navgurukul.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:8830433436" className="text-blue-600 hover:text-blue-700">
                      +91 8830433436
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/sneha-chaudhari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/sneha5524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Sneha Chaudhari</h3>
            <p className="text-gray-400 mb-6">Web Developer | Problem Solver | Creative Thinker</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:snehachaudhari24@navgurukul.org" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:8830433436" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/sneha-chaudhari/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/sneha5524" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2024 Sneha Chaudhari. Designed and built with ❤️ in Pune, Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
      } />
    </Routes>
  );
}

export default App;