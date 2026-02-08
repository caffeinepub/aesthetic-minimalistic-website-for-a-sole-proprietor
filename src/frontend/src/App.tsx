import { HeaderNav } from './components/marketing/HeaderNav';
import { HeroSection } from './components/marketing/sections/HeroSection';
import { AboutSection } from './components/marketing/sections/AboutSection';
import { ServicesSection } from './components/marketing/sections/ServicesSection';
import { ProcessSection } from './components/marketing/sections/ProcessSection';
import { ContactSection } from './components/marketing/sections/ContactSection';
import { ColorPlaceholdersSection } from './components/marketing/sections/ColorPlaceholdersSection';
import { Footer } from './components/marketing/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Subtle background texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: 'url(/assets/generated/paper-grain-bg.dim_2400x1600.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <HeaderNav />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ColorPlaceholdersSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
