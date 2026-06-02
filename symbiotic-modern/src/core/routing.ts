import { services } from "./content/services";

export type PageKind =
  | "home"
  | "about"
  | "keyCapabilities"
  | "services"
  | "serviceDetail"
  | "industrySolutions"
  | "clientele"
  | "careers"
  | "socialMedia"
  | "contact";

export type RouteRecord = {
  path: string;
  title: string;
  description: string;
  kind: PageKind;
  serviceSlug?: string;
};

const standaloneRoutes: RouteRecord[] = [
  {
    path: "/",
    title: "Symbiotic Consulting Group",
    description:
      "IT consulting, business process improvement, application development, staffing, and technology delivery services.",
    kind: "home",
  },
  {
    path: "/about",
    title: "About Us",
    description: "About Symbiotic Consulting Group, our commitment, and core values.",
    kind: "about",
  },
  {
    path: "/key-capabilities",
    title: "Key Capabilities",
    description: "SCG capabilities across web development, ServiceNow, RPA, ERP, CRM, BI, and custom solutions.",
    kind: "keyCapabilities",
  },
  {
    path: "/services",
    title: "Our Services",
    description: "Symbiotic Consulting Group services for technology consulting and delivery.",
    kind: "services",
  },
  {
    path: "/industry-solutions",
    title: "Industry Solutions",
    description: "IT solutions for financial services, healthcare, supply chain, legal services, and more.",
    kind: "industrySolutions",
  },
  {
    path: "/clientele",
    title: "Clientele",
    description: "Client portfolio, relationships, and testimonials for Symbiotic Consulting Group.",
    kind: "clientele",
  },
  {
    path: "/careers",
    title: "Careers",
    description: "Career opportunities and workforce culture at Symbiotic Consulting Group.",
    kind: "careers",
  },
  {
    path: "/social-media",
    title: "Social Media",
    description: "Symbiotic Consulting Group social media feed.",
    kind: "socialMedia",
  },
  {
    path: "/contact",
    title: "Contact Us",
    description: "Contact Symbiotic Consulting Group headquarters and branch offices.",
    kind: "contact",
  },
];

export const routes: RouteRecord[] = [
  ...standaloneRoutes,
  ...services.map((service) => ({
    path: `/services/${service.slug}`,
    title: service.title,
    description: service.summary,
    kind: "serviceDetail" as const,
    serviceSlug: service.slug,
  })),
];

export const legacyRouteAliases: Record<string, string> = {
  "/index.html": "/",
  "/about.html": "/about",
  "/key capabalities.html": "/key-capabilities",
  "/key capabilities.html": "/key-capabilities",
  "/services.html": "/services",
  "/industry-solutions.html": "/industry-solutions",
  "/clientele.html": "/clientele",
  "/careers.html": "/careers",
  "/socialmedia.html": "/social-media",
  "/contact.html": "/contact",
  ...Object.fromEntries(
    services.flatMap((service) =>
      service.legacyPaths.map((legacyPath) => [legacyPath, `/services/${service.slug}`]),
    ),
  ),
};

export const routePaths = routes.map((route) => route.path);
export const legacyPaths = Object.keys(legacyRouteAliases);

export function segmentsToPath(slug?: string[]) {
  if (!slug || slug.length === 0) {
    return "/";
  }

  return `/${slug.map((segment) => decodeURIComponent(segment)).join("/")}`;
}

export function pathToParam(path: string) {
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return { slug: trimmed ? trimmed.split("/") : [] };
}

export function findRoute(path: string) {
  return routes.find((route) => route.path === path);
}

export function getCanonicalPath(path: string) {
  return legacyRouteAliases[path];
}
