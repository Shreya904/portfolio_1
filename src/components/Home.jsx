import { TextRevealCard } from "../components/ui/TextRevealCard"; // Adjust the import path as needed
// import { GridBackgroundDemo } from "../components/ui/GridBackgroundDemo"; // Adjust the import path as needed
import { BoxesCore } from "./ui/BoxesCore";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen">
      {/* Grid background with absolute positioning */}
      {/* <GridBackgroundDemo /> */}
      {/* Content container */}
      <div className="relative w-full flex flex-col items-center min-h-screen overflow-hidden z-10">
        <BoxesCore />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 p-4 md:p-6">
          <TextRevealCard
            text="I’m Shreya Srivastava."
            revealText="I'm a web developer."
            className="text-base md:text-lg lg:text-xl text-center"
          >
            {/* Any additional content can be placed here if needed */}
          </TextRevealCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
