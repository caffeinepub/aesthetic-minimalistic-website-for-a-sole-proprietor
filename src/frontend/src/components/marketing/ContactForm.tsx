import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    // Simulate form submission (demo mode - not actually sending)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success message
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {status === 'success' && (
        <Alert className="bg-success/10 border-success/20">
          <CheckCircle2 className="h-4 w-4 text-success" />
          <AlertDescription className="text-success-foreground">
            Thank you for your message! This is a demo form, so your message wasn't actually sent. 
            In a live site, I would respond within 24 hours.
          </AlertDescription>
        </Alert>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Something went wrong. Please try again or contact me directly via email.
          </AlertDescription>
        </Alert>
      )}

      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) {
              setErrors({ ...errors, name: '' });
            }
          }}
          className={errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}
          placeholder="Your name"
          disabled={status === 'submitting'}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) {
              setErrors({ ...errors, email: '' });
            }
          }}
          className={errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}
          placeholder="your.email@example.com"
          disabled={status === 'submitting'}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) {
              setErrors({ ...errors, message: '' });
            }
          }}
          className={errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}
          placeholder="Tell me about your project or inquiry..."
          rows={5}
          disabled={status === 'submitting'}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <span className="animate-pulse">Sending...</span>
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        This is a demo form. In production, messages would be sent to the business owner.
      </p>
    </form>
  );
}
