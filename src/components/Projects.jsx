import CardContainer, { CardBody, CardItem } from "../components/ui/Cards"; // Adjust path if needed
import {
  animePic,
  applePic,
  sushiPic,
  marioPic,
  currPic,
  vacciPic,
} from "./lib/utils";

const Projects = () => {
  const project = [
    {
      title: "Apple-clone",
      description: "It’s a clone of the apple 15 pro landing page.",
      imgSrc: applePic, // Use the imported image
      viewSrc: "https://shreya904.github.io/Apple_clone/",
      sourceSrc: "https://github.com/shreya904/Apple_clone/",
    },
    {
      title: "AnimeLand",
      description: "It’s a platform to search for different anime.",
      imgSrc: animePic, // Use the imported image
      viewSrc: "https://shreya904.github.io/AnimeLand/",
      sourceSrc: "https://github.com/Shreya904/AnimeLand",
    },
    {
      title: "SushiMan",
      description: "It’s a landing page for a sushi restaurant.",
      imgSrc: sushiPic, // Use the imported image
      viewSrc: "https://shreya904.github.io/Shushi_Man/",
      sourceSrc: "https://github.com/Shreya904/Shushi_Man",
    },
    {
      title: "MarioClub",
      description: "A simple landing page for Mario fans.",
      imgSrc: marioPic, // Use the imported image
      viewSrc: "https://shreya904.github.io/MarioClub/",
      sourceSrc: "https://github.com/Shreya904/MarioClub",
    },
    {
      title: "Currency Convertor",
      description: "Easily convert currencies with real-time rates.",
      imgSrc: currPic, // Use the imported image
      viewSrc: "https://shreya904.github.io/CurrencyConvertor/",
      sourceSrc: "https://github.com/Shreya904/CurrencyConvertor.git",
    },
    {
      title: "VacciTime",
      description: "A Vaccine reminder for parents of young children.",
      imgSrc: vacciPic,
      viewSrc: "https://vacci-time.vercel.app/",
      sourceSrc: "https://github.com/Shreya904/Vacci-Time",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-28 mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text tracking-tight text-transparent uppercase">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-8 my-20">
        {project.map((card) => (
          <CardContainer
            key={card.title}
            className="bg-gray-900 shadow-2xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-white"
          >
            <CardBody className="bg-neutral-900 p-6 rounded-lg text-center">
              <CardItem
                as="h2"
                className="text-2xl font-semibold text-white mb-3"
              >
                {card.title}
              </CardItem>
              <CardItem as="p" className="text-gray-400 mb-4">
                {card.description}
              </CardItem>
              <CardItem
                as="img"
                className="w-full h-48 object-cover rounded-md mt-4"
                src={card.imgSrc} // This should now be a valid image source
                alt={card.title} // Use card.title as alt text for better accessibility
              />
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={card.viewSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border text-sm font-medium border-white/[0.2] text-white relative items-center flex space-x-1 hover:text-neutral-300 px-4 py-2 rounded-full">
                    View
                  </button>
                </a>
                <a
                  href={card.sourceSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-black hover:text-white border-white">
                    Code
                  </button>
                </a>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;
