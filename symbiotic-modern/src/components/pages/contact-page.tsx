import { Mail, MapPin, Phone, Send } from "lucide-react";
import { company, locations } from "@/core/content/company";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        eyebrow="Contact"
        summary="Reach the Symbiotic Consulting Group team across headquarters and branch locations."
        image="/Images/whitebackground.jpg"
        accent="#00e5d1"
        secondaryAccent="#3b82f6"
      >
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal">Global access</p>
            <Send className="h-10 w-10 text-teal opacity-80" />
          </div>
          <div className="rounded-xl border border-white/5 bg-white/5 p-5">
            <p className="text-sm leading-relaxed text-slate-300">
              Margate, Dallas, Romania, and New Delhi presence with a single SCG contact path.
            </p>
          </div>
        </div>
      </PageHero>
      <section className="bg-obsidian-light px-5 py-32 sm:px-8 lg:px-10 relative overflow-hidden">
        <div className="kinetic-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-obsidian shadow-2xl relative h-full min-h-[560px] ring-1 ring-white/5">
              <div className="absolute inset-0 bg-white/5 pointer-events-none z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.2617529411864!2d-80.19884718496898!3d26.253166883416014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d904a312b56413%3A0x9457c75ee2272c58!2s1861%20Banks%20Rd%2C%20Margate%2C%20FL%2033063!5e0!3m2!1sen!2sus!4v1590889365455!5m2!1sen!2sus"
                className="h-full w-full absolute inset-0 filter invert-[90%] hue-rotate-180 contrast-125 grayscale-[20%]"
                loading="lazy"
                allowFullScreen
                title="Symbiotic Consulting Group headquarters map"
              />
            </div>
          </Reveal>

          <div className="grid gap-6">
            {locations.map((location, index) => (
              <Reveal key={location.title} delay={index * 70}>
                <article className="glass-panel group rounded-2xl p-6 transition-all hover:bg-white/10 hover:border-teal/30">
                  <div className="flex items-start gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal ring-1 ring-teal/20 transition-transform group-hover:scale-110">
                      {index === 0 ? <MapPin className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-bold text-white group-hover:text-teal transition-colors">{location.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {location.lines.map((line) => (
                          <span key={line}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <a
                href={`mailto:${company.address.careersEmail}`}
                className="group flex min-h-16 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 text-base font-semibold tracking-wide text-white transition-all hover:bg-white/10 hover:border-teal/50 hover:text-teal"
              >
                <Mail className="h-5 w-5" />
                {company.address.careersEmail}
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto mt-24 grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="rounded-2xl border border-white/5 bg-obsidian p-10 text-white shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 p-32 bg-teal opacity-10 blur-[100px] rounded-full" />
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal">
                  Send us a Message
                </p>
                <h2 className="mt-6 font-display text-4xl font-bold tracking-tight">Start the conversation.</h2>
                <p className="microcopy mt-6 text-lg leading-relaxed text-slate-300">
                  Share your name, phone number, email address, and message with the SCG team.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-panel-heavy rounded-2xl p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
