import { CheckCircle2, ImageIcon } from 'lucide-react';
import { Section } from '../Section';

const highlights = [
  'Client-focused approach',
  'Proven track record',
  'Transparent communication',
  'Flexible and responsive',
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                with experience over 20 years I have made this brand called vandan I believe that we should build a very strong relationship with customers we provide best design best quality and best price vandan goal is that every customer should leave the shop with a big smile
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Placeholder Column */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-[3/4] border-2 border-border rounded-lg bg-card flex flex-col items-center justify-center gap-4 p-8">
              <ImageIcon className="h-16 w-16 text-muted-foreground" />
              <p className="text-muted-foreground text-center text-sm">
                Photo will be added by you
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
