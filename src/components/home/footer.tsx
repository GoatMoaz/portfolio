import { motion } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer({ md }: { md: boolean }) {
  return (
    <motion.footer
      initial={{ opacity: 0, x: 100, scale: 0.7 }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          delay: md ? 2.5 : 0,
          duration: 0.6,
          ease: "backOut",
        },
      }}
      viewport={{ once: true }}
      className="row-start-auto xl:row-start-10 col-start-1 xl:col-start-9 col-span-12 xl:col-span-4 flex justify-around items-center p-6"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <a href="https://www.linkedin.com/in/goat-moaz/" target="_blank">
          <Linkedin className="cursor-pointer size-6 sm:size-10" />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <a href="https://github.com/GoatMoaz" target="_blank">
          <Github className="cursor-pointer size-6 sm:size-10" />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <a href="mailto:moaz.ayman.mahmoud@gmail.com" target="_blank">
          <Mail className="cursor-pointer size-6 sm:size-10" />
        </a>
      </motion.div>
    </motion.footer>
  );
}
