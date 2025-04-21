"use client";
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  // State to track selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // Project details (you can replace this with actual project content)
  const projectDetails = {
    "Event Horizon": (
      <div>
        <p>01/2025</p> 
          <a href="https://github.com/jhernandez504/event-horizon" className="flex justify-center items-center my-2" target="_blank" rel="noopener noreferrer">
            <FaGithub className=" hover:text-blue-600 dark:hover:text-blue-400 scale-200 transition-transform duration-200 hover:scale-120" />
          </a>
        <p className="text-yellow-500">An online spaceship battle themed card strategy game.</p>
        <p>
          Step into the vastness of space and command your fleet in this
          exhilarating online spaceship battle-themed card strategy game.
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
          src="/EventHorizonTour.gif" // Replace with actual image path
          alt="Event Horizon Game Preview"
          className="w-full h-auto mt-2 rounded-lg shadow-md"
        />
        <p>Gameplay</p>
        <img
          src="/EHGameplay1.gif"
          alt="Event Horizon Gameplay 1"
        />
        <img
          src="/EHGameplay2.gif"
          alt="Event Horizon Gameplay 2"
        />
      </div>
    ),
    "HTC Fitness": (
      <div>
        <p>12/2024</p>
        <a href="https://github.com/jhernandez504/HTC-Fitness" className="flex justify-center items-center my-2" target="_blank" rel="noopener noreferrer">
            <FaGithub className=" hover:text-blue-600 dark:hover:text-blue-400 scale-200 transition-transform duration-200 hover:scale-120" />
          </a>
        <p>A fitness tracking app with integration for gym routines.</p>
      </div>
    ),
    "Vitality": (
      <div>
        <p>11/2024</p>
        <a href="https://github.com/jhernandez504/fitness-tracker" className="flex justify-center items-center my-2" target="_blank" rel="noopener noreferrer">
            <FaGithub className=" hover:text-blue-600 dark:hover:text-blue-400 scale-200 transition-transform duration-200 hover:scale-120" />
          </a>
        <p>A health app focused on fitness tracking and wellness.</p>
      </div>
    ),
  };

  return (
    <div className="mb-4 pb-4">
      <div className="flex justify-center items-center overflow-x-auto whitespace-nowrap rounded-lg p-4 w-full max-w-4xl mx-auto mt-8 mb-8">
        <button
          className={`inline-flex items-center h-12 px-4 py-2 text-sm text-gray-700 border-b-0 shadow-white shadow-sm border-gray-300 opacity-70 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none transition-transform duration-200 hover:scale-110 ${selectedProject === "Event Horizon" ? "bg-gray-300 dark:bg-gray-700 " : "bg-white dark:bg-gray-800"}`}
          onClick={() => setSelectedProject("Event Horizon")}
        >
          Event Horizon
        </button>
        <button
          className={`inline-flex items-center h-12 px-4 py-2 text-sm rounded-t-md text-gray-700 border-b shadow-white shadow-sm border-gray-300 opacity-70 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300 transition-transform duration-200 hover:scale-110 ${selectedProject === "HTC Fitness" ? "bg-gray-300 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}`}
          onClick={() => setSelectedProject("HTC Fitness")}
        >
          HTC Fitness
        </button>
        <button
          className={`inline-flex items-center h-12 px-4 py-2 text-sm rounded-t-md text-gray-700 border-b shadow-white shadow-sm border-gray-300 opacity-70 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300 transition-transform duration-200 hover:scale-110 ${selectedProject === "Vitality" ? "bg-gray-300 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}`}
          onClick={() => setSelectedProject("Vitality")}
        >
          Vitality
        </button>
      </div>

      <div className="p-4 mt-4 bg-inherit rounded-lg shadow-md">
        {selectedProject ? (
          <div>
            <h2 className="text-xl text-center font-semibold text-gray-400 dark:text-white">{selectedProject}</h2>
            <div className="text-gray-400 text-center dark:text-gray-300 mt-2">
              {projectDetails[selectedProject]}
            </div>
          </div>
        ) : (
          <p className="text-gray-400 dark:text-gray-300">Select a project to see the details.</p>
        )}
      </div>
    </div>
  );
}
