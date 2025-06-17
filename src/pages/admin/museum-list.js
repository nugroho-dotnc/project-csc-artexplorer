import AdminLayout from "@/components/admin-layout";

export default function MuseumList() {
  return (
    <AdminLayout>
    <div
      className="xs:p-32 sm:p-28 md:p-24 
         bg-zinc-100 w-full min-h-dvh"
    >
      <div className="bg-secondary p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto relative rounded-lg shadow-md bg-slate-50">
          <div className="flex items-center justify-between p-8">
            <h1 className="text-3xl font-bold">Museum List</h1>
            <div className="flex justify-between items-center gap-6">
              <div className="flex items-center gap-4 bg-zinc-100 p-2 rounded shadow ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="search"
                  placeholder="Search..."
                  className="outline-none"
                />
              </div>
              <button
                type="button"
                className="bg-secondary-100 text-white px-8 py-2 rounded-md shadow-md font-medium cursor-pointer hover:bg-secondary"
              >
                Tambah Data
              </button>
            </div>
          </div>
          <div className="overflow-x-auto relative even:bg-white odd:bg-slate-50 border-b border-gray-300">
            <div className="grid grid-cols-3 gap-4 p-8">
              <img
                src="#"
                alt="gambar"
                className="border size-32 rounded-sm col-span-1"
              />
              <div className="col-span-2">
                <h2 className="text-xl font-bold">Museum A</h2>
                <p className="mt-2 text-gray-700 text-sm">
                  Deskripsi museum ea
                </p>
                <div className="flex justify-between items-center mt-4 align-middle">
                  <div className="flex items-center gap-2 mt-4 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <p>Alamatnya ada di sini pokoknya</p>
                  </div>
                  <button
                    type="button"
                    className="flex gap-2 text-sm cursor-pointer mt-4 hover:font-medium hover:underline"
                  >
                    Selengkapnya
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto relative even:bg-white odd:bg-slate-50 border-b border-gray-300">
            <div className="grid grid-cols-3 gap-4 p-8">
              <img
                src="#"
                alt="gambar"
                className="border size-32 rounded-sm col-span-1"
              />
              <div className="col-span-2">
                <h2 className="text-xl font-bold">Museum Be</h2>
                <p className="mt-2 text-gray-700 text-sm">
                  Deskripsi museum ea
                </p>
                <div className="flex justify-between items-center mt-4 align-middle">
                  <div className="flex items-center gap-2 mt-4 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <p>Alamatnya ada di sini pokoknya</p>
                  </div>
                  <button
                    type="button"
                    className="flex gap-2 text-sm cursor-pointer mt-4 hover:font-medium hover:underline"
                  >
                    Selengkapnya
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
}
