import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { ShootingStars } from "../components/ui/ShootingStar"; // Adjust the import path if necessary
import StarsBackground from "./ui/StarsBackground";
import { BackgroundBeams } from "./ui/BackgroundBeam";

const Contact = () => {
  const contactLinks = [
    {
      href: "https://github.com/Shreya904",
      icon: <FaGithub className="mr-2" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/shreya-srivastava-2b11b225b/",
      icon: <FaLinkedin className="mr-2" />,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/ShreyaSriv59004",
      icon: <FaTwitter className="mr-2" />,
      label: "Twitter",
    },
    {
      href: "mailto:shreyasrivastava92006@gmail.com",
      icon: <FaEnvelope className="mr-2" />,
      label: "Email",
    },
    {
      href: "tel:+91 7307909016",
      icon: <FaPhone className="mr-2" />,
      label: "Phone",
    },
  ];

  return (
    <div className="relative p-8 flex flex-col items-center justify-center h-[100vh] overflow-hidden bg-black">
      {/* Background ShootingStars component */}
      <ShootingStars
        minSpeed={10}
        maxSpeed={30}
        minDelay={1200}
        maxDelay={4200}
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        starWidth={10}
        starHeight={1}
        className="absolute inset-0 z-0"
      />

      <StarsBackground />

      <div className="relative z-10 p-8 flex flex-col items-center bg-neutral-950 text-white justify-center rounded-2xl md:w-[55%] w-[85%]">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Contact Me
        </h2>
        <p className="mt-4 text-sm md:text-lg text-center text-neutral-400 w-full">
          Feel free to connect with me on social media or reach out through
          email or phone.
        </p>
        <div className="mt-8 flex flex-col items-center space-y-4 z-30 text-neutral-400">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl hover:text-gray-300 w-[90px] justify-between "
            >
              {link.icon}
              <p className="text-left w-[50px] text-sm md:text-lg ">
                {link.label}
              </p>
            </a>
          ))}
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Contact;
