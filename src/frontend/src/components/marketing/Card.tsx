import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-card border border-border rounded-lg p-6 shadow-xs hover:shadow-soft transition-shadow ${className}`}>
      {children}
    </div>
  );
}
