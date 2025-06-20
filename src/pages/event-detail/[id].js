// pages/events/[id].js

import { useRouter } from 'next/router';
import CustomerLayout from '@/components/customer-layout';

// ====================================================================
// LANGKAH 1: DATA DILETAKKAN DI SINI (DALAM FILE YANG SAMA)
// ====================================================================
// Data event sekarang didefinisikan langsung di file ini.
const eventsData = [
    {
        id: 1,
        title: "Hiroshige",
        subtitle: "A Journey Through Edo Japan",
        eventType: "Exhibitions",
        dateRange: "19 - 25 June",
        year: "2025",
        time: "Daily: 10.00-17.00 (Fridays 20.30)",
        locationName: "Museum Nasional Indonesia",
        locationAddress: "Jl. Medan Merdeka Barat No.12, Gambir, Jakarta Pusat, 10110",
        imageUrl: "/uploads/events/hiroshige.webp",
        alt: "Lukisan pemandangan jalan oleh Hiroshige",
        headline: "Join Hiroshige on a lyrical journey through Edo Japan, exploring the natural beauty of the landscape and the pleasures of urban life.",
        description: [
            "The first exhibition on Hiroshige to be held at the British Museum, and the first on the artist in London for more than a quarter of a century, this is a visually stunning portrait of a country about to change forever. Born during an unsettled time in Japan's history, Utagawa Hiroshige (1797-1858) went on to become one of the country's most talented, prolific and popular artists. As Japan confronted the encroaching outside world, Hiroshige's calm artistic vision connected with - and reassured - people at every level of society.",
            "From fashionable figures and energetic city views to remote landscapes and impressions of the natural world, Hiroshige captured many aspects of life in the Japan of his time. Stunning bird-and-flower prints reveal his poetic feeling for nature while his evocative landscapes reflected the growing interest in travel across Japan. Hiroshige portrayed his world sometimes as it was, but often the way he imagined it could be.",
            "Possessed of remarkable technical skills, both as a colourist and draftsman, Hiroshige had a sympathetic regard for people from all walks of life. Unlike most other print designers of his day, he came from a samurai family, but crossed social boundaries to devote himself to depicting popular customs. His work was affordable, too - along with celebrated landscape prints, he also designed hundreds of hand-held, disposable fans that were available to all."
        ]
    },
    {
        id: 2,
        title: "Van Gogh",
        subtitle: "The Starry Night Collection",
        eventType: "Exhibitions",
        dateRange: "26 June - 2 July",
        year: "2025",
        time: "Daily: 10.00-18.00 (Saturdays 21.00)",
        locationName: "Museum Nasional Indonesia",
        locationAddress: "Jl. Medan Merdeka Barat No.12, Gambir, Jakarta Pusat, 10110",
        imageUrl: "/uploads/events/van-gogh.webp",
        alt: "Lukisan Starry Night oleh Van Gogh",
        headline: "Explore the swirling cosmos and emotional depth of Vincent van Gogh's most iconic works.",
        description: [
            "This exhibition brings together a remarkable collection of paintings and drawings by Vincent van Gogh, centered around his masterpiece, The Starry Night. Delve into the artist's turbulent life and his revolutionary use of color and brushwork to convey deep emotion and personal turmoil.",
            "The journey continues beyond this celestial masterpiece, charting his artistic evolution from the rustic earth tones of his early Dutch period to the explosive vibrancy he discovered in the south of France. You will stand before the sun-drenched landscapes of Arles, witness the quiet dignity of his still lifes, and meet the gaze of the artist in a series of hauntingly honest self-portraits. Each room serves as a new chapter in his personal odyssey, showcasing the breadth of a collection that captures both the simplicity of rural life and the complex inner world of its creator.",
            "Central to these works is a profound investigation into the very nature of his technique. Here, you can examine the thick, sculptural layers of paint—the impasto—that give his canvases a life of their own, and see how his urgent, visible brushstrokes convey a raw, unfiltered energy. The exhibition highlights his bold, often non-naturalistic color palette, demonstrating how he used color not merely to depict a scene, but to express the artist's internal state, making every canvas a window into his soul.",
            "Ultimately, this exhibition offers more than a retrospective; it is an intimate dialogue with the artist himself. Supported by excerpts from his heartfelt letters to his brother Theo, visitors will gain a deeper understanding of the man behind the myth. It is a powerful exploration of how one individual, faced with immense personal struggles, managed to find and create profound beauty, leaving behind a timeless legacy that forever changed the way we experience the world.",
        ]
    },
    {
        id: 3,
        title: "Monet",
        subtitle: "Water Lilies",
        eventType: "Exhibitions",
        dateRange: "28 August - 2 September",
        year: "2025",
        time: "Daily: 10.00-18.00 (Saturdays 21.00)",
        locationName: "Museum Nasional Indonesia",
        locationAddress: "Jl. Medan Merdeka Barat No.12, Gambir, Jakarta Pusat, 10110",
        imageUrl: "/uploads/events/monet.webp",
        alt: "Lukisan Water Lilies",
        headline: "Immerse Yourself in Light and Water.",
        description: [
            "Step into a world of shimmering light and tranquil water with this immersive exhibition dedicated to Claude Monet's celebrated Water Lilies series. Sourced from his beloved gardens in Giverny, these monumental works represent the artist's final and most ambitious project, an obsession that spanned the last three decades of his life. The gallery is transformed into a reflection of Monet's private world, inviting visitors to experience the serene atmosphere and shifting seasons that he so masterfully captured on canvas.",
            "This collection showcases the remarkable evolution of Monet's style, tracing his journey from detailed Impressionistic scenes to the threshold of modern abstraction. Witness how he used the pond's surface as a mirror for the sky, clouds, and surrounding willows, blurring the lines between reflection and reality. Through his signature rapid brushstrokes and a revolutionary focus on color, Monet was not merely painting a landscape; he was capturing the pure sensation of a fleeting moment, documenting the subtle changes in light from dawn until dusk.",
            "Ultimately, the exhibition reveals more than just a beautiful garden; it unveils the soul of an artist who sought to create a \"haven of peaceful meditation.\" As you move through the space, you are enveloped by the panoramic canvases, fulfilling Monet's vision of an endless whole, a world without a horizon. It is a testament to his genius, a pioneering body of work that dissolved form into pure color and light, forever changing the course of art history and offering a timeless escape into beauty.",
        ]
    },
    {
        id: 4,
        title: "Pablo Picasso",
        subtitle: "The Starry Night Collection",
        eventType: "Exhibitions",
        dateRange: "17 October - 24 October",
        year: "2025",
        time: "Daily: 10.00-18.00 (Saturdays 21.00)",
        locationName: "Museum Nasional Indonesia",
        locationAddress: "Jl. Medan Merdeka Barat No.12, Gambir, Jakarta Pusat, 10110",
        imageUrl: "/uploads/events/picasso.jpg",
        alt: "Lukisan Starry Night oleh Van Gogh",
        headline: "Shattering the Mirror of Reality.",
        description: [
            "Before us lies a face, no longer whole, but a sharp mosaic of intersecting geometric planes. This is the world of Cubism, an artistic revolution pioneered by Pablo Picasso, where the tradition of realistic portraiture is utterly dismantled. Through this work, Picasso does not aim to imitate appearance, but to deconstruct and reassemble the very essence of how we perceive a subject, challenging the notion that reality can only be seen from a single viewpoint.",
            "This work is a manifestation of the radical idea of presenting a subject from multiple viewpoints simultaneously. A nose seen from the front and profile at once, eyes that gaze from different dimensions—all are unified in a single, dynamic composition. Using a powerful color palette, where warm oranges and cool blues collide, Picasso not only fractures form but also wields color to rebuild emotion and structure within a new, more complex reality.",
            "More than just a portrait, this work is a statement that forever changed the course of art. Cubism was an earthquake that shook the foundations of traditional visual arts and opened the door for the abstract movements of the 20th century. Through these fractured forms, Picasso doesn't just invite us to look at a face; he challenges us to question the very act of seeing itself.",
        ]
    },
];

const EventDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Temukan event yang cocok berdasarkan ID dari URL
  const event = eventsData.find(e => e.id === parseInt(id));

  // Tampilkan pesan loading atau not found jika data belum ada
  if (!event) {
    return (
      <CustomerLayout>
        <div className="flex h-screen items-center justify-center">
          <h1>Event not found...</h1>
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout>
      {/* BAGIAN 1: HERO DINAMIS */}
      <div
        className="relative flex h-screen items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      >
        <div className="text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            {event.title}: {event.subtitle}
          </h1>
        </div>
      </div>

      {/* BAGIAN 2: KONTEN DINAMIS */}
      <div className="relative z-10 bg-white flex flex-col md:flex-row justify-between">
        
        <div className="w-full md:w-3/5 p-8 md:py-16 md:px-20">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-secondary">
            {event.headline}
          </h2>
          <div className="space-y-6 text-lg text-secondary">
            {event.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className='w-full md:w-2/5 p-8 md:py-16 md:px-12 md:sticky top-0 self-start'>
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
        </div>
      </div>
    </CustomerLayout>
  );
};

export default EventDetail;