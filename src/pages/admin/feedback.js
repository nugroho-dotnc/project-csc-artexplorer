import AdminLayout from "@/components/admin-layout";
import Button from "@/components/AdminForm/button";

export default function Feedback() {
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
                <tr className="odd:bg-white even:bg-slate-50 border-b border-gray-300 *:px-4 *:py-4 *:align-top *:text-left *:break-words">
                  <td>
                    <img
                      src="https://via.placeholder.com/80"
                      alt="gambar"
                      className="border size-16 rounded-sm object-cover"
                    />
                  </td>
                  <td className="font-medium">MeganTheeStallion@gmail.co</td>
                  <td>Bad experience</td>
                  <td>
                    I found something unnecessary on the website where it is
                    what it is
                  </td>
                  <td>2023-01-01</td>
                  <td>
                    <Button label="Hapus" variant="delete" />
                  </td>
                </tr>

                <tr className="odd:bg-white even:bg-slate-50 border-b border-gray-300 *:px-4 *:py-4 *:align-top *:text-left *:break-words">
                  <td>
                    <img
                      src="https://via.placeholder.com/80"
                      alt="gambar"
                      className="border size-16 rounded-sm object-cover"
                    />
                  </td>
                  <td className="font-medium">Cardi@gmail.co</td>
                  <td>Meh</td>
                  <td>Superbass</td>
                  <td>2021-04-01</td>
                  <td>
                    <Button label="Hapus" variant="delete" />
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
