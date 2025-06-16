import React from 'react';

const MuseumCard = ({ image, title, desc, link }) => {
  return (
    // 'group' memungkinkan kita untuk mengubah style child element saat parent di-hover
    <a 
      href={link} 
      className="group relative w-[300px] h-[400px] rounded-lg overflow-hidden shadow-md"
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover brightness-75 
                   group-hover:brightness-50 group-hover:scale-105 
                   transition-all ease-in-out duration-500"
      />
      <div 
        className="absolute bottom-0 w-full p-4 
                   bg-gradient-to-t from-black/80 via-black/60 to-transparent 
                   text-white"
      >
        <h3 className="text-2xl font-bold line-clamp-1">
          {title}
        </h3>
        <p className="text-base mt-1 line-clamp-2">
          {desc}
        </p>
      </div>
    </a>
  );
};

export default MuseumCard;