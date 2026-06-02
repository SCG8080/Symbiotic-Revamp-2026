import { Mail, MapPin, Phone } from "lucide-react";
import { company, locations } from "@/core/content/company";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        eyebrow="Contact"
        summary="Reach the Symbiotic Consulting Group team across headquarters and branch locations."
        image="/Images/whitebackground.jpg"
      />
      <section className="bg-[#f6f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="overflow-hidden rounded-lg border border-[#102c35]/10 bg-white shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.2617529411864!2d-80.19884718496898!3d26.253166883416014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d904a312b56413%3A0x9457c75ee2272c58!2s1861%20Banks%20Rd%2C%20Margate%2C%20FL%2033063!5e0!3m2!1sen!2sus!4v1590889365455!5m2!1sen!2sus"
              className="h-[520px] w-full"
              loading="lazy"
              allowFullScreen
              title="Symbiotic Consulting Group headquarters map"
            />
          </div>

          <div className="grid gap-4">
            {locations.map((location, index) => (
              <article key={location.title} className="rounded-lg border border-[#102c35]/10 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  {index === 0 ? (
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#00a899]" />
                  ) : (
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-[#00a899]" />
                  )}
                  <div>
                    <h2 className="font-semibold text-[#102c35]">{location.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#5d6c70]">
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
            ))}
            <a
              href={`mailto:${company.address.careersEmail}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#102c35] px-5 text-sm font-semibold text-white transition hover:bg-[#00a899]"
            >
              <Mail className="h-4 w-4" />
              {company.address.careersEmail}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-[#102c35] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#77e0d5]">
              Send us a Message
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Start the conversation.</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              Share your name, phone number, email address, and message with the SCG team.
            </p>
          </div>
          <div className="rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
