// src/pages/event-detail/[id].js

import CustomerLayout from '@/components/customer-layout';
// Impor modul Node.js untuk membaca file
import path from 'path';
import fs from 'fs/promises';
import Scroll from '@/components/Scroll';

// Komponen hanya menerima satu objek 'event' sebagai prop
const EventDetail = ({ event }) => {
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <CustomerLayout>
      <div
        className="relative flex h-screen items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      >
        <div className="text-center p-4 bg-black/10 rounded-xl backdrop-blur-xs shadow shadow-white">
          <Scroll>
          <h1 className="text-4xl md:text-6xl font-bold text-white " style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            {event.title}: {event.subtitle}
          </h1>
          </Scroll>
        </div>
      </div>
      <div className="relative z-10 bg-white flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-3/5 p-8 md:py-16 md:px-20">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-secondary">
            {event.headline}
          </h2>
          <div className="space-y-6 text-lg text-secondary">
            {event.description.map((paragraph, index) => (
              <Scroll>
                <p key={index}>{paragraph}</p>
              </Scroll>
            ))}
          </div>
        </div>
        <div className='w-full md:w-2/5 p-8 md:py-16 md:px-12 md:sticky top-0 self-start'>
            <Scroll>
              
            <div className='bg-gray-50 rounded-lg p-6 space-y-6'>
              <div className='text-secondary text-2xl font-bold'>
                <h1>{event.eventType}</h1>
              </div>
              <div>
                  <div className='text-secondary flex items-center gap-4'>
                      <div className='bg-[url(/uploads/icons/schedule-icon.png)] bg-no-repeat bg-center bg-contain w-[24px] h-[24px] flex-shrink-0'></div>
                      <h3 className='text-lg font-semibold'>{event.dateRange} {event.year}</h3>
                  </div>
                  <div className='text-secondary pl-[40px]'>
                      <p>{event.time}</p>
                  </div>
              </div>
              <div>
                  <div className='text-secondary flex items-center gap-4'>
                      <div className='bg-[url(/uploads/icons/location-icon.png)] bg-no-repeat bg-center bg-contain w-[24px] h-[24px] flex-shrink-0'></div>
                      <h3 className='text-lg font-semibold'>{event.locationName}</h3>
                  </div>
                  <div className='text-secondary pl-[40px]'>
                      <p>{event.locationAddress}</p>
                  </div>
              </div>
            </div>
            </Scroll>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default EventDetail;

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'event.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const paths = data.map(event => ({
    params: { id: event.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'event.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const eventData = data.find(event => event.id.toString() === params.id);

  return {
    props: {
      event: eventData,
    },
  };
}