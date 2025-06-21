const GalleryCard = ({ data }) => {

  return (
    <div
      className={`
        relative w-full h-[220px] md:h-[300px] 
        flex items-end justify-center 
        bg-cover bg-center rounded-xl shadow-md overflow-hidden cursor-pointer 
        transition-all duration-300 ease-in-out 
        hover:-translate-y-1.5 hover:shadow-xl
        ${!data.imageUrl ? 'border-2 border-dashed border-gray-300 bg-gray-100' : ''}
      `}
      style={{
        backgroundImage: data.imageUrl ? `url(${data.imageUrl})` : 'none',
      }}
      onClick={() => {
        console.log('Clicked collection:', data.name);
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {!data.imageUrl && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl opacity-50">
          🏛️
        </div>
      )}

      <div className="relative w-full p-3 flex flex-col gap-2 text-[#FFFBD9]">
        <h3 className="font-bold leading-tight line-clamp-1 text-base md:text-lg">
          {data.title}
        </h3>
        <p className="line-clamp-2 text-xs md:text-sm opacity-90">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;