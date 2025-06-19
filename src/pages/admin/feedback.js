import AdminLayout from "@/components/admin-layout";
import Button from "@/components/AdminForm/button";

export default function Feedback() {
  return (
    <AdminLayout>
    <div
      className="xs:p-32 sm:p-28 md:p-24 
         bg-zinc-100 w-full min-h-dvh"
    >
      <div className="bg-secondary mx-4 md:mx-0 p-1 md:p-6 rounded-lg shadow-md mt-16 md:mt-0">
        <div className="overflow-x-auto relative rounded-lg shadow-md bg-slate-50">
          <table className="md:w-full text-sm text-left text-gray-600">
            <caption className="p-8">
              <h1 className="text-3xl font-bold text-gray-900">
                List of Feedbacks
              </h1>
              <p className="mt-4">
                Find all feedbacks from users about the website here. Use the
                feedback for improving the website and do not forget to reply
                them wisely!
              </p>
            </caption>
            <thead className="border-t border-gray-300 bg-gray-100">
              <tr className="*:p-8 *:text-center">
                <th className="text-left">Full Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Subject</th>
                <th className="text-left">Message</th>
                <th className="text-left">Date</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr className="*:p-8 *:text-center *:text-pretty odd:bg-white even:bg-slate-50 border-b border-gray-300">
                <td>
                  <img
                    src="#"
                    alt="gambar"
                    className="border size-20 rounded-sm"
                  />
                </td>
                <td className="font-bold">MeganTheeStallion@gmail.co</td>
                <td>Bad experience</td>
                <td>
                  I found something unnecessary on the website where it is what
                  it is
                </td>
                <td>2023-01-01</td>
                <td>
                  <Button 
                    label="Hapus"
                    variant="delete"
                  />
                </td>
              </tr>

              <tr className="*:p-8 *:text-center *:text-pretty odd:bg-white even:bg-slate-50 border-b border-gray-300">
                <td>
                  <img
                    src="#"
                    alt="gambar"
                    className="border size-20 rounded-sm"
                  />
                </td>
                <td className="font-bold">Cardi@gmail.co</td>
                <td>Meh</td>
                <td>Superbass</td>
                <td>2021-04-01</td>
                <td>
                  <Button 
                    label="Hapus"
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
