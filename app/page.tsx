// app/page.tsx

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

import Hero from "@/components/sections/Hero";
import ContactBar from "@/components/sections/ContactBar";
import Benefits from "@/components/sections/Benefits";
import Accommodations from "@/components/sections/Accommodations";
import Leisure from "@/components/sections/Leisure";
import About from "@/components/sections/About";
import Location from "@/components/sections/Location";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

import Wave from "@/components/ui/Wave";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <ContactBar />

        <Wave fill="#FEF8EE" />

        <Benefits />

        <Wave
          fill="#F2E8D0"
          reverse
        />

        <Accommodations />

        <Wave fill="#FFFFFF" />

        <Leisure />

        <Wave
          fill="#F2E8D0"
          reverse
        />

        <About />

        <Wave fill="#FEF8EE" />

        <Location />

        <Wave fill="#1A5FA8" />

        <Reviews />

        <Wave
          fill="#FEF8EE"
          reverse
        />

        <FAQ />

        <CTA />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}