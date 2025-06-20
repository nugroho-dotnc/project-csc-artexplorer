import GalleryAddForm from "@/components/AdminForm/form-gallery-add";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import axios from "axios";
export default function GalleryAdd() {
    const router = useRouter();
    const {id} = router.query;
    const handleGalleryAdd = async (data) => {
        const {title, description, image} = data;
        if(title == null || description == null || image == null) {
            toast.error("please fill all fields");
        }
        try{
            const imagePath = await handleUpload(image)
            const gallery = {
                title:title,
                description:description,
                imageUrl: imagePath,
                museumId: id
            }
            const response = await axios.post('/api/art-gallery', gallery);
            if(response.data.success){
                toast.success("Gallery Added");
                router.back();
            }
            console.log(gallery)
        }catch(e){
            toast.error(e.response?.data?.error??"Gagal Menambahkan Gallery")
        }
        console.log(title, description, image);
    };
    const handleUpload = async (image) => {
        if (!image) {
            toast.error("Please select an image first.");
            return null;
        }

        const formData = new FormData();
        formData.append('file', image); 

        try {
            const response = await axios.post('/api/uploads/gallery', formData, {
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
            <GalleryAddForm onSubmit={handleGalleryAdd} />
        </div>
    );
}