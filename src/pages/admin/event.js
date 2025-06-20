import AdminLayout from "@/components/admin-layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { showDeleteAlert } from "@/lib/customAlert";

const EventListCard = ({ imageUrl, title, description, startDate, endDate, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto relative even:bg-white odd:bg-slate-50 border-b border-gray-300">
      <div className="grid grid-cols-3 gap-4 p-8">
        <img
          src={imageUrl}
          alt="gambar"
          className="border size-32 rounded-sm col-span-1 mx-auto object-cover"
        />
        <div className="col-span-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2 text-gray-700 text-sm">{description}</p>
          <div className="flex justify-between items-center mt-4 text-sm">
            <p>
              {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="hover:font-medium hover:underline"
                onClick={onEdit}
              >
                Edit
              </button>
              <button
                type="button"
                className="hover:font-medium hover:underline text-red-600"
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EventList() {
  const [data, setData] = useState([]);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/event");
      if (response.data.success) {
        setData(response.data.data);
      }
    } catch (e) {
      toast.error(e.response?.data?.message || "Gagal mengambil data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/event/${id}`);
      toast.success("Event berhasil dihapus");
      fetchData();
    } catch (e) {
      toast.error(e.response?.data?.message || "Gagal menghapus data");
    }
  };

  return (
    <AdminLayout>
      <div className="xs:p-32 sm:p-28 md:p-24 bg-zinc-100 w-full min-h-dvh text-secondary">
        <div className="bg-secondary mx-4 md:mx-0 p-1 md:p-6 rounded-lg shadow-md mt-16 md:mt-0">
          <div className="overflow-x-auto relative rounded-lg shadow-md bg-slate-50">
            <div className="flex flex-col md:flex-row items-center justify-between p-8">
              <h1 className="text-3xl font-bold">Event List</h1>
              <div className="flex justify-between items-center gap-6 mt-4 md:mt-0">
                {/* <div className="flex items-center gap-4 bg-zinc-100 p-2 rounded shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <input
                    type="search"
                    placeholder="Search..."
                    className="outline-none placeholder-secondary/80"
                  />
                </div> */}
                <a
                  type="button"
                  className="bg-secondary-100 text-white px-8 py-2 hidden md:block rounded-md shadow-md font-medium cursor-pointer hover:bg-secondary"
                  href="/admin/form/event-add"
                >
                  Tambah Data
                </a>
                <a
                  type="button"
                  className="bg-secondary-100 text-white px-4 py-2 block md:hidden rounded-md shadow-md font-medium cursor-pointer hover:bg-secondary"
                  href="/admin/form/event-add"
                >
                  +
                </a>
              </div>
            </div>
            {data.map((event) => (
              <EventListCard
                key={event.idEvent}
                imageUrl={event.imageUrl}
                title={event.title}
                description={event.description}
                startDate={event.startDate}
                endDate={event.endDate}
                onEdit={() => router.push(`/admin/form/event-edit/${event.id}`)}
                onDelete={() => showDeleteAlert(
                  {
                    title: "Delete Event",
                    message: "Are you sure you want to delete this event?",
                    onConfirm: ()=> handleDelete(event.id)
                  }
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
