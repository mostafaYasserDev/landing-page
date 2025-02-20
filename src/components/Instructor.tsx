import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

export default function Instructor() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12" data-aos="fade-up">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80"
                alt="John Smith - Lead Instructor"
                className="rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Your Instructor</h2>
              <h3 className="text-xl text-blue-600 mb-4">John Smith</h3>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in digital marketing, John has helped hundreds
                of businesses achieve their marketing goals. He's worked with Fortune 500 companies
                and startups alike, and now he's here to share his knowledge with you.
              </p>
              
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Personal Website"
                >
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}