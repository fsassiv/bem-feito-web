"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FilterBar } from "../../filterBar";

export const SideBar = () => {
  const pathname = usePathname();

  if (pathname === "/app") return null;
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="w-[20%] h-full max-lg:hidden pl-2 pt-2"
    >
      <FilterBar />
    </motion.aside>
  );
};
