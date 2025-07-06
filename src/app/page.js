import Hero from './components/hero.js';
import About from './components/about.js';
import Services from './components/services.js';
import Faq from './components/faq.js';
import Footer from './components/footer.js';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <div className="border-t border-[#a2ffff]"></div>
      <Services />
      <div className="border-t border-[#a2ffff]"></div>
      <Faq />
      <div className="border-t border-[#a2ffff]"></div>
      <Footer />
    </div>
  );
}
