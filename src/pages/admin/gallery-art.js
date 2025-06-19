import { useState } from "react";

import AdminLayout from "@/components/admin-layout";
import ImageField from "@/components/AdminForm/image-field";
import TextField from "@/components/AdminForm/text-field";
import Button from "@/components/AdminForm/button";
import ButtonToggle from "@/components/AdminForm/button-toggle";

export default function GalleryArt() {
  const [image, setImage] = useState(null);

  //State edit data museum
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [isRecommended, setIsRecommended] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, description, location, price, isRecommended });

        setName("");
        setDescription("");
        setLocation("");
        setPrice("");
        setIsRecommended(false);
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
                    <div className="flex justify-evenly gap-4 mt-4">
                        <div className="w-1/2">
                          <TextField
                            id="ticket-price"
                            label="Ticket Price"
                            type="number"
                            step="0.01"
                            min="0"
                            value={price}
                            required={false}
                            onChange={(event) => setPrice(event.target.value)}
                          />
                        </div>
                        <ButtonToggle
                            id="is-recommended"
                            label="Is Recommended?"
                            checked={isRecommended}
                            onChange={(event) => setIsRecommended(event.target.checked)}
                        />
                    </div>
                    <div className="flex justify-center mt-8">
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
                  <Button
                    label="Tambah Datax"
                    variant="add"
                    px="px-8"
                    py="py-1"
                  />
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
                    <div className="mt-4">
                      <Button 
                        label="Delete"
                        variant="delete"
                        px="px-8"
                        py="py-1"
                      />
                    </div>
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
