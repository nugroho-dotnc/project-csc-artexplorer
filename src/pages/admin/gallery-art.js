import AdminLayout from "@/components/admin-layout";

export default function GalleryArt() {
  return (
    <AdminLayout>
      <div
        className="xs:p-32 sm:p-28 md:p-24 
         bg-zinc-100 w-full min-h-dvh"
      >
        <div className="bg-secondary p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto relative rounded-lg shadow-md bg-slate-50">
            <div className="p-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                  Gallery Art
                </h1>
                <p className="mt-4">
                  Explore the art pieces for each museums. Click on an art piece
                  to view more details.
                </p>
              </div>
              <hr className="h-px w-4/5 my-8 mx-auto" />
              <div className="overflow-auto grid grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src="#"
                    alt="Gambar"
                    className="border size-32 rounded-sm w-full"
                  />
                  <h2 className="text-xl font-bold mt-4">Art Piece Title</h2>
                  <p className="text-sm text-gray-700">Description here</p>
                  <button
                    type="button"
                    className="bg-secondary-100 text-white px-8 py-2 mt-4 rounded-md shadow-md font-medium cursor-pointer hover:bg-secondary"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
