import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Database, Wrench, Palette, Monitor } from "lucide-react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Frontend Development");

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "HTML/CSS", level: 90, gradient: "from-orange-400 to-red-500" },
        { name: "JavaScript", level: 85, gradient: "from-yellow-400 to-orange-500" },
        { name: "React", level: 80, gradient: "from-blue-400 to-teal-500" },
        { name: "Tailwind CSS", level: 85, gradient: "from-teal-400 to-blue-500" }
      ]
    },
    {
      title: "Backend Development", 
      icon: Monitor,
      skills: [
        { name: "Node.js", level: 70, gradient: "from-green-400 to-green-600" },
        { name: "Express.js", level: 65, gradient: "from-gray-400 to-gray-600" },
        { name: "REST APIs", level: 75, gradient: "from-indigo-400 to-purple-500" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Kotlin", level: 85, gradient: "from-purple-400 to-pink-500" },
        { name: "Android Studio", level: 85, gradient: "from-green-400 to-blue-500" },
        { name: "XML", level: 90, gradient: "from-red-400 to-pink-500" }
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85, gradient: "from-blue-500 to-indigo-600" },
        { name: "MongoDB", level: 80, gradient: "from-green-500 to-teal-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 80, gradient: "from-gray-600 to-gray-800" },
        { name: "VS Code", level: 90, gradient: "from-blue-500 to-cyan-500" },
        { name: "Postman", level: 75, gradient: "from-orange-500 to-red-500" }
      ]
    },
    {
      title: "UI Design",
      icon: Palette,
      skills: [
        { name: "Figma", level: 95, gradient: "from-purple-500 to-pink-500" },
        { name: "Adobe XD", level: 80, gradient: "from-pink-500 to-red-500" },
        { name: "Sketch", level: 80, gradient: "from-yellow-500 to-orange-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50/30 via-white to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 dark:bg-purple-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100/60 dark:bg-purple-900/60 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 dark:text-purple-300 font-medium text-sm mb-4">
              <Palette className="w-4 h-4" />
              Technical Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise across different domains
            </p>
          </div>

          {/* Skill Category Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {skillCategories.map((category, index) => (
              <Button
                key={index}
                onClick={() => setSelectedCategory(category.title)}
                variant="outline"
                className={`p-6 h-auto rounded-2xl border-2 transition-all duration-300 ${
                  selectedCategory === category.title
                    ? "bg-gray-800 dark:bg-gray-700 text-white border-gray-800 dark:border-gray-600"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  <category.icon size={20} />
                  <span className="font-medium">{category.title}</span>
                </div>
              </Button>
            ))}
          </div>

          {/* Selected Category Skills */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="space-y-8">
                {skillCategories
                  .find(cat => cat.title === selectedCategory)
                  ?.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800 dark:text-gray-200 font-medium text-lg">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;