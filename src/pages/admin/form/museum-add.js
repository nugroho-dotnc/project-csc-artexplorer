import MuseumAddForm from "@/components/AdminForm/form-museum-add";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/router";
export default function MuseumAdd() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const router = useRouter()
    const handleUpload = async () => {
        if (!selectedImage) {
            toast.error("Please select an image first.");
            return null;
        }

        const formData = new FormData();
        formData.append('file', selectedImage); 

        try {
            const response = await axios.post('/api/uploads/museum', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setSelectedImage(null); 
                setImagePreviewUrl(null); 
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

    const handleMuseumAdd = async (data) => {
        const { name, description, location} = data;
        console.log("Form data received:", data);
        console.log("Selected image:", selectedImage);

        if (!selectedImage) {
            toast.error("Please select an image for the museum.");
            return;
        }

        const imagePath = await handleUpload();
        console.log("Uploaded image path:", imagePath);

        if (!imagePath || name === "" || description === "" || location === "") {
            toast.error("Please ensure all fields are filled and the image is uploaded successfully.");
            return;
        }

        const museum = {
            name, 
            description,
            location,
            imageUrl: imagePath, 
        };

        try {
            const response = await axios.post('/api/museum', museum);
            if (response.data.success) {
                toast.success(response.data.message);
                router.push('/admin')
            } else {
                toast.error(response.data.message || "Failed to add museum.");
            }
        } catch (e) {
            toast.error(e.response?.data?.message || e.response?.data?.error || "An unexpected error occurred while adding the museum.");
            console.error("Museum add error:", e.response?.data?.error || e.message || e);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
            toast.success("Image selected successfully!");
        } else {
            setSelectedImage(null);
            setImagePreviewUrl(null);
            toast.error("No image selected.");
        }
    };

    return (
        <div className="p-8 mt-8">
            <MuseumAddForm
                onSubmit={handleMuseumAdd}
                imageChangeHandle={handleImageChange}
                imagePreviewUrl={imagePreviewUrl}
            />
        </div>
    );
}