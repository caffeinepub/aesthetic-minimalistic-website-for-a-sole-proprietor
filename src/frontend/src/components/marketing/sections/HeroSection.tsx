import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '../Section';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <Section id="home" className="pt-32 md:pt-40 pb-20 md:pb-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
          Exceptional Service,
          <br />
          <span className="text-primary">Personal Touch</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Delivering tailored solutions with expertise, integrity, and a commitment to your success. 
          Let's work together to achieve your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-base"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="text-base"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Section>
  );
}
