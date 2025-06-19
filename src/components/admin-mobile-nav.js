import { Bars3Icon } from '@heroicons/react/24/solid';

export default function AdminMobileNav({ onMenuToggle }) {
  return (
    <div className="md:hidden flex justify-between items-center bg-black text-white p-4 sticky top-0 z-40">
      <h1 className="text-xl font-bold">ArtExplorer</h1>
      <button onClick={onMenuToggle} aria-label="Toggle Admin Menu">
        <Bars3Icon className="h-7 w-7 text-white" />
      </button>
    </div>
  );
}