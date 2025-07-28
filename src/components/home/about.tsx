import { motion } from "motion/react";
import circle from "@/assets/circle.svg";

export default function About({ md }: { md: boolean }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100, y: -100, scale: 0.7 }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          delay: md ? 2.5 : 0,
          duration: 0.6,
          ease: "backOut",
        },
      }}
      viewport={{ once: true }}
      className="col-span-12 md:col-span-6 xl:col-span-4 row-start-auto md:row-start-7 row-span-4 flex flex-col items-start justify-between p-6 h-[400px] md:h-auto"
    >
      <motion.img
        src={circle}
        alt="circle"
        className="h-14"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="text-lg font-sans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        viewport={{ once: true }}
      >
        Moaz Ayman is a dedicated full stack developer, recognized for crafting
        seamless web experiences using the MERN stack and Next.js. From Egypt,
        he blends technical precision with user-focused design to build
        impactful digital solutions.
      </motion.div>
    </motion.section>
  );
}
