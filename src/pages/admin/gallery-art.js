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
                        <Button label="Simpan Perubahan Data" />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button type="button" className="text-sm text-gray-700 px-8 cursor-pointer hover:underline">Hapus Data Museum</button>
                    </div>
                  </div>
                </div>

              <div className="mt-12">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Museum Collections:</h2>
                  <button
                      type="button"
                      className="bg-secondary-100 text-white px-8 py-2 mt-4 rounded-md shadow-md font-medium cursor-pointer hover:bg-secondary"
                    >
                      Tambah Koleksi
                    </button>
                </div>
                <div className="overflow-auto grid grid-cols-4 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img
                      src="#"
                      alt="Gambar"
                      className="border size-32 rounded-sm w-full"
                    />
                    <h2 className="text-xl font-bold mt-4">Art Piece Title</h2>
                    <p className="text-sm text-gray-700">Description here</p>
                    <button
                      type="button"
                      className="bg-secondary-100 text-white px-6 py-1 mt-4 rounded-md shadow-md font-medium cursor-pointer hover:bg-secondary"
                    >
                      Details
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
