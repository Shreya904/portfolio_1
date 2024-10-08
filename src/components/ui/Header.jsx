import { Link, useLocation } from "react-router-dom";
import { IconHome, IconMessage, IconUser, IconCode } from "@tabler/icons-react";
import { cn } from "../lib/utils";

export function HeaderSection() {
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative py-2 w-full">
      <div className="flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2  items-center justify-center space-x-4">
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 px-4 py-2 rounded-full",
              location.pathname === navItem.link
                ? "border text-sm font-medium border-white/[0.2] text-white"
                : ""
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            {location.pathname === navItem.link && (
              <span className="absolute  w-1/2 mx-auto hidden md:block -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
