import { HoverEffect } from "@/components/ui/card-hover-effect";

export function ServiceCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Air Conditioning Installation",
    description:
      "Beat the heat with our expert AC installation. We'll help you choose and set up the perfect cooling system for your space, ensuring maximum comfort and efficiency.",
    link: "",
  },
  {
    title: "Heating System Repair",
    description:
      "Stay warm when it matters most. Our skilled technicians quickly diagnose and fix all types of heating systems, restoring your comfort in no time.",
    link: "",
  },
  {
    title: "Ductwork Cleaning & Maintenance",
    description:
      "Breathe easier with clean ducts. Our thorough cleaning service removes dust, allergens, and debris, improving your air quality and system efficiency.",
    link: "",
  },
  {
    title: "Smart Thermostat Integration",
    description:
      "Upgrade to smart climate control. We install and program advanced thermostats, giving you precise control and energy savings at your fingertips.",
    link: "",
  },
  {
    title: "Annual HVAC Tune-Up",
    description:
      "Prevent issues before they start. Our comprehensive annual maintenance service keeps your HVAC system running smoothly, extending its life and reducing energy costs",
    link: "",
  },
  {
    title: "Indoor Air Quality Solutions",
    description:
      "Fresher air for a healthier home. We offer a range of air purification and humidity control systems to enhance your indoor air quality and comfort.",
    link: "",
  },
];
