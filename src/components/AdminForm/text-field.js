export default function TextField({
  label,
  id,
  type = "text",
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full border-b border-gray-300 bg-transparent px-2 pt-8 pb-2 text-gray-900 placeholder-transparent focus:border-secondary focus:outline-none"
      />
      <label
        htmlFor={id}
        className="absolute left-2 top-2.5 text-sm text-gray-600 transition-all duration-200
          peer-placeholder-shown:top-5 
          peer-placeholder-shown:text-base 
          peer-placeholder-shown:text-gray-400 
          peer-focus:top-2.5 
          peer-focus:text-sm 
          peer-focus:text-secondary-100"
      >
        {label}
      </label>
    </div>
  );
}
