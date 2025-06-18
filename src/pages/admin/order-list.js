import AdminLayout from "@/components/admin-layout";
import Button from "@/components/AdminForm/button";

export default function OrderList() {
  return (
    <AdminLayout>
    <div
      className="xs:p-32 sm:p-28 md:p-24 
         bg-zinc-100 w-full min-h-dvh"
    >
      <div className="bg-secondary p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto relative rounded-lg shadow-md bg-slate-50">
          <div className="p-8">
            <h1 className="text-center text-3xl font-bold">Order List</h1>
            <hr className="h-px w-4/5 my-4 mx-auto" />

            <div className="overflow-x-auto relative flex gap-8 mt-8">
              <div className="py-4 px-6 bg-primary-100 rounded-md shadow-lg border-t border-l border-secondary ">
                <h2 className="text-xl font-bold">Namanya</h2>
                <h3 className="text-xs font-light text-gray-700">
                  @Emailnya.example.com
                </h3>
                <p className="mt-4 text-gray-900 font-semibold flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                  MuseumnyaApa
                </p>
                <div className="mt-4 text-sm">
                  <div>
                    <p>
                      Jumlah Tiket:
                      <span className="font-medium ml-2">2</span>
                    </p>
                    <p>
                      Harga Tiket:
                      <span className="font-medium ml-2">Rp. 50.000</span>
                    </p>
                  </div>
                  <div className="mt-4 text-lg">
                    <p>
                      Subtotal:
                      <span className="font-bold ml-2">Rp. 100.000</span>
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-between gap-4">
                  <Button
                    label="Decline"
                    variant="delete"
                  />
                  <Button
                    label="Accept"
                    variant="add"
                  />
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
