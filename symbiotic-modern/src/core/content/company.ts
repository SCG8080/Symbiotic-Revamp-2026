export const company = {
  name: "Symbiotic Consulting Group",
  shortName: "SCG",
  mission: "Empowering our clients through technology and business processes",
  description:
    "Symbiotic Consulting Group is one of the fastest growing providers of information technology consulting offering a wide range of IT services and solutions for clients interested in the US region and around the globe.",
  address: {
    street: "1861, Banks Road",
    city: "Margate, FL 33063",
    phone: "561-922-0120",
    fax: "561-455-9893",
    email: "info@symbioticconsultinggroup.com",
    careersEmail: "careers@symbioticconsultinggroup.com",
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/symbiotic-consulting-group",
    },
    { label: "Facebook", href: "https://www.facebook.com/symbioticco" },
    { label: "YouTube", href: "http://www.youtube.com/SymbioticCo" },
    { label: "X", href: "https://twitter.com/Symbioticco" },
  ],
};

export const locations = [
  {
    title: "USA Headquarters Office",
    lines: [
      "1861, Banks Road",
      "Margate, FL 33063",
      "Phone: 561-922-0120",
      "Fax: 561-455-9893",
      "Email: careers@symbioticconsultinggroup.com",
    ],
  },
  {
    title: "USA Texas Branch",
    lines: ["9660 Audelia Road, Suite 123-51", "Dallas, TX 75238", "Phone: 561-922-0120"],
  },
  {
    title: "Europe Shared Services Office",
    lines: [
      "Aviatorilor 5A, Suite 47",
      "Baia Mare, Maramures",
      "430223",
      "Romania, Europe",
      "Phone: +40 362 881 664",
    ],
  },
  {
    title: "India (New Delhi) Branch",
    lines: ["B-104, SOM Complex, Sector-6, Dwarka", "New Delhi, Delhi, 110075", "Phone: 561-922-0120"],
  },
];

export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Key Capabilities", href: "/key-capabilities" },
      {
        label: "Current Positions",
        href: "https://www.dice.com/company/10507176",
        external: true,
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Application Development", href: "/services/application-development" },
      { label: "Business Intelligence", href: "/services/business-intelligence" },
      { label: "Mobile Application", href: "/services/mobile-application" },
      { label: "Infrastructure Support", href: "/services/infrastructure-support" },
      { label: "Offshore Support", href: "/services/offshore-support" },
      { label: "Project Management", href: "/services/project-management" },
      { label: "Collaboration", href: "/services/collaboration" },
      { label: "Strategic Staff", href: "/services/strategic-staff" },
      { label: "Product Development", href: "/services/product-development" },
    ],
  },
  { label: "Industry Solutions", href: "/industry-solutions" },
  { label: "Clientele", href: "/clientele" },
  { label: "Careers", href: "/careers" },
  { label: "Social Media", href: "/social-media" },
  { label: "Contact Us", href: "/contact" },
];
