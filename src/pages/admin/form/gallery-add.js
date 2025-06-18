import GalleryAddForm from "@/components/AdminForm/form-gallery-add";

export default function GalleryAdd() {
    const handleGalleryAdd = (data) => {
        alert('Gallery added: ' + JSON.stringify(data));
    };

    return (
        <div className="p-8 mt-8">
            <GalleryAddForm onSubmit={handleGalleryAdd} />
        </div>
    );
}