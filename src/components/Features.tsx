import React from 'react';
import { BookOpen, Award, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "12 modules covering all aspects of digital marketing from basics to advanced strategies."
  },
  {
    icon: Award,
    title: "Industry Certification",
    description: "Receive a recognized certification upon completion to boost your career prospects."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Get guidance from industry professionals with years of experience."
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Learn at your own pace with lifetime access to course materials."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What You'll Learn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive digital marketing course is designed to give you all the skills 
            you need to succeed in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}