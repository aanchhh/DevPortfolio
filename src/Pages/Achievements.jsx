import React, { useState } from "react";
import { X } from "lucide-react"; // Lucide icon
import hack_win from "../assets/hack_win.svg";
import proj_win from "../assets/proj_comp_win.jpg";
import research_pap from "../assets/research_pap.jpg";
import achievementsDesc from "../assets/achievementsDeets";

// Achievement data: description as array of points
const achievements = [
  {
    id: 1,
    title: "Hackathon Winner @ Need For Code 3.0 (TSEC)",
    img: hack_win,
    description: achievementsDesc[1],
  },
  {
    id: 2,
    title: "Research Paper Published in Grenze Journal",
    img: research_pap,
    description: achievementsDesc[2],
  },
  {
    id: 3,
    title: "Winners @ TechnoGenesis Project Competition (KJSIT)",
    img: proj_win,
    description: achievementsDesc[3],
  },
];

// Modal Component
const AchievementModal = ({ achievement, onClose }) => {
  if (!achievement) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white text-black rounded-xl w-3/4 max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-700 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">{achievement.title}</h2>

        {/* Description as list */}
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          {achievement.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Card Component
const AchievementCard = ({ achievement, onReadMore }) => {
  return (
    <div className="relative w-[350px] h-[438px] rounded-xl overflow-hidden cursor-pointer group shadow-lg">
      {/* Image */}
      <img
        src={achievement.img}
        alt={achievement.title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-3xl font-bold text-center leading-snug opacity-90">
          {achievement.title}
        </h3>
        <button
          onClick={() => onReadMore(achievement)}
          className="mt-4 px-4 py-2 bg-white text-black text-sm rounded-md"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

// Main Section
const AchievementsSection = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <div className="py-10 bg-[#FDCCB8] text-black px-6">
      <h2 id="achievements" className="text-3xl font-bold mb-6 top-5 left-4">
        Achievements
      </h2>

      {/* Cards Row */}
      <div className="flex flex-wrap justify-center gap-6">
        {achievements.map((ach) => (
          <AchievementCard
            key={ach.id}
            achievement={ach}
            onReadMore={setSelectedAchievement}
          />
        ))}
      </div>

      {/* Modal */}
      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </div>
  );
};

export default AchievementsSection;
