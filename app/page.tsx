import StructuredData from "@/components/StructuredData";
import CTA from "@/components/sections/CTA";
import Day from "@/components/sections/Day";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Leisure from "@/components/sections/Leisure";
import Location from "@/components/sections/Location";
import Reviews from "@/components/sections/Reviews";
import Rooms from "@/components/sections/Rooms";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Day />
      <Leisure />
      <Rooms />
      <Location />
      <Reviews />
      <FAQ />
      <CTA />
    </>
  );
}
