// src/pages/event-detail/[id].js

import CustomerLayout from '@/components/customer-layout';
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";


const EventDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const dateFormatter = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const fetchEventData = async () => {
    if (!id) {
      setLoading(false); 
      return;
    }

    try {
      setLoading(true);
      setError(null); 
      const res = await axios.get(`/api/event/${id}`);

      if (res.data.success) {
        setEvent(res.data.data);
        console.log("Fetched Event Data:", res.data.data);
      } else {
        toast.error(res.data.message || "Gagal memuat data event.");
        setError(res.data.message || "Gagal memuat data event.");
      }
    } catch (e) {
      console.error("GET Event API Error:", e);
      toast.error(e.response?.data?.message || "Terjadi kesalahan saat memuat data event.");
      setError(e.response?.data?.message || "Terjadi kesalahan saat memuat data event.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [id]);

  if (loading) {
    return (
      <CustomerLayout>
        <div className="w-full h-screen flex justify-center items-center text-secondary text-xl">
          Memuat detail event...
        </div>
      </CustomerLayout>
    );
  }

  if (error) {
    return (
      <CustomerLayout>
        <div className="w-full h-screen flex justify-center items-center text-red-500 text-xl">
          Error: {error}
        </div>
      </CustomerLayout>
    );
  }

  if (!event) {
    return (
      <CustomerLayout>
        <div className="w-full h-screen flex justify-center items-center text-secondary text-xl">
          Event tidak ditemukan.
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout>
      <div className="mt-16 md:mt-16">
        <div
          className="relative flex h-screen items-center justify-center bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${event.imageUrl})` }}
        >
          <div className="text-center p-4 bg-black/10 rounded-xl backdrop-blur-xs shadow shadow-white">
              <h1 className="text-4xl md:text-6xl font-bold text-white " style={{ textShadow: '2px 2px 8px rgba(0,0,1,1)' }}>
                {event.title}
              </h1>
          </div>
        </div>

        <div className="relative z-10 bg-white flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/5 p-8 md:py-16 md:px-20">
            {/* Field 'headline' tidak ada di JSON, jadi dikomentari */}
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-secondary">
              {event.title}
            </h2>
            <div className="space-y-6 text-lg text-secondary">
             
              {/* <Scroll> */}
                <p>{event.description}</p>
              {/* </Scroll> */}
            </div>
          </div>
          <div className='w-full md:w-2/5 p-8 md:py-16 md:px-12 md:sticky top-0 self-start'>
            {/* <Scroll> */}

            <div className='rounded-lg p-6 space-y-6'>
              {/* <div className='text-secondary text-2xl font-bold'>
                <h1>{event.eventType}</h1>
              </div> */}
              <div>
                <div className='text-secondary flex items-center gap-4'>
                  <div className='bg-[url(/uploads/icons/schedule-icon.png)] bg-no-repeat bg-center bg-contain w-[24px] h-[24px] flex-shrink-0'></div>
                  <h3 className='text-lg font-semibold'>
                    {event.startDate ? dateFormatter.format(new Date(event.startDate)) : 'Tanggal mulai tidak tersedia'} -{' '}
                    {event.endDate ? dateFormatter.format(new Date(event.endDate)) : 'Tanggal berakhir tidak tersedia'}
                  </h3>
                </div>
                {/* <div className='text-secondary pl-[40px]'>
                  <p>{event.time}</p>
                </div> */}
              </div>
              <div>
                <div className='text-secondary flex items-center gap-4'>
                  <div className='bg-[url(/uploads/icons/location-icon.png)] bg-no-repeat bg-center bg-contain w-[24px] h-[24px] flex-shrink-0'></div>
                  <h3 className='text-lg font-semibold'>{event.museum?.name || 'Nama Museum Tidak Tersedia'}</h3>
                </div>
                <div className='text-secondary pl-[40px]'>
                  <p>{event.museum?.location || 'Lokasi Museum Tidak Tersedia'}</p>
                </div>
              </div>
            </div>
            {/* </Scroll> */}
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default EventDetail;