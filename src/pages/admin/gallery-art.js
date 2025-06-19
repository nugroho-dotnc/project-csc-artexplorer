import { useState } from "react";

import AdminLayout from "@/components/admin-layout";
import ImageField from "@/components/AdminForm/image-field";
import TextField from "@/components/AdminForm/text-field";
import Button from "@/components/AdminForm/button";
import ButtonToggle from "@/components/AdminForm/button-toggle";

export default function GalleryArt() {
  const [image, setImage] = useState(null);
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
  };

  return (
    <AdminLayout>
      <div className="bg-zinc-100 w-full min-h-dvh px-4 sm:px-6 md:px-8 py-12">
        <div className="bg-secondary p-4 md:p-6 rounded-lg shadow-md">
          <div className="rounded-lg shadow-md bg-slate-50 overflow-hidden">
            <div className="p-6 md:p-8">
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

              {/* Form */}
              <div className="flex flex-col lg:flex-row gap-8 p-6 bg-slate-100 rounded shadow-md">
                <div className="lg:w-1/3">
                  <ImageField
                    id="museum-image"
                    onChange={(file) => setImage(file)}
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
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <TextField
                        id="ticket-price"
                        label="Ticket Price"
                        type="number"
                        step="0.01"
                        min="0"
                        value={price}
                        required={false}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <ButtonToggle
                        id="is-recommended"
                        label="Is Recommended?"
                        checked={isRecommended}
                        onChange={(e) =>
                          setIsRecommended(e.target.checked)
                        }
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <div className="flex gap-4">
                      <Button label="Simpan Perubahan" />
                      <Button label="Hapus" type="button" variant="delete" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Collection Section */}
              <div className="mt-12 px-2 md:px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h2 className="text-2xl font-bold">Museum Collections</h2>
                  <Button label="Tambah Data" variant="add" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 bg-slate-100 p-4 rounded-md shadow-md">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img
                      src="#"
                      alt="Gambar"
                      className="border aspect-square object-cover rounded-sm w-full"
                    />
                    <h2 className="text-xl font-bold mt-4">Art Piece Title</h2>
                    <p className="text-sm text-gray-700 truncate">
                      Description here
                    </p>
                    <div className="mt-4">
                      <Button label="Delete" variant="delete" />
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
