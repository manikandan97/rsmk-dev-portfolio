import { Icons } from "@/components/icons";
import { NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Manikandan R S",
  initials: "MK",
  url: "https://rsmk.dev",
  location: "Bangalore, IN",
  locationLink: "https://www.google.com/maps/place/Bangalore,+India",
  description:
    "Full-Stack Software Engineer with 7 years of experience building and scaling web applications with Java/Spring Boot backends and React/Next.js frontends.",
  summary:
    "Hi, I'm Manikandan, a Full-Stack Software Engineer based in Bangalore. I've led a migration of legacy Java Struts applications to Spring Boot, built high-throughput microservices, and automated CI/CD pipelines. I'm strong in microservices architecture, REST API design, and AI-assisted development workflows, and I ship production-grade side projects on my own.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Java",
    "Spring Boot",
    "Kotlin",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Kafka",
    "OAuth2 / JWT",
    "AWS",
    "Docker",
    "Jenkins",
    "GitHub Actions",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ],
  contact: {
    email: "hello@rsmk.dev",
    tel: "+919597802077",
    social: {
      GitHub: {
        url: "https://github.com/manikandan97",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/manikandan-sureshbabu/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/rs_mk97",
        icon: Icons.x,
      },
    },
  },

  work: [
    {
      company: "Accenture",
      href: "https://www.accenture.com/",
      badges: [],
      location: "Bangalore, IN",
      title: "Senior Software Engineer (Senior Analyst)",
      logoUrl: "/accenture_logo.jpeg",
      start: "Feb 2024",
      end: "Present",
      description:
        "Led the migration of 3 Java Struts applications to Java 17 + Spring Boot, cutting average response time by 40% and adding OAuth2/JWT authentication across all migrated services. Automated Jenkins CI/CD pipelines, taking deployments from 2 hours to 15 minutes. Built a JUnit suite with 85%+ coverage that reduced production defects by 30%, and mentored 4 junior developers.",
    },
    {
      company: "Infosys Limited",
      href: "https://www.infosys.com",
      badges: [],
      location: "Bangalore, IN",
      title: "Technology Analyst",
      logoUrl: "/infosys_logo.jpeg",
      start: "May 2022",
      end: "Jan 2024",
      description:
        "Developed high-throughput Spring Boot microservices for a voice analytics platform handling 5,000+ requests/minute. Deployed services on PCF Cloud, reducing deployment cycles by 20%. Set up centralized logging with Datadog and monitoring via Kibana, reducing downtime by 25%, and load-tested with JMeter and Dynatrace.",
    },
    {
      company: "Colan Infotech Pvt Ltd",
      href: "https://colaninfotech.com/",
      badges: [],
      location: "Chennai, IN",
      title: "Software Engineer",
      logoUrl: "/colan_infotech_private_limited_logo.jpeg",
      start: "Oct 2021",
      end: "Apr 2022",
      description:
        "Built a full-stack event management platform with Flutter and Java, serving 500+ concurrent users with real-time WebSocket notifications. Designed role-based access control with JWT for organizers, vendors, and attendees.",
    },
    {
      company: "Divergent Development Labs Pvt Ltd",
      href: "http://www.d-devlabs.com/",
      badges: [],
      location: "Madurai, IN",
      title: "Software Engineer",
      logoUrl: "/labsdivergent_logo.jpeg",
      start: "Aug 2019",
      end: "Oct 2021",
      description:
        "Developed Vidyaan, a Learning Management + ERP system built with Java, Kotlin, and the Android SDK, growing active user engagement by 95%. Set up a GitHub Actions CI/CD pipeline that improved deployment frequency by 50%.",
    },
  ],
  // Credly badge IDs, from each badge's "Share > Embed" code
  certifications: [
    "4fb5338e-5034-43cc-a10e-a0941ac8465f",
    "3b75297a-9612-4dec-933e-ef6b6afac2bc",
    "eecf490a-15d9-4da2-8d59-62441f37f297",
  ],
  education: [
    {
      school: "K.L.N College of Engineering",
      href: "",
      degree: "B.E. Electrical and Electronics Engineering",
      logoUrl: "",
      start: "2014",
      end: "Dec 2018",
    },
  ],
  projects: [
    {
      title: "Portfolio AI Chat",
      href: "/blog/portfolio-ai-chat",
      dates: "October 2026",
      active: true,
      description:
        "The chat bubble on this site. A dependency-free script that answers questions about my experience using retrieval-augmented generation, served from an AWS Lambda Function URL.",
      technologies: ["JavaScript", "AWS Lambda", "RAG", "Next.js"],
      links: [
        {
          type: "Case Study",
          href: "/blog/portfolio-ai-chat",
          icon: <NotebookIcon className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "InstaCaptioner",
      href: "https://www.instacaptioner.in",
      dates: "March 2025 - Present",
      active: true,
      description:
        "A deployed web app that automatically generates context-aware captions for Instagram posts using AI. Designed to help content creators boost engagement with minimal effort.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "TailwindCSS",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.instacaptioner.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/instacaptioner-preview.png",
      video: "",
    },
  ],
} as const;
