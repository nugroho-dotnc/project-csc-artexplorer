import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter

export default function AdminSidebar({ onLinkClick }) {
  const router = useRouter();
  const logout = () => {
    sessionStorage.setItem("isLoggedIn", "false")
    router.reload()
  }
  const navItems = [
    { label: 'Dashboard', href: '/admin/', icon: ( // Tambahkan icon sebagai prop untuk kemudahan
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )},
    { label: 'Museum List', href: '/admin/museum-list', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
        </svg>
      )},
    { label: 'Order List', href: '/admin/order-list', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
        </svg>
      )},
    { label: 'Feedback', href: '/admin/feedback', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      )},
  ];

  return (
    // Hapus properti 'fixed', 'top-0', 'left-0', 'shadow-lg', 'z-50'
    // properti ini akan diatur oleh AdminLayout
    <div className="bg-black text-primary w-64 min-h-screen p-4 flex flex-col justify-between">
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">ArtExplorer</h2>
        <hr className="h-px w-4/5 my-4 mx-auto bg-gray-700 border-0" /> {/* Tambah warna untuk hr */}
        <div className="">
          <ul className="space-y-8 mt-8 px-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  // Gunakan router.pathname untuk menentukan tautan aktif
                  className={`flex items-center gap-4 p-2 rounded-lg transition-colors duration-200
                    ${router.pathname === item.href
                      ? 'bg-gray-700 text-white font-semibold' // Style untuk aktif
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white' // Style untuk non-aktif
                    }`}
                  onClick={onLinkClick} // Panggil fungsi dari prop saat link diklik
                >
                  {item.icon} {/* Render ikon */}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-12 px-6 cursor-pointer text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200" onClick={logout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </svg>
        <p>Logout</p>
      </div>
    </div>
  );
}