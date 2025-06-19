import React from 'react';

const InputText = ({ id, placeholder, ...props }) => {
  return (
    <div className="relative w-full mb-6">
      <input 
        type="text" 
        id={id} 
        placeholder={placeholder}
        className="font-serif w-full border-none border-b-2 border-secondary 
                   bg-transparent text-secondary
                   py-2 text-base 
                   focus:outline-none
                   placeholder:text-[#725D3B]/60"
        {...props}
      />
      <hr></hr>
    </div>
  );
};

export default InputText;