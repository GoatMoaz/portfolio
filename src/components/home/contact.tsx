import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Contact({md}: {
    md: boolean,
}) {
  return (
    <motion.section
          initial={{ opacity: 0, y: 100, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              delay: md ? 2.5 : 0,
              duration: 0.6,
              ease: "backOut",
            },
          }}
          viewport={{ once: true }}
          className="group col-span-12 md:col-span-6 xl:col-span-4 row-start-auto md:row-start-7 row-span-4 bg-[#565449] flex flex-col justify-between p-6 h-[300px] md:h-auto cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <motion.div
              className="text-card font-sans text-xl"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p>Have some</p>
              <p>questions?</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring" }}
            >
              <ArrowUpRight className="size-10 text-card group-hover:animate-bounce" />
            </motion.div>
          </div>
          <motion.p
            className="text-card text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Contact <span className="italic">me</span>
          </motion.p>
        </motion.section>
  )
}
