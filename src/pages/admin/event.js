import Button from "@/components/AdminForm/button";
import AdminLayout from "@/components/admin-layout";
import { showDeleteAlert } from "@/lib/customAlert";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Event() {
    const router = useRouter();
    const [eventData, setEventData] = useState([])
    const dateFormatter = new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const fetchEventData = async () => {
      try{
        const res = await axios.get('/api/event')
        if(res.data.success){
          setEventData(res.data.data)
        }
      }catch(e){
        toast.error(e.response?.data?.message??"gagal memuat event")
      }
    }
    useEffect(()=>{
      fetchEventData()
    }, [])
    const deleteEvent = async (id) => {
      try{
        await axios.delete(`/api/event/${id}`)
        toast.success('event berhasil dihapus')
        router.reload()
      }catch(e){
        toast.error(e.response?.data?.error??"Gagal menghapus event!")
      } 
    }
    return (
    <AdminLayout>
      <div className="p-4 sm:p-6 md:p-12 bg-zinc-100 w-full min-h-dvh">
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <div className="overflow-x-auto bg-slate-50 rounded-lg shadow-md">
            <table className="w-full text-sm text-left text-gray-600 min-w-[768px]">
              <caption className="text-left md:text-center p-6">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="md:text-left">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Event List
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Find all Events and Exhibitions here.
                        </p>
                    </div>
                    <a href="/admin/form/event-add">
                        <Button 
                            label="Tambah Event"
                            variant="add"
                        />
                    </a>
                </div>
              </caption>

              <thead className="border-t border-gray-300 bg-gray-100">
                <tr className="*:px-4 *:py-3 *:text-left *:align-top *:w-max">
                  <th>Title</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {
                  eventData?
                  eventData.map((item, index) => {
                    return <tr className="odd:bg-white even:bg-slate-50 border-b border-gray-300 *:px-4 *:py-4 *:align-top *:text-left *:break-words">
                              <td className="font-medium">{item.title}</td>
                              <td>{item.description}</td>
                              <td>
                                {item.startDate ? dateFormatter.format(new Date(item.startDate)) : 'N/A'}
                              </td>
                              <td>
                                {item.startDate ? dateFormatter.format(new Date(item.startDate)) : 'N/A'}
                              </td>
                              <td>
                                <Button 
                                        label="Edit"
                                        variant="edit"
                                        onClick={()=> router.push(`/admin/form/event-edit/${item.id}`)}
                                    />
                              </td>
                              <td>
                                <Button 
                                    label="Delete"
                                    variant="delete"
                                    onClick={
                                      ()=>showDeleteAlert(
                                        {
                                          title: "Delete Event",
                                          description: "Are you sure you want to delete this event?",
                                          onConfirm: ()=> deleteEvent(item.id),
                                        }
                                      )
                                    }
                                />
                              </td>
                            </tr>
                  }):
                  <tr>
                    <td className="text-center">
                        Tidak ada event
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
