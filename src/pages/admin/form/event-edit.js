import EventEditForm from "@/components/AdminForm/form-event-edit";

export default function EventEdit() {
    const handleEventEdit = (data) => {
        alert('Event edited: ' + JSON.stringify(data));
    };

    return (
        <div className="p-8 mt-8">
            <EventEditForm onSubmit={handleEventEdit} />
        </div>
    );
}