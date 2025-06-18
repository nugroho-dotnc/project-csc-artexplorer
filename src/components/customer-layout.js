
import {Navbar} from "@/components/Navbar";
export default function CustomerLayout({ children }) {
    return (
        <div className="flex flex-col justify-start min-h-screen bg-gray-100">
            <Navbar/>
            <div>
                {children}
            </div>
        </div>
    );
}