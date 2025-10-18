import React from 'react';
import { FaqItem } from './types';
import { ChevronDown } from 'lucide-react';

interface FaqProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const FaqItemComponent: React.FC<FaqProps> = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
      onClick={() => onToggle(item.id)}
    >
      <span className="text-gray-700 font-medium">{item.question}</span>
      <ChevronDown
        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}`}
      style={{ willChange: 'max-height, opacity' }}
    >
      <p className="text-gray-500 pb-4 text-sm leading-relaxed">{item.answer}</p>
    </div>
  </div>
);

export default FaqItemComponent;
