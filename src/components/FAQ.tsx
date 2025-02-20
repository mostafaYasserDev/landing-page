import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long do I have access to the course?",
    answer: "You have lifetime access to all course materials, including future updates. Once you enroll, you can learn at your own pace and revisit the content whenever you need."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with the course, simply reach out to our support team within 30 days of purchase for a full refund."
  },
  {
    question: "Do I need any prior experience?",
    answer: "No prior experience is required. Our course is designed to take you from beginner to professional, with comprehensive explanations and practical examples."
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes, upon completing the course and passing the final assessment, you'll receive an industry-recognized certification that you can add to your LinkedIn profile and resume."
  },
  {
    question: "What support is available if I get stuck?",
    answer: "You'll have access to our community forum, weekly Q&A sessions, and direct email support. Professional plan members also get 1-on-1 mentoring sessions."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers! Here are some of the most common questions our students ask.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                className="w-full text-left bg-gray-50 hover:bg-gray-100 transition-colors p-6 rounded-lg focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}