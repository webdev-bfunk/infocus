import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-6xl mx-auto p-8 antialiased">
      <Hero />
      <Card />
      <Features />
      <Services />
      <Contact />
    </main>
  );
}
