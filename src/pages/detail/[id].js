import React from 'react';
import { useRouter } from 'next/router';
import InputText from "@/components/input-text";
import InputTextArea from "@/components/input-textarea";
import { useState, useEffect } from 'react';
import GalleryCard from '../../components/gallery-card';
import CustomerLayout from '@/components/customer-layout';
import axios from 'axios';
import toast from 'react-hot-toast';
function MuseumDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [listKoleksi, setListKoleksi] = useState([]);
  const [museum, setMuseum] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [ratingForm, setRatingForm] = useState({
    name: '',
    email: '',
    rating: 5,
    review: ''
  });

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true)
        try {
          const response = await axios.get(`/api/museum/${id}`);
          if (response.data.success) {
            setMuseum(response.data.data); 
            setListKoleksi(response.data.artGallery || []);
            console.log("Fetched Museum Data:", response.data.data);
            console.log("Fetched Art Gallery:", response.data.artGallery);
            setLoading(false)
          }
        } catch (e) {
          toast.error(e.response?.data?.message || "Failed to load museum data.");
          console.error("Fetch data error:", e);
          setLoading(false)
        }
      };
      fetchData();
    }
  }, [id, router]); 

  const getBackgroundImage = (museum) => {
    if (museum.background) {
      return museum.background.replace('/public/', '/')
    }
    
    if (museum.nama) {
      const kebabCase = museum.name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
      
      return `/images/${kebabCase}/${kebabCase}-tampak-depan.svg`
    }
  }

  const handleRatingChange = (field, value) => {
    setRatingForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const uploadRate = async ({ idMuseum, fullname, email, rate, review }) => {
    try {
      const response = await axios.post('/api/museumRate', { 
        idMuseum,
        fullname,
        email,
        rate,
        review,
      });

      if (response.data.success) {
        toast.success("Thanks for your appreciate!"); 
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Terjadi error tak terduga.';
      toast.error(errorMessage);
    }
  };

  const handleSubmitRating = (e) => {
    e.preventDefault();
    uploadRate({
      idMuseum: id, 
      fullname: ratingForm.name,
      email: ratingForm.email,
      rate: ratingForm.rating,
      review: ratingForm.review,
    });

    setRatingForm({
      name: '',
      email: '',
      rating: 5,
      review: ''
    });
  };

  const StarRating = ({ rating, onRatingChange }) => {
    return (
      <div className="flex items-center mb-6">
        <span className="mr-4 text-[#725D3B] font-serif text-base">Rating:</span>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onRatingChange(star)}
              className="text-2xl mr-1 focus:outline-none transition-colors duration-200"
              style={{
                color: star <= rating ? '#FFD700' : '#D1D5DB'
              }}
            >
              ★
            </button>
          ))}
        </div>
        <span className="ml-3 text-[#725D3B] font-serif">({rating}/5)</span>
      </div>
    );
  };
  if(loading){
    return <CustomerLayout>
      <div className='w-full h-screen grid place-items-center justify-center items-center'>
        <div className="relative w-[100px] h-[100px] bg-black rounded-full overflow-hidden">
          <div className="absolute top-0 w-5 h-5 rounded-full left-[15px] gradient-bubble-1 animate-drop-5s"></div>
          <div className="absolute top-0 w-5 h-5 rounded-full left-[1px] gradient-bubble-2 animate-drop-3s"></div>
          <div className="absolute top-0 w-5 h-5 rounded-full left-[30px] gradient-bubble-3 animate-drop-4s"></div>
          <div className="absolute top-0 w-5 h-5 rounded-full left-[20px] gradient-bubble-4 animate-drop-6s"></div>
        </div>
      </div>
    </CustomerLayout>
  }
  return (
    <CustomerLayout>
      <div className="mt-16 md:mt-16">
      {/* Page 1 - Hero Section */}
      <div 
        className="flex justify-center md:justify-end items-center h-screen w-screen overflow-hidden bg-no-repeat bg-cover bg-center bg-scroll md:bg-fixed"
        style={{
          backgroundImage: `url(${museum.imageUrl})`
        }}
      >
        <div className="flex flex-col justify-center items-center bg-black/70 md:bg-black/60 w-full md:w-[70vw] h-full p-6 md:p-0">
          <div className="flex flex-col justify-center text-[#FFFBD9] w-full md:w-[70%] h-auto md:h-1/2 text-center md:text-left py-5 md:py-0">
            <p className="font-bold text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] mb-4 md:mb-3 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
              {museum.name || "Museum"}
            </p>
            <p className="text-base md:text-xl leading-6 mb-5 md:mb-4 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
              {museum.description || "Deskripsi museum akan muncul di sini."}
            </p>
            <a 
              href="#daftar-koleksi" 
              className="text-[#847253] font-bold bg-[#FFFBD9] w-fit py-3 px-6 md:py-3 md:px-5 rounded-lg mt-6 md:mt-4 no-underline transition-all duration-300 ease-in-out cursor-pointer border-none text-base self-center md:self-start shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:bg-[#f0e8d9] hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              <span className="md:hidden">Explore Collections</span>
              <span className="hidden md:inline">View Collections</span>
            </a>
          </div>
        </div>
      </div>

      {/* Page 2 - Collections */}
      {
        listKoleksi.length != 0 ? 
          <div className="flex flex-col justify-center items-center bg-white w-screen min-h-[60vh] text-[#725D3B] py-8 md:py-10">
            <div className="border-b-2 border-[#725D3B] mb-6 md:mb-8 text-center pb-2 md:pb-3 px-5 md:px-0" id="daftar-koleksi">
              <h1 className="m-0 font-bold tracking-wide text-[28px] md:text-[32px] pb-2 md:pb-3">
                Collection List
              </h1>
            </div>

            <div className="grid grid-cols-4 gap-6 px-6 py-4 w-full max-w-[1200px] box-border mx-auto">
              {
                listKoleksi.map((data, index)=>{
                    return <GalleryCard data={data} key={index}/>
                })
              }
            </div>
          </div>
        : null
      }
      

      {/* Page 3 - Rating Form */}
      <div className="flex flex-col justify-center items-center bg-white w-screen min-h-[60vh] text-[#725D3B] py-8 md:py-10">
        <div className="border-b-2 border-[#725D3B] mb-6 md:mb-8 text-center pb-2 md:pb-3 px-5 md:px-0" id="rate-museum">
          <h1 className="m-0 font-bold tracking-wide text-[28px] md:text-[32px] pb-2 md:pb-3">
            Rate This Museum
          </h1>
        </div>

        <div className="w-full max-w-[600px] px-6">
          <form onSubmit={handleSubmitRating} className="w-full">
            <InputText
              id="visitor-name"
              placeholder="Nama Lengkap"
              value={ratingForm.name}
              onChange={(e) => handleRatingChange('name', e.target.value)}
              required
            />

            <InputText
              id="visitor-email"
              placeholder="Email"
              type="email"
              value={ratingForm.email}
              onChange={(e) => handleRatingChange('email', e.target.value)}
              required
            />

            <StarRating 
              rating={ratingForm.rating}
              onRatingChange={(rating) => handleRatingChange('rating', rating)}
            />

            <InputTextArea
              id="visitor-review"
              placeholder="Share your experience visiting this museum..."
              rows={5}
              value={ratingForm.review}
              onChange={(e) => handleRatingChange('review', e.target.value)}
              required
            />

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="text-[#847253] font-bold bg-[#FFFBD9] py-3 px-8 rounded-lg transition-all duration-300 ease-in-out cursor-pointer border-none text-base shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:bg-[#f0e8d9] hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              >
                Kirim Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </CustomerLayout>
  );
}

export default MuseumDetail;