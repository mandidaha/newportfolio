import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Palette, Download, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const texts = ["QA Engineer","UI / UX designer", "Frontend Developer", "Mobile App Developer", "Web Designer", "IT Suppoter"];

  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursor);
  }, []);

  useEffect(() => {
    const currentFullText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50/30 to-purple-100/40 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-0">
          <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <Code className="w-6 h-6 text-purple-500" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-1000">
          <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <Palette className="w-5 h-5 text-purple-500" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-bounce delay-500">
          <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="w-4 h-4 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Picture with enhanced styling */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-52 h-52 rounded-full bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                <img src="/profile_pic.jpg" alt="Mandira Dahanayake" className="absolute inset-0 w-full h-full object-cover object-center z-10 group-hover:scale-110 transition-transform duration-300 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-transparent"></div>
                {/* <span className="text-white text-5xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-300">MD</span> */}
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-purple-200/50 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-purple-300/30"></div>
            </div>
          </div>

          {/* Enhanced typography */}
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100/50 dark:bg-purple-900/50 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 dark:text-purple-300 font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              Available for internships
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mandira Dahanayake
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4">
              <span className="inline-block text-purple-600 dark:text-purple-400 font-semibold">
                Undergraduate at SLIIT
              </span>
            </div>

            {/* Typewriter Animation */}
            <div className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 h-8">
              <span className="text-purple-600 dark:text-purple-400 font-medium">
                {currentText}
              </span>
              <span className={`inline-block w-0.5 h-6 bg-purple-600 dark:bg-purple-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mb-6">
              <a href="https://github.com/mandidaha" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-300 hover:bg-purple-100 dark:border-purple-600 dark:hover:bg-purple-900"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/mandira-dahanayake-a17115367?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYX0Wz%2BRFSVai58WH3%2B1BIg%3D%3D" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-300 hover:bg-purple-100 dark:border-purple-600 dark:hover:bg-purple-900"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/_p_a_v_iii?igsh=ZW5vOXhrd3ZrNGg5&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-300 hover:bg-purple-100 dark:border-purple-600 dark:hover:bg-purple-900"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.behance.net/mandidd" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-300 hover:bg-purple-100 dark:border-purple-600 dark:hover:bg-purple-900"
                >
                  <span className="text-sm font-bold text-black dark:text-white">Be</span>
                </Button>
              </a>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            I am an undergraduate at SLIIT, following a{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">BSc (Hons) in Information Technology</span>,{" "}
            specializing in IT, graduating in 2027. Motivated to join a{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">forward-thinking company</span>{" "}
            as an intern where I can learn, contribute, and grow in the IT field.
          </p>

          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button onClick={() => scrollToSection("portfolio")} className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl group min-w-[200px]">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <a href="/Mandira' s Resume.pdf" download className="min-w-[200px]">
              <Button variant="outline" className="border-2 border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 w-full">
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
            </a>
          </div>

          {/* Stats or achievements */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3rd Year</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Student</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Collaborations (Team Projects)</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;