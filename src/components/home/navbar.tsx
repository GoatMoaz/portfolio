import { motion } from "motion/react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Navbar() {
  return (
      <motion.header
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 2.5,
              duration: 0.4,
              ease: "circInOut",
            },
          }}
          className="col-span-12 flex justify-between items-center p-6"
        >
          <p className="text-2xl">
            <span className="italic">Moaz </span>
            Ayman
          </p>
          <ModeToggle />
        </motion.header>
  )
}
