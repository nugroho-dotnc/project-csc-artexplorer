import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin-layout";
import ImageField from "@/components/AdminForm/image-field";
import TextField from "@/components/AdminForm/text-field";
import Button from "@/components/AdminForm/button";
import ButtonToggle from "@/components/AdminForm/button-toggle";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import axios from "axios";
import { showDeleteAlert } from "@/lib/customAlert";

const GalleryCard = ({ imgUrl, title, description, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={imgUrl}
        alt="Gambar"
        className="border aspect-square object-cover rounded-sm w-full"
      />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-sm text-gray-700 truncate">{description}</p>
      <div className="mt-4">
        <Button label="Delete" variant="delete" onClick={onDelete} />
      </div>
    </div>
  );
};

export default function GalleryArt() {
  const router = useRouter();
  const { id } = router.query; 
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState({}); 
  const [artGallery, setArtGallery] = useState([]); 

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/api/museum/${id}`);
          if (response.data.success) {
            setData(response.data.data); // Set the main museum data
            // Ensure response.data.artGallery exists and is an array before setting
            setArtGallery(response.data.artGallery || []);
            console.log("Fetched Museum Data:", response.data.data);
            console.log("Fetched Art Gallery:", response.data.artGallery);
          }
        } catch (e) {
          toast.error(e.response?.data?.message || "Failed to load museum data.");
          console.error("Fetch data error:", e);
          router.push("/admin"); // Redirect if data fetching fails
        }
      };
      fetchData();
    }
  }, [id, router]); 

  useEffect(() => {
    if (Object.keys(data).length > 0) { 
      setName(data.name || ""); 
      setDescription(data.description || "");
      setLocation(data.location || "");
    }
  }, [data]);

  const handleUpload = async () => {
        if (!image) {
            toast.error("Please select an image first.");
            return null;
        }

        const formData = new FormData();
        formData.append('file', image); 

        try {
            const response = await axios.post('/api/uploads/museum', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setImage(null); 
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

    const handleMuseumUpdate = async (data) => {
        const { name, description, location} = data;
        console.log("Form data received:", data);
        
        let finalImageUrl = data.imageUrl; 

        if (image) { 
            const uploadedPath = await handleUpload(); 
            if (uploadedPath) {
                finalImageUrl = uploadedPath; 
            } else {
                toast.error("Image upload failed. Cannot update museum without a valid image.");
                return;
            }
        }
        console.log("IMGuRL : ", finalImageUrl)
        if ( name === "" || description === "" || location === "") {
            toast.error("Please ensure all fields are filled and the image is uploaded successfully.");
            return;
        }

        const museum = {
            name, 
            description,
            location,
            imageUrl: finalImageUrl, 
        };
        console.log("data:" , museum)
        try {
            const response = await axios.put(`/api/museum/${id}`, museum);
            if (response.data.success) {
                toast.success(response.data.message);
                router.push('/admin')
            } else {
                toast.error(response.data.message || "Failed to add museum.");
            }
        } catch (e) {
            toast.error(e.response?.data?.message || e.response?.data?.error || "An unexpected error occurred while adding the museum.");
            console.log(e.response?.data)
            console.error("Museum add error:", e.response?.data?.error || e.message || e);
        }
    };

  const handleSubmit = (event) => {
      event.preventDefault();
      const museum = { name, description, location, imageUrl: data.imageUrl }
      console.log("Form submitted with:", museum);
      handleMuseumUpdate(museum)
      // setName("");
      // setDescription("");
      // setLocation("");
      // setPrice("");
      // setIsRecommended(false);
  };

  const handleImageChange = (file) => {
    setImage(file);
  };

  const handleMuseumDelete = async (id) =>{
    try{
      const res = await axios.delete(`/api/museum/${id}`)
      if(res.data.success){
        toast.success(res.data.message)
      }else{
        toast.error(res.data.message || "Failed to delete museum")
      }
      router.push('/admin')
    }catch(e){
      console.error("Error deleting museum:", e.response.data.error)
    }
  }

  const handleDeleteArtPiece = async (artId) => {
      try{
        const res = await axios.delete(`/api/art-gallery/${artId}`)
        if(res.data.success){
          toast.success(res.data.message)
        }
      }catch(e){
        console.log(e.message);
        toast.error(e.response?.data?.error??"gagal menghapus koleksi!");
      }
      router.reload();
  }


  return (
    <AdminLayout>
      <div className="bg-zinc-100 w-full min-h-dvh px-4 sm:px-6 md:px-8 py-12">
        <div className="bg-secondary p-4 md:p-6 rounded-lg shadow-md">
          <div className="rounded-lg shadow-md bg-slate-50 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="text-center text-secondary">
                <h1 className="text-3xl font-bold">Gallery Art</h1>
                <p className="mt-4">
                  Explore the art pieces for each museum. Click on an art piece to view more
                  details.
                </p>
              </div>

              <hr className="h-px w-4/5 my-8 mx-auto" />

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 p-6 bg-slate-100 rounded shadow-md">
                <div className="lg:w-1/3">
                  <ImageField
                    id="museum-image"
                    onChange={(file) => handleImageChange(file)} 
                    previewImage={data.imageUrl} 
                  />
                </div>

                <div className="w-full space-y-6">
                  <TextField
                    id="museum-name"
                    label="Museum Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <TextField
                    id="museum-location"
                    label="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                  <TextField
                    id="museum-description"
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required={false}
                  />

                  <div className="flex justify-center mt-8">
                    <div className="flex gap-4">
                      <Button label="Simpan Perubahan" type="submit" /> 
                      <Button label="Hapus Museum" type="button" variant="delete" onClick={
                        () => showDeleteAlert({
                          title: "Delete Museum?",
                          description: "Do you want to delete this museum?",
                          onConfirm: () => handleMuseumDelete(id)
                        })
                        } />
                    </div>
                  </div>
                </div>
              </form>

              <div className="mt-12 px-2 md:px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h2 className="text-2xl font-bold text-secondary">Museum Collections</h2>
                  <Button label="Tambah Data" variant="add" onClick={() => router.push(`/admin/form/gallery-add/${id}`)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 bg-slate-100 p-4 rounded-md shadow-md text-secondary">
                  {artGallery && artGallery.length > 0 ? (
                    artGallery.map((value) => (
                      <GalleryCard
                        key={value.id} 
                        imgUrl={value.imageUrl}
                        title={value.title}
                        description={value.description}
                        onDelete={() =>showDeleteAlert({
                          title: "Delete Collection",
                          description: "Do you want to delete this collection?",
                          onConfirm: () =>  handleDeleteArtPiece(value.id)
                        })}
                      />
                    ))
                  ) : (
                    <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex items-center justify-center py-8">
                      <h1 className="text-gray-500 text-lg">Belum ada koleksi</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

