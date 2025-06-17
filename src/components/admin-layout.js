import AdminSidebar from "./admin-sidebar";

export default function AdminLayout({ children }) {
    return (
        <div className="flex justify-between min-h-screen bg-gray-100">
            <AdminSidebar />
            <div className="flex-1 p-4">
                {children}
            </div>
        </div>
    );
}