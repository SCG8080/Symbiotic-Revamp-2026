import Link from "next/link";
import { company, mainNav } from "@/core/content/company";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#102c35] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#77e0d5]">
              {company.name}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">{company.description}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">Find Out More</h2>
            <div className="mt-4 grid gap-2">
              {mainNav.filter((item) => item.href !== "/").map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-[#77e0d5]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">Contact Us</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              {company.address.street}
              <br />
              {company.address.city}
              <br />
              Phone: {company.address.phone}
              <br />
              Fax: {company.address.fax}
            </p>
            <a className="mt-3 inline-block text-sm text-[#77e0d5]" href={`mailto:${company.address.email}`}>
              {company.address.email}
            </a>
          </div>
        </div>
        <p className="mt-10 border-t border-white/15 pt-6 text-xs leading-6 text-white/60">
          Copyright &copy; Symbiotic Consulting Group 2011 - {year}. Symbiotic Consulting Group is an Equal Opportunity Employer.
        </p>
      </div>
    </footer>
  );
}
