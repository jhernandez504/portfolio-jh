"use client";
import { useState } from 'react';
import React from 'react';
export default function Projects() {
  // State to track selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // Project details (you can replace this with actual project content)
  const projectDetails = {
    "Event Horizon": (
      <>
        <p>01/2025</p>
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
        />
         <img
         src="/EHGameplay2.gif"
         />
      </>
    ),
    "HTC Fitness": (
      <>
      <p>12/2024</p>
      <p>A fitness tracking app with integration for gym routines.</p>
      </>
    ),
    "Vitality": (
      <>
      <p>11/2024</p>
      <p>A health app focused on fitness tracking and wellness.</p>
      </>
    ),
  };

  return (
    <div className="mb-4 pb-4">
      <div className="flex justify-center items-center overflow-x-auto whitespace-nowrap rounded-lg p-4 w-full max-w-4xl mx-auto mt-8 mb-8">
        <button
          className={`inline-flex items-center h-12 px-4 py-2 text-sm text-gray-700 border-b-0 shadow-white shadow-sm border-gray-300 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none transition-transform duration-200 hover:scale-110 ${selectedProject === "Event Horizon" ? "bg-gray-300 dark:bg-gray-700 " : "bg-white dark:bg-gray-800"}`}
          onClick={() => setSelectedProject("Event Horizon")}
        >
          Event Horizon
        </button>
        <button
          className={`inline-flex items-center h-12 px-4 py-2 text-sm rounded-t-md text-gray-700 border-b shadow-white shadow-sm border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300 transition-transform duration-200 hover:scale-110 ${selectedProject === "HTC Fitness" ? "bg-gray-300 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}`}
          onClick={() => setSelectedProject("HTC Fitness")}
        >
          HTC Fitness
        </button>
        <button
          className={`inline-flex items-center h-12 px-4 py-2 text-sm rounded-t-md text-gray-700 border-b shadow-white shadow-sm border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300 transition-transform duration-200 hover:scale-110 ${selectedProject === "Vitality" ? "bg-gray-300 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}`}
          onClick={() => setSelectedProject("Vitality")}
        >
          Vitality
        </button>

      </div>

      <div className="p-4 mt-4 bg-inherit rounded-lg shadow-md">
        {selectedProject ? (
          <div>
            <h2 className="text-xl text-center font-semibold text-gray-800 dark:text-white">{selectedProject}</h2>
            <p className="text-gray-600 text-center dark:text-gray-300 mt-2">{projectDetails[selectedProject]}</p>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">Select a project to see the details.</p>
        )}
      </div>
    </div>
  );
}


