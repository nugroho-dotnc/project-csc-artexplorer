import MuseumAddForm from "@/components/AdminForm/form-museum-add";

export default function MuseumAdd() {
    const handleMuseumAdd = (data) => {
        alert('Museum added: ' + JSON.stringify(data));
    };

    return (
        <div className="p-8 mt-8">
            <MuseumAddForm onSubmit={handleMuseumAdd} />
        </div>
    );
}