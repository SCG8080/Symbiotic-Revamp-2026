import Link from "next/link";
import { ArrowRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Linkedin, Twitter, Youtube } from "@/components/ui/social-icons";
import { company, mainNav } from "@/core/content/company";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-obsidian text-slate-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal/10 via-obsidian to-obsidian opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-8 lg:px-10">
        
        {/* Massive Pre-footer CTA */}
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Ready to transform?
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Partner with Symbiotic Consulting Group to architect, build, and scale your technology operations.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 text-base font-semibold text-obsidian transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Start the conversation</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-teal/20 to-blue/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          <div className="pr-8">
            <p className="font-display text-2xl font-bold text-white">
              {company.name}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
              {company.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {company.socials.map((social) => {
                let SocialIcon = ExternalLink;
                if (social.label === "LinkedIn") SocialIcon = Linkedin;
                if (social.label === "Facebook") SocialIcon = Facebook;
                if (social.label === "YouTube") SocialIcon = Youtube;
                if (social.label === "X" || social.label === "Twitter") SocialIcon = Twitter;
                
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-scg-teal/50 hover:bg-scg-teal/10 hover:text-scg-teal"
                    aria-label={social.label}
                  >
                    <SocialIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-6 space-y-3">
              {mainNav.filter((item) => item.href !== "/").map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group flex items-center text-sm text-slate-400 transition-colors hover:text-white">
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item.label}</span>
                      <span className="absolute inset-0 inline-block translate-y-full text-teal transition-transform duration-300 group-hover:translate-y-0">{item.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Contact Info</h3>
            <ul className="mt-6 space-y-5 text-sm text-slate-400">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-teal">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="leading-relaxed">
                  {company.address.street}<br />{company.address.city}
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-teal">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="leading-relaxed">
                  P: {company.address.phone}<br />F: {company.address.fax}
                </span>
              </li>
              <li>
                <a className="group flex items-center gap-4 transition-colors hover:text-teal" href={`mailto:${company.address.email}`}>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-teal transition-colors group-hover:bg-teal/20">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>{company.address.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-slate-500">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p>
            An Equal Opportunity Employer.
          </p>
        </div>
      </div>
    </footer>
  );
}
