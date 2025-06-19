import { useState, useEffect } from "react";
import React from "react";
import GalleryCard from "../../components/gallery-card";
import CustomerLayout from "@/components/customer-layout";


const Events = () => {
    // const [data, setData] = useState([]);


    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('/data/museum.json');
    //         const data = await response.json();
    //         setData(data);
    //     } catch (error) {
    //         console.error("Failed to fetch museum data:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);
    
    return (
        <CustomerLayout>
            <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-[85%] h-full">
                <div className="text-secondary text-3xl font-bold mt-28 border-secondary border-b-1">
                    <h1>Events and Exhibitions</h1>
                </div>
                <div className="bg-red-400 w-full h-[50%] mt-8 flex justify-between">
                    <div className="w-[46%] h-full bg-blue-400 flex">
                        <div className="w-1/2 h-full bg-gray-400"></div>
                        <div className="w-1/2 h-full bg-[url(/uploads/museum/event-dummy.jpg)] bg-center bg-cover bg-no-repeat"></div>
                    </div>
                </div>
            </div>
        </div>
        </CustomerLayout>
    );
};

export default Events;