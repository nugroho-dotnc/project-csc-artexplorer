import { useState } from "react";

import TextField from "@/components/AdminForm/text-field";
import Button from "@/components/AdminForm/button";
import FileField from "./file-field";

export default function GalleryAddForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ title, description });

        setTitle("");
        setDescription("");
    }

    return (

        <form onSubmit={handleSubmit}
            className="space-y-6 mt-8 py-8 px-16 bg-zinc-50 rounded shadow-md w-1/2 mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Tambah Gallery</h2>
            <hr className="h-px w-4/5 my-4 mx-auto" />
                <FileField id="gallery-image" label="Gallery Image" />
                <TextField
                    id="gallery-title"
                    label="Gallery Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                <TextField
                    id="gallery-description"
                    label="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required={false}
                />
                <div className="flex justify-center">
                    <Button label="Tambah Data" variant="add" />
                </div>
        </form>
    );
}