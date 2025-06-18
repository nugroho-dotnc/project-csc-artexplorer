import React from "react";

export default function Login() {
  return (
    <>
      {/* TAMPILAN MOBILE (FORM RATA ATAS) */}
      {/* Akan disembunyikan di layar medium (md) ke atas */}
      <div
        className="w-screen h-screen md:hidden relative bg-cover bg-center"
        style={{ backgroundImage: `url("/uploads/museum/login.jpg")` }}
      >
        {/* Area Form ("Bottom Sheet") */}
        <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-white rounded-t-[24px] p-8 flex flex-col">
          
          {/* PERUBAHAN DI SINI: hapus 'justify-center' dan tambahkan 'pt-8' */}
          <div className="w-full max-w-md mx-auto flex flex-col flex-1 pt-8">
            <h1 className="text-4xl font-serif text-center text-[#5D4037] mb-6">
              Login
            </h1>
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-secondary py-3 px-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#8d6e63] text-secondary"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-secondary py-3 px-4 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-[#8d6e63] text-secondary"
            />
            <button className="w-full bg-[#5D4037] text-primary py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* TAMPILAN DESKTOP (tetap sama) */}
      <div className="w-screen h-screen hidden md:flex relative">
        <div className="w-1/2 h-full bg-[url(/uploads/museum/login.jpg)] bg-center bg-cover rounded-r-[16px]"></div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl text-secondary">Login</h1>
          <p className="text-secondary pt-4">
            A visit to a museum is a journey through time and space.
          </p>
          <input
            type="text"
            placeholder="Username"
            className="w-[80%] border-secondary border-2 mt-8 text-secondary py-2 px-2 rounded-[8px]"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="w-[80%] border-secondary border-2 mt-4 text-secondary py-2 px-2 rounded-[8px]"
          ></input>
          <button className="w-[80%] mt-4 text-primary bg-secondary py-2 rounded-[8px]">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}