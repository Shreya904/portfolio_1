import { TextRevealCard } from "../components/ui/TextRevealCard"; // Adjust the import path as needed
import { BoxesCore } from "./ui/BoxesCore";
import Cover from "../components/ui/Cover";
import shreya from "../components/assets/shreya.pdf";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen">
      <div className="relative w-full flex flex-col items-center min-h-screen overflow-hidden z-10">
        <BoxesCore />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 p-4 md:p-6">
          <TextRevealCard
            text="I’m Shreya Srivastava."
            revealText="I'm a web developer."
            className="text-base md:text-lg lg:text-xl text-center"
          ></TextRevealCard>
          <div className="mt-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold max-w-7xl mx-auto text-center py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
              Download my resume{" "}
              <Cover>
                <a href={shreya} download>
                  here
                </a>
              </Cover>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
