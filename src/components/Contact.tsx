
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }
    if (!formRef.current) return;
    emailjs.sendForm(
      'service_nfxnsso', // Service ID
      'template_n7t0a89', // Template ID
      formRef.current,
      'yKKi2jkTQlnresFgT' // Public Key
    )
    .then(
      (result) => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mandiradaahanayake@gmail.com",
      link: "mailto:mandiradaahanayake@gmail.com",
      description: "Send me an email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "070 5231020",
      link: "tel:+94705231020",
      description: "Give me a call"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sri Lanka",
      link: "#",
      description: "Based in"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "I typically respond within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Free Consultation",
      description: "Let's discuss your project needs"
    },
    {
      icon: CheckCircle,
      title: "Professional Service",
      description: "Quality work delivered on time"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-56 h-56 bg-purple-200/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100/60 dark:bg-purple-900/60 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 dark:text-purple-300 font-medium text-sm mb-4">
            <MessageCircle className="w-4 h-4" />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to create something amazing 
            and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                I'm always excited to discuss new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-medium mb-1">{info.description}</p>
                      <p className="text-xs text-purple-600 font-medium mb-2">{info.label}</p>
                      {info.link !== "#" ? (
                        <a 
                          href={info.link}
                          className="text-gray-900 hover:text-purple-600 transition-colors duration-200 font-semibold text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-semibold text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100/50">
              <h4 className="font-semibold text-gray-900 mb-6 text-xl">Why Work With Me?</h4>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{feature.title}</h5>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Box */}
            <div className="bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50">
              <h4 className="font-semibold text-gray-900 mb-4 text-xl">Let's collaborate</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, whether it's a full-time position, freelance project, or just a creative collaboration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">UI/UX Design Projects</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Frontend Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">QA Engineering (Software Testing & Quality Assurance)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Web Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">App Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Mobile App Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Design Consulting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Send me a message</h3>
                <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 rounded-xl border-gray-200 focus:border-purple-400 focus:ring-purple-400 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full h-12 px-4 rounded-xl border-gray-200 focus:border-purple-400 focus:ring-purple-400 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help you..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-purple-400 focus:ring-purple-400 transition-colors duration-200 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white py-4 h-14 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-center text-gray-500 text-sm">
                  All fields marked with * are required. Your information is secure and will never be shared.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;