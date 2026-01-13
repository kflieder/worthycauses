
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Impact from "./components/Impact";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-15 sm:pt-30">
        <HeroSection />
        <About />
        <Impact />
        <Contact />
        <Donate />
        <Footer />
      </div>
    </div>
  );
}
