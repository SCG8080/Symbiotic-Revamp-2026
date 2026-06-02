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
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-semibold text-[#102c35]">
        Full Name
        <input
          name="name"
          required
          className="h-12 rounded-lg border border-[#102c35]/15 bg-white px-4 font-normal outline-none transition focus:border-[#00a899] focus:ring-4 focus:ring-[#00a899]/20"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#102c35]">
        Phone Number
        <input
          name="phone"
          type="tel"
          required
          className="h-12 rounded-lg border border-[#102c35]/15 bg-white px-4 font-normal outline-none transition focus:border-[#00a899] focus:ring-4 focus:ring-[#00a899]/20"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#102c35]">
        Email Address
        <input
          name="email"
          type="email"
          required
          className="h-12 rounded-lg border border-[#102c35]/15 bg-white px-4 font-normal outline-none transition focus:border-[#00a899] focus:ring-4 focus:ring-[#00a899]/20"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#102c35]">
        Message
        <textarea
          name="message"
          rows={7}
          required
          maxLength={999}
          className="resize-none rounded-lg border border-[#102c35]/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#00a899] focus:ring-4 focus:ring-[#00a899]/20"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00a899] px-5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,168,153,0.25)] transition hover:bg-[#078f86]"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
      {status ? <p className="text-sm text-[#087d74]">{status}</p> : null}
    </form>
  );
}
