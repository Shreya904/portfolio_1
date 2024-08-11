import { cn } from "../lib/utils";
import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandNextjs,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandReact,
} from "@tabler/icons-react";

export function SkillsGrid() {
  const features = [
    {
      title: "ReactJs",
      description:
        "A powerful JavaScript library for building dynamic user interfaces with reusable components and efficient updates.",
      icon: <IconBrandReact />,
    },
    {
      title: "NextJs",
      description:
        "A React framework offering server-side rendering and static site generation for fast, optimized web applications.",
      icon: <IconBrandNextjs />,
    },
    {
      title: "HTML5",
      description:
        "The latest version of HTML, providing semantic elements and multimedia features for modern web development.",
      icon: <IconBrandHtml5 />,
    },
    {
      title: "CSS3",
      description:
        "The latest version of CSS, enhancing styling with new layout techniques, animations, and responsive design features.",
      icon: <IconBrandCss3 />,
    },
    {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework that allows for rapid UI development with customizable, low-level utility classes.",
      icon: <IconBrandTailwind />,
    },
    {
      title: "JavaScript",
      description:
        "A versatile programming language that powers interactive web pages and applications with dynamic functionality.",
      icon: <IconBrandJavascript />,
    },
    {
      title: "Bootstrap",
      description:
        "A popular front-end framework offering pre-designed components and responsive grid system for faster web development.",
      icon: <IconBrandBootstrap />,
    },
    {
      title: "Github",
      description:
        "GitHub is a platform for version control and collaboration, allowing developers to manage and share their code repositories.",
      icon: <IconBrandGithub />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t  from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
