import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      <Navbar />

      <div className="flex items-center justify-center p-6">
        <Hero />
      </div>
      <Footer />

    </main>
  );
}