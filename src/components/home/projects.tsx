import { motion } from "motion/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import instagram from "@/assets/instagram.png";
import shopverse from "@/assets/shopverse.png";
import theblog from "@/assets/theblog.png";

export default function Projects({ lg, xl }: { lg: boolean; xl: boolean }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100, y: 40, scale: 0.7 }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          delay: lg || xl ? 2.5 : 0,
          duration: 0.6,
          ease: "backOut",
        },
      }}
      viewport={{ once: true }}
      className="col-span-12 xl:col-span-4 row-span-8 w-full px-6 py-8"
    >
      <Accordion type="single" className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1">
          <motion.div whileHover={{ x: 5 }}>
            <AccordionTrigger className="text-3xl hover:no-underline">
              The Blog
            </AccordionTrigger>
          </motion.div>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <motion.img
              src={theblog}
              alt="the-blog"
              className="rounded-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <motion.div whileHover={{ x: 5 }}>
            <AccordionTrigger className="text-3xl hover:no-underline">
              Instagram Clone
            </AccordionTrigger>
          </motion.div>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <motion.img
              src={instagram}
              alt="instagram-clone"
              className="rounded-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <motion.div whileHover={{ x: 5 }}>
            <AccordionTrigger className="text-3xl hover:no-underline">
              ShopVerse
            </AccordionTrigger>
          </motion.div>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <motion.img
              src={shopverse}
              alt="shopverse"
              className="rounded-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.section>
  );
}
