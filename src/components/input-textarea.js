import React from 'react';

const InputTextArea = ({ id, placeholder, rows = 4, value, onChange, ...props }) => {
  return (
    <div className="relative w-full mb-6">
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        value={value} 
        onChange={onChange} 
        className="font-serif w-full border-none border-b-2 border-[#725D3B]
                   bg-transparent text-[#725D3B]
                   py-2 px-0 text-base min-h-[40px] resize-y
                   focus:outline-none focus:ring-0 focus:border-yellow-600
                   placeholder:text-[#725D3B]/60"
        {...props} 
      ></textarea>
      <hr></hr>
    </div>
  );
};

export default InputTextArea;