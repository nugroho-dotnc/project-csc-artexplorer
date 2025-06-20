import EventAddForm from "@/components/AdminForm/form-event-add";

export default function EventAdd() {
    const handleEventAdd = (data) => {
        alert('Event added: ' + JSON.stringify(data));
    };

    return (
        <div className="p-8 mt-8">
            <EventAddForm onSubmit={handleEventAdd} />
        </div>
    );
}