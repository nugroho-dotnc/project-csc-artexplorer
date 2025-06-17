export default function Button({ label, type = "submit" }) {
    return (
        <button type={type} 
            className="bg-secondary-100 text-white px-8 py-2 mt-2 rounded shadow transition hover:bg-secondary cursor-pointer">
            {label}
        </button>
    );
}