const { default: AdminLayout } = require("@/components/admin-layout")

const Dashboard = () => {
    return (
        <AdminLayout>
            <div
                className="xs:p-32 sm:p-28 md:p-24 
                    bg-zinc-100 w-full min-h-dvh"
            >
                <div className="bg-secondary p-6 rounded-lg shadow-md">
                    <div className="overflow-x-auto relative rounded-lg shadow-md bg-slate-50">
                        <div className="flex items-center justify-between p-8">
                        
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
export default Dashboard;