export default function Button({ label, type = "submit", variant = "default", onClick, px = "px-4", py = "py-2" }) {
    let baseClass = `text-white ${px} ${py} mt-2 rounded shadow transition cursor-pointer `;
    let variantClass = "";

    switch (variant) {
        case "add":
        variantClass = "bg-green-600 hover:bg-green-700";
        break;
        case "edit":
        variantClass = "bg-blue-600 hover:bg-blue-700";
        break;
        case "delete":
        variantClass = "bg-red-600 hover:bg-red-700";
        break;
        default:
        variantClass = "bg-secondary-100 hover:bg-secondary";
    }
    return (
        <button 
            type={type} 
            onClick={onClick}
            className={`${baseClass} ${variantClass}`}
            >
            {label}
        </button>
    );
}