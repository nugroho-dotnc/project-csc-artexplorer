// src/pages/events/index.js

import React from "react";
import { useRouter } from "next/router";
import CustomerLayout from "@/components/customer-layout";
import EventCard from "@/components/event-card";
import Scroll from "@/components/Scroll";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const Events = () => {
    const [events, setEvents] = useState([]);
    const router = useRouter();
    const dateFormatter = new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const fetchData = async () => {
        try {
        const response = await axios.get("/api/event");
        if (response.data.success) {
            setEvents(response.data.data);
        }
        } catch (e) {
        toast.error(e.response?.data?.message || "Gagal mengambil data");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                                    title={event.title}
                                    startDate={dateFormatter.format(new Date(event.startDate))}
                                    endDate={dateFormatter.format(new Date(event.endDate))}
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

