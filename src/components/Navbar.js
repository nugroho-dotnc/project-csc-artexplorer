import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';

const NavLink = ({ label, link }) => {
  const router = useRouter();
  const isActive = router.pathname === link;

  return (
    <Link href={link} className={`text-primary ${isActive ? 'border-b border-[#FFFBD9]' : ''}`}>
      {label}
    </Link>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const toggleNavbar = () => setIsOpen(prev => !prev);

  const navLinksLeft = (
    <>
      <NavLink label="Home" link="/" />
      <NavLink label="Museums" link="/museums" />
    </>
  );

  const navLinksRight = (
    <>
      <NavLink label="About" link="/about" />
      <NavLink label="Gallery" link="/gallery" />
    </>
  );

  return (
    <header className="w-full fixed top-0 bg-black text-primary z-50">
      {viewportWidth < 768 ? (
        <div className="flex flex-col p-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">ArtExplorer</Link>
            <button onClick={toggleNavbar} aria-label="Toggle Menu">
              <Bars3Icon className="w-8 h-8" />
            </button>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col items-center gap-4 mt-4 ${
              isOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'
            }`}
          >
            {navLinksLeft}
            {navLinksRight}
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center px-8 py-4">
          <nav className="flex gap-6">{navLinksLeft}</nav>
          <Link href="/" className="text-2xl font-bold">ArtExplorer</Link>
          <nav className="flex gap-6">{navLinksRight}</nav>
        </div>
      )}
    </header>
  );
}

