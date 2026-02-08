import { Mail, Phone, MapPin } from 'lucide-react';
import { Section } from '../Section';
import { ContactForm } from '../ContactForm';

export function ContactSection() {
  return (
    <Section id="contact" className="bg-secondary/20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
          Get in Touch
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Ready to start a conversation? Reach out and let's discuss how I can help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <a 
                    href="mailto:vandan@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vandan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Phone</p>
                  <p className="text-muted-foreground">
                    [Phone - To be added]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Location</p>
                  <p className="text-muted-foreground">
                    [Location - To be added]
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground leading-relaxed">
              I typically respond within 24 hours during business days. 
              For urgent matters, please call directly.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
