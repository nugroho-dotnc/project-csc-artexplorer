// Pastikan ini adalah client component karena menggunakan hook `usePathname`
'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ label, link }) => {
    // Gunakan hook usePathname dari Next.js
    const pathname = usePathname();

    // Tentukan apakah link ini sedang aktif
    const isActive = pathname === link;

    return (
        <Link 
            href={link} 
            className={`
                text-primary text-xl font-serif 
                transition-all duration-300 hover:text-white/80
                ${isActive ? 'font-bold text-white' : ''}
            `}
        >
            {label}
        </Link>
    );
};

export default NavLink;