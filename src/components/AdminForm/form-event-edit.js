import { useState, useEffect } from "react";
import TextField from "@/components/AdminForm/text-field";
import Button from "@/components/AdminForm/button";
import FileField from "./file-field";
import ImageField from "./image-field";
import SelectField from "../select-field";
import axios from "axios";
import toast from "react-hot-toast";

export default function EventEditForm({ onSubmit, event }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [selectedMuseumId, setSelectedMuseumId] = useState("");
  const [museumOptions, setMuseumOptions] = useState([]);

  const fetchMuseums = async () => {
    try {
      const res = await axios.get(`/api/museum`);
      const options = res.data.data.map((museum) => ({
        label: museum.name,
        value: museum.idMuseum.toString(),
      }));
      setMuseumOptions(options);
    } catch (e) {
      toast.error(e.response?.data?.message || "Gagal mendapatkan data museum!");
    }
  };

  

  useEffect(() => {
    fetchMuseums();
    setTitle(event.title);
    setDescription(event.description);
    setStartDate(event.startDate ? new Date(event.startDate).toISOString().split('T')[0] : "");
    setEndDate(event.endDate ? new Date(event.endDate).toISOString().split('T')[0] : "");
    setImagePreview(event.imageUrl);
    setSelectedMuseumId(event.museumId?.toString() || "");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !description || !startDate || !endDate || !selectedMuseumId) {
      toast.error("Mohon lengkapi semua kolom yang wajib diisi.");
      return;
    }

    onSubmit({
      title,
      description,
      startDate,
      endDate,
      image,
      museumId: selectedMuseumId,
    });
  };

  const handleImagePick = (pickedImageFile) => {
    setImage(pickedImageFile)
  };

  const handleMuseumChange = (e) => {
    setSelectedMuseumId(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 mt-8 py-8 px-4 sm:px-8 md:px-16 bg-zinc-50 rounded shadow-md w-full max-w-xl mx-auto"
    >
      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="cursor-pointer top-4 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <div>
          <h2 className="text-2xl font-bold text-center">Edit Event</h2>
        </div>
        <div></div>
      </div>

      <hr className="h-px w-4/5 my-4 mx-auto" />
      
      <div className="flex w-full justify-center">
        <ImageField 
          id="event-image" 
          onChange={handleImagePick} 
          previewImage={imagePreview}
        />
      </div>

      <TextField
        id="event-title"
        label="Judul Event"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <TextField
        id="event-description"
        label="Deskripsi"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <TextField
        id="start-date"
        label="Tanggal Mulai"
        type="date"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
        required
      />

      <TextField
        id="end-date"
        label="Tanggal Selesai"
        type="date"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
        required
      />

      <SelectField
        id={"museum-select"}
        label={"Pilih Museum"}
        options={museumOptions}
        value={selectedMuseumId}
        onChange={(e) => handleMuseumChange(e)}
        required={true}
      />

      <div className="flex justify-center">
        <Button label="Simpan Perubahan" variant="edit" />
      </div>
    </form>
  );
}