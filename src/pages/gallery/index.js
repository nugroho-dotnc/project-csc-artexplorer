import { useState, useEffect } from "react";
import React from "react";
import GalleryCard from "../../components/gallery-card";

const Gallery = () => {
    const [data, setData] = useState([]);

    // Logika untuk fetch data dari file JSON tetap dipertahankan
    const fetchData = async () => {
        try {
            const response = await fetch('/data/museum.json');
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Failed to fetch museum data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <>
            {/* Wrapper utama, flex dan justify-center untuk menengahkan container */}
            <div className="flex w-full justify-center">
                {/* Menggantikan .gallery-container, dibuat responsif dan terpusat */}
                <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 p-4 md:max-w-[1600px] md:p-8 mt-24 mb-32">
                    
                    {/* Menggantikan .gallery-image */}
                    <div
                        className="relative h-48 w-full bg-cover bg-center md:h-72"
                        // URL gambar sepertinya salah (CONTACT.jpg), tapi saya pertahankan sesuai file asli
                        style={{ backgroundImage: "url('/images/CONTACT.jpg')" }}
                    >
                        {/* Menggantikan .overlay */}
                        <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-black/60">
                            {/* Judul dengan font size responsif */}
                            <h1 className="text-3xl font-bold text-white md:text-4xl">
                                All Museum Galleries
                            </h1>
                        </div>
                    </div>

                    {/* Konten galeri utama */}
                    <div className="mt-8 flex flex-col gap-16">
                        {
                            data.map((value, index) => (
                                <div className="flex flex-col gap-8" key={index}>
                                    {/* Nama museum */}
                                    <h1 className="text-2xl font-bold text-secondary">
                                        {value.nama}
                                    </h1>
                                    <hr/>
                                    {/* Menggantikan .daftar-koleksi
                                      Grid dibuat responsif: 1 kolom di mobile, 2 di tablet, 4 di desktop.
                                    */}
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                        {
                                            value.koleksi.map((item, itemIndex) => (
                                                <GalleryCard data={item} key={itemIndex} />
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;