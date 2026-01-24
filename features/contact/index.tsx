"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react"; 

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background">
      <main className="pb-20 pt-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold mb-2 text-center">Contact GoGrabify</h1>
          <p className="text-muted-foreground text-center mb-8">
            We&apos;d love to hear from you!
          </p>

          <div className="glass-card p-6 mb-8 text-center bg-secondary/30">
            <p className="mb-4">
              For support, business inquiries, or feedback, please contact us:
            </p>
            <div className="space-y-2 mb-4">
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">📧</span>
                <a href="mailto:info@gograbify.com" className="hover:text-primary transition-colors">
                  info@gograbify.com
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">🌐</span>
                <span>Website:</span>
                <a 
                  href="https://gograbify.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  https://gograbify.com
                </a>
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              We usually respond within 24–48 hours.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell us more..."
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full btn-glow bg-primary text-primary-foreground font-semibold py-3 h-auto hover:bg-primary/90"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;