import { HeroHighlight, Highlight } from "../components/ui/HeroHighlight"; // Adjust the import path as needed

const About = () => {
  return (
    <HeroHighlight containerClassName="p-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        About Me
      </h2>
      <p className="mt-4 text-lg md:text-xl text-center max-w-prose font-bold">
        I’m Shreya Srivastava, a web developer with a passion for creating
        responsive and dynamic web applications. I love solving complex problems
        and bringing ideas to life through code.
      </p>
      <p className="mt-4 text-lg md:text-xl text-center max-w-prose font-bold">
        <Highlight>Let’s build something amazing together!</Highlight>
      </p>
      <section className="mt-8 max-w-4xl bg-indigo-300 p-6 rounded-lg">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
          Skills
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Tailwind CSS & Styled Components</li>
          <li>HTML & CSS</li>
          <li>APIs and Fetch</li>
          <li>Version Control (Git)</li>
        </ul>
      </section>
    </HeroHighlight>
  );
};

export default About;
