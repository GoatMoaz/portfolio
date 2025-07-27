import "./App.css";
import { ModeToggle } from "@/components/ui/mode-toggle";
import image from "@/assets/me.jpg";
import instagram from "@/assets/instagram.png";
import shopverse from "@/assets/shopverse.png";
import theblog from "@/assets/theblog.png";
import circle from "@/assets/circle.svg";
import flower from "@/assets/flower.svg";
import { Linkedin, Github, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Welcome to my portfolio homepage" />
      </Helmet>
      <div className="grid grid-cols-12 grid-rows-none xl:grid-rows-10 h-screen gap-4 p-6">
        <header className="col-span-12 flex justify-between items-center p-6">
          <p className="text-2xl">
            <span className="italic">Moaz </span>
            Ayman
          </p>
          <ModeToggle />
        </header>
        <section className="col-span-12 md:col-span-8 xl:col-span-5 row-span-5 flex flex-col justify-between">
          <div className="ml-auto pr-8 pt-4">
            <img
              src={flower}
              alt="icon"
              width={150}
              height={150}
              loading="lazy"
              className="animate-spin animation-duration-5000"
            />
          </div>
          <div className="text-3xl sm:text-5xl tracking-wide leading-tight pl-6 pb-10 font-normal">
            <p>Full Stack</p>
            <p>
              <span className="italic">Engineer </span> With
            </p>
            <p>MERN and Next</p>
          </div>
        </section>

        <section className="col-span-12 md:col-span-4 xl:col-span-3 row-span-5">
          <img
            src={image}
            alt="me"
            className="h-[300px] sm:h-[600px] w-full md:h-full object-cover rounded-xl"
          />
        </section>
        <section className="col-span-12 xl:col-span-4 row-span-8 w-full  px-6 py-8">
          <Accordion type="single" className="w-full" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-3xl">The Blog</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <img src={theblog} alt="the-blog" className="rounded-xl" />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-3xl">
                Instagram Clone
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <img
                  src={instagram}
                  alt="instagram-clone"
                  className="rounded-xl"
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-3xl">
                ShopVerse
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <img src={shopverse} alt="shopverse" className="rounded-xl" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <section className="col-span-12 md:col-span-6 xl:col-span-4 row-start-auto md:row-start-7 row-span-4 flex flex-col items-start justify-between  p-6 h-[400px] md:h-auto">
          <img src={circle} alt="circle" className="h-14 animate-pulse" />
          <div className="text-lg font-sans">
            Moaz Ayman is a dedicated full stack developer, recognized for
            crafting seamless web experiences using the MERN stack and Next.js.
            From Egypt, he blends technical precision with user-focused design
            to build impactful digital solutions.
          </div>
        </section>
        <section className="group col-span-12 md:col-span-6 xl:col-span-4 row-start-auto md:row-start-7 row-span-4 bg-[#565449] flex flex-col justify-between  p-6 h-[300px] md:h-auto cursor-pointer">
          <div className="flex justify-between items-center">
            <div className="text-card font-sans text-xl">
              <p>Have some</p>
              <p>questions?</p>
            </div>
            <ArrowUpRight className="size-10 text-card  group-hover:animate-bounce" />
          </div>
          <p className="text-card text-6xl">
            Contact <span className="italic">me</span>
          </p>
        </section>
        <section className="row-start-auto xl:row-start-10 col-start-1 xl:col-start-9 col-span-12 xl:col-span-4  flex justify-around items-center p-6">
          <Linkedin className="cursor-pointer size-6 sm:size-10 hover:rotate-3" />
          <Github className="cursor-pointer size-6 sm:size-10 hover:rotate-3" />
          <Mail className="cursor-pointer size-6 sm:size-10 hover:rotate-3" />
        </section>
      </div>
    </>
  );
}
