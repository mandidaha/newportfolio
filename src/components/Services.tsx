
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Monitor, Smartphone, Layers, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with focus on user experience and accessibility that drives engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Designing responsive and modern websites that engage users and drive conversions across all devices and platforms.",
      features: ["Responsive Design", "Modern Layouts", "Performance Optimization", "SEO Friendly"],
      color: "from-purple-600 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: Smartphone,
      title: "App Design",
      description: "Crafting mobile application designs that provide seamless user experiences on iOS and Android platforms with native feel.",
      features: ["Mobile First", "Native Guidelines", "Interactive Prototypes", "App Store Optimization"],
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-50 to-purple-50"
    }
  ];

  const additionalServices = [
    {
      icon: Layers,
      title: "Design Systems",
      description: "Building comprehensive design systems for consistency across products and teams.",
      highlight: "Scalable Solutions"
    },
    {
      icon: Users,
      title: "User Research",
      description: "Conducting user research to inform design decisions and improve experiences.",
      highlight: "Data-Driven Design"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick prototyping to validate ideas and gather feedback early in the process.",
      highlight: "Fast Iterations"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-purple-50/20 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-16 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-64 h-64 bg-purple-300/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-100/10 to-pink-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100/60 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 font-medium text-sm mb-4">
            <Zap className="w-4 h-4" />
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into beautiful, functional digital experiences that make a lasting impact
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 text-center relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center justify-center group-hover:text-gray-700 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-white/80 to-purple-50/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-100/50 shadow-xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Additional Expertise
            </h3>
            <p className="text-gray-600 text-lg">
              Comprehensive design solutions to meet all your digital needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="group">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-purple-600" size={24} />
                  </div>
                  
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-3">
                      {service.highlight}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Let's collaborate to bring your vision to life with thoughtful design and seamless user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start a Project
              </button>
              <button className="border-2 border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
