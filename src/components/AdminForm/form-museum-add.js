import { useState } from "react";

import TextField from "@/components/AdminForm/text-field";
import Button from "@/components/AdminForm/button";
import FileField from "./file-field";

export default function MuseumAddForm({ onSubmit }) {
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

        <form onSubmit={handleSubmit}
            className="space-y-6 mt-8 py-8 px-16 bg-white rounded shadow-md w-1/2 mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Tambah Museum</h2>
            <hr className="h-px w-4/5 my-4 mx-auto" />
                <FileField id="museum-image" label="Museum Image" />
                <TextField
                    type="image"
                    id="museum-name"
                    label="Museum Name"
                    value={name}
                    required
                />
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
                <div className="flex justify-center">
                    <Button label="Tambah Data" />
                </div>
        </form>
    );
}