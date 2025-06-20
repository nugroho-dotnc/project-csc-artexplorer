import CustomerLayout from "@/components/customer-layout";
import Scroll from "@/components/Scroll";
import Image from "next/image";
import Link from "next/link";

const ArtExplorerPage = () => {
  return (
    <CustomerLayout>
      <div className="flex flex-col min-h-screen items-start relative bg-white font-playfair">
        {/* Navbar */}
        <nav className="flex w-full items-center justify-between py-4 px-6 md:px-8 bg-navbar-bg relative">
          <div className="text-3xl md:text-4xl font-bold text-primary">
            ArtExplorer
          </div>

          {/* Menu untuk Desktop */}
          <div className="hidden md:inline-flex items-center gap-8 lg:gap-[84px] md:px-16 relative">
            <Link href="#" className="text-lg font-bold text-primary">
              Home
            </Link>
            <Link href="#" className="text-lg font-bold text-primary">
              Gallery
            </Link>
            <Link href="#" className="text-lg font-bold text-primary">
              Contact
            </Link>
            <Link href="#" className="text-lg font-bold text-primary">
              About
            </Link>
          </div>

          {/* Tombol Hamburger untuk Mobile */}
          <div className="md:hidden">
            {/* Anda perlu menambahkan state dan onClick untuk fungsionalitas menu mobile */}
            <button className="text-primary focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Content Container */}
        <main className="flex flex-col w-full items-start gap-12 md:gap-[52px] py-10 px-6 md:px-12 lg:px-24 xl:px-48">
          {/* About Us Section */}
          <Scroll>
            <section className="flex flex-col items-start gap-5 w-full">
              <div className="flex justify-center w-full">
                <h1 className="text-3xl md:text-[40px] font-bold text-secondary w-fit text-center">
                  About Us
                </h1>
              </div>
              <div className="flex justify-center w-full">
                <p className="text-lg md:text-xl text-center text-secondary">
                  This digital platform expands access to
                  art collections and museum culture. Explore our rich virtual galleries in
                  detail, get to know the institution's vision and mission on our About
                  page, and get in touch via the contact form. This site
                  is designed to be responsive and easily accessible on all devices.&#34;
                </p>
              </div>
            </section>
          </Scroll>

          {/* Visi Misi Section */}
          <Scroll>
            <section className="flex flex-col lg:flex-row w-full mx-auto items-center lg:items-start gap-10 lg:gap-[52px]">
              {/* Gambar */}
              <div
                className="w-full lg:w-[461px] h-[60vh] lg:h-[849px] bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: "url('/images/museum-potrait.jpg')" }}
              ></div>

              {/* Visi, Misi, Nilai Container */}
              <div className="inline-flex flex-col justify-center gap-12 lg:gap-[120px] flex-1">
                <Scroll>
                  {/* Visi */}
                <div className="flex flex-col w-full items-start gap-2">
                  <div className="flex items-center gap-3 w-full">
                    <Image
                      className="w-12 h-12"
                      src="/uploads/icons/eye-icon.png"
                      alt="Visi Icon"
                      width={48}
                      height={48}
                    />
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                      Vision
                    </h2>
                  </div>
                  <div className="flex items-start gap-3 w-full">
                    <p className="text-base text-justify text-secondary">
                      Our vision is to make ArtExplorer the bridge between
                      heritage and the future. We use art and
                      history to facilitate critical dialog, challenge ways of
                      seeing, and inspire a global audience to help
                      shape a better world.
                    </p>
                  </div>
                </div>
                </Scroll>
                <Scroll>
                  {/* Misi */}
                <div className="flex flex-col w-full items-start gap-2">
                  <div className="flex items-center gap-3 w-full">
                    <Image
                      className="w-12 h-12"
                      src="/uploads/icons/trophy-icon.png"
                      alt="Misi Icon"
                      width={48}
                      height={48}
                    />
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                      Mission
                    </h2>
                  </div>
                  <div className="flex items-start gap-3 w-full">
                    <p className="text-base text-justify text-secondary">
                      ArtExplorer's mission is to provide access to art and culture
                      that is open to all. We create participatory
                      educational programs and establish partnerships with
                      communities to be a relevant space of inspiration for every
                      person.
                    </p>
                  </div>
                </div>
                </Scroll>
                <Scroll>
                  {/* Nilai */}
                <div className="flex flex-col w-full items-start gap-2">
                  <div className="flex items-center gap-3 w-full">
                    <Image
                      className="w-12 h-12"
                      src="/uploads/icons/heart-icon.png"
                      alt="Nilai Icon"
                      width={48}
                      height={48}
                    />
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                      Values
                    </h2>
                  </div>
                  <div className="flex items-start gap-3 w-full">
                    <p className="text-base text-justify text-secondary">
                      With a deep sense of responsibility to preserve
                      cultural heritage, ArtExplorer operates on the basis of integrity in
                      every research and interaction. It is this commitment that
                      drives us to always present excellence in
                      every exhibition and service, in order to provide you with an unforgettable
                      experience.
                    </p>
                  </div>
                </div>
                </Scroll>
              </div>
            </section>
          </Scroll>
        </main>

        {/* Team Section / Footer */}
        <footer className="flex flex-col items-center gap-10 py-12 md:py-20 px-6 md:px-24 w-full bg-[#363636]">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl md:text-[40px] font-bold text-primary w-fit text-center">
              Team Members
            </h2>
          </div>
          <div className="flex flex-col items-center gap-10 w-full">
            <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-[52px] w-full *:flex-1">
              <div>
                <Scroll>
                {/* Team Member 1 */}
                <div className="flex flex-col items-center gap-4 flex-1">
                  <div className="h-[435px] w-full bg-white"></div>{" "}
                  {/* Placeholder untuk foto */}
                  <div className="text-xl md:text-2xl font-bold text-white w-fit text-center">
                    Naufal Bintang P H
                  </div>
                </div>
              </Scroll>
              </div>
              <div>
              <Scroll>
                {/* Team Member 2 */}
                <div className="flex flex-col items-center gap-4 flex-1">
                  <div className="h-[435px] w-full bg-white"></div>{" "}
                  {/* Placeholder untuk foto */}
                  <div className="text-xl md:text-2xl font-bold text-white w-fit text-center">
                    Nugroho Nur Cahyo
                  </div>
                </div>
              </Scroll>
              </div>
              <div>
              <Scroll>
                {/* Team Member 3 */}
                <div className="flex flex-col items-center gap-4 flex-1">
                  <div className="h-[435px] w-full bg-white"></div>{" "}
                  {/* Placeholder untuk foto */}
                  <div className="text-xl md:text-2xl font-bold text-white w-fit text-center">
                    Muhammad Reza Hafizzi
                  </div>
                </div>
              </Scroll>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </CustomerLayout>
  );
};

export default ArtExplorerPage;
