import { MessageSquare, Lightbulb, Cog, CheckCircle } from 'lucide-react';
import { Section } from '../Section';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Discovery',
    description: 'We start with a conversation to understand your needs, goals, and challenges.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy',
    description: 'I develop a tailored plan that aligns with your objectives and resources.',
  },
  {
    icon: Cog,
    number: '03',
    title: 'Execution',
    description: 'Implementation with regular updates and transparent communication throughout.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Delivery',
    description: 'min 10 pcs of oder is available for delivery',
  },
];

export function ProcessSection() {
  return (
    <Section id="process" className="bg-secondary/20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
          How It Works
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A straightforward, collaborative approach designed for clarity and results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
