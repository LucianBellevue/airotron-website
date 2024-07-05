"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Just had a whole system replaced and the team did an awesome job on my install, Noah and Hayes were especially knowledgeable, helpful, and professional. Pricing was competitive and fair, even with my difficult and quirky attic. I definitely recommend this company for HVAC needs. Thank you!",
    name: "Daniel",
    title: "Cumming, GA",
  },
  {
    quote:
      "Very honest, detailed company. It's hard to find someone who you can trust these days. Positive attitude of all employees.",
    name: "Tosha Black",
    title: "Cumming, GA",
  },
  {
    quote: "I have been using this company for years now and they have always exceeded my expectation. Very professional and great quality parts and work. Super friendly family business. Great people to deal with.",
    name: "Edward Collins",
    title: "Cumming, GA",
  },
  {
    quote:
      "I have done business with Gary and Colleen for ten years and they have always been helpful, capable, and fair.  Most recently, the relatively new system in my new addition stopped working. They were able to get things sorted the next day during a very busy time of year. Their technician, Noah, was very capable, identified the source of the problem in less than five minutes(it was a VERY small leak at a fitting) and had everything back up and working in less than an hour. I was impressed!",
    name: "Edward Taylor",
    title: "Cumming, GA",
  },
  {
    quote:
      "We had 2 HVAC systems installed.  The guys were wonderful and very professional.  They did a fantastic job.  Would highly recommend them.",
    name: "Chris R",
    title: "Cumming, GA",
  },
];
