import { useState, useEffect } from "react";
import React from "react";
import GalleryCard from "../../components/gallery-card";
import CustomerLayout from "@/components/customer-layout";


const Events = () => {
    
    return (
        <CustomerLayout>
            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <div className="w-[85%] h-full">
                    <div className="text-secondary text-3xl font-bold mt-28 border-secondary border-b-1">
                        <h1>Events and Exhibitions</h1>
                    </div>
                    <div className="w-full h-[50%] mt-8 flex justify-between">
                        <div className="w-[47%] h-full hover:bg-primary bg-secondary hover:text-secondary hover:scale-105 transition-all text-primary flex group">
                            <div className="w-1/2 h-full flex flex-col justify-between">
                                <div className="px-[20px] pt-[20px] text-[24px] ">
                                    <h1 className="font-bold">Hiroshige</h1>
                                    <h1 className="opacity-80">artist of the open road</h1>
                                </div>
                                <div className="px-[20px] pb-[20px] flex justify-between">
                                    <div>
                                        <h2>Exhibitions</h2>
                                        <h2>19 - 25 June</h2>
                                        <h2>2025</h2>
                                    </div>
                                    <button className="w-[65px] h-[65px] bg-primary group-hover:bg-secondary group-hover:text-primary rounded-full flex justify-center items-center text-secondary cursor-pointer">
                                        Details
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/2 h-full bg-[url(/uploads/museum/event-dummy.jpg)] bg-center bg-cover bg-no-repeat"></div>
                        </div>
                        <div className="w-[47%] h-full hover:bg-primary bg-secondary hover:text-secondary hover:scale-105 transition-all text-primary flex group">
                            <div className="w-1/2 h-full flex flex-col justify-between">
                                <div className="px-[20px] pt-[20px] text-[24px] ">
                                    <h1 className="font-bold">Hiroshige</h1>
                                    <h1 className="opacity-80">artist of the open road</h1>
                                </div>
                                <div className="px-[20px] pb-[20px] flex justify-between">
                                    <div>
                                        <h2>Exhibitions</h2>
                                        <h2>19 - 25 June</h2>
                                        <h2>2025</h2>
                                    </div>
                                    <button className="w-[65px] h-[65px] bg-primary group-hover:bg-secondary group-hover:text-primary rounded-full flex justify-center items-center text-secondary cursor-pointer">
                                        Details
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/2 h-full bg-[url(/uploads/museum/event-dummy.jpg)] bg-center bg-cover bg-no-repeat"></div>
                        </div>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default Events;