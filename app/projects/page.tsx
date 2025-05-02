"use client";
import { useState } from 'react';
import {
  FaGithub,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiSocketdotio,
  SiPrisma,
  SiExpress,
  SiJest,
  SiPassport,
  SiWebpack,
  SiMui,
  SiMongodb,
  SiBabel,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

type TechIcon = {
  icon: JSX.Element;
  name: string;
};

function TechStackIcons({ icons }: { icons: TechIcon[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4 text-2xl text-orange-500">
      {icons.map(({ icon, name }, index) => (
        <div
          key={index}
          className="hover:text-blue-400 transition-colors duration-200"
          title={name}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projectDetails: Record<string, JSX.Element> = {
    "Event Horizon": (
      <div className="justify-center text-center align-middle">
        <p className="justify-center text-center align-middle">01/2025</p>
        <a
          href="https://github.com/jhernandez504/event-horizon"
          className="flex justify-center items-center my-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-blue-600 dark:hover:text-blue-400 scale-200 transition-transform duration-200 hover:scale-120" />
        </a>
        <TechStackIcons icons={[
          { icon: <FaReact />, name: "React" },
          { icon: <SiTailwindcss />, name: "Tailwind CSS" },
          { icon: <SiSocketdotio />, name: "Socket.io" },
          { icon: <GrMysql />, name: "MySQL" },
          { icon: <SiPrisma />, name: "Prisma ORM" },
          { icon: <SiExpress />, name: "Express.js" },
          { icon: <FaNodeJs />, name: "Node.js" },
          { icon: <SiJest />, name: "Jest" },
          { icon: <SiPassport />, name: "Passport.js" },
          { icon: <SiWebpack />, name: "Webpack" },
          { icon: <SiBabel />, name: "Babel" },
        ]} />
        <p className="text-yellow-500 mt-4">An online spaceship battle themed card strategy game.</p>
        <p>
          Step into the vastness of space and command your fleet in this exhilarating online spaceship battle-themed card strategy game.
        </p>
        <p>
          Navigate the stars, outsmart your opponents, and engage in intense,
          high-stakes battles as you build your deck, deploy advanced technology,
          and conquer the universe!
        </p>
        <p>
          Every move is critical, and only the most strategic commanders will
          survive the endless void. Ready to launch? The cosmos awaits!
        </p>
        <img
          src="/EventHorizonTour.gif"
          alt="Event Horizon Game Preview"
          className="w-full h-auto mt-2 rounded-lg shadow-md"
        />
        <p>Gameplay</p>
        <img src="/EHGameplay1.gif" alt="Event Horizon Gameplay 1" />
        <img src="/EHGameplay2.gif" alt="Event Horizon Gameplay 2" />
      </div>
    ),

    "HTC Fitness": (
      <div className="justify-center text-center align-middle">
        <p className="justify-center text-center align-middle">12/2024</p>
        <a
          href="https://github.com/jhernandez504/HTC-Fitness"
          className="flex justify-center items-center my-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-blue-600 dark:hover:text-blue-400 scale-200 transition-transform duration-200 hover:scale-120" />
        </a>
        <TechStackIcons icons={[
          { icon: <FaReact />, name: "React" },
          { icon: <SiMui />, name: "Material UI" },
          { icon: <SiMongodb />, name: "MongoDB" },
          { icon: <SiExpress />, name: "Express.js" },
          { icon: <FaNodeJs />, name: "Node.js" },
          { icon: <SiWebpack />, name: "Webpack" },
          { icon: <SiBabel />, name: "Babel" },
        ]} />
        <p className="mt-4">A fitness tracking app with integration for gym routines.</p>
      </div>
    ),

    "Vitality": (
      <div className="justify-center text-center align-middle">
        <p className="justify-center text-center align-middle">11/2024</p>
        <a
          href="https://github.com/jhernandez504/fitness-tracker"
          className="flex justify-center items-center my-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-blue-600 dark:hover:text-blue-400 scale-200 transition-transform duration-200 hover:scale-120" />
        </a>
        <p>Tech</p>
        <TechStackIcons icons={[
          { icon: <FaReact />, name: "React" },
          { icon: <SiMui />, name: "Material UI" },
          { icon: <SiMongodb />, name: "MongoDB" },
          { icon: <SiExpress />, name: "Express.js" },
          { icon: <FaNodeJs />, name: "Node.js" },
          { icon: <SiWebpack />, name: "Webpack" },
          { icon: <SiBabel />, name: "Babel" },
        ]} />
        <p className="mt-4">A health app focused on fitness tracking and wellness.</p>
      </div>
    ),
  };

  return (
    <div className="mb-4 pb-4">
      <div className="flex justify-center items-center overflow-x-auto whitespace-nowrap rounded-lg p-4 w-full max-w-4xl mx-auto mt-8 mb-8">
        {["Event Horizon", "HTC Fitness", "Vitality"].map((project) => (
          <button
            key={project}
            className={`inline-flex items-center h-12 px-4 py-2 text-sm text-gray-700 border-b-0 shadow-white shadow-sm border-gray-300 opacity-70 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none transition-transform duration-200 hover:scale-110 ${
              selectedProject === project ? "bg-gray-300 dark:bg-gray-700" : "bg-white dark:bg-gray-800"
            }`}
            onClick={() => setSelectedProject(project)}
          >
            {project}
          </button>
        ))}
      </div>

      <div className="p-4 mt-4 bg-inherit rounded-lg shadow-md">
        {selectedProject ? (
          <div>
            <h2 className="text-xl text-center font-semibold text-gray-400 dark:text-white">{selectedProject}</h2>
            <div className="text-gray-400 text-sm mt-4">
              {projectDetails[selectedProject]}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">Select a project to view details.</p>
        )}
      </div>
    </div>
  );
}

