"use client";

import { useState } from "react";
import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Form submitted:", formData);
  };

  const formConfig = siteConfig.pages.contact.form;

  return (
    <section className="surface-bg text-on-bg py-16">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-8 text-on-bg">
            {siteConfig.pages.contact.heading}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-on-bg">
                  {formConfig.nameLabel}
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder={formConfig.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-on-bg">
                  {formConfig.emailLabel}
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder={formConfig.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-on-bg">
                {formConfig.phoneLabel}
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder={formConfig.phonePlaceholder}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-on-bg">
                {formConfig.messageLabel}
              </label>
              <Textarea
                name="message"
                placeholder={formConfig.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <Button type="submit" className="w-full">
              {formConfig.submitLabel}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
