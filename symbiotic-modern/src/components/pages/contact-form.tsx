"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { company } from "@/core/content/company";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const body = encodeURIComponent(
      `Full Name: ${name}\nPhone Number: ${phone}\nEmail Address: ${email}\n\nMessage:\n${message}`,
    );
    const subject = encodeURIComponent(`An Email from ${name || "SCG website"}`);
    window.location.href = `mailto:${company.address.careersEmail}?subject=${subject}&body=${body}`;
    setStatus("Your email client is opening with the message ready to send.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <label className="grid gap-2 text-sm font-medium tracking-wide text-slate-300">
        Full Name
        <input
          name="name"
          required
          className="h-14 rounded-xl border border-white/10 bg-white/5 px-5 font-normal text-white placeholder-slate-500 outline-none transition-all focus:border-teal focus:bg-white/10 focus:ring-4 focus:ring-teal/20"
          placeholder="John Doe"
        />
      </label>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium tracking-wide text-slate-300">
          Phone Number
          <input
            name="phone"
            type="tel"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-5 font-normal text-white placeholder-slate-500 outline-none transition-all focus:border-teal focus:bg-white/10 focus:ring-4 focus:ring-teal/20"
            placeholder="(555) 000-0000"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium tracking-wide text-slate-300">
          Email Address
          <input
            name="email"
            type="email"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-5 font-normal text-white placeholder-slate-500 outline-none transition-all focus:border-teal focus:bg-white/10 focus:ring-4 focus:ring-teal/20"
            placeholder="john@example.com"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium tracking-wide text-slate-300">
        Message
        <textarea
          name="message"
          rows={6}
          required
          maxLength={999}
          className="resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-normal text-white placeholder-slate-500 outline-none transition-all focus:border-teal focus:bg-white/10 focus:ring-4 focus:ring-teal/20"
          placeholder="How can we help you?"
        />
      </label>
      <button
        type="submit"
        className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 text-sm font-semibold tracking-wide text-obsidian shadow-[0_0_24px_rgba(255,255,255,0.1)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(255,255,255,0.2)]"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-teal/20 to-blue/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10">Send Message</span>
        <Send className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
      {status ? <p className="text-sm font-medium text-teal">{status}</p> : null}
    </form>
  );
}
