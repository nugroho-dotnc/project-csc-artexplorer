import React, { useState } from "react";
import { useRouter } from "next/router";


function TextInput({ className, ...props }) {
  const baseClasses = "border text-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8d6e63]";
  return <input className={`${baseClasses} ${className}`} {...props} />;
}


function Button({ children, className, ...props }) {
  const baseClasses = "text-primary font-semibold transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-2 hover:border-secondary hover:text-secondary hover:bg-white";
  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}


function LoginForm({ isMobile = false }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError(""); 
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("isLoggedIn", "true"); 
      router.push("/admin");
    } else {
      setError("Invalid username or password."); 
    }
  };

  return (
    <div className={isMobile ? "w-full max-w-md mx-auto flex flex-col flex-1 pt-8" : "w-1/2 h-full flex flex-col justify-center items-center"}>
      <h1 className={isMobile ? "text-4xl font-serif text-center text-[#5D4037] mb-6" : "text-4xl text-secondary"}>
        Login
      </h1>
      {!isMobile && (
        <p className="text-secondary pt-4">
          A visit to a museum is a journey through time and space.
        </p>
      )}
      <TextInput
        type="text"
        placeholder="Username"
        className={isMobile ? "w-full border-secondary py-3 px-4 rounded-xl mb-4" : "w-[80%] border-2 border-secondary mt-8 py-2 px-2 rounded-[8px]"}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Password"
        className={isMobile ? "w-full border-secondary py-3 px-4 rounded-xl mb-6" : "w-[80%] border-2 border-secondary mt-4 py-2 px-2 rounded-[8px]"}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>} 
      <Button
        className={isMobile ? "w-full bg-[#5D4037] py-3 rounded-xl hover:shadow-lg hover:bg-opacity-90" : "w-[80%] mt-4 bg-secondary py-2 rounded-[8px] hover:shadow-md hover:bg-opacity-90"}
        onClick={handleLogin}
      >
        Sign In
      </Button>
    </div>
  );
}

export default function Login() {
  return (
    <>
      <div
        className="w-screen h-screen md:hidden relative bg-cover bg-center"
        style={{ backgroundImage: `url("/uploads/museum/login.jpg")` }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-white rounded-t-[24px] p-8 flex flex-col">
          <LoginForm isMobile={true} />
        </div>
      </div>

      <div className="w-screen h-screen hidden md:flex relative">
        <div className="w-1/2 h-full bg-[url(/uploads/museum/login.jpg)] bg-center bg-cover"></div>
        <LoginForm isMobile={false} />
      </div>
    </>
  );
}