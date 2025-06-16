import React from "react";
import InputText from "../../components/input-text";
import InputTextArea from "../../components/input-textarea";

const Contact = () => {
    return (
        <>
            {/* Wrapper utama, sudah menggunakan Tailwind */}
            <div className="flex w-full justify-center items-start min-h-screen">
                {/* Menggantikan .container dari CSS dengan w-[90%] dan flex-col */}
                <div className="flex w-[90%] flex-col gap-16 mt-24 md:mt-32 mb-32">
                    <div className="w-full">
                        <h1 className="text-secondary">Feedback & Contact</h1>
                        <hr className="text-secondary bg-secondary"></hr>
                    </div>

                    {/* Menggantikan .contact-image dari CSS */}
                    <div
                        className="h-48 w-full bg-cover bg-center bg-no-repeat md:h-56"
                        style={{ backgroundImage: "url('/images/CONTACT.jpg')" }}
                    ></div>

                    {/* Menggantikan .inner-container. Dari 1 kolom ke 2 kolom di desktop */}
                    <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
                        
                        {/* Kiri: Menggantikan .left dan .headline. Menambahkan col-span-1 */}
                        <div className="col-span-1 flex flex-col gap-8 text-secondary md:gap-16">
                            <h1 className="text-3xl leading-8">
                                We're always ready to help and answer your question
                            </h1>
                            <hr></hr>
                            <p>
                                Terima kasih atas kunjungan Anda. Jika ada hal yang ingin Anda diskusikan—baik itu pertanyaan, kolaborasi, maupun dukungan layanan—silakan hubungi kami melalui formulir kontak atau informasi yang tercantum. Kami berkomitmen untuk memberikan respon terbaik dalam waktu sesingkat mungkin.
                            </p>
                            
                            {/* Grid untuk info kontak, sudah menggunakan Tailwind */}
                            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
                                <div className="w-full">
                                    <h2>Contact</h2>
                                    <p className="text-sm">Naufal - 0851-7407-1072</p>
                                    <p className="text-sm">Nugroho - 0895-2313-3302</p>
                                </div>
                                <div className="w-full">
                                    <h2>Email</h2>
                                    <p className="break-words text-sm">Naufal - naufalbintangpradana@gmail.com</p>
                                    <p className="break-words text-sm">Nugroho - nuganuca17@gmail.com</p>
                                </div>
                                <div className="w-full">
                                    <h2>Location</h2>
                                    {/* Menghilangkan style inline `width:100%` karena sudah default */}
                                    <p className="text-sm">Universitas Indonesia, Jl. Prof. DR. G.A. Siwabessy, Kukusan, Beji, Depok City, West Java 16425</p>
                                </div>
                                <div className="w-full">
                                    <h2>Social</h2>
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

                        {/* Kanan: Menggantikan .right. Menambahkan col-span-1. Padding dibuat responsif */}
                        <div className="col-span-1 w-full rounded-md bg-primary-100 p-8 md:p-16">
                            <div className="flex w-full flex-col justify-center gap-8 text-secondary">
                                {/* Menggantikan style inline dengan kelas Tailwind */}
                                <h2 className="text-center font-normal">
                                    Feedback
                                </h2>
                                <InputText placeholder={"Full Name"} />
                                <InputText placeholder={"Email"} />
                                <InputText placeholder={"Subject"} />
                                <InputTextArea placeholder={"Text"} />
                                {/* Menggantikan .btn-submit dari CSS */}
                                <button className="rounded-lg bg-[#725D3B] py-2 px-3 font-['playfair-display'] text-lg text-primary-100">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;