import { TextRevealCard } from "../components/ui/TextRevealCard"; // Adjust the import path as needed
// import { GridBackgroundDemo } from "../components/ui/GridBackgroundDemo"; // Adjust the import path as needed
import { BoxesCore } from "./ui/BoxesCore";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center min-h-[85vh]">
      {/* Grid background with absolute positioning */}
      {/* <GridBackgroundDemo /> */}
      {/* TextRevealCard centered and layered above the grid background */}
      <div className="min-h-[85vh] w-full overflow-hidden relative z-10">
        <BoxesCore />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 p-0 w-fit h-fit">
        <TextRevealCard
          text="I’m Shreya Srivastava."
          revealText="I'm a web developer."
          className="text-lg md:text-xl text-center"
        >
          {/* Any additional content can be placed here if needed */}
        </TextRevealCard>
      </div>
    </div>
  );
};

export default Home;
