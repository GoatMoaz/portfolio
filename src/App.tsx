import "./App.css";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Profile from "@/components/home/profile";
import Projects from "@/components/home/projects";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Footer from "@/components/home/footer";
import { useMediaQuery } from "react-responsive";

export default function App() {
  const xl = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const lg = useMediaQuery({
    query: "(min-height: 915px)",
  });
  const md = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const sm = useMediaQuery({
    query: "(min-width: 425px)",
  });

  return (
    <>
      <Helmet>
        <meta name="description" content="Welcome to my portfolio homepage" />
      </Helmet>
      <div className="grid grid-cols-12 grid-rows-none xl:grid-rows-10 h-auto xl:h-screen gap-4 p-6 overflow-hidden">
        <Navbar />
        <Hero />
        <Profile xl={xl} md={md} sm={sm} />
        <Projects lg={lg} xl={xl} />
        <About md={md} />
        <Contact md={md} />
        <Footer md={md} />
      </div>
    </>
  );
}
