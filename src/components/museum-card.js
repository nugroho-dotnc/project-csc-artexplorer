import React from 'react';

const MuseumCard = ({ image, title, desc, link, expanded = false }) => {
  return (
    <a href={link} className='p-4'>
      <div
        className={`h-[28rem] ${!expanded?"w-80":"w-full"} rounded-xl overflow-hidden relative transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-0 h-28 w-full bg-black/80 p-2 overflow-hidden text-shadow-xs text-shadow-primary-100">
          <h1 className="text-primary-100 line-clamp-1 text-2xl">
            {title}
          </h1>
          <p className="text-lg text-primary-100 line-clamp-2 w-full mt-2">
            {desc}
          </p>
        </div>
      </div>
    </a>
  );
};

export default MuseumCard;
