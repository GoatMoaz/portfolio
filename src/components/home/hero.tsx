import { motion } from "motion/react";
import flower from "@/assets/flower.svg";

export default function Hero() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 2.5,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 50, scale: 0.7 }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          delay: 2.5,
          duration: 0.6,
          ease: "backOut",
        },
      }}
      viewport={{ once: true }}
      className="col-span-12 md:col-span-8 xl:col-span-5 row-span-5 flex flex-col justify-between overflow-hidden"
    >
      <div className="ml-auto pr-8 pt-4">
        <motion.img
          src={flower}
          alt="icon"
          width={150}
          height={150}
          loading="lazy"
          className="animate-spin animation-duration-5000"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <motion.div
        className="text-3xl sm:text-5xl tracking-wide leading-tight pl-6 pb-10 font-normal"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.3, ease: "easeOut" }}
        >
          Full Stack
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.3, ease: "easeOut" }}
        >
          <span className="italic">Engineer </span> With
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.3, ease: "easeOut" }}
        >
          MERN and Next
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
