import { useState, useEffect } from 'react';
import AdminSidebar from './admin-sidebar';
import AdminMobileNav from '../components/admin-mobile-nav'; 
import { useRouter } from 'next/router';
export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()
  useEffect(()=>{
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
      if(isLoggedIn !==  'true' || isLoggedIn  === null) {
        router.push('/auth/login')
        setIsLoading(false);
      }else{
        setIsLoading(false);
      }
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset'; 
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const LoadingView = ()  => {
    return (
      <button type="button" class="bg-secondary text-primary ..." disabled>
      <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"></svg>
      Processing…
    </button>
    )
  }
  return (
    isLoading?
    <div className='h-screen w-full flex justify-center items-center'>
      <LoadingView/>
    </div>
    :
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 ">
      <AdminMobileNav onMenuToggle={toggleSidebar} />

      <div className="hidden md:flex">
        <AdminSidebar />
      </div>

      <div
        className={`fixed inset-y-0 left-0 w-64 max-w-64 bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden`} 
        aria-hidden={!isSidebarOpen} 
      >
        <AdminSidebar onLinkClick={closeSidebar} /> 
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={toggleSidebar} 
          aria-hidden="true" 
        ></div>
      )}

      <div className={`flex-1 p-4 overflow-auto
        transition-all duration-300 ease-in-out`}>
        {children}
      </div>
    </div>
  );
}