import "@/styles/globals.css";
import { Playfair_Display } from "next/font/google";
import { Toaster, ToastBar, useToaster } from "react-hot-toast"; // Import ToastBar and useToaster for advanced styling

const playfairDisplay = Playfair_Display({
  variable: "--font--PlayFairDisplay",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${playfairDisplay.className}`}>
      <Toaster
        position="top-right" 
        containerStyle={{
          top: 20,
          right: 20, 
        }}
        toastOptions={{
          className: "font-serif text-base shadow-lg rounded-md", 
          style: {
            padding: '12px 16px',
            background: '#F5F5DC', 
            color: '#5D4037',
          }, 
          success: {
            iconTheme: {
              primary: '#5D4037',
              secondary: '#F5F5DC', 
            },
            style: {
              border: '1px solid #725D3B', 
            },
          },
        
          error: {
            iconTheme: {
              primary: '#A0522D',
              secondary: '#F5F5DC',
            },
            style: {
              border: '1px solid #A0522D', 
            },
          },
          
          duration: 4000, // 4 seconds

          
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? 'custom-enter 0.5s ease-out forwards' 
                : 'custom-exit 0.5s ease-in forwards', 
            
              width: 'clamp(280px, 90vw, 380px)', 
              maxWidth: '380px', 
            }}
          />
        )}
      </Toaster>

     
      <style jsx global>{`
        @keyframes custom-enter {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes custom-exit {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
        }
      `}</style>

      <Component {...pageProps} />
    </main>
  );
}