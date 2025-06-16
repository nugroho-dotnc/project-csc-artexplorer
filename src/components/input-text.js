import React from 'react';

const InputText = ({ id, placeholder }) => {
  return (
    <div className="relative w-full mb-6">
      <input 
        type="text" 
        id={id} 
        placeholder={placeholder}
        className="font-serif w-full border-none border-b-2 border-[#725D3B] 
                   bg-transparent text-[#725D3B] 
                   py-2 px-0 text-base 
                   focus:outline-none focus:ring-0 focus:border-yellow-600
                   placeholder:text-[#725D3B]/60"
      />
    </div>
  );
};

export default InputText;