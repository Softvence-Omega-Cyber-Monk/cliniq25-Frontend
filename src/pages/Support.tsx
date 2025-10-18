import React, { useState, useCallback } from 'react';
import { Mail, BookOpen, HelpCircle } from 'lucide-react';
import { contactData, faqData, resourceData } from '@/components/Support/mockData';
import ContactCard from '@/components/Support/ContactCard';
import FaqItemComponent from '@/components/Support/FaqItemComponent';
import ResourceCard from '@/components/Support/ResourceCard';

const Support: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const handleFaqToggle = useCallback((id: number) => {
    setOpenFaqId(prevId => (prevId === id ? null : id));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-['Inter']">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold text-gray-800">SUPPORT</h1>
          <p className="text-gray-500 mt-1">Get help and access resources</p>
        </header>

        {/* Contact Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactData.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </section>

        {/* Frequently Asked Questions Section */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <HelpCircle className="w-5 h-5 text-emerald-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {faqData.map(item => (
              <FaqItemComponent
                key={item.id}
                item={item}
                isOpen={openFaqId === item.id}
                onToggle={handleFaqToggle}
              />
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section>
          <div className="flex items-center mb-6">
            <BookOpen className="w-5 h-5 text-emerald-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resourceData.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </section>

        {/* Send us a message Form Section */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <Mail className="w-5 h-5 text-emerald-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Send us a message</h2>
          </div>

          <form className="space-y-4">
            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="How can we help you?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 text-gray-700"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Describe your issue or question..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 resize-none text-gray-700"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 transition-colors duration-200"
              onClick={(e) => { e.preventDefault(); console.log('Message Sent!'); /* Add form submission logic here */ }}
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Support;
