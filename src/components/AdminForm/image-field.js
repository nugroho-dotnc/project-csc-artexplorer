import { useState } from "react";

export default function ImageField({ id, label = "Upload Gambar", onChange }) {
  const [fileName, setFileName] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setPreviewUrl(URL.createObjectURL(file));
    if (onChange) onChange(file);
  };

  return (
    <div className="w-fit">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <div className="mt-4 border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition">
        <input
          type="file"
          id={id}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <label htmlFor={id} className="cursor-pointer text-center">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="h-40 object-contain mb-2"
            />
          ) : (
            <div className="text-gray-500 flex flex-col items-center">
              <svg
                className="w-12 h-12 mb-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18v-1.5M7.5 12 12 16.5 16.5 12M12 4.5v12"
                />
              </svg>
              <p className="text-sm">Klik di sini atau seret gambar untuk upload</p>
            </div>
          )}
        </label>
      </div>

      {fileName && (
        <p className="text-sm text-gray-600 mt-2 truncate">File: {fileName}</p>
      )}
    </div>
  );
}
