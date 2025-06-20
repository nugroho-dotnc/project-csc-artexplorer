import { useState } from "react";

import TextField from "@/components/AdminForm/text-field";
import Button from "@/components/AdminForm/button";
import FileField from "./file-field";

export default function EventEditForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, description, startDate, endDate });
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
        <div>{/* Spacer */}</div>
      </div>

      <hr className="h-px w-4/5 my-4 mx-auto" />

      <TextField
        id="event-title"
        label="Event Title"
        value={"Spirit Blossom"}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <TextField
        id="event-description"
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required={false}
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

      <div className="flex justify-center">
        <Button label="Simpan Perubahan" variant="edit" />
      </div>
    </form>
  );
}
