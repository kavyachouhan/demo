import React from "react";
import { motion } from "framer-motion";
import { Video, Target, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "VIDEO PRODUCTION",
      description: "From concept to post-production, we handle it all",
      icon: <Video className="w-12 h-12" />,
      delay: 0.1,
    },
    {
      title: "PAID MEDIA",
      description: "Data-driven campaigns that maximize your return on investment",
      icon: <Target className="w-12 h-12" />,
      delay: 0.2,
    },
    {
      title: "WEBSITE BUILDING",
      description: "Creating seamless, user-friendly websites and apps tailored to your needs",
      icon: <Globe className="w-12 h-12" />,
      delay: 0.3,
    },
  ];

  const ServiceCard = ({ title, description, icon, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 1, delay }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.08,
        transition: { type: "spring", stiffness: 150, damping: 12, duration: 0.3 },
      }}
      className="bg-[#1A1F1C] p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center text-center max-w-xs md:max-w-sm mx-auto
                 border border-[#3B3F3C] transition-all"
    >
      <div className="text-[#f85a23] mb-6 text-4xl">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold text-[#cfc9a3] mb-4">{title}</h3>
      <p className="text-[#cfc9a3] text-sm md:text-base">{description}</p>
    </motion.div>
  );

  return (
   
      <div className="container mx-auto bg-[#1c2321] min-h-screen py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#f85a23] text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Service Package
          </h2>
          {/* <p className="text-white text-base md:text-xl">Overview</p> */}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
   
  );
};

export default Services;
