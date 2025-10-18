import React from 'react';
import CheckIcon from './CheckIcon';
import XIcon from './XIcon';
import { PlanFeatureProps } from './types';

const PlanFeature: React.FC<PlanFeatureProps> = ({ text, isIncluded }) => (
  <li className={`flex items-center mb-3 ${isIncluded ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
    {isIncluded ? <CheckIcon /> : <XIcon />}
    <span className="text-sm">{text}</span>
  </li>
);

export default PlanFeature;
