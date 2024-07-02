import Image from "next/image";
import Head from "next/head";
import { Hero } from "@/components/Hero";
import About  from "@/components/About"

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    </>
  );
}
