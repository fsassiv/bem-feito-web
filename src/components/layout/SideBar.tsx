import { FilterBar } from "../filterBar";

export const SideBar = () => {
  return (
    <aside className="w-[20%] h-full max-lg:hidden pl-1 pb-20">
      <div className="p-3 bg-primary w-full rounded-md">
        <h5 className="text-white">Filtros</h5>
      </div>
      <FilterBar />
    </aside>
  );
};
