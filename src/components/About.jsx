import { HeroHighlight, Highlight } from "../components/ui/HeroHighlight"; // Adjust the import path as needed
import { SkillsGrid } from "./ui/SkillsGrid";

const About = () => {
  return (
    <HeroHighlight containerClassName="p-8 flex flex-col justify-center items-center min-h-screen">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-7xl font-bold text-center mt-28 mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text tracking-tight text-transparent">
          About Me
        </h2>
        <p className="mt-4 text-sm md:text-md text-center max-w-prose text-gray-300">
          I’m Shreya Srivastava, a web developer with a passion for creating
          responsive and dynamic web applications. I love solving complex
          problems and bringing ideas to life through code.
        </p>
        <p className="mt-4 text-sm md:text-xl text-center max-w-prose font-bold">
          <Highlight>Let’s build something amazing together!</Highlight>
        </p>
      </div>
      <SkillsGrid />
    </HeroHighlight>
  );
};

export default About;
