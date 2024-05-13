import Hero from "@/views/Hero";
import About from "@/views/About";
import Experience from "@/views/Experience";
import Tech from "@/views/Tech/Tech";
import Works from "@/views/Works";
import Feedbacks from "@/views/Feedbacks";
import Contact from "@/views/ContactUs";
import { Stars } from "@/components/canvas";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <Stars />
      </div>
    </div>
  );
}
