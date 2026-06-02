import Link from "next/link";
import { ArrowRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { company, mainNav } from "@/core/content/company";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#102c35] text-white">
      <div className="kinetic-grid absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#77e0d5]">
              {company.name}
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight">
              Empowering clients through technology and business processes.
            </h2>
            <p className="microcopy mt-5 max-w-xl text-sm leading-7 text-white/72">{company.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {company.socials.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-lg border border-white/14 bg-white/10 text-white/78 transition hover:border-[#77e0d5]/60 hover:text-[#77e0d5]"
                    aria-label={social.label}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">Find Out More</h2>
            <div className="mt-5 grid gap-2">
              {mainNav.filter((item) => item.href !== "/").map((item) => (
                <Link key={item.href} href={item.href} className="group inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-[#77e0d5]">
                  <span>{item.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">Contact Us</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/72">
              <p className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#77e0d5]" />
                <span>{company.address.street}<br />{company.address.city}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[#77e0d5]" />
                <span>Phone: {company.address.phone}<br />Fax: {company.address.fax}</span>
              </p>
              <a className="flex gap-3 text-[#77e0d5]" href={`mailto:${company.address.email}`}>
                <Mail className="mt-1 h-4 w-4 shrink-0" />
                <span>{company.address.email}</span>
              </a>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/15 pt-6 text-xs leading-6 text-white/60">
          Copyright &copy; Symbiotic Consulting Group 2011 - {year}. Symbiotic Consulting Group is an Equal Opportunity Employer.
        </p>
      </div>
    </footer>
  );
}
