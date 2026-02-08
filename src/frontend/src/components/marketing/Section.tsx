import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 scroll-mt-20 ${className}`}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}
