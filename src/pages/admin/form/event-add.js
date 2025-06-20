import EventAddForm from "@/components/AdminForm/form-event-add";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";
export default function EventAdd() {
    const router = useRouter();
    const handleEventAdd = async (data) => {
        const {title,description,startDate,endDate,image,museumId} = data
        if(title == null || description == null || image == null || startDate == null || endDate == null || museumId == null) {
            toast.error("please fill all fields");
        }
        try{
            const imagePath = await handleUpload(image)
            const events = {
                title:title,
                description:description,
                imageUrl: imagePath,
                museumId: museumId,
                startDate:startDate,
                endDate:endDate, 
            }
            const response = await axios.post('/api/event', events);
            if(response.data.success){
                toast.success("event Added");
                router.back();
            }
            console.log(gallery)
        }catch(e){
            toast.error(e.response?.data?.error??"Gagal Menambahkan event")
        }
        console.log(title, description, image);
        console.log(data)
    };
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
    return (
        <div className="p-8 mt-8">
            <EventAddForm onSubmit={handleEventAdd} />
        </div>
    );
}