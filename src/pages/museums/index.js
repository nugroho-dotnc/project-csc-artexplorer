import AdminLayout from "@/components/admin-layout";
import CustomerLayout from "@/components/customer-layout";
import MuseumCard from "@/components/museum-card";
import Scroll from "@/components/Scroll";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Museums = () => {
    const [museums, setMuseums] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState("");
    const fetchAllMuseums = async () => {
        try {
            const res = await axios.get('/api/museum');
            setMuseums(res.data.data);
        } catch (e) {
            toast.error(e.response?.data?.message ?? "Failed to load museums!");
        }
    };

    const handleSearch = async () => {
        if (searchQuery.trim() !== "") { 
            try {
                const res = await axios.post('/api/museum/search', { searchQuery: searchQuery }); 
                setMuseums(res.data.data);
            } catch (e) {
                toast.error(e.response?.data?.message ?? "Failed to search museums!");
                console.log(e)
            }
        } else {
            fetchAllMuseums();
        }
    };

    useEffect(() => {
        fetchAllMuseums();
    }, []); 

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            handleSearch();
        }, 300);
        return () => clearTimeout(debounceTimeout); 
    }, [searchQuery]); 

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
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
                               <input type="text" placeholder="Search museums..." onChange={handleSearchChange} className="bg-primary/20 backdrop-blur-md shadow-white text-primary placeholder-primary px-6 py-3 w-80 md:w-96 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary shadow"/>
                            </div>
                            </Scroll>
                        </div>
                    </div>
                    <div className="w-[80%]">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center items-center">
                               {
                                    museums.map((item)=>{
                                        return <MuseumCard 
                                            image={item.imageUrl} 
                                            title={item.name} 
                                            desc={item.description} 
                                            rating={item.rate}
                                            reviewCount={item.totalVote}
                                            link={`/detail/${item.idMuseum}`}
                                            />
                                    })
                                }
                            </div>
                    </div>
                </div>
           </div>
           </CustomerLayout>
        </>
    );
};

export default Museums;