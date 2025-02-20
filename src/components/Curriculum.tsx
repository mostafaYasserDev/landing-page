import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    title: "Module 1: Digital Marketing Fundamentals",
    duration: "2 weeks",
    lessons: [
      "Introduction to Digital Marketing",
      "Understanding the Digital Landscape",
      "Building Your Marketing Strategy",
      "Key Performance Indicators (KPIs)"
    ]
  },
  {
    title: "Module 2: Search Engine Optimization (SEO)",
    duration: "3 weeks",
    lessons: [
      "SEO Fundamentals",
      "Keyword Research and Analysis",
      "On-Page and Off-Page SEO",
      "Technical SEO Best Practices"
    ]
  },
  {
    title: "Module 3: Social Media Marketing",
    duration: "3 weeks",
    lessons: [
      "Social Media Strategy Development",
      "Content Creation and Curation",
      "Community Management",
      "Social Media Analytics"
    ]
  },
  {
    title: "Module 4: Paid Advertising",
    duration: "4 weeks",
    lessons: [
      "Google Ads Fundamentals",
      "Facebook and Instagram Advertising",
      "LinkedIn Advertising",
      "Campaign Optimization"
    ]
  }
];

export default function Curriculum() {
  const [openModule, setOpenModule] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="curriculum">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Course Curriculum
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive curriculum is designed to take you from beginner to professional
            in just 12 weeks. Each module builds upon the previous one.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                className="w-full bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-between hover:border-blue-500 transition-colors"
                onClick={() => setOpenModule(openModule === index ? null : index)}
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 text-left">{module.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Duration: {module.duration}</p>
                </div>
                {openModule === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {openModule === index && (
                <div className="bg-gray-50 border border-t-0 border-gray-200 rounded-b-lg p-6">
                  <ul className="space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}