import { Section } from '../Section';

export function ServicesSection() {
  return (
    <Section id="services">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
          Services
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Vandan provides Chaniya Choli for bridal and sometimes for sider too
        </p>
      </div>
    </Section>
  );
}
