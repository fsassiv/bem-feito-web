import { motion } from "framer-motion";
export const ResultsSideBar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="w-[20%] 2xl:w-[15%] h-full max-lg:hidden pl-2 pt-2 sticky top-0"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed
      doloribus soluta voluptas, quam magni quibusdam magnam quisquam
      necessitatibus recusandae? Cupiditate adipisci error natus amet? Sed
      tempore ducimus error consequatur?
    </motion.aside>
  );
};
