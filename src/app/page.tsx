import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className=" bg-white w-full">
      <Navbar />
      <Hero />
      <Technologies />
      <CallToAction />
      <Projects />
      <Footer />
    </main>
  );
}
