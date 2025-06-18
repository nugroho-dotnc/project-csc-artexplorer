import { useState } from "react";

import AdminLayout from "@/components/admin-layout";
import ImageField from "@/components/AdminForm/image-field";
import TextField from "@/components/AdminForm/text-field";
import Button from "@/components/AdminForm/button";

export default function GalleryArt() {
  const [image, setImage] = useState(null);

  //State edit data museum
      const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, description, location });

        setName("");
        setDescription("");
        setLocation("");
    }


  return (
    <AdminLayout>
      <div
        className="xs:p-32 sm:p-28 md:p-24 
         bg-zinc-100 w-full min-h-dvh"
      >
        <div className="bg-secondary p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto relative rounded-lg shadow-md bg-slate-50">
            <div className="p-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                  Gallery Art
                </h1>
                <p className="mt-4">
                  Explore the art pieces for each museums. Click on an art piece
                  to view more details.
                </p>
              </div>

              <hr className="h-px w-4/5 my-8 mx-auto" />
              
                <div className="flex p-8 bg-slate-100 rounded shadow-md">
                  <div className="mt-4">
                    <ImageField id="museum-image" onChange={(file) => setImage(file)} />
                  </div>
                  <div className="w-full mx-8 px-12 py-2">
                    <TextField
                        id="museum-name"
                        label="Museum Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                    <TextField
                        id="museum-location"
                        label="Location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        required
                    />
                    <TextField
                        id="museum-description"
                        label="Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required={false}
                    />
                    <div className="flex justify-end mt-4">
                        <div className="flex gap-4 ">
                          <Button label="Simpan Perubahan" />
                          <Button label="Hapus" type="button" />
                        </div>
                    </div>
                  </div>
                </div>

              <div className="mt-12 px-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Museum Collections</h2>
                  <button
                      type="button"
                      className="bg-secondary-100 text-white px-8 py-2 mt-4 rounded-md shadow-md font-medium cursor-pointer hover:bg-secondary"
                    >
                      Tambah Koleksi
                    </button>
                </div>
                <div className="overflow-x-auto grid grid-cols-4 gap-4 mt-8 bg-slate-100 p-4 rounded-md shadow-md">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img
                      src="#"
                      alt="Gambar"
                      className="border size-32 rounded-sm w-full"
                    />
                    <h2 className="text-xl font-bold mt-4">Art Piece Title</h2>
                    <p className="text-sm text-gray-700 truncate">Description here</p>
                    <button
                      type="button"
                      className="bg-secondary-100 text-white px-6 py-1 mt-6 rounded-md shadow-md font-medium cursor-pointer hover:bg-secondary flex justify-center gap-2 w-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
