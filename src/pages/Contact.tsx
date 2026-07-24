import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      content: "contact@dataligent.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm PST",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      content: "123 Data Street, San Francisco, CA 94105",
      description: "By appointment only",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM PST",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-24">
        <div className="container-wide">
          <div className="text-center mb-16 animate-slide-up max-w-2xl mx-auto">
            <span className="eyebrow mb-4">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mt-4 mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a question about our services? Want to discuss your data needs?
              We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold font-display text-foreground mb-1">Send Us a Message</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you shortly
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Service Interest</label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cleaning">Data Cleaning</SelectItem>
                      <SelectItem value="analysis">Data Analysis</SelectItem>
                      <SelectItem value="visualization">Visualization</SelectItem>
                      <SelectItem value="ml">Machine Learning</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your data needs..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full rounded-lg bg-primary text-white hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-5">
              <div className="rounded-2xl bg-primary p-8 text-white">
                <h2 className="text-2xl font-semibold font-display mb-1">Contact Information</h2>
                <p className="text-white/80 text-sm">Reach out through any of these channels</p>
              </div>

              {contactInfo.map((info, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {info.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold font-display text-foreground mb-1">{info.title}</h3>
                      <p className="text-foreground/90 mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl bg-secondary p-6">
                <h3 className="font-semibold font-display text-foreground mb-2">Prefer to schedule a call?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Book a free 30-minute consultation to discuss your data needs with our experts.
                </p>
                <Button className="w-full rounded-lg bg-primary text-white hover:bg-primary/90">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
