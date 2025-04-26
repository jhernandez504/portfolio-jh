'use client';

import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPrisma,
  SiExpress,
  SiSharp, 
  SiDotnet,
  SiMysql,
  SiUnity,
  SiSocketdotio,
  SiGithub,
  SiPassport,
  SiGoogleauthenticator
} from 'react-icons/si';
import { FaAws } from "react-icons/fa";
import SkillIcon from './SkillIcon';

type SkillsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SkillsModal = ({ isOpen, onClose }: SkillsModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const proficientSkills = [
    { icon: <SiJavascript />, label: 'JavaScript' },
    { icon: <SiReact />, label: 'React' },
    { icon: <SiGithub />, label: 'Github' },
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
    { icon: <SiNodedotjs />, label: 'Node.js' },
    { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <SiMysql />, label: 'MySQL' },
    { icon: <SiPrisma />, label: 'PrismaORM' },
    { icon: <SiExpress />, label: 'Express' },
    { icon: <SiSocketdotio />, label: 'Socket.io' },
    { icon: <SiGoogleauthenticator />, label: 'GoogleOAuth' },
    { icon: <SiPassport />, label: 'Passport' },
    { icon: <FaAws />, label: 'AmazonWebServices' },


  ];

  const learningSkills = [
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <SiSharp />, label: 'C#' },
    { icon: <SiDotnet />, label: '.NET' },
    { icon: <SiUnity />, label: 'Unity Engine' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          className="relative w-full max-w-3xl p-8 bg-amber-50/55 opacity- rounded-2xl shadow-lg border border-white/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="absolute top-3 right-4 text-xl text-gray-500 hover:text-red-400"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="text-3xl font-semibold text-center text-zinc-800 dark:text-white mb-6">
            💻 My Tech Stack
          </h2>

          <div className="space-y-6">
            {/* Proficient */}
            <div>
              <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-3">🚀 Proficient In</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-4xl text-center">
                {proficientSkills.map(({ icon, label }) => (
                  <SkillIcon key={label} icon={icon} label={label} color="text-blue-500" />
                ))}
              </div>
            </div>

            {/* Learning */}
            <div>
              <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-3">🧠 Currently Learning</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-4xl text-center">
                {learningSkills.map(({ icon, label }) => (
                  <SkillIcon key={label} icon={icon} label={label} color="text-purple-500" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillsModal;

