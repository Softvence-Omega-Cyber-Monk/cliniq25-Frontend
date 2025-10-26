import React, { useState, useEffect } from 'react';
import { Material, MaterialCategory, MaterialStatus, MaterialType } from './types';
import { ChevronDownIcon, XIcon } from './icons';

interface AddMaterialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (material: Omit<Material, 'id' | 'uploadDate' | 'size'>) => void;
  initialData?: Material | null;
}

const AddMaterialModal: React.FC<AddMaterialModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<MaterialCategory>(MaterialCategory.CBT);
  const [type, setType] = useState<MaterialType>(MaterialType.PDF);
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState<MaterialStatus>(MaterialStatus.Active);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setCategory(initialData.category);
      setType(initialData.type);
      setDescription(initialData.description);
      setFileName(initialData.fileName || '');
      setStatus(initialData.status);
    } else {
      // Reset form on open for new material
      setTitle('');
      setCategory(MaterialCategory.CBT);
      setType(MaterialType.PDF);
      setDescription('');
      setFileName('');
      setStatus(MaterialStatus.Active);
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, category, type, description, fileName, status });
    onClose();
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50 transition-opacity">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg m-4 p-8 animate-fade-in-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">{initialData ? 'Edit Material' : 'Add New Material'}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="E.g., Cognitive Behavioral Therapy Overview" className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                 <div className="relative">
                    <select id="category" value={category} onChange={e => setCategory(e.target.value as MaterialCategory)} className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 appearance-none pr-8">
                        {Object.values(MaterialCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <ChevronDownIcon className="h-5 w-5 text-slate-400 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">Type</label>
                <div className="relative">
                    <select id="type" value={type} onChange={e => setType(e.target.value as MaterialType)} className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 appearance-none pr-8">
                        {Object.values(MaterialType).map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDownIcon className="h-5 w-5 text-slate-400 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={4} placeholder="Provide a brief description of the material..." className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500" required></textarea>
            </div>
             <div>
                <label htmlFor="upload" className="block text-sm font-medium text-slate-700 mb-1">Upload File</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <div className="flex text-sm text-slate-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500">
                                <span>Choose File</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                            </label>
                            <p className="pl-1">to Upload</p>
                        </div>
                        <p className="text-xs text-slate-500">{fileName ? fileName : 'No file selected'}</p>
                    </div>
                </div>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-1">Status</label>
              <div className="relative">
                <select id="status" value={status} onChange={e => setStatus(e.target.value as MaterialStatus)} className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 appearance-none pr-8">
                  {Object.values(MaterialStatus).map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDownIcon className="h-5 w-5 text-slate-400 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="bg-white py-2 px-4 border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Cancel
            </button>
            <button type="submit" className="bg-teal-500 py-2 px-4 border border-transparent rounded-lg text-sm font-semibold text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Save & Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMaterialModal;
