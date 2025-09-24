import React, { useState } from "react";
import projectDesc from "../assets/projectDeets";
import sakhaAI from "../assets/sakhaai.svg";
import neerja from "../assets/neerja.svg";
import ragi from "../assets/RAGi.svg";
import raga from "../assets/raga.svg";
import soiree from "../assets/soiree.svg";
import studylabs from "../assets/studyLabs.svg";
import ScrollingRow from "../Components/ScrollingRow.jsx";
import ProjectModal from "../Components/ProjectModal";

// Project Data
const row1Projects = [
  {
    id: 1,
    title: "Sakha AI",
    img: sakhaAI,
    domain: "NLP + Full-Stack Development",
    duration: "Jan '25 - Apr '25",
    description: projectDesc[1],
  },
  {
    id: 2,
    title: "Neerja (A Hackathon Winning Project)",
    img: neerja,
    domain: "AI + Web & Mobile Development",
    duration: "Aug '24",
    description: projectDesc[2],
  },
  {
    id: 3,
    title: "RAG Based Intelligent Study Assistant",
    img: ragi,
    domain: "Q&A System + Streamlit Interface",
    duration: "Jul '24 - Dec '24",
    description: projectDesc[3],
  },
];

const row2Projects = [
  {
    id: 4,
    title: "CropConnect",
    img: raga,
    domain: "Q&A System + HTML/ CSS Interface",
    duration: "Mar '24 - Jun '24",
    description: projectDesc[4],
  },
  {
    id: 5,
    title: "Soiree - A Lifestyle Blog Website",
    img: soiree,
    domain: "UI/UX Design + HTML/ CSS Interface",
    duration: "Jun '24",
    description: projectDesc[5],
  },
  {
    id: 6,
    title: "StudyLabs - A DS Virtual Lab",
    img: studylabs,
    domain: "Full-Stack Development",
    duration: "Jul '23 - Apr '24",
    description: projectDesc[6],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className=" py-10 bg-[#CFE1F4] text-black relative px-4 sm:px-8">
      {/* Heading */}
      <h2
        id="projects"
        className="absolute top-5 left-4 text-3xl font-bold"
      >
        Projects
      </h2>

      {/* Row 1 */}
      <div className="pt-8 mb-10">
        <ScrollingRow
          direction="left"
          projects={row1Projects}
          onProjectClick={setSelectedProject}
        />
      </div>

      {/* Row 2 */}
      <div className="pt-8">
        <ScrollingRow
          direction="right"
          projects={row2Projects}
          onProjectClick={setSelectedProject}
        />
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default ProjectsSection;
