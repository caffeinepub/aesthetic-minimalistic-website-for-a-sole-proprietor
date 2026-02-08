import { useState } from 'react';
import { Section } from '../Section';
import { Input } from '@/components/ui/input';

const colorPlaceholders = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Color ${i + 1}`,
}));

export function ColorPlaceholdersSection() {
  const [notes, setNotes] = useState<Record<number, string>>({});

  const handleNoteChange = (id: number, value: string) => {
    setNotes(prev => ({ ...prev, [id]: value }));
  };

  return (
    <Section id="colors">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
          Our Colors
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our beautiful collection of colors
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {colorPlaceholders.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2"
          >
            <div className="aspect-square bg-secondary/40 border-2 border-border rounded-lg flex flex-col items-center justify-center hover:border-primary transition-colors group">
              <div className="w-full h-full flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-full border-2 border-border group-hover:border-primary transition-colors" />
                  <p className="text-xs font-medium text-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    [Photo to be added]
                  </p>
                </div>
              </div>
            </div>
            <Input
              type="text"
              placeholder="Add notes..."
              value={notes[item.id] || ''}
              onChange={(e) => handleNoteChange(item.id, e.target.value)}
              className="text-sm"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
