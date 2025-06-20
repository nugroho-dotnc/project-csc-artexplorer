// src/pages/events/index.js

import React from "react";
import { useRouter } from "next/router";
import CustomerLayout from "@/components/customer-layout";
import EventCard from "@/components/event-card";
import Scroll from "@/components/Scroll";
// Impor modul Node.js untuk membaca file
import path from 'path';
import fs from 'fs/promises';

// Komponen menerima 'events' sebagai props dari getStaticProps
const Events = ({ events }) => {
    const router = useRouter();

    const handleDetailsClick = (eventId) => {
        router.push(`/event-detail/${eventId}`);
    };

    return (
        <CustomerLayout>
            <div className="w-screen min-h-screen flex flex-col items-center bg-white px-4">
                <div className="w-full max-w-6xl">
                    <div className="text-secondary text-3xl font-bold mt-28 border-secondary border-b">
                        <h1>Events and Exhibitions</h1>
                    </div>
                    <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {events.map((event) => (
                            <Scroll>
                            <div key={event.id} className="h-[400px]">
                                <EventCard
                                    id={event.id}
                                    title={event.title}
                                    subtitle={event.subtitle}
                                    eventType={event.eventType}
                                    dateRange={event.dateRange}
                                    year={event.year}
                                    imageUrl={event.imageUrl}
                                    onDetailsClick={() => handleDetailsClick(event.id)}
                                />
                            </div>
                            </Scroll>
                        ))}
                    </div>
                    <div className="pt-24"></div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default Events;

// getStaticProps mengambil data saat proses build
export async function getStaticProps() {
  // Logika untuk membaca file JSON diletakkan langsung di sini
    const filePath = path.join(process.cwd(), 'public', 'data', 'event.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

  // Kirim data sebagai props ke komponen 'Events'
  return {
    props: {
        events: data,
    },
  };
}