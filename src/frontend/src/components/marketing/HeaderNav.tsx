import { useState, useEffect } from 'react';
import { Menu, X, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export function HeaderNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/assets/generated/solepro-logo.dim_512x512.png" 
              alt="Logo" 
              className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-serif text-xl font-semibold text-foreground">
              Vandan
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary bg-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="ml-4"
              size="sm"
            >
              Get in Touch
            </Button>
          </div>

          {/* Logo Photo Box - Desktop */}
          <div className="hidden md:flex items-center gap-4 ml-4">
            <div className="w-16 h-16 border-2 border-border rounded-lg bg-secondary/40 flex items-center justify-center hover:border-primary transition-colors">
              <ImageIcon className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <img 
                    src="/assets/generated/solepro-logo.dim_512x512.png" 
                    alt="Logo" 
                    className="h-10 w-10 object-contain"
                  />
                  <span className="font-serif text-lg font-semibold">
                    Vandan
                  </span>
                </div>

                {/* Logo Photo Box - Mobile */}
                <div className="flex flex-col items-center gap-2 pb-4 border-b">
                  <div className="w-20 h-20 border-2 border-border rounded-lg bg-secondary/40 flex items-center justify-center hover:border-primary transition-colors">
                    <ImageIcon className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">Logo Photo</p>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                          activeSection === link.href.substring(1)
                            ? 'text-primary bg-accent'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                        }`}
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <Button 
                    onClick={() => scrollToSection('#contact')}
                    className="w-full"
                  >
                    Get in Touch
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
