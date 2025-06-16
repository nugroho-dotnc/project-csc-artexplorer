export default function MuseumList() {
    return (
        <div className="p-32 bg-primary w-full min-h-dvh">
            <div className="flex justify-between ">
                <div></div>
                <h1 className="text-3xl font-bold text-center">Museum List</h1>
                <div>
                    <button type="button" className="bg-secondary text-white px-8 py-2 rounded-md shadow font-normal mt-4">
                        Tambah Data
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto relative mt-8 rounded-md shadow-md bg-gray-50">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead>
                        <tr className="*:p-8 *:text-center">
                        <th className="text-left">
                            Image
                        </th>
                        <th className="text-left">Name</th>
                        <th className="text-left">Description</th>
                        <th className="text-left">Location</th>
                        <th></th>
                    </tr>
                    </thead>
                    
                    <tbody>
                        <tr className="*:p-8 *:text-center bg-white border-b">
                            <td>
                                <img src="#" alt="gambar" />
                            </td>
                            <td className="font-bold">Museum A</td>
                            <td>lorem ipsum</td>
                            <td>Jakarta</td>
                            <td>
                                <button type="button"
                                className="bg-secondary text-white px-8 py-2 rounded-md shadow font-medium">
                                    Detail</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}