'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SkillIconProps = {
  icon: React.ReactNode;
  label: string;
  color?: string;
};

const SkillIcon = ({ icon, label, color = 'text-blue-500' }: SkillIconProps) => {
  return (
    <div className={`relative group flex justify-center items-center ${color}`}>
      <motion.div
        whileHover={{ scale: 1.3, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="cursor-pointer"
      >
        {icon}
      </motion.div>
      <span className="absolute bottom-full mb-2 px-2 py-1 text-sm bg-zinc-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
        {label}
      </span>
    </div>
  );
};

export default SkillIcon;
