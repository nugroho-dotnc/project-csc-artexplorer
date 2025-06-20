import AdminLayout from "@/components/admin-layout";
import CustomerLayout from "@/components/customer-layout";
import MuseumCard from "@/components/museum-card";
import Scroll from "@/components/Scroll";
import React from "react";


const Museums = () => {
    return (
        <>
           <CustomerLayout>
            <div className="h-screen w-full flex flex-col justify-start items-center">
                <div className="flex w-full flex-col justify-center items-center gap-8  mb-32">
                    <div
                        className="h-96 md:h-96 w-full mt-16 md:mt-16 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/images/museum-detail-background-gelap.png')" }}
                    >
                        <div className="w-full h-full bg-[#000]/60 text-primary flex flex-col justify-center items-center">
                            <Scroll>
                            <div className="flex flex-col justify-center items-center gap-6">
                                <h1 className="text-2xl md:text-4xl font-bold text-center text-shadow-sm">
                                Find Your Favorite Museum Here
                               </h1>
                               <input type="text" placeholder="Search museums..." className="bg-primary/20 backdrop-blur-md shadow-white text-primary placeholder-primary px-6 py-3 w-80 md:w-96 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary shadow"/>
                            </div>
                            </Scroll>
                        </div>
                    </div>
                    <div className="w-[80%]">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center items-center">
                                <MuseumCard image={"/images/museum-potrait.jpg"} title={"Museum Bangun Lawas"} desc={"ini adalah museum yang dibangun di blablabla"} expanded={true}/>
                                <MuseumCard image={"/images/museum-potrait.jpg"} title={"Museum Bangun Lawas"} desc={"ini adalah museum yang dibangun di blablabla"} expanded={true}/>
                                <MuseumCard image={"/images/museum-potrait.jpg"} title={"Museum Bangun Lawas"} desc={"ini adalah museum yang dibangun di blablabla"} expanded={true}/>
                                <MuseumCard image={"/images/museum-potrait.jpg"} title={"Museum Bangun Lawas"} desc={"ini adalah museum yang dibangun di blablabla"} expanded={true}/>
                        </div>
                    </div>
                </div>
           </div>
           </CustomerLayout>
        </>
    );
};

export default Museums;