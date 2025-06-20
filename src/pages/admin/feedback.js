import AdminLayout from "@/components/admin-layout";
import Button from "@/components/AdminForm/button";
import { showDeleteAlert } from "@/lib/customAlert";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function Feedback() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const dateFormatter = new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  const fetchFeedback = async () => {
  try{
    const res = await axios.get(`/api/feedback`)
    if(res.data.success){
      setData(res.data.data);
    }
  }catch(e){
    toast.error(e.response?.data?.message??"gagal memuat data")
  }
  }
  useEffect(() => {
    fetchFeedback()
  }, [])
  const deleteFeedback = async (id) => {
    try{
        const res = await axios.delete(`/api/feedback/${id}`)
        if(res.data.success){
          toast.success(res.data.message)
        }
        router.reload()
      }catch(e){
        toast.error(e.response?.data?.message??"gagal menghapus feedback")
      }
  }
  return (
    <AdminLayout>
      <div className="p-4 sm:p-6 md:p-12 bg-zinc-100 w-full min-h-dvh">
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <div className="overflow-x-auto bg-slate-50 rounded-lg shadow-md">
            <table className="w-full text-sm text-left text-gray-600 min-w-[768px]">
              <caption className="text-left md:text-center p-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  List of Feedbacks
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  Find all feedbacks from users about the website here. Use the
                  feedback for improving the website and do not forget to reply
                  them wisely!
                </p>
              </caption>

              <thead className="border-t border-gray-300 bg-gray-100">
                <tr className="*:px-4 *:py-3 *:text-left *:align-top">
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  data.length != 0
                  ?
                  data.map((item, index) => {
                    return <tr className="odd:bg-white even:bg-slate-50 border-b border-gray-300 *:px-4 *:py-4 *:align-top *:text-left *:break-words">
                      <td>
                      {item.fullName}
                      </td>
                      <td className="font-medium">{item.email}</td>
                      <td>
                        {item.subject}
                      </td>
                      <td>
                        {
                          item.message
                        }
                      </td>
                      <td>
                        {
                          item.date ? dateFormatter.format(new Date(item.date)) : 'N/A'
                        }
                      </td>
                      <td>
                        <Button label="Hapus" variant="delete" onClick={()=>
                          showDeleteAlert(
                            {
                              title: "Delete Feedback",
                              message: "Are you sure you want to delete this feedback?",
                              onConfirm: () => deleteFeedback(item.idFeedback)
                            }
                          )
                        }/>
                      </td>
                    </tr>
                  })
                  :
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-gray-500">
                      There's no feedback here ...
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
