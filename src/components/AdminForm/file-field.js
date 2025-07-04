export default function FileField({ id, label, onChange, required = false, name }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="file"
        id={id}
        onChange={onChange}
        required={required}
        name={name}
        accept="image/*"
        className="block w-full text-sm px-4 py-4 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      />
    </div>
  );
}
