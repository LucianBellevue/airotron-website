import Image from "next/image";
import Head from "next/head";
import { Hero } from "@/components/Hero";
import About  from "@/components/About"
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Testimonials />
    </>
  );
}
