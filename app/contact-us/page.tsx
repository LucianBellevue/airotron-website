"use client";
import React from 'react'
import Head from 'next/head';
import ContactForm from "@/components/ContactForm"

const ContactUs: React.FC = () => {
  return (
    <div id='contact-us'>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className='flex justify-center items-center min-h-screen bg-white'>
        <ContactForm />
      </main>
    </div>
  )
}

export default ContactUs
