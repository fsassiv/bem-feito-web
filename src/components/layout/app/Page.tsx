"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const AppPage = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.05 }}
      className="flex flex-col items-center justify-between p-6 flex-1 container min-h-screen h-screen"
    >
      {children}
    </motion.div>
  );
};
