import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-[#f6f8f5] px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl rounded-lg border border-[#102c35]/10 bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00a899]">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#102c35]">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-8 text-[#5d6c70]">
          The page you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00a899] px-5 text-sm font-semibold text-white transition hover:bg-[#078f86]"
        >
          Back Home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
