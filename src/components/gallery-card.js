const GalleryCard = ({ data }) => {
  // Menentukan apakah ada gambar atau tidak untuk styling kondisional
  const hasImage = data && data.gambar;

  // Membersihkan URL gambar jika perlu (menghapus /public/)
  const imageUrl = hasImage ? data.gambar.replace('/public/', '/') : '';

  return (
    <div
      className={`
        relative w-full h-[220px] md:h-[300px] 
        flex items-end justify-center 
        bg-cover bg-center rounded-xl shadow-md overflow-hidden cursor-pointer 
        transition-all duration-300 ease-in-out 
        hover:-translate-y-1.5 hover:shadow-xl
        ${!hasImage ? 'border-2 border-dashed border-gray-300 bg-gray-100' : ''}
      `}
      style={{
        // Inline style tetap digunakan untuk background-image dinamis
        backgroundImage: hasImage ? `url(${imageUrl})` : 'none',
      }}
      onClick={() => {
        console.log('Clicked collection:', data.nama);
      }}
    >
      {/* Overlay gradien untuk keterbacaan teks */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Ikon placeholder jika tidak ada gambar */}
      {!hasImage && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl opacity-50">
          🏛️
        </div>
      )}

      {/* Konten teks di bagian bawah kartu */}
      <div className="relative w-full p-3 text-[#FFFBD9]">
        <h3 className="font-bold leading-tight line-clamp-1 text-base md:text-lg">
          {data.nama}
        </h3>
        <p className="line-clamp-2 text-xs md:text-sm opacity-90">
          {data.deskripsi}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;