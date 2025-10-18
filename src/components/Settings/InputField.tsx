import React from 'react';
import { InputFieldProps } from './types';

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = 'text',
  placeholder = '',
  value = '',
  className = '',
  readOnly = false,
}) => (
  <div className={`flex flex-col mb-4 w-full ${className}`}>
    <label htmlFor={id} className="text-xs font-medium text-gray-500 mb-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      readOnly={readOnly}
      className={`
        px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 
        focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-150
        ${readOnly ? 'opacity-70 cursor-not-allowed' : ''}
      `}
    />
  </div>
);

export default InputField;
