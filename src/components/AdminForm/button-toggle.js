export default function ButtonToggle({ id, label, checked, onChange }) {
    return (
        <div className="flex items-center space-x-4 mt-4">
            <label htmlFor={id}>
                <span className="text-gray-700 font-medium text-sm">
                    {label}
                </span>
                <div className="relative">
                    <input 
                        type="checkbox"
                        id={id}
                        checked={checked}
                        onChange={onChange}
                        className="sr-only peer"
                    />
                    <div className="w-12 h-6 mt-2 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all"></div>
                    <div className="absolute left-1 top-1 bg-white size-4 rounded-full peer-checked:translate-x-5 transition-transform"></div>
                </div>
            </label>
        </div>
    );
}