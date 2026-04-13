import { GraduationCap, Calendar, MapPin, Award, ChevronUp, Briefcase, CheckCircle, TestTube, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Education = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const education = [
    {
      degree: "BSc (Hons) in Information Technology",
      specialization: "Specialising in Information Technology",
      period: "2023 - Present",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      current: true
    },
    {
      degree: "GCE Ordinary Level",
      specialization: "",
      period: "2018",
      institution: "St. Thomas' Girls' High School Matara",
      duration: "2013 - 2022",
      current: false
    },
    {
      degree: "GCE Advanced Level",
      specialization: "Mathematics Stream",
      period: "2022",
      institution: "St. Thomas' Girls' High School Matara",
      duration: "2013 - 2022",
      current: false
    },
    {
      degree: "UI/UX Design Intern",
      specialization: "Internship at Cenzios Pvt Ltd",
      period: "Aug 2025 - Feb 2026",
      institution: "Cenzios Pvt Ltd",
      current: false
    }
  ];

  const certifications = [
    {
      title: "UI/UX Design using Adobe XD",
      provider: "Alison",
      level: "Intermediate Level"
    },
    {
      title: "Foundations of User Experience (UX) Design",
      provider: "GOOGLE",
      level: ""
    },
    {
      title: "Introduction to Software Testing",
      provider: "University of Minnesota (Coursera) (In Progress)",
      level: ""
    }
  ];

  const internshipResponsibilities = [
    "Designed intuitive and scalable user interfaces aligned with modern usability standards and design systems such as Material Design and Apple HIG",
    "Conducted user experience research, workflow analysis, usability testing, and wireframing activities across product verticals",
    "Developed high-fidelity interactive prototypes in Figma and contributed to the organization's structured component design system",
    "Collaborated closely with cross-functional engineering and product teams to enhance product usability, accessibility, and user engagement",
    "Participated in iterative product design cycles, sprint reviews, and continuous improvement processes following Agile methodology"
  ];

  const coreCompetencies = [
    { label: "UI/UX Design" },
    { label: "Figma / Prototyping" },
    { label: "User Research" },
    { label: "Design Systems" },
    { label: "Cross-functional Collaboration" },
    { label: "Agile / Scrum" }
  ];

  const qaContributions = [
    "Performed basic manual testing on application interfaces",
    "Checked for UI inconsistencies, broken flows, and usability issues",
    "Considered edge cases and user behavior scenarios during design validation",
    "Ensured alignment between design and final implementation",
    "Focused on delivering a smooth and error-free user experience"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-white via-purple-50/20 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
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
              <GraduationCap className="w-4 h-4" />
              Academic Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My educational background and academic achievements that shaped my journey in technology
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-100/50 dark:border-purple-500/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 ${edu.current ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-gradient-to-br from-gray-500 to-gray-600'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    {edu.current && (
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>

                  {edu.specialization && (
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                      {edu.specialization}
                    </p>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar size={16} />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    {edu.duration && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Calendar size={16} />
                        <span className="text-sm">Duration: {edu.duration}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <MapPin size={16} />
                      <span className="text-sm">{edu.institution}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Internship Experience Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-purple-100/60 dark:bg-purple-900/60 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 dark:text-purple-300 font-medium text-sm mb-4">
                <Briefcase className="w-4 h-4" />
                Work Experience
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Internship Experience
              </h2>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100/50 dark:border-purple-500/20 mb-6">

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      UI/UX Design Intern
                    </h3>
                    <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                      Full-Time Internship
                    </span>
                  </div>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">
                    Cenzios (Pvt) Ltd — Product Design Department
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Calendar size={14} />
                      <span className="text-sm">25 August 2025 – 25 February 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <MapPin size={14} />
                      <span className="text-sm">Horana, Sri Lanka</span>
                    </div>
                  </div>
                </div>
                {/* Verified badge */}
                <div className="flex flex-col items-center gap-1 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-2xl px-4 py-3">
                  <BadgeCheck className="text-green-600 dark:text-green-400" size={24} />
                  <span className="text-xs text-green-700 dark:text-green-400 font-medium text-center leading-tight">
                    Service Letter<br />Verified
                  </span>
                </div>
              </div>

              {/* Performance summary quote */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10 border-l-4 border-purple-400 dark:border-purple-500 rounded-r-2xl p-5 mb-8">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm italic">
                  "Mandira consistently demonstrated professionalism, creativity, analytical thinking, and a proactive learning attitude throughout her internship tenure. She adapted effectively to collaborative cross-functional environments and contributed positively toward achieving product quality, team objectives, and organizational goals."
                </p>
                <p className="text-purple-600 dark:text-purple-400 text-xs font-medium mt-2">
                  — G. R. Tharaka, Director, Cenzios (Pvt) Ltd
                </p>
              </div>

              {/* Two column: Responsibilities + QA Perspective */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">

                {/* Roles & Responsibilities */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center">
                      <CheckCircle className="text-purple-600 dark:text-purple-400" size={18} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Roles & Responsibilities
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {internshipResponsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* QA & Testing Perspective */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/40 rounded-xl flex items-center justify-center">
                      <TestTube className="text-pink-600 dark:text-pink-400" size={18} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      QA & Testing Perspective
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">
                    Alongside design tasks, I applied a testing mindset to ensure product quality:
                  </p>
                  <ul className="space-y-3">
                    {qaContributions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Core Competencies */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center">
                    <Award className="text-purple-600 dark:text-purple-400" size={18} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Core Competencies Demonstrated
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coreCompetencies.map((comp, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 px-4 py-1.5 rounded-full text-sm font-medium"
                    >
                      ✓ {comp.label}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100/50 dark:border-purple-500/20 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Certifications / Short Courses
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-500/20">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                    {cert.provider}
                  </p>
                  {cert.level && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {cert.level}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll to Top */}
          <div className="text-center">
            <Button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <ChevronUp className="w-5 h-5 mr-2" />
              Back to Top
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
