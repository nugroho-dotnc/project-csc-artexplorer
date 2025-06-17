import Image from 'next/image';
import Link from 'next/link';


const ArtExplorerPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-start relative bg-white font-playfair">
      {/* Navbar */}
      <nav className="flex w-full items-center justify-between py-4 px-6 md:px-8 bg-navbar-bg relative">
        <div className="text-3xl md:text-4xl font-bold text-primary">ArtExplorer</div>
        
        {/* Menu untuk Desktop */}
        <div className="hidden md:inline-flex items-center gap-8 lg:gap-[84px] md:px-16 relative">
          <Link href="#" className="text-lg font-bold text-primary">Home</Link>
          <Link href="#" className="text-lg font-bold text-primary">Gallery</Link>
          <Link href="#" className="text-lg font-bold text-primary">Contact</Link>
          <Link href="#" className="text-lg font-bold text-primary">About</Link>
        </div>

        {/* Tombol Hamburger untuk Mobile */}
        <div className="md:hidden">
          {/* Anda perlu menambahkan state dan onClick untuk fungsionalitas menu mobile */}
          <button className="text-primary focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Content Container */}
      <main className="flex flex-col w-full items-start gap-12 md:gap-[52px] py-10 px-6 md:px-12 lg:px-24 xl:px-48">
        {/* About Us Section */}
        <section className="flex flex-col items-start gap-5 w-full">
          <div className="flex justify-center w-full">
            <h1 className="text-3xl md:text-[40px] font-bold text-secondary w-fit text-center">Tentang Kami</h1>
          </div>
          <div className="flex justify-center w-full">
            <p className="text-lg md:text-xl text-center text-secondary">
              Platform digital ini memperluas akses terhadap koleksi seni dan budaya museum. Jelajahi galeri virtual
              kami yang kaya akan detail, kenali visi dan misi institusi di halaman &#34;Tentang Kami&#34;, dan hubungi
              kami melalui formulir kontak. Situs ini dirancang agar responsif dan mudah diakses di semua perangkat.
            </p>
          </div>
        </section>

        {/* Visi Misi Section */}
        <section className="flex flex-col lg:flex-row w-full mx-auto items-center lg:items-start gap-10 lg:gap-[52px]">
          {/* Gambar */}
          <div 
            className="w-full lg:w-[461px] h-[60vh] lg:h-[849px] bg-cover bg-center flex-shrink-0" 
            style={{ backgroundImage: "url('/images/museum-potrait.jpg')" }}
          ></div>
          
          {/* Visi, Misi, Nilai Container */}
          <div className="inline-flex flex-col justify-center gap-12 lg:gap-[120px] flex-1">
            {/* Visi */}
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex items-center gap-3 w-full">
                <Image 
                  className="w-12 h-12" 
                  src="/uploads/icons/eye-icon.png" 
                  alt="Visi Icon"
                  width={48}
                  height={48}
                />
                <h2 className="text-2xl md:text-3xl font-bold text-secondary">Visi</h2>
              </div>
              <div className="flex items-start gap-3 w-full">
                <p className="text-base text-justify text-secondary">
                  Visi kami adalah menjadikan ArtExplorer jembatan antara warisan dan masa depan. Kami menggunakan seni
                  serta sejarah untuk memfasilitasi dialog kritis, menantang cara pandang, dan menginspirasi audiens
                  global untuk ikut membentuk dunia yang lebih baik.
                </p>
              </div>
            </div>
            {/* Misi */}
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex items-center gap-3 w-full">
                <Image 
                  className="w-12 h-12" 
                  src="/uploads/icons/trophy-icon.png" 
                  alt="Misi Icon"
                  width={48}
                  height={48} 
                />
                <h2 className="text-2xl md:text-3xl font-bold text-secondary">Misi</h2>
              </div>
              <div className="flex items-start gap-3 w-full">
                <p className="text-base text-justify text-secondary">
                  Misi ArtExplorer adalah menyediakan akses seni dan budaya yang terbuka untuk semua. Kami menciptakan
                  program edukasi yang partisipatif dan menjalin kemitraan dengan komunitas untuk menjadi ruang
                  inspirasi yang relevan bagi setiap orang.
                </p>
              </div>
            </div>
            {/* Nilai */}
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex items-center gap-3 w-full">
                <Image 
                  className="w-12 h-12" 
                  src="/uploads/icons/heart-icon.png" 
                  alt="Nilai Icon"
                  width={48}
                  height={48}
                />
                <h2 className="text-2xl md:text-3xl font-bold text-secondary">Nilai</h2>
              </div>
              <div className="flex items-start gap-3 w-full">
                <p className="text-base text-justify text-secondary">
                  Dengan rasa tanggung jawab mendalam untuk menjaga warisan budaya, ArtExplorer beroperasi atas dasar
                  integritas dalam setiap penelitian dan interaksi. Komitmen inilah yang mendorong kami untuk selalu
                  menyajikan keunggulan dalam setiap pameran dan layanan, demi memberikan pengalaman yang tak terlupakan
                  bagi Anda.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Team Section / Footer */}
      <footer className="flex flex-col items-center gap-10 py-12 md:py-20 px-6 md:px-24 w-full bg-[#363636]">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-[40px] font-bold text-primary w-fit text-center">Anggota Tim</h2>
        </div>
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-[52px] w-full">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="h-[435px] w-full bg-white"></div> {/* Placeholder untuk foto */}
              <div className="text-xl md:text-2xl font-bold text-white w-fit text-center">Naufal Bintang P H</div>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="h-[435px] w-full bg-white"></div> {/* Placeholder untuk foto */}
              <div className="text-xl md:text-2xl font-bold text-white w-fit text-center">Nugroho Nur Cahyo</div>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="h-[435px] w-full bg-white"></div> {/* Placeholder untuk foto */}
              <div className="text-xl md:text-2xl font-bold text-white w-fit text-center">Muhammad Reza Hafizzi</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArtExplorerPage;