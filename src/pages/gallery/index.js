import { useState, useEffect } from "react";
import React from "react";
import GalleryCard from "../../components/gallery-card";

const Gallery = () => {
    const [data, setData] = useState([]);

   
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
            <div className="flex flex-col w-full justify-center">
                <div
                        className="h-96 md:h-96 w-full mt-16 md:mt-16 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/images/museum-detail-background-gelap.png')" }}>
                        <div className="w-full h-full bg-[#000]/60 text-primary flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center gap-6">
                                <h1 className="text-2xl md:text-5xl font-bold text-center text-shadow-sm">
                                   Museum Collection
                               </h1>
                            </div>
                        </div>
                </div>
                <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 p-4 md:max-w-[1600px] md:p-8 mt-24 mb-32">
                    <div className="mt-8 flex flex-col gap-16">
                        {
                            data.map((value, index) => (
                                <div className="flex flex-col gap-8" key={index}>
                                    {/* Nama museum */}
                                    <h1 className="text-2xl font-bold text-secondary">
                                        {value.nama}
                                    </h1>
                                    <hr/>
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