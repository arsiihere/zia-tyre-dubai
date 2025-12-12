'use client';

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Mobile Tyre Fitting",
  "Home Tyre Fitting",
  "Tyre Repair",
  "Tyre Change",
  "Locking Wheel Nut Removal",
  "TPMS Sensor Replacement",
  "Van Tyre Fitting",
  "Truck Tyre Fitting",
];

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim().slice(0, 100);
    const phone = formData.phone.trim().slice(0, 20);
    const email = formData.email.trim().slice(0, 100);
    const service = formData.service.trim().slice(0, 50);
    const message = formData.message.trim().slice(0, 500);

    if (!name || !phone || !email || !service) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `🚗 *New Service Request*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}
🔧 *Service:* ${service}
${message ? `📝 *Details:* ${message}` : ""}

_Sent from 24/7 Tyre Service Website_`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/971529702828?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Request Sent!",
      description: "We've opened WhatsApp for you. Send the message to complete your request.",
    });

    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Your Name *
        </label>
        <Input
          type="text"
          placeholder="John Smith"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          maxLength={100}
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Phone Number *
          </label>
          <Input
            type="tel"
            placeholder="+971 50 123 4567"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            maxLength={20}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            maxLength={100}
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Service Required *
        </label>
        <select
          className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          required
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Your Location & Details
        </label>
        <Textarea
          placeholder="Where are you? What's the issue? Share any details that help us reach you faster..."
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          maxLength={500}
        />
      </div>
      <Button type="submit" variant="accent" size="lg" className="w-full">
        <Send className="w-5 h-5" />
        Send via WhatsApp
      </Button>
    </form>
  );
}
