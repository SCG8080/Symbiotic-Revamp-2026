export type Service = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  body: string[];
  bulletsTitle: string;
  bullets: string[];
  extraSections?: Array<{
    title: string;
    text?: string;
    bullets?: string[];
  }>;
  legacyPaths: string[];
};

export const servicesPage = {
  title: "Our Services",
  image: "/Images/Our-Services2.jpg",
  intro:
    "Symbiotic Consulting Group has a proven record in providing business solutions to our clients with the most talented people in the consulting world. By providing our tangible service, clients choose us to meet their placement: contract-to-hire, contract, and/or permanent staffing needs. In today's technology-driven market economy, the benefits of hiring contractors on a consulting standard against a permanent standard are clear. Even though we consider mostly contract hires, it is a good practice to have permanent hires as well. We provide the solution for hiring either contract or permanent resource based on the client's business need and situations.",
};

export const services: Service[] = [
  {
    slug: "application-development",
    title: "Application Development",
    image: "/Images/web-development.jpg",
    summary:
      "Symbiotic Consulting Group offers leading-edge application development services for new solutions.",
    body: [
      "Symbiotic Consulting Group offers leading-edge application development services (Web, Windows and service-oriented architecture) for new solutions, as well as functional enhancement and maintenance of existing applications. Our consultants provide the expertise to plan, design, build, test and implement applications that will fully integrate into your organization's existing business processes and system environment.",
      "Using state-of-the-art tools and a proven methodology to create highly effective user-centered applications, Symbiotic Consulting Group rapid functionality delivery and reduced cycle times to minimize project risk and cost while maintaining high-quality results.",
    ],
    bulletsTitle: "Symbiotic Consulting Group application development portfolio includes:",
    bullets: [
      "Data Integration (Including Thought Leadership - Trillium, First Logic, Informatica, etc.)",
      "ERP - SAP: Functional, Technical, Security, Oracle, Mainframe, Lawson",
      "CRM (Salesforce.Com, MS Dynamics and other Platforms)",
      "Business Intelligence (Various Platforms). EI and BI Portals",
      "Custom Built Solutions - All MS (Sharepoint, .Net etc), Java, SQL based, and many more",
      "Web Portals and Company Intranets, B2B and B2C Web Applications, E-commerce sites",
      "Social Networks and Communities. Content Distribution and Knowledge Management Portals",
    ],
    legacyPaths: ["/Application_development.html"],
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence",
    image: "/ServicesImages/15.jpg",
    summary:
      "Technology provides a means of collecting and storing data. We help transform that data into tangible, meaningful results.",
    body: [
      "Technology provides a means of collecting and storing data. While most companies today have implemented the tools to master this craft, the real challenge is how best to take that data and transform it into tangible, meaningful results that will create a sustainable competitive edge.",
      "At Symbiotic Consulting Group, we help organizations develop Business Intelligence Solutions that are uniquely tailored to fit specific business needs. Using Microsoft's powerful BI platform, we work with you to develop a BI strategy that leverages your existing IT investments and integrates with your current systems.",
      "Our goal is to help you gain insight into your organization, customers, operations, financials, and more by delivering a solution that will enable you to instantly access key performance measures that help you maximize efficiency, increase profitability and achieve your strategic and operational goals.",
    ],
    bulletsTitle: "Our Capabilities:",
    bullets: [
      "Business Intelligence strategy development",
      "Enterprise database application development",
      "Data warehousing",
      "Guided analytics and data mining",
      "Data modeling and data integration",
      "Enterprise database architecture planning and review",
      "Performance management",
      "Report development and deployment",
    ],
    legacyPaths: ["/BusinessIntelligence.html"],
  },
  {
    slug: "mobile-application",
    title: "Mobile Application",
    image: "/ServicesImages/Mobile.jpg",
    summary:
      "Symbiotic Consulting Group offers expertise in enabling your mobile workforce.",
    body: [
      "Symbiotic Consulting Group offers expertise in enabling your mobile workforce. Companies everywhere are looking for ways to provide workers with the ability to access and share information anywhere, anytime from any device.",
      "BridgePoint has a team of experienced Mobility Solution specialists on staff that has been building mobile solutions for their clients since the first generation Personal Pocket PCs.",
      "Symbiotic Consulting Group can help your organization build a mobility strategy that extends your business through the development of scalable, secure, mobile applications that integrate with your existing processes and applications. Contact sales@symbioticconsultantgroup.com today to see how Symbiotic Consulting Group mobile expertise could work for you.",
    ],
    bulletsTitle: "Symbiotic Consulting Group mobile capabilities includes:",
    bullets: [
      "Mobile User Experience Design",
      "iOS, Android and Windows Phone",
      "iPAD, Android and Windows Tablets",
      "Cross Platform Development",
      "Enterprise Mobile Strategy Consulting",
      "Application Production Support",
    ],
    legacyPaths: ["/MobileApplication.html"],
  },
  {
    slug: "infrastructure-support",
    title: "Infrastructure Support",
    image: "/ServicesImages/infra.jpg",
    summary:
      "Infrastructure Technologies anticipates and meets the needs of fast-changing network, server, virtualization, and support environments.",
    body: [
      "Infrastructure Technologies anticipates and meets the needs of the campus community in the fast-changing environment of ever-increasing network data speeds, server administration, virtualization and green computing, and being responsive to the software and hardware needs of the university.",
      "Infrastructure Technologies is one of the largest and most diverse subunits of Information Technology Services, providing services ranging from oversight of the campus network to email to server administration.",
    ],
    bulletsTitle: "We provide cutting-edge IT services and IT infrastructure management services such as:",
    bullets: [
      "Managed IT Services",
      "Software Support",
      "Hardware Support",
      "Symantec Support",
      "Server Virtualization",
      "Network Support",
      "Data Center Consolidation",
      "Data Archiving",
      "Storage Virtualization",
      "Private Cloud Computing and more to improve operational efficiency which allows you to focus on your top business objectives",
    ],
    legacyPaths: ["/Infrastructuresupport.html", "/Infrastructure support.html"],
  },
  {
    slug: "offshore-support",
    title: "Offshore Support",
    image: "/ServicesImages/1.jpg",
    summary:
      "A global delivery model built around mission critical projects, cost control, and extended support windows.",
    body: [
      "Symbiotic Consulting Group is one of the fastest growing information technology providers, offering a wide range of IT services and solutions. At Symbiotic Consulting Group, our mission is to empower our clients through technology and business process improvements.",
      "Through effective partnering, we are able to successfully design and build world class solutions targeted to answering our client's needs.",
    ],
    bulletsTitle: "We use our own assets to build in-house competencies:",
    bullets: [
      "Use internal SYMBIOTIC resources for mission critical projects",
      "Deliver on-time, within budget solutions",
      "Achieve expense reduction goals, and lower project costs by > 20%",
      "We can assist in cutting overall expense/cost, along with expanding team headcount",
      "Onsite support window of 9 hours daily between 2 PM to 11 PM Indian Standard Time",
      "Major overlap with EMEA and some overlap with APAC time zones",
      "Average IT experience of offshore team members is ~ 9 years",
      "Support multiple enterprise applications",
      "Always 24 X 5 coverage and for some special clients it is actually 24 X 7",
      "Contribute directly to key projects and System Development Life Cycle",
      "Enhancements, Minor releases and Major projects",
    ],
    legacyPaths: ["/offshoreSupport.html", "/OffshoreSupport.html"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    image: "/ServicesImages/5.jpg",
    summary:
      "Experienced project management experts offering end-to-end planning, execution, and support services.",
    body: [
      "Project Management has become a challenging area. Complexities of project, lack of specialist expertise are some of the barriers to effective Project Management causing customer dissatisfaction and burdens the IT team. In the end, IT Project management services turns out to be a failure.",
      "Apart from gap in project management there are challenges around flexibility. Budgetary constraints and a challenging economy imply fewer resources. Therefore, there is a need for a flexible Project management workforce as well.",
      "Symbiotic Consulting Group worldwide's team of experienced project management experts offer end-to-end Project Management, execution and project management support services. As a part of our services, we design solutions that are safe, cost-effective, and industry-compliant and tailored around the client's needs. We can manage and execute the projects simultaneously.",
    ],
    bulletsTitle: "Our Project Management Portfolio:",
    bullets: [
      "PMP Certified Project and Program Managers",
      "Scrum and Agile Certified Project Managers",
      "Technical Project or Delivery Managers by Individual Discipline",
      "Symbiotic Consulting Group are Big Sponsors of PMI in Florida and in Other States",
    ],
    extraSections: [
      {
        title: "Flexible IT Project Management Services",
        text: "Symbiotic Consulting Group Project Management services are flexible. Our Project Managers are available on a consultative basis or on a full-time service, depending on your requirements, budgetary constraints and timelines. Bringing in extensive experience in various verticals, our managers work closely to ensure that the job is done and help in overcoming the challenges.",
      },
    ],
    legacyPaths: ["/ProjectManagement.html"],
  },
  {
    slug: "collaboration",
    title: "Collaboration",
    image: "/ServicesImages/Collaboration.jpg",
    summary:
      "End-to-end collaboration solutions using web portals, workflows, governance, and migration support.",
    body: [
      "Symbiotic Consulting Group delivers end-to-end Collaboration solutions embracing the latest web portal technologies and business trends that enables an organization to become a community with the ability to share information, discuss issues, and easily collaborate on projects.",
      "From business applications and reports, to workflow and company information, a web portal can offer a single distribution point that boosts business process efficiencies and worker productivity.",
      "We deliver consistent and predictable solutions, on-premises or in the cloud. From strategy to managed services, our global team of delivery experts works with you to develop a blueprint for success.",
    ],
    bulletsTitle: "Collaboration services include:",
    bullets: [
      "Collaboration Strategy aligns your investments and business priorities with clearly defined, actionable roadmaps",
      "Collaboration Governance reduces risk and operational costs by securely and consistently optimizing SharePoint performance",
      "Collaboration Migration can increase operational efficiency by moving any legacy environment to an online collaboration service or on-premises model",
      "Expert Source enhances productivity and customer interaction through social collaboration that connects people with the right skills and knowledge at the right time",
    ],
    legacyPaths: ["/Collaboration.html"],
  },
  {
    slug: "strategic-staff",
    title: "Strategic Staff",
    image: "/Images/Staffing.jpg",
    summary:
      "Technology people staffing for technology roles, matched to requirements, culture, and delivery outcomes.",
    body: [
      "The key to success is to get trained people at the right time and get the job done in order to meet the business objectives. With the ever-increasing need for companies to be competitive in this dynamic marketplace, pressure on both large and small company's IT staff has increased dramatically.",
      "We have unique Strategic Staffing solutions which help our consulting projects and clients to meet the challenges of upcoming technology needs. We have technical experts who have unique implementation schedule to execute the initiative in cost effective method. In today's market it is not easy to find the right person for the right job at the right time.",
      "We have done specialization to meet the business aim of the client. Strategic Staffing through consulting projects from Symbiotic Consulting Group brings the very best IT professionals to your business, helping your corporation achieve business goals and keep application development goals on track.",
      "Our Strategic Staffing process employs the best of evaluation methodologies and value talent. At Symbiotic Consulting Group the person who is matching the right person to the right job at the right time is motivated by ensuring that the global clients will make Symbiotic Consulting Group their consulting company of choice.",
    ],
    bulletsTitle: "Key Overall Differentiators",
    bullets: [
      "Technology people staffing for technology roles",
      "Proven and hands-on industry experience in leading and managing technology",
      "Development, Support, Infrastructure",
      "Project Management, Business analysis, Business Architecture",
      "Application and Enterprise Architecture",
      "Business Intelligence, Quality Assurance",
      "Each candidate undergoes technical interview by internal team or contract partners for every technology discipline",
      "Understand needs: requirement fit, culture fit, and connected with our consultants at all levels throughout the engagement",
    ],
    legacyPaths: ["/StrategicStaff.html"],
  },
  {
    slug: "product-development",
    title: "Product Development",
    image: "/ServicesImages/11.jpg",
    summary:
      "Leading-edge application and product development services for faster market entry and stronger delivery mechanisms.",
    body: [
      "Symbiotic Consulting Group offers leading-edge application development services (Web, Windows and service-oriented architecture) for new solutions, as well as functional enhancement and maintenance of existing applications.",
      "Our consultants provide the expertise to plan, design, build, test and implement applications that will fully integrate into your organization's existing business processes and system environment. Using state-of-the-art tools and a proven methodology to create highly effective user-centered applications, Symbiotic Consulting Group rapid functionality delivery and reduced cycle times to minimize project risk and cost while maintaining high-quality results.",
    ],
    bulletsTitle: "Symbiotic Consulting Group application development portfolio includes:",
    bullets: [
      "Faster time to market",
      "Faster time to revenue",
      "Improved R&D Effectiveness",
      "Rapid entry into new markets",
      "Adopt new delivery mechanisms such as Agile",
    ],
    extraSections: [
      {
        title: "Our strategy for product development",
        bullets: [
          "Capture, score and prioritize our product ideas",
          "Strike a balance between new innovations and incremental enhancements",
          "Reduce the number of failed or aborted product launches for our client leveraging historical data and experience",
          "Rapid entry into new markets",
          "More closely align product introductions with overall strategy of our client",
        ],
      },
    ],
    legacyPaths: ["/ProductDevelopment.html"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
