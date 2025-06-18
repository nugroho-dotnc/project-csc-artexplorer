import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';

// Komponen NavLink dioptimalkan untuk memoization jika dibutuhkan
// useCallback digunakan di Navbar untuk mencegah re-render yang tidak perlu pada NavLink
const NavLink = ({ label, link, isActive, onClick }) => {
  return (
    <Link
      href={link}
      className={`text-primary ${isActive ? 'border-b border-[#FFFBD9]' : ''}`}
      onClick={onClick}
      // Tambahkan role="menuitem" untuk aksesibilitas pada navigasi
      role="menuitem"
    >
      {label}
    </Link>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChange);
    };
  }, [router.events]);

  const toggleNavbar = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  
  const handleNavLinkClick = useCallback(() => {
    if (isOpen) { 
      setIsOpen(false);
    }
  }, [isOpen]);

  const renderNavLinks = useCallback((links) => {
    return links.map(({ label, link }) => (
      <NavLink
        key={link} 
        label={label}
        link={link}
        isActive={router.pathname === link}
        onClick={handleNavLinkClick}
      />
    ));
  }, [router.pathname, handleNavLinkClick]);

  const navLinksDataLeft = [
    { label: "Home", link: "/" },
    { label: "Museums", link: "/museums" },
  ];

  const navLinksDataRight = [
    { label: "About", link: "/about" },
    { label: "Gallery", link: "/gallery" },
  ];

  return (
    <header
      className="w-full fixed top-0 bg-black text-primary z-50"
      role="banner"
      aria-label="Main Navigation"
    >
      <div className="flex flex-col p-4 md:hidden">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold" aria-label="ArtExplorer Home">ArtExplorer</Link>
          <button
            onClick={toggleNavbar}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>

        <nav
          id="mobile-menu"
          className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col items-center gap-4 mt-4 ${
            isOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'
          }`}
          aria-hidden={!isOpen}
          role="navigation"
          aria-label="Mobile Navigation Menu"
        >
          {renderNavLinks(navLinksDataLeft)}
          {renderNavLinks(navLinksDataRight)}
        </nav>
      </div>

   
      <div className="hidden md:flex justify-between items-center px-8 py-4">
        <nav className="flex gap-6" role="navigation" aria-label="Left Desktop Navigation">
          {renderNavLinks(navLinksDataLeft)}
        </nav>
        <Link href="/" className="text-2xl font-bold" aria-label="ArtExplorer Home">ArtExplorer</Link>
        <nav className="flex gap-6" role="navigation" aria-label="Right Desktop Navigation">
          {renderNavLinks(navLinksDataRight)}
        </nav>
      </div>
    </header>
  );
}