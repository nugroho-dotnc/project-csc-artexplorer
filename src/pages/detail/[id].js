import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import GalleryCard from '../../components/gallery-card';
import AdminLayout from '@/components/admin-layout';
import CustomerLayout from '@/components/customer-layout';

function MuseumDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [listKoleksi, setListKoleksi] = useState([]);
  const [museum, setMuseum] = useState({});
  const [loading, setLoading] = useState(true)

  const fetchMuseum = async () => {
    try {
      setLoading(true)
      const response = await fetch("/data/museum.json")
      const data = await response.json()
      const dataMuseum = data.find(item => item.id === parseInt(id))
      
      if (dataMuseum) {
        setListKoleksi(dataMuseum.koleksi || [])
        setMuseum(dataMuseum)
      }
    } catch (error) {
      console.error("Error fetching museum data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(id){
      fetchMuseum()
    }
  }, [id])

  const getBackgroundImage = (museum) => {
    // Jika ada field background langsung, gunakan itu (hapus /public/)
    if (museum.background) {
      return museum.background.replace('/public/', '/')
    }
    
    // nama museum sesuai json
    if (museum.nama) {
      const kebabCase = museum.nama
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
      
      return `/images/${kebabCase}/${kebabCase}-tampak-depan.svg`
    }
  }

  return (
    <CustomerLayout>
      <div className="mt-16 md:mt-16">
      {/* Page 1 - Hero Section */}
      <div 
        className="flex justify-center md:justify-end items-center h-screen w-screen overflow-hidden bg-no-repeat bg-cover bg-center bg-scroll md:bg-fixed"
        style={{
          backgroundImage: `url(${getBackgroundImage(museum)})`
        }}
      >
        <div className="flex flex-col justify-center items-center bg-black/70 md:bg-black/60 w-full md:w-[70vw] h-full p-6 md:p-0">
          <div className="flex flex-col justify-center text-[#FFFBD9] w-full md:w-[70%] h-auto md:h-1/2 text-center md:text-left py-5 md:py-0">
            <p className="font-bold text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] mb-4 md:mb-3 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
              {museum.nama || "Museum"}
            </p>
            <p className="text-base md:text-xl leading-6 mb-5 md:mb-4 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
              {museum.deskripsi || "Deskripsi museum akan muncul di sini."}
            </p>
            <a 
              href="#daftar-koleksi" 
              className="text-[#847253] font-bold bg-[#FFFBD9] w-fit py-3 px-6 md:py-3 md:px-5 rounded-lg mt-6 md:mt-4 no-underline transition-all duration-300 ease-in-out cursor-pointer border-none text-base self-center md:self-start shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:bg-[#f0e8d9] hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              <span className="md:hidden">Jelajahi Koleksi</span>
              <span className="hidden md:inline">Lihat Koleksi</span>
            </a>
          </div>
        </div>
      </div>

      {/* Page 2 - Collections */}
      <div className="flex flex-col justify-center items-center bg-white w-screen min-h-[60vh] text-[#725D3B] py-8 md:py-10">
        <div className="border-b-2 border-[#725D3B] mb-6 md:mb-8 text-center pb-2 md:pb-3 px-5 md:px-0" id="daftar-koleksi">
          <h1 className="m-0 font-bold tracking-wide text-[28px] md:text-[32px] pb-2 md:pb-3">
            Daftar Koleksi
          </h1>
        </div>

        {/* <div className='bg-blue-500 w-[85%] h-96'></div> */}

        <div className="grid grid-cols-4 gap-6 px-6 py-4 w-full max-w-[1200px] box-border mx-auto">
          {
            listKoleksi.map((data, index)=>{
                return <GalleryCard data={data} key={index}/>
            })
          }
        </div>
      </div>
    </div>
    </CustomerLayout>
  );
}

export default MuseumDetail;