import Image from "next/image";
import MuseumCard from "@/components/museum-card";
import InputText from "@/components/input-text";
import InputTextArea from "@/components/input-textarea";
import CustomerLayout from "@/components/customer-layout";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Scroll from "@/components/Scroll";

const HeroSection = () => {
    return (
        <section className="h-screen bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/HERO.png')" }}>
            <div className="w-full h-full flex items-center justify-center bg-[#000]/40">
                <Scroll>
                    <div className="flex flex-col gap-6 justify-center items-center">
                        <h1 className="text-primary text-shadow-sm font-bold text-center text-4xl md:text-5xl text-shadow-primary-100">
                            Bienvenue au <br/> Sanctuaire des Arts
                        </h1>
                        <p className="text-primary text-shadow-xs font-normal text-center text-xl md:text-2xl">
                            Là où le passé respire encore
                        </p>
                        <a className="py-2 px-12 text-lg md:text-xl bg-primary/25 w-fit rounded-full mt-6 text-primary backdrop-blur-md shadow shadow-white" href="#welcome">
                        Read More
                        </a>
                    </div>
                </Scroll>
            </div>
        </section>
    )
}

const WelcomeSection = () => {
    return (
        <Scroll>
            <section className="min-h-screen flex w-full justify-center items-center" id="welcome">
                <div className="w-[90%] gap-4 flex flex-col-reverse md:flex-row">
                    <div className="w-full flex flex-col gap-6">
                        <div className="text-secondary flex flex-col border-b-2 pb-4 border-secondary gap-4">
                            <h1 className="text-3xl md:text-5xl font-bold ">
                                Welcome to the Museum
                            </h1>
                            <p className="text-xl md:text-2xl font-normal">
                                A timeless sanctuary of art, history, and human spirit.
                            </p>
                        </div>
                        <p className="ms-8 text-lg md:text-xl text-justify text-secondary">
                                                        This site is a curated guide to the best museums in Jabodetabek - places where every space holds a story, and every work invites a sense of awe. Whether you're an art lover, history buff or weekend inspiration seeker, this is where your cultural journey begins. From grand national museums to charming hidden galleries, we've got you covered. Because the past deserves to be seen, and you deserve to be inspired.
                        </p>
                    </div>
                    <div className="w-full flex justify-center hover:skew-1 hover:scale-110 transition-all ">
                        <img src="/images/HEAD.png" className="h-[24rem] w-[24rem] md:w-[32rem] md:h-[32rem] object-cover"></img>
                    </div>
                </div>
            </section>
        </Scroll>
    );
}

const ReccomendSection = () => {
    const [museumData, setMuseumData] = useState([])
    const fetchMuseum = async () =>{
        try{
            const res = await axios.get('/api/museum')
            setMuseumData(res.data.data)
        }catch(e){
            toast.error(e.response?.data?.message??"load museum gagal!")
        }
    }
    useEffect(() => {
      fetchMuseum()
    }, [])
    
    return (
        <Scroll>
            <section className="h-screen w-full bg-cover bg-no-repeat flex flex-col justify-between" style={{ backgroundImage: "url('/images/RECOMEND.png')" }}>
                <div className="w-full h-full items-center justify-center bg-[#000]/60 flex flex-col">
                    <div className="w-[90%] flex flex-col gap-4">
                        <div className="text-primary text-shadow-xs flex flex-col gap-2 text-shadow-primary-100">
                            <h1 className="text-4xl font-bold">
                                Our Recommendation & Best Place
                            </h1>
                            <p className="text-lg">
                                All the best museum in jabodetabek, will gives u best experience of arts and history
                            </p>
                            <hr></hr>
                        </div>
                        <div className="w-full p-4 overflow-x-scroll">
                            <div className="flex gap-2">
                                {
                                    museumData.map((item)=>{
                                        return <MuseumCard 
                                            image={item.imageUrl} 
                                            title={item.name} 
                                            desc={item.description} 
                                            rating={item.rate}
                                            reviewCount={item.totalVote}
                                            />
                                    })
                                }
                            </div>
                        </div>
                        <div className="w-full h-10 flex justify-end text-primary text-lg">
                            <a className="cursor-pointer hover:underline" href="/museums">
                            More →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Scroll>
    );
}

const ContactSection = () => {
    const [formFill, setFormFill] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    })
    const submitForm = async () => {
        // console.log(formFill)
        await axios.post('/api/feedback', formFill).then(
            (res) => {
                if(res.data.success){
                    toast.success(res.data.message)
                }else{
                    toast.error(res.data.message)
                }
            }
        ).catch((e)=> toast.error(e.response.data.message)).finally(
            setFormFill({ fullName: "", email: "", subject: "", message: "" })
        )
    }
    return (
        <Scroll>
        <section>
            <div className="flex w-full justify-center items-start min-h-screen">
                    <div className="flex w-[90%] flex-col gap-8 mt-24 md:mt-32 mb-32">
                        <div className="w-full">
                            <h1 className="text-secondary text-4xl font-bold">Feedback & Contact</h1>
                            <hr className="text-secondary bg-secondary"></hr>
                        </div>
                        <div
                            className="h-48 md:h-64 w-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: "url('/images/CONTACT.jpg')" }}>
                        </div>
                        <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
                            
                            <div className="col-span-1 flex flex-col gap-2 text-secondary md:gap-6">
                                <h1 className="text-3xl leading-8 font-semibold">
                                    We're always ready to help and answer your question
                                </h1>
                                <hr></hr>
                                <p>
                                    Thank you for your visit. If there is anything you would like to discuss-whether it's a question, collaboration, or service support-please contact us via the contact form or the information listed. We are committed to providing the best response in the shortest time possible.
                                </p>
                                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
                                    <div className="w-full">
                                        <h2 className="font-bold">Contact</h2>
                                        <p className="text-sm xl:text-lg md:text-balance">Naufal - 0851-7407-1072</p>
                                        <p className="text-sm xl:text-lg">Nugroho - 0895-2313-3302</p>
                                        <p className="text-sm xl:text-lg">Muhammad Reza Hafizzi - 0892739238</p>
                                    </div>
                                    <div className="w-full">
                                        <h2 className="font-bold">Email</h2>
                                        <p className="break-words text-sm xl:text-lg">Naufal - naufalbintangpradana@gmail.com</p>
                                        <p className="break-words text-sm xl:text-lg">Nugroho - nuganuca17@gmail.com</p>
                                        <p className="break-words text-sm xl:text-lg">Reza - muhammadrezahafizzi@gmail.com</p>
                                    </div>
                                    <div className="w-full">
                                        <h2 className="font-bold">Location</h2>
                                        <p className="text-sm xl:text-lg">Universitas Indonesia, Jl. Prof. DR. G.A. Siwabessy, Kukusan, Beji, Depok City, West Java 16425</p>
                                    </div>
                                    <div className="w-full">
                                        <h2 className="font-bold">Social</h2>
                                        <div className="flex gap-2">
                                            <a href="https://www.instagram.com/politekniknegerijakarta/" target="_blank" rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                                                    <g fill="#847253" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                                        <g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g>
                                                </g>
                                                </svg>
                                            </a>
                                            <a href="#" target="_blank" rel="noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256">
                                                    <g fill="#847253"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.6,0-12,5.4-12,12c0,5.6,3.9,10.3,9.1,11.6v-2c-0.5,0-1.3,0-1.5,0c-0.8,0-1.6-0.4-1.9-1c-0.4-0.7-0.5-1.8-1.4-2.5c-0.3-0.2-0.1-0.5,0.3-0.5c0.6,0.2,1.1,0.6,1.6,1.2c0.5,0.6,0.7,0.8,1.6,0.8c0.4,0,1.1,0,1.7-0.1c0.3-0.8,0.9-1.6,1.6-2c-4-0.4-5.9-2.4-5.9-5.1c0-1.2,0.5-2.3,1.3-3.2c-0.3-0.9-0.6-2.9,0.1-3.6c1.8,0,2.9,1.2,3.1,1.5c0.9-0.3,1.9-0.5,2.9-0.5c1,0,2,0.2,2.9,0.5c0.3-0.3,1.3-1.5,3.1-1.5c0.7,0.7,0.4,2.7,0.1,3.6c0.8,0.9,1.3,2.1,1.3,3.2c0,2.7-1.9,4.7-5.9,5.1c1.1,0.6,1.9,2.2,1.9,3.4v2.7c4.7-1.6,8-6.1,8-11.3c0-6.6-5.4-12-12-12z" /></g></g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Scroll>
                            <div className="col-span-1 w-full rounded-md bg-primary-100 p-8 md:p-16 ">
                                <div className="flex w-full flex-col justify-center gap-8 text-secondary">
                                    <h2 className="text-center font-semibold text-2xl">
                                        Feedback
                                    </h2>
                                        <InputText placeholder={"Full Name"} onChange = {(e)=> setFormFill({ ...formFill, fullName: e.target.value })} value={formFill.fullName} />
                                        <InputText placeholder={"Email"} onChange = {(e)=> setFormFill({ ...formFill, email: e.target.value })} value={formFill.email} />
                                        <InputText placeholder={"Subject"} onChange = {(e)=> setFormFill({ ...formFill, subject: e.target.value })} value={formFill.subject} />
                                        <InputTextArea
                                            placeholder={"Text"}
                                            onChange={(e) => setFormFill({ ...formFill, message: e.target.value })}
                                            value={formFill.message}
                                            />
                                        <button className="rounded-lg bg-[#725D3B] py-2 px-3 font-['playfair-display'] text-lg text-primary-100" onClick={submitForm}>
                                            Submit
                                        </button>
                                </div>
                            </div>
                            </Scroll>
                        </div>
                    </div>
                </div>
            </section>
        </Scroll>
    );
}

export default function Home() {
  return (
    <CustomerLayout>
        <div >
        <main className="flex flex-col gap-4 bg-white">
            <HeroSection/>
            <WelcomeSection/>
            <ReccomendSection/>
            <ContactSection/>
        </main>
        </div>
    </CustomerLayout>
  );
}
