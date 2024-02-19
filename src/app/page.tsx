import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className=" bg-blue-500 w-full">

      <Navbar />
      <Hero />

      <Projects />

      <section>Contact</section>

    </main>

  );
}
