import Cover from "../components/ui/Cover";
import { BoxesCore } from "./ui/BoxesCore";
import shreya from "../components/assets/shreya.pdf"; // Add your resume in the correct path
import myImage from "../components/assets/img1.png"; // Add your image in the correct path

const Home = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen">
      <div className="relative w-full flex flex-col items-center min-h-screen overflow-hidden z-10">
        <BoxesCore />
        <div className="absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-4 md:p-6 bg-neutral-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
          <div className="flex-shrink-0">
            <img
              src={myImage}
              alt="Shreya Srivastava"
              className="w-64 h-[420px] md:w-80 md:h-[500px] rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="flex flex-col items-start justify-center text-left">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              Hi, I’m Shreya Srivastava
            </h1>
            <p className="text-sm md:text-base text-neutral-300 max-w-xl mb-6">
              I'm a passionate web developer who loves turning ideas into
              scalable and high-performing web applications. Most of what I’ve
              learned has come from diving into personal projects, exploring new
              frameworks, and piecing things together until they click. I’m
              always looking for opportunities to learn more, think differently,
              and build tools that reflect thoughtful design and purposeful
              engineering.
            </p>
            <h2 className="text-md md:text-lg lg:text-xl font-semibold text-white">
              Download my resume{" "}
              <Cover>
                <a
                  href={shreya}
                  download
                  className="text-gray-500 hover:text-gray-300"
                >
                  here
                </a>
              </Cover>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
