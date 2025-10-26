import React from 'react';
import { Material, MaterialType } from './types';
import { DocumentIcon, VideoIcon, DownloadIcon, EditIcon, TrashIcon } from './icons';

interface MaterialCardProps {
  material: Material;
  onEdit: (material: Material) => void;
  onDelete: (material: Material) => void;
}

const categoryColors: { [key: string]: string } = {
  CBT: 'bg-blue-100 text-blue-800',
  DBT: 'bg-orange-100 text-orange-800',
  ACT: 'bg-purple-100 text-purple-800',
  Mindfulness: 'bg-green-100 text-green-800',
};

const statusColors: { [key: string]: string } = {
  Active: 'bg-emerald-100 text-emerald-800',
  Inactive: 'bg-slate-100 text-slate-800',
};

const typeColors: { [key: string]: string } = {
    PDF: 'bg-red-100 text-red-800',
    Video: 'bg-indigo-100 text-indigo-800',
    Worksheet: 'bg-yellow-100 text-yellow-800',
}


const MaterialCard: React.FC<MaterialCardProps> = ({ material, onEdit, onDelete }) => {
  const { title, category, type, status, description, uploadDate, size } = material;

  const Icon = type === MaterialType.Video ? VideoIcon : DocumentIcon;

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="bg-slate-100 p-3 rounded-lg">
                <Icon className={`h-6 w-6 ${type === MaterialType.Video ? 'text-teal-500' : 'text-slate-500'}`} />
            </div>
            <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[category]}`}>{category}</span>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[status]}`}>{status}</span>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeColors[type]}`}>{type}</span>
        </div>
        <p className="text-slate-600 text-sm mb-4">{description}</p>
      </div>
      <div className="border-t border-slate-200 pt-4 flex justify-between items-center text-sm text-slate-500">
        <div>
          <p>Uploaded: {uploadDate}</p>
          <p>Size: {size}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 transition-colors">
            <DownloadIcon className="h-5 w-5" />
          </button>
          <button onClick={() => onEdit(material)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 transition-colors">
            <EditIcon className="h-5 w-5" />
          </button>
          <button onClick={() => onDelete(material)} className="p-2 hover:bg-red-100 rounded-full text-slate-500 hover:text-red-600 transition-colors">
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;
