
import { Calendar, MapPin, GraduationCap, Award, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-purple-50/20 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100/60 dark:bg-purple-900/60 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 dark:text-purple-300 font-medium text-sm mb-4">
            <Users className="w-4 h-4" />
            Get to know me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate designer crafting meaningful digital experiences
          </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Photo and Info */}
            <div className="animate-slide-up space-y-8">
              {/* Photo Section */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                    <img src="/forsite1.jpg" alt="Mandira Dahanayake" className="absolute inset-0 w-full h-full object-cover object-center z-10 group-hover:scale-110 transition-transform duration-300 opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-transparent"></div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-200/50 dark:bg-purple-400/30 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-300/50 dark:bg-purple-500/30 rounded-full blur-xl"></div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-purple-500 to-purple-300 rounded-full"></div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                  My Journey
                </h3>
                
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    Hi! I'm Mandira Dahanayake, an enthusiastic IT undergraduate at SLIIT with a strong passion for creativity and technology. I love working in the UI/UX design field — turning ideas into beautiful, user-friendly designs is what excites me most.
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    I'm also skilled in app design, web design, frontend development, and mobile app development. With hands-on experience in tools and technologies like Figma, Adobe XD, HTML, CSS, JavaScript, React, and Kotlin, I enjoy crafting intuitive digital experiences across both web and mobile platforms.
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    Beyond coding and design, I'm always eager to explore new ideas, collaborate with other creatives, and contribute to impactful tech projects. Let's build something amazing together! ✨
                  </p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100/50 dark:border-purple-500/20 hover:shadow-xl transition-all duration-300">
                  <GraduationCap className="text-purple-500 dark:text-purple-400 mb-3" size={24} />
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Education</div>
                  <div className="font-semibold text-gray-900 dark:text-white">BSc (Hons) IT</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">SLIIT University</div>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100/50 dark:border-purple-500/20 hover:shadow-xl transition-all duration-300">
                  <Calendar className="text-purple-500 dark:text-purple-400 mb-3" size={24} />
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Graduation</div>
                  <div className="font-semibold text-gray-900 dark:text-white">2027</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Expected</div>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100/50 dark:border-purple-500/20 hover:shadow-xl transition-all duration-300">
                  <MapPin className="text-purple-500 dark:text-purple-400 mb-3" size={24} />
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Sri Lanka</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Based in</div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills Preview */}
            <div className="animate-slide-up">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100/50 dark:border-purple-500/20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Core Skills
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { skill: "UI/UX Design", level: 95, color: "from-purple-500 to-purple-400" },
                    { skill: "Frontend Development", level: 90, color: "from-purple-600 to-purple-500" },
                    { skill: "Mobile App Development", level: 85, color: "from-purple-500 to-pink-500" },
                    { skill: "Figma & Adobe XD", level: 95, color: "from-purple-600 to-purple-400" },
                    { skill: "React & JavaScript", level: 88, color: "from-purple-500 to-purple-600" },
                  ].map((item, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">{item.skill}</span>
                        <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">{item.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 shadow-sm`}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievement Badge */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-100 dark:border-purple-500/20">
                  <div className="flex items-center gap-3">
                    <Award className="text-purple-500 dark:text-purple-400" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Passionate Creator</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Always eager to learn and build amazing things</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
