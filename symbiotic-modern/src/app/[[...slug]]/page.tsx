import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { AboutPage, KeyCapabilitiesPage } from "@/components/pages/about-page";
import { CareersPage } from "@/components/pages/careers-page";
import { ClientelePage } from "@/components/pages/clientele-page";
import { ContactPage } from "@/components/pages/contact-page";
import { HomePage } from "@/components/pages/home-page";
import { IndustryPage } from "@/components/pages/industry-page";
import { ServiceDetailPage, ServicesPage } from "@/components/pages/services-page";
import { SocialPage } from "@/components/pages/social-page";
import { company } from "@/core/content/company";
import { getService } from "@/core/content/services";
import {
  findRoute,
  getCanonicalPath,
  legacyPaths,
  pathToParam,
  routePaths,
  segmentsToPath,
} from "@/core/routing";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [...routePaths, ...legacyPaths].map(pathToParam);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = segmentsToPath(slug);
  const canonical = getCanonicalPath(path) ?? path;
  const route = findRoute(canonical);

  if (!route) {
    return {
      title: company.name,
    };
  }

  return {
    title: route.path === "/" ? { absolute: company.name } : route.title,
    description: route.description,
    alternates: {
      canonical: route.path,
    },
    openGraph: {
      title: route.path === "/" ? company.name : `${route.title} | ${company.name}`,
      description: route.description,
      type: "website",
    },
  };
}

export default async function SitePage({ params }: PageProps) {
  const { slug } = await params;
  const path = segmentsToPath(slug);
  const canonical = getCanonicalPath(path);

  if (canonical) {
    redirect(canonical);
  }

  const route = findRoute(path);
  if (!route) {
    notFound();
  }

  switch (route.kind) {
    case "home":
      return <HomePage />;
    case "about":
      return <AboutPage />;
    case "keyCapabilities":
      return <KeyCapabilitiesPage />;
    case "services":
      return <ServicesPage />;
    case "serviceDetail": {
      const service = route.serviceSlug ? getService(route.serviceSlug) : undefined;
      if (!service) {
        notFound();
      }
      return <ServiceDetailPage service={service} />;
    }
    case "industrySolutions":
      return <IndustryPage />;
    case "clientele":
      return <ClientelePage />;
    case "careers":
      return <CareersPage />;
    case "socialMedia":
      return <SocialPage />;
    case "contact":
      return <ContactPage />;
    default:
      notFound();
  }
}
