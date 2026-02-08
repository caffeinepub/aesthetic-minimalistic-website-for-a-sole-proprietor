import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t mt-24">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/generated/solepro-logo.dim_512x512.png" 
                alt="Logo" 
                className="h-10 w-10 object-contain"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-semibold mb-4">Contact</h3>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>[Location - To be added]</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <a href="mailto:vandan@gmail.com">vandan@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>[Phone - To be added]</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Vandan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
