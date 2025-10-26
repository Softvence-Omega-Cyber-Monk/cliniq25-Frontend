import React from 'react';
import { XIcon } from './icons';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  materialName: string;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ isOpen, onClose, onConfirm, materialName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md m-4 p-8">
        <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-slate-800">Delete Educational Material?</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                <XIcon className="h-6 w-6" />
            </button>
        </div>
        <p className="text-slate-600 mb-6">
          Are you sure you want to delete "<strong>{materialName}</strong>"? This action cannot be undone and the material will no longer be available to therapists.
        </p>
        <div className="flex justify-end space-x-3">
          <button onClick={onClose} className="bg-white py-2 px-4 border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-red-600 py-2 px-4 border border-transparent rounded-lg text-sm font-semibold text-white hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
