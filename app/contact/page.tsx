"use client";

import React from "react"

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Github,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact.codevaulttech@gmail.com",
    href: "mailto:contact.codevault@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+263 (0) 71 192 4045",
    href: "tel:+263711924045",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Harare, Zimbabwe",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 8:00 AM - 5:00 PM CAT",
    href: "#",
  },
];

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "GitHub", href: "#", icon: Github },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Contact Us
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Let&apos;s start a conversation
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Whether you have a project in mind, need technical consultation,
                or just want to learn more about our services, we&apos;d love to
                hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl border border-border p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Thank you!
                    </h3>
                    <p className="mt-2 text-muted-foreground max-w-sm">
                      Your message has been received. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <Button
                      className="mt-6 bg-transparent"
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-foreground">
                      Send us a message
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      Fill out the form below and we&apos;ll get back to you as
                      soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service of interest</Label>
                        <select
                          id="service"
                          name="service"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a service</option>
                          <option value="software">Software Development</option>
                          <option value="cybersecurity">
                            Cybersecurity Solutions
                          </option>
                          <option value="networking">
                            Networking & IT Infrastructure
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Get in touch
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Prefer to reach out directly? Here&apos;s how you can
                    contact us.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground">
                    Follow us
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Stay connected and follow our latest updates.
                  </p>
                  <div className="mt-4 flex gap-4">
                    {socialLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="aspect-video rounded-lg bg-card border border-border flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-muted-foreground mx-auto" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Harare, Zimbabwe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
