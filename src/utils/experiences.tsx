import { CustomLink } from "@/components/CustomLink";
import { ExternalLinks } from "./constants";

export type Experience = {
  title: string;
  company: string;
  date: string;
  descriptions: string[];
  image: string;
  imageAlt: string;
  imageLink: string;
  companyLink: string;
  subheading: React.ReactNode;
};

export const Experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "VICARA",
    date: "Feb 2022 to Jun 2023",
    descriptions: [
      "I modernized the frontend by migrating from Material UI to a custom SCSS library, improving visual consistency and maintainability. I prioritized developer experience through TypeScript and efficient CI/CD pipelines. I developed key features like a drag-and-drop pipeline builder and an in-app code editor, and revamped the landing page in Next.js for enhanced performance and SEO. I also expanded my skillset by exploring WebGL and 3D rendering with Three.js, backend development with Rust, and automating tasks with Cypress.",
    ],
    image: "/images/orgs/patr.webp",
    imageAlt: "Patr - Deploy your app in 60 seconds",
    companyLink: ExternalLinks.vicara,
    imageLink: ExternalLinks.patr,
    subheading: (
      <>
        At Vicara, I led frontend development for&nbsp;
        <CustomLink
          href={ExternalLinks.patr}
          target="_blank"
          className="font-medium underline hover:text-primary text-xs md:text-sm lg:text-lg xl:text-xl text-secondary "
        >
          Patr
        </CustomLink>
        , <br /> modernizing its architecture.
      </>
    ),
  },
  {
    title: "Founding Engineer",
    company: "FINDR",
    date: "Jul 2023 to Present",
    companyLink: ExternalLinks.findr,
    imageLink: ExternalLinks.findr,
    descriptions: [
      "I spearheaded the development of the entire frontend, including a Tauri-based desktop application prototype. I established a robust self-hosting infrastructure with Docker, Github Actions and AWS, optimized performance with custom solutions for image compression and icon loading, and significantly improved SEO through programmatic page generation. I also contributed to the backend using Python FastAPI and developed a Chrome extension that boosted user retention. I consistently explored emerging technologies, including LLM models, LangChain.js, and WebGPU.",
    ],
    image: "/images/orgs/findr.webp",
    imageAlt: "Findr - Your AI second brain",
    subheading: (
      <>
        At&nbsp;
        <CustomLink
          href={ExternalLinks.findr}
          target="_blank"
          className="font-medium underline hover:text-primary text-xs md:text-sm lg:text-lg xl:text-xl text-secondary"
        >
          Findr
        </CustomLink>
        , I handled the frontend end-to-end and also contributed to the Python
        FastAPI backend.
      </>
    ),
  },
];
