import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Airotron HVAC Services | Trusted Heating, Ventilation, and Air Conditioning Experts for Over 40 Years",
  description: "Airotron has been providing professional HVAC services to the community for over 40 years. We specialize in the installation, repair, and maintenance of heating, ventilation, and air conditioning systems for both residential and commercial properties. Trust our experienced technicians for reliable, affordable, and expert HVAC solutions. Your comfort is our priority. Contact Airotron today!",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="https://airotron.com/og-image.png" />
      </Head>
      <body>
      <Navbar />
       <main className="relative overflow-hidden">
        {children}
       </main>
      <Footer />
      </body>
    </html>
  );
}
