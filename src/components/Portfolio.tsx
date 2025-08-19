
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Figma, Star, Clock, Lightbulb, Filter } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");


  const projects = [
    {
      id: 1,
      title: "Personal Finance Tracking Mobile App - SaveMate",
      description: "Developed a personal finance app in Android Studio using Kotlin, enabling users to add and categorize transactions, set monthly budgets with alerts, and view financial summaries. The app helps manage income, expenses, and savings efficiently through organized tracking and timely notifications.",
      tools: ["Android Studio", "Kotlin", "XML", "Mobile App"],
      image: "savemateimg.png",
      link: "https://github.com/mandidaha/savemate",
      status: "Completed",
      featured: false,
      category: "development",
      type: "Development Project"
    },
    {
      id: 2,
      title: "Shoe Ordering Mobile App - NovaKick",
      description: "Developed a dynamic shopping app in Android Studio with Kotlin, offering a seamless experience for browsing sports shoes, receiving release alerts, and tracking usage. Integrated secure payments (card, bank transfer, COD) to provide an intuitive, engaging platform for young athletes and teens.",
      tools: ["Android Studio", "Kotlin", "XML", "Figma", "Mobile App"],
      image: "novaimg.png",
      link: "https://github.com/mandidaha/novakick",
      status: "Completed",
      featured: false,
      category: "development",
      type: "Development Project"
    },
    {
      id: 3,
      title: "Bus Transportation Management System",
      description: "Developed a full-featured Bus Transportation Management System using the MERN stack, with modules for booking, employee tracking, vehicle assignment, feedback, and maintenance. Built RESTful APIs for smooth frontend-backend interaction and designed a clean, user-friendly UI. The system boosts operational efficiency and user satisfaction through real-time data and centralized dashboards.",
      tools: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Express"],
      image: "malshanimg.png",
      link: "https://github.com/mandidaha/bustransportation",
      status: "Completed",
      featured: false,
      category: "development",
      type: "Development Project"
    },
    {
      id: 4,
      title: "Shoe Ordering Mobile App Design",
      description: "Designed a modern, user-focused mobile shopping app in Figma for trendy sports shoes. Created intuitive flows for browsing, release alerts, usage tracking, and secure purchases. The design ensures a seamless, engaging experience for young athletes, kids, and teens, boosting engagement and transaction ease.",
      tools: ["Figma", "Design"],
      image: "kickimg.png",
      link: "https://www.figma.com/design/CJPE4tzkp4Rqfv27N2SbLJ/NovaKick-App-design?node-id=0-1&t=dk6fxD1rqpEg7rLE-1",
      status: "Completed",
      featured: false,
      category: "design",
      type: "Design Project"
    },
     {
      id: 5,
      title: "Food Ordering Mobile App UI (Self project)",
      description: "Designed a user-focused food ordering app in Figma, driven by user research and personas. Created wireframes and high-fidelity screens with clear menus, customizable orders, and smooth checkout. Emphasized responsive design and intuitive navigation to enhance engagement and simplify the ordering experience.",
      tools: ["Figma", "Design", "Prototyping"],
      image: "tastyimg.png",
      link: "https://www.behance.net/mandidd",
      status: "Ongiong",
      featured: false,
      category: "design",
      type: "Design Project"
    },
    {
      id: 6,
      title: "Tasks Management ",
      description: "A simple task app to organize and track daily, upcoming, and completed tasks with priorities and categories",
      tools: ["Figma", "Design", "Prototyping"],
      image: "taskspic.png",
      link: "https://www.behance.net/gallery/232827455/HabitMate-Task-Management-App-UI",
      status: "Completed",
      featured: false,
      category: "design",
      type: "Design Project"
    },
    {
      id: 7,
      title: "Coffee shop Website UI design",
      description: "Designed a modern and user-friendly coffee shop website using Figma, focusing on clean layouts, warm color palettes.",
      tools: ["Figma", "Design"],
      image: "coffeshop.png",
      link: "https://www.behance.net/gallery/232572189/Coffee-shop-we-design-Latte-Lane",
      status: "Completed",
      featured: false,
      category: "design",
      type: "Design Project"
    },
    ,
    {
      id: 8,
      title: "Music App UI design",
      description: "Created a sleek and engaging music app UI in Figma, featuring intuitive navigation, personalized playlists, and a modern visual style for an enjoyable listening experience",
      tools: ["Figma", "Design"],
      image: "musicapp.png",
      link: "https://www.behance.net/gallery/232596081/UI-Concept-Music-App",
      status: "Completed",
      featured: false,
      category: "design",
      type: "Design Project"
    },
    {
      id: 9,
      title: "UI/UX Design for Login & Registration Pages",
      description: "This Figma design features a clean, intuitive onboarding and authentication interface, with a welcoming splash screen and clear options to log in or sign up.",
      tools: ["Figma", "Design"],
      image: "login.png",
      link: "https://www.behance.net/gallery/232840429/UIUX-Design-for-Login-Registration-Pages",
      status: "Completed",
      featured: false,
      category: "design",
      type: "Design Project"
    },
    {
      id: 10,
      title: "Portfolio Website",
      description: "Built my personal portfolio website using React and Tailwind CSS, featuring a responsive design, modern UI, and smooth navigation to showcase my projects and skills.",
      tools: ["React", "Tailwind CSS"],
      image: "forsite2.png",
      link: "https://github.com/mandidaha",
      status: "Completed",
      featured: false,
      category: "development",
      type: "Development Project"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100/60 dark:bg-purple-900/60 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 dark:text-purple-300 font-medium text-sm mb-4">
            <Star className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            A collection of design and development projects that showcase my approach to solving real-world problems through thoughtful user experience design.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setFilter("all")}
              variant={filter === "all" ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === "all" 
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white" 
                  : "border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              All Projects
            </Button>
            <Button
              onClick={() => setFilter("design")}
              variant={filter === "design" ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === "design" 
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white" 
                  : "border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900"
              }`}
            >
              Design Projects
            </Button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-up bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden ${project.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${project.featured ? 'h-64' : 'h-48'}`}
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    project.status === 'Completed' ? 'bg-green-100/90 text-green-800' :
                    project.status === 'In Progress' ? 'bg-yellow-100/90 text-yellow-800' :
                    'bg-gray-100/90 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100/90 dark:bg-purple-900/90 text-purple-800 dark:text-purple-200 backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/90 text-white text-xs font-medium backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {(project.status === 'Completed' || project.status === 'Ongiong') && (
                    <>
                      {project.title === 'Coffee shop Website UI design' ? (
                        <a
                          href="https://www.behance.net/gallery/232572189/Coffee-shop-we-design-Latte-Lane"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
                          >
                            <ExternalLink size={16} />
                            <span>Details</span>
                          </Button>
                        </a>
                      ) : (
                        project.link && project.link !== '#' ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex"
                          >
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
                            >
                              <ExternalLink size={16} />
                              <span>Details</span>
                            </Button>
                          </a>
                        ) : (
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
                            disabled
                          >
                            <ExternalLink size={16} />
                            <span>Details</span>
                          </Button>
                        )
                      )}
                    </>
                  )}
                  {project.status === 'In Progress' && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-yellow-300 text-yellow-600 hover:bg-yellow-50 flex items-center space-x-2"
                      disabled
                    >
                      <Clock size={16} />
                      <span>In Development</span>
                    </Button>
                  )}
                  {project.status === 'Planned' && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-300 text-gray-600 hover:bg-gray-50 flex items-center space-x-2"
                      disabled
                    >
                      <Lightbulb size={16} />
                      <span>Coming Soon</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 max-w-2xl mx-auto border border-purple-100 dark:border-purple-500/20">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Explore More Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Check out my complete portfolio on GitHub and other platforms to see all my work and contributions.
            </p>
            <a
              href="https://github.com/mandidaha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline"
                className="border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View All My Projects
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
