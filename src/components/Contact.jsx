import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { ShootingStars } from "../components/ui/ShootingStar"; // Adjust the import path if necessary
import StarsBackground from "./ui/StarsBackground";

const Contact = () => {
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

      <div className="relative z-10 p-8 flex flex-col items-center bg-white text-black justify-center rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Contact Me
        </h2>
        <p className="mt-4 text-lg md:text-xl text-center max-w-prose">
          Feel free to connect with me on social media or reach out through
          email or phone.
        </p>
        <div className="mt-8 flex flex-col items-center space-y-4">
          <a
            href="https://github.com/Shreya904"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl hover:text-gray-300"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shreya-srivastava-2b11b225b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl hover:text-gray-300"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://x.com/ShreyaSriv59004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl hover:text-gray-300"
          >
            <FaTwitter className="mr-2" /> Twitter
          </a>
          <a
            href="mailto:shreyasrivastava92006@gmail.com"
            className="flex items-center text-xl hover:text-gray-300"
          >
            <FaEnvelope className="mr-2" /> Email
          </a>
          <a
            href="tel:+91 7307909016"
            className="flex items-center text-xl hover:text-gray-300"
          >
            <FaPhone className="mr-2" /> Phone
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
