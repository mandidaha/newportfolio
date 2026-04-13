import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Lightbulb, Github, Filter } from "lucide-react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("dev");

  const devProjects = [
    {
      id: 1,
      title: "Bus Transportation Website",
      description:
        "Developed a full-featured bus ticket booking and delivery system using the MERN stack, including user registration/authentication, online booking, real-time schedules, employee management, and customer feedback.",
      tools: ["React", "Node.js", "Express", "Tailwind CSS"],
      image: "malshanmimg.png",
      link: "https://github.com/mandidaha/bustransportation",
      status: "Completed",
      type: "Dev Project",
    },
    {
      id: 2,
      title: "NovaKick",
      description:
        "NovaKick is a sleek mobile app for stylish shoe lovers and young athletes. It offers easy browsing of high-performance sports shoes, real-time new arrival alerts, and a Usage Summary with Achievements.",
      tools: ["Kotlin", "XML"],
      image: "novakick.png",
      link: "https://github.com/mandidaha/novakick",
      status: "Completed",
      type: "Dev Project",
    },
    {
      id: 3,
      title: "SaveMate",
      description:
        "Developed a personal finance tracking app in Android Studio using Kotlin, XML, and SharedPreferences. Features include transaction logging, monthly budget alerts, categorized spending insights, and a summary dashboard.",
      tools: ["Kotlin", "XML", "SharedPreferences"],
      image: "savemate.png",
      link: "https://github.com/mandidaha/savemate",
      status: "Completed",
      type: "Dev Project",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Built my personal portfolio website using React and Tailwind CSS, featuring a responsive design, modern UI, and smooth navigation to showcase my projects and skills.",
      tools: ["React", "Tailwind CSS"],
      image: "myportfolio.png",
      link: "https://www.mandiradahanayake.me/",
      status: "Completed",
      type: "Dev Project",
    },
    {
      id: 5,
      title: "Smart Campus Operations Hub",
      description:
        "Developed a full-stack web platform for university campus management using Spring Boot REST API and React. The system supports facility and asset bookings (rooms, labs, equipment), maintenance and incident ticketing with image attachments, role-based access control with OAuth 2.0 Google login, and real-time notifications. Built with a layered architecture, RESTful best practices, and CI/CD via GitHub Actions",
      tools: ["Spring Boot", "React", "REST API", "OAuth 2.0", "GitHub Actions"],
      image: "smartcampussiteimg2.png",
      link: "https://github.com/janidumadawa/Smart-Campus-Operations-Hub",
      status: "Completed",
      type: "Dev Project",
    },
  ];

  const designProjects = [
    {
      id: 1,
      title: "Travelora - Tourism Website",
      description:
        "Travelora is a tourism website designed for tourists. Through this website, users can book tour plans, explore popular attraction places, and rent vehicles for their trips.",
      tools: ["Figma", "Design"],
      image: "Travelora.png",
      link: "https://www.behance.net/gallery/246503641/Travelora-Tourism-website",
      status: "Completed",
      type: "Design Project",
    },
    {
      id: 2,
      title: "NexaTech - Tech Devices Website",
      description:
        "UI design focuses on a clean, modern, and user-friendly interface that simplifies browsing and shopping for tech devices. The color scheme is a blend of cool blues and vibrant accents.",
      tools: ["Figma", "Design"],
      image: "NexaTech.png",
      link: "https://www.behance.net/gallery/246494537/NexaTech-tech-devices-shopping-website",
      status: "Completed",
      type: "Design Project",
    },
    {
      id: 3,
      title: "GLOW BEAUTY - Beauty Products Website",
      description:
        "UI design offers a clean, vibrant, and visually appealing interface that makes shopping for skincare products effortless and enjoyable. Combines soft pastels with bold accents.",
      tools: ["Figma", "Design"],
      image: "GLOW BEAUTY.png",
      link: "https://www.behance.net/gallery/246493779/GLOW-BEAUTY-skincare-products-website",
      status: "Completed",
      type: "Design Project",
    },
    {
      id: 4,
      title: "Aesthetic Coffee Shop Website",
      description:
        "Focused on creating a smooth user experience with elegant typography, soft shadows, balanced layout, and modern interactions to make the digital experience feel warm and inviting.",
      tools: ["Figma", "Design"],
      image: "nordicbrew.png",
      link: "https://www.behance.net/gallery/246492359/Aesthetic-coffee-shop-website",
      status: "Completed",
      type: "Design Project",
    },
    {
      id: 5,
      title: "Smart Dashboard UI for Payroll System",
      description:
        "Designed a user-friendly payroll dashboard with key features like employee insights, payroll tracking, and smart reminders for EPF/ETF deadlines, improving efficiency and organization.",
      tools: ["Figma", "Design"],
      image: "payrollimg.png",
      link: "https://www.behance.net/gallery/246491195/Smart-Dashboard-UI-for-Payroll-System",
      status: "Completed",
      type: "Design Project",
    },
    {
      id: 6,
      title: "Soundora - Music App UI Design",
      description:
        "Designed Soundora, a sleek and intuitive music streaming app in Figma, featuring a clean interface, smooth navigation, and a modern, user-focused listening experience.",
      tools: ["Figma", "Design"],
      image: "soundora.png",
      link: "https://www.behance.net/gallery/232596081/UI-Concept-Music-App",
      status: "Completed",
      type: "Design Project",
    },
  ];

  const ProjectCard = ({ project }) => {
    const isDev = activeTab === "dev";
    const isGithub = project.link?.includes("github.com");

    const accent = {
      badge: "bg-purple-100/90 text-purple-800 dark:bg-purple-900/90 dark:text-purple-200",
      tool: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800",
      btn: "border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600",
      hover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    };

    return (
      <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-md overflow-hidden">
        <div className="relative overflow-hidden h-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100/90 text-green-800 backdrop-blur-sm">
              {project.status}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${accent.badge}`}>
              {project.type}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-5">
          <h3 className={`text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 ${accent.hover}`}>
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tools.map((tool, i) => (
              <span key={i} className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${accent.tool}`}>
                {tool}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            {project.status === "Completed" && project.link && project.link !== "#" ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  variant="outline"
                  className={`flex items-center gap-1.5 transition-all duration-300 transform hover:scale-105 text-xs ${accent.btn}`}
                >
                  {isGithub ? <Github size={14} /> : <ExternalLink size={14} />}
                  {isGithub ? "GitHub" : "Details"}
                </Button>
              </a>
            ) : project.status === "In Progress" ? (
              <Button size="sm" variant="outline" className="border-yellow-300 text-yellow-600 text-xs" disabled>
                <Clock size={14} className="mr-1" /> In Development
              </Button>
            ) : (
              <Button size="sm" variant="outline" className="border-gray-300 text-gray-600 text-xs" disabled>
                <Lightbulb size={14} className="mr-1" /> Coming Soon
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  const currentProjects = activeTab === "dev" ? devProjects : designProjects;

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            A collection of design and development projects that showcase my approach to solving real-world problems through thoughtful user experience design.
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setActiveTab("dev")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "dev"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900"
                  : "bg-transparent border border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30"
              }`}
            >
              {activeTab === "dev" && <Filter className="w-4 h-4 mr-2" />}
              Projects
            </Button>

            <Button
              onClick={() => setActiveTab("design")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "design"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900"
                  : "bg-transparent border border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30"
              }`}
            >
              {activeTab === "design" && <Filter className="w-4 h-4 mr-2" />}
              Design Projects
            </Button>
          </div>
        </div>

        {/* Project Grid */}
        <div
          key={activeTab}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12"
          style={{ animation: "fadeIn 0.4s ease-in-out" }}
        >
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 max-w-2xl mx-auto border border-purple-100 dark:border-purple-500/20">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Explore More Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Check out my complete portfolio on GitHub and Behance to see all my work and contributions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.behance.net/mandidd" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink size={15} className="mr-2" />
                  View All on Behance
                </Button>
              </a>
              <a href="https://github.com/mandidaha" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={15} className="mr-2" />
                  View All on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
