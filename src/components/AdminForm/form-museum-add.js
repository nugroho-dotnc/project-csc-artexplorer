import { useState } from "react";

import TextField from "@/components/AdminForm/text-field";
import Button from "@/components/AdminForm/button";
import FileField from "./file-field";
import ButtonToggle from "./button-toggle";

export default function MuseumAddForm({ onSubmit, imageChangeHandle, imagePreviewUrl }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState(0);
    const [isRecommended, setIsRecommended] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, description, location, price, isRecommended });
        setName("");
        setDescription("");
        setLocation("");
        setPrice(0);
        setIsRecommended(false);
    }

    return (

        <form onSubmit={handleSubmit}
            className="space-y-6 mt-4 py-4 px-16 bg-zinc-50 rounded shadow-md w-1/2 mx-auto text-secondary">
            <div className="flex justify-between items-center mt-6">
                <button type="button" onClick={() => window.history.back()} className="cursor-pointer top-4 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                <div>
                    <h2 className="text-2xl font-bold text-center">Tambah Museum</h2>
                </div>
                <div>
                    {/* empty div for spacing */}
                </div>
            </div>
            <hr className="h-px w-4/5 my-8 mx-auto" />
                <FileField id="museum-image" label="Museum Image" onChange={imageChangeHandle} name={"file"}/>
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
                    required
                />
                <div className="flex justify-evenly gap-4">
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
                    <ButtonToggle
                        id="is-recommended"
                        label="Is Recommended?"
                        checked={isRecommended}
                        onChange={(event) => setIsRecommended(event.target.checked)}
                    />
                    
                </div>
                <div className="flex justify-center">
                    <Button label="Tambah Data" variant="add" />
                </div>
        </form>
    );
}