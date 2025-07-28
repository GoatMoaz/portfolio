import { motion } from "motion/react";
import image from "@/assets/me.jpg";

export default function Profile({
  xl,
  md,
  sm,
}: {
  xl: boolean;
  md: boolean;
  sm: boolean;
}) {
  const imageInitial = {
    x: xl ? "-5vw" : md ? "-30vw" : "0vw",
    y: md ? "10vh" : sm ? "-50vh" : "-25vh",
    scale: md ? 1.3 : sm ? 0.7 : 1,
  };
  return (
    <motion.section
      initial={imageInitial}
      animate={{
        x: "0%",
        y: "0%",
        scale: 1,
        transition: {
          scale: { delay: md ? 2 : 2.5, duration: 0.7, ease: "backOut" },
          x: { delay: md ? 2.5 : 2, duration: 0.7, ease: "backOut" },
          y: { delay: md ? 2.5 : 2, duration: 0.7, ease: "backOut" },
        },
      }}
      className="col-span-12 md:col-span-4 xl:col-span-3 row-span-5 bg-transparent"
    >
      <img
        src={image}
        alt="me"
        className="h-[300px] sm:h-[600px] w-full md:h-full object-cover rounded-xl"
      />
    </motion.section>
  );
}
