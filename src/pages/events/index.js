import React from "react";
import CustomerLayout from "@/components/customer-layout";
import EventCard from "@/components/event-card";

const Events = () => {
    // Sample event data - tidak perlu diubah
    const events = [
        {
            id: 1,
            title: "Hiroshige",
            subtitle: "artist of the open road",
            eventType: "Exhibitions",
            dateRange: "19 - 25 June",
            year: "2025",
            imageUrl: "/uploads/events/hiroshige.webp"
        },
        {
            id: 2,
            title: "Van Gogh",
            subtitle: "starry night collection",
            eventType: "Exhibitions",
            dateRange: "26 June - 2 July",
            year: "2025",
            imageUrl: "/uploads/events/van-gogh.webp"
        },
        {
            id: 3,
            title: "Monet",
            subtitle: "impressionist masterworks",
            eventType: "Special Event",
            dateRange: "3 - 10 July",
            year: "2025",
            imageUrl: "/uploads/events/monet.webp"
        },
        {
            id: 4,
            title: "Picasso",
            subtitle: "cubism revolution",
            eventType: "Exhibitions",
            dateRange: "11 - 18 July",
            year: "2025",
            imageUrl: "/uploads/museum/event-dummy.jpg"
        }
    ];

    const handleDetailsClick = (eventId) => {
        console.log(`Details clicked for event ${eventId}`);
        // Logika navigasi Anda di sini
    };

    // --- LOGIKA "ROWS" YANG LAMA DIHAPUS ---
    // Logika untuk membagi events menjadi "rows" tidak lagi diperlukan.
    // const rows = [];
    // for (let i = 0; i < events.length; i += 2) {
    //     rows.push(events.slice(i, i + 2));
    // }

    return (
        <CustomerLayout>
            <div className="w-screen min-h-screen flex flex-col items-center bg-white px-4">
                {/* Menggunakan w-[90%] atau max-w-6xl lebih baik dari w-[85%] untuk konsistensi */}
                <div className="w-full max-w-6xl">
                    <div className="text-secondary text-3xl font-bold mt-28 border-secondary border-b-1">
                        <h1>Events and Exhibitions</h1>
                    </div>
                    <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Langsung map dari array 'events', tidak perlu nested map */}
                        {events.map((event) => (
                            // Setiap item grid akan memiliki tinggi 400px
                            <div key={event.id} className="h-[400px]">
                                <EventCard
                                    title={event.title}
                                    subtitle={event.subtitle}
                                    eventType={event.eventType}
                                    dateRange={event.dateRange}
                                    year={event.year}
                                    imageUrl={event.imageUrl}
                                    onDetailsClick={() => handleDetailsClick(event.id)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Memberi jarak di bawah, pastikan tidak terpotong */}
                    <div className="pt-24"></div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default Events;