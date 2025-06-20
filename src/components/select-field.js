import React from 'react';

export default function SelectField({
  label,
  id,
  options, 
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        
        className="peer w-full border-b border-gray-300 bg-transparent px-2 pt-8 pb-2 text-gray-900 focus:border-secondary focus:outline-none appearance-none"
      >
        <option value="" disabled hidden>
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`
          absolute left-2 text-sm text-gray-600 transition-all duration-200 pointer-events-none
          ${
            value === ''
              ? 'top-5 text-base text-gray-400'
              : 'top-2.5 text-sm text-gray-600' 
          }
          peer-focus:top-2.5
          peer-focus:text-sm
          peer-focus:text-secondary-100
        `}
      >
        {label}
      </label>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
        </svg>
      </div>
    </div>
  );
}