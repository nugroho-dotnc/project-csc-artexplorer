import MuseumAddForm from "@/components/AdminForm/form-museum-add";

export default function MuseumAdd() {
    const handleMuseumAdd = (data) => {
        alert('Museum added: ' + JSON.stringify(data));
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">
                Museum Add
            </h1>
            <MuseumAddForm onSubmit={handleMuseumAdd} />
        </div>
    );
}