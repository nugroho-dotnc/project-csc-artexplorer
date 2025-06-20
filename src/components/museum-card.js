import React from 'react';

const MuseumCard = ({ image, title, desc, link, expanded = false, rating = null, reviewCount = 0 }) => {
  // Function to render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400 text-sm">★</span>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400 text-sm">☆</span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400 text-sm">☆</span>
        );
      }
    }
    return stars;
  };

  return (
    <a href={link} className='p-4'>
      <div
        className={`h-[28rem] ${!expanded?"w-80":"w-full"} rounded-xl overflow-hidden relative transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-0 h-36 w-full bg-black/80 p-3 overflow-hidden text-shadow-xs text-shadow-primary-100">
          <h1 className="text-primary-100 line-clamp-1 text-xl">
            {title}
          </h1>
          <p className="text-base text-primary-100 line-clamp-2 w-full mt-1">
            {desc}
          </p>
          
          {/* Rating Section */}
          {rating !== null && (
            <div className="flex items-center mt-2 space-x-2">
              <div className="flex items-center">
                {renderStars(rating)}
              </div>
              <span className="text-primary-100 text-sm">
                {rating.toFixed(1)}
              </span>
              {reviewCount > 0 && (
                <span className="text-primary-100/80 text-sm">
                  ({reviewCount} review{reviewCount !== 1 ? 's' : ''})
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default MuseumCard;