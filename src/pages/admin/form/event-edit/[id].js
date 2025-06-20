import EventEditForm from "@/components/AdminForm/form-event-edit";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin-layout"; 

export default function EventEdit() {
    const router = useRouter();
    const { id } = router.query; 
    const [eventData, setEventData] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEventData = async () => {
        if (!id) return; 

        try {
            setLoading(true);
            const res = await axios.get(`/api/event/${id}`);
            if (res.data.success) {
                setEventData(res.data.data); 
            } else {
                toast.error(res.data.message || "Gagal memuat data event.");
                setError(res.data.message || "Gagal memuat data event.");
            }
        } catch (e) {
            console.error("GET Event API Error:", e);
            toast.error(e.response?.data?.message || "Terjadi kesalahan saat memuat data event.");
            setError(e.response?.data?.message || "Terjadi kesalahan saat memuat data event.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEventData();
    }, [id]);

    const handleUpload = async (image) => {
        if (!image) {
            toast.error("Please select an image first.");
            return null;
        }

        const formData = new FormData();
        formData.append('file', image); 

        try {
            const response = await axios.post('/api/uploads/event', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                toast.success(response.data.message);
                console.log('Uploaded image path:', response.data.path);
                return response.data.path; 
            } else {
                toast.error(response.data.message || "Image upload failed.");
                console.error('Upload error:', response.data.error);
                return null; 
            }
        } catch (error) {
            toast.error(`Upload error: ${error.response?.data?.message || error.message || 'An unknown upload error occurred.'}`);
            console.error('Upload catch error:', error);
            return null;
        }
    };

    const handleEventEdit = async (data) => {
        const { title, description, startDate, endDate, image, museumId } = data;
        console.log(data)
        try {
            let imageUrlToSave = eventData?.imageUrl; 
            if (image) { 
                imageUrlToSave = await handleUpload(image);
                if (!imageUrlToSave) {
                    return;
                }
            }
            
            const eventPayload = {
                title: title,
                description: description,
                imageUrl: imageUrlToSave, 
                museumId: parseInt(museumId), 
                startDate: startDate,
                endDate: endDate,
            };

            const response = await axios.put(`/api/event/${id}`, eventPayload);

            if (response.data.success) {
                toast.success("Event berhasil diperbarui!");
                router.back(); 
            } else {
                toast.error(response.data.message || "Gagal memperbarui event.");
            }
        } catch (e) {
            console.error("PUT Event API Error:", e);
            toast.error(e.response?.data?.message || "Terjadi kesalahan saat memperbarui event.");
        }
    };

    if (loading) {
        return (
           
                <div className="flex justify-center items-center h-dvh">
                    <p className="text-xl font-semibold text-gray-700">Memuat data event...</p>
                </div>
        );
    }

    if (error) {
        return (  
                <div className="flex justify-center items-center h-dvh text-red-600">
                    <p className="text-xl font-semibold">Error: {error}</p>
                </div>
        );
    }

    if (!eventData) {
        return (
                <div className="flex justify-center items-center h-dvh">
                    <p className="text-xl font-semibold text-gray-500">Data event tidak ditemukan.</p>
                </div>
        );
    }

    return (
            <div className="p-8 mt-8">
                <EventEditForm onSubmit={handleEventEdit} event={eventData} />
            </div>
    );
}