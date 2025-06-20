import { useState, useEffect } from "react";

import TextField from "@/components/AdminForm/text-field";
import Button from "@/components/AdminForm/button";
import FileField from "./file-field";
import ImageField from "./image-field";
import SelectField from "../select-field";
import axios from "axios";
import toast from "react-hot-toast";

export default function EventAddForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState(null);
  const [selectedMuseumId, setSelectedMuseumId] = useState("");
  const [museumOptions, setMuseumOptions] = useState([]);

  const fetchMuseums = async () => {
    try {
      const res = await axios.get(`/api/museum`);
      const options = await res.data.data.map((museum) => ({
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
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !description || !startDate || !endDate || !image || !selectedMuseumId) {
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

    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setSelectedMuseumId("");
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
          <h2 className="text-2xl font-bold text-center">Tambah Event</h2>
        </div>
        <div></div>
      </div>

      <hr className="h-px w-4/5 my-4 mx-auto" />
      <div className="flex w-full justify-center">
        <ImageField id="event-image" onChange={(e)=>handleImagePick(e)} />
      </div>
      
      <TextField
        id="event-title"
        label="Event Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <TextField
        id="event-description"
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <TextField
        id="start-date"
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
        required
      />

      <TextField
        id="end-date"
        label="End Date"
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
        onChange={handleMuseumChange}
        required
      />

      <div className="flex justify-center">
        <Button label="Tambah Data" variant="add" />
      </div>
    </form>
  );
}