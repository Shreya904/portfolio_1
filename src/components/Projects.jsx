import CardContainer, { CardBody, CardItem } from "../components/ui/Cards"; // Adjust path if needed
import { animePic, applePic, sushiPic, marioPic } from "./lib/utils";

const Projects = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center text-black mb-12 mt-4">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {/* CardContainer 1 */}
        <CardContainer className="bg-gray-900 shadow-2xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
          <CardBody className="bg-gray-800 p-6 rounded-lg text-center">
            <CardItem
              as="h2"
              className="text-2xl font-semibold text-white mb-3"
            >
              Apple-clone
            </CardItem>
            <CardItem as="p" className="text-gray-400 mb-4">
              It’s a clone of the apple 15 pro landing page.
            </CardItem>
            <CardItem
              as="img"
              className="w-full h-48 object-cover rounded-md mt-4"
              src={applePic}
              alt="Project 1"
            />
            {/* Buttons */}
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://shreya904.github.io/Apple_clone/"
                target="_blank"
              >
                <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white border-white">
                  View
                </button>
              </a>
              <a
                href="https://github.com/Shreya904/Apple_clone"
                target="_blank"
              >
                <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white border-white">
                  Code
                </button>
              </a>
            </div>
          </CardBody>
        </CardContainer>

        {/* CardContainer 2 */}
        <CardContainer className="bg-gray-900 shadow-2xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
          <CardBody className="bg-gray-800 p-6 rounded-lg text-center">
            <CardItem
              as="h2"
              className="text-2xl font-semibold text-white mb-3"
            >
              AnimeLand
            </CardItem>
            <CardItem as="p" className="text-gray-400 mb-4">
              It’s a platform to search for different anime.
            </CardItem>
            <CardItem
              as="img"
              className="w-full h-48 object-cover rounded-md mt-4"
              src={animePic}
              alt="Project 2"
            />
            {/* Buttons */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://shreya904.github.io/AnimeLand/" target="_blank">
                <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white border-white">
                  View
                </button>
              </a>
              <a href="https://github.com/Shreya904/AnimeLand" target="_blank">
                <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white border-white">
                  Code
                </button>
              </a>
            </div>
          </CardBody>
        </CardContainer>

        {/* CardContainer 3 */}
        <CardContainer className="bg-gray-900 shadow-2xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
          <CardBody className="bg-gray-800 p-6 rounded-lg text-center">
            <CardItem
              as="h2"
              className="text-2xl font-semibold text-white mb-3"
            >
              SushiMan
            </CardItem>
            <CardItem as="p" className="text-gray-400 mb-4">
              It’s a landing page for a sushi restraunt.
            </CardItem>
            <CardItem
              as="img"
              className="w-full h-48 object-cover rounded-md mt-4"
              src={sushiPic}
              alt="Project 3"
            />
            {/* Buttons */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://shreya904.github.io/Shushi_Man/" target="_blank">
                <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white border-white">
                  View
                </button>
              </a>
              <a href="https://github.com/Shreya904/Shushi_Man" target="_blank">
                <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white border-white">
                  Code
                </button>
              </a>
            </div>
          </CardBody>
        </CardContainer>

        {/* CardContainer 4 */}
        <CardContainer className="bg-gray-900 shadow-2xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
          <CardBody className="bg-gray-800 p-6 rounded-lg text-center">
            <CardItem
              as="h2"
              className="text-2xl font-semibold text-white mb-3"
            >
              MarioClub
            </CardItem>
            <CardItem as="p" className="text-gray-400 mb-4">
              A simple landing page for Mario fans.
            </CardItem>
            <CardItem
              as="img"
              className="w-full h-48 object-cover rounded-md mt-4"
              src={marioPic}
              alt="Project 4"
            />
            {/* Buttons */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://shreya904.github.io/MarioClub/" target="_blank">
                <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white border-white">
                  View
                </button>
              </a>
              <a href="https://github.com/Shreya904/MarioClub" target="_blank">
                <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white border-white">
                  Code
                </button>
              </a>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Projects;
