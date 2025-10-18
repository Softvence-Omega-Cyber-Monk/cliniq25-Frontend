import React from 'react';
import { ResourceItem } from './types';

const ResourceCard: React.FC<ResourceItem> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl transition-colors hover:bg-emerald-50 h-full">
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

export default ResourceCard;
