import { Icons } from "@/components/icons";

export const DATA = {
  name: "Manikandan",
  initials: "R S",
  url: "https://rsmk.dev",
  location: "Bangalore, IN",
  locationLink: "https://www.google.com/maps/place/Bangalore,+India",
  description:
    "Spring Boot Developer with a passion for building robust and scalable backend systems. Clean code, strong architecture, and continuous learning are at the core of my work.",
  summary:
    "Hi, I'm Manikandan — a backend-focused Full Stack Developer 🚀 with a strong passion for building scalable web applications. Currently working primarily with Spring Boot, React.js, and Node.js. I enjoy creating clean, efficient systems and bringing ideas to life through code. I’m always learning, always building, and always looking to collaborate on impactful tech.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Android",
    "Spring Boot",
    "React",
    "Next.js",
    "Node.js",
    "Typescript",
    "Java",
    "Kotlin",
    "PostgreSQL",
    "MongoDB",
    "Docker",
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
      badges: [""],
      location: "Remote",
      title: "Spring Boot Developer",
      logoUrl: "/accenture_logo.jpeg",
      start: "2024",
      end: "Present",
      description:
        "Building microservices-based backend systems using Spring Boot, Spring Security, JPA, and Redis. Integrated RESTful APIs with external services. Contributed to CI/CD automation using Jenkins pipelines and Dockerized applications deployed via Kubernetes. Collaborating with frontend teams on API design and versioning.",
    },
    {
      company: "Infosys Limited",
      href: "https://www.infosys.com",
      badges: [],
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "/infosys_logo.jpeg",
      start: "2022",
      end: "2024",
      description:
        "Designed and implemented backend modules in Spring Boot and integrated with MongoDB and MySQL. Built reusable API layers and asynchronous task processors using RabbitMQ. Migrated monolithic components to microservices. Contributed to frontend integration using Angular and handled DevOps tasks with Jenkins and Docker.",
    },
    {
      company: "Colan Infotech Pvt Ltd",
      href: "https://colaninfotech.com/",
      badges: [],
      location: "Chennai, IN",
      title: "Android Developer",
      logoUrl: "/colan_infotech_private_limited_logo.jpeg",
      start: "2021",
      end: "2022",
      description:
        "Developed and maintained multiple Android apps using Java, Kotlin, and Jetpack libraries. Integrated REST APIs using Retrofit and handled offline sync with Room DB. Worked with Firebase for notifications and analytics. Contributed to code reviews, UI polishing, and agile sprint planning.",
    },
    {
      company: "Divergent Development Labs Pvt Ltd",
      href: "http://www.d-devlabs.com/",
      badges: [],
      location: "Remote",
      title: "Android Developer",
      logoUrl: "/labsdivergent_logo.jpeg",
      start: "2019",
      end: "2021",
      description:
        "Led the development of Android apps in logistics and education domains. Built clean architecture with MVVM, LiveData, and ViewModel patterns. Integrated Google Maps SDK and Firebase Cloud Messaging. Collaborated with backend teams for API testing using Postman and Swagger.",
    },
    {
      company: "Grepsale Media",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Android Developer",
      logoUrl: "/lime.svg",
      start: "2018",
      end: "2019",
      description:
        "Worked on Android app features related to authentication, media uploads, and real-time updates. Integrated backend REST APIs using Retrofit and managed local data with SQLite. Participated in UX optimization and handled app publishing to Google Play Store.",
    },
  ],
  education: [
    {
      school: "K.L.N College of Engineering",
      href: "#",
      degree: "B.E. Electrical and Electronics Engineering",
      logoUrl: "/buildspace.jpg",
      start: "2012",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Prompt Pilot",
      href: "#",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A customizable LLM chat interface built with Next.js, enabling predefined prompt templates, user configuration, and dynamic LLM integrations. Designed for creators and developers who want to build domain-specific AI workflows.",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [],
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
      image: "",
      video: "",
    },
    {
      title: "Daily Habit Tracker",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "A full-stack web app to track daily habits with streaks, built using Next.js, Shadcn UI, and Prisma.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
        "Shadcn UI",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Zerodha Portfolio Viewer",
      href: "#",
      dates: "2025 - Present",
      active: true,
      description:
        "An app that connects with Zerodha Kite Connect to show a personalized portfolio dashboard using Next.js and TypeScript.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Zerodha Kite Connect",
        "TailwindCSS",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
