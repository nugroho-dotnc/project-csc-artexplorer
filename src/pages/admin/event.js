import Button from "@/components/AdminForm/button";
import AdminLayout from "@/components/admin-layout";

export default function Event() {
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
                <tr className="odd:bg-white even:bg-slate-50 border-b border-gray-300 *:px-4 *:py-4 *:align-top *:text-left *:break-words">
                  <td className="font-medium">Spirit Blossom Exhibitions</td>
                  <td>Discover Xin's Journey from Nexus to Ionia alongside the new Spirit Blossom skin lines </td>
                  <td>
                    2025-07-01
                  </td>
                  <td>
                    2025-07-31
                  </td>
                  <td>
                    <a href="/admin/form/event-edit">
                        <Button 
                            label="Edit"
                            variant="edit"
                        />
                    </a>
                  </td>
                  <td>
                    <Button 
                        label="Delete"
                        variant="delete"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
