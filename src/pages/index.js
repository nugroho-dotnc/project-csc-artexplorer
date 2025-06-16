import Image from "next/image";
import MuseumCard from "@/components/museum-card";



export default function Home() {
  return (
    <div >
      <main>
        <section className="h-screen bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/HERO.png')" }}>
            <div className="w-full h-full flex items-center justify-center bg-[#000]/40">
              <div className="flex flex-col gap-6 justify-center items-center">
                <h1 className="text-primary text-shadow-sm font-bold text-center text-4xl md:text-5xl text-shadow-primary-100">
                    Bienvenue au <br/> Sanctuaire des Arts
                </h1>
                <p className="text-primary text-shadow-xs font-normal text-center text-xl md:text-2xl">
                    Là où le passé respire encore
                </p>
                <a className="py-2 px-6 text-lg md:text-xl bg-primary w-fit rounded-full mt-6 text-secondary" href="#welcome">
                  Read More
                </a>
              </div>
            </div>
        </section>
        <section className="h-screen flex w-full justify-center items-center" id="welcome">
          <div className="w-[90%] h-72 gap-4 flex flex-col-reverse md:flex-row">
              <div className="w-full flex flex-col gap-6">
                  <div className="text-secondary flex flex-col border-b-2 pb-4 border-secondary gap-4">
                      <h1 className="text-3xl md:text-5xl font-bold ">
                          Welcome to the Museum
                      </h1>
                      <p className="text-xl md:text-2xl font-normal">
                          A timeless sanctuary of art, history, and human spirit.
                      </p>
                  </div>
                  <p className="ms-8 text-lg md:text-xl text-justify text-secondary-100">
                    Situs ini hadir sebagai panduan kurasi untuk museum-museum terbaik di Jabodetabek — tempat di mana setiap ruang menyimpan kisah, dan setiap karya mengundang rasa kagum. Baik Anda pecinta seni, penikmat sejarah, maupun pencari inspirasi akhir pekan, di sinilah perjalanan budaya Anda bermula. Dari museum megah berskala nasional hingga galeri tersembunyi yang memesona, kami hadirkan rekomendasi yang layak Anda kunjungi. Karena masa lalu layak untuk dilihat, dan Anda pantas untuk terinspirasi.
                  </p>
              </div>
              <div className="w-full flex justify-center">
                  <img src="/images/HEAD.png" className="h-[24rem] w-[24rem] md:w-[32rem] md:h-[32rem] object-cover"></img>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}
