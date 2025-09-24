import Card from "../Components/Card";
import EducationCard from "../Components/EducationCard";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import ProjectsCompleted from "../Components/ProjectsCompleted";
import TechStackCard from "../Components/TechStack";
import Brewing from "../Components/Brewing";
import MainCard from "../Components/MainCard";

export default function Home() {
  const tallHeight = "h-60";   // Top-Right & Bottom-Left
  const shortHeight = "h-44";  // Top-Left & Bottom-Right
  const mobileHeight = "h-52"; // Mobile stacked card height

  return (
    <div className="bg-[#FDF3D6] min-h-screen">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6">
      <div
  className="
    grid gap-6 w-full max-w-6xl
    grid-cols-3 grid-rows-[auto_auto]
    mt-20
    max-md:flex max-md:flex-col max-md:items-stretch max-md:gap-4
  "
>
  {/* Top Left */}
  <motion.div
    className="row-start-1 col-start-1 w-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <Card delay={1}>
      <TechStackCard />
    </Card>
  </motion.div>

 {/* Center */}
<motion.div
  className="row-span-2 col-start-2 w-full max-md:order-first"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <Card
    delay={0}
    variant="center"
    className="flex flex-col items-center justify-center h-full"
  >
    <MainCard />
  </Card>
</motion.div>


  {/* Top Right */}
  <motion.div
    className="row-start-1 col-start-3 w-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <Card delay={1.2}>
      <EducationCard />
    </Card>
  </motion.div>

  {/* Bottom Left */}
  <motion.div
    className="row-start-2 col-start-1 w-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    viewport={{ once: true }}
  >
    <Card delay={1.4}>
      <Brewing />
    </Card>
  </motion.div>

  {/* Bottom Right */}
  <motion.div
    className="row-start-2 col-start-3 w-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    viewport={{ once: true }}
  >
    <Card delay={1.6}>
      <ProjectsCompleted />
    </Card>
  </motion.div>
</div>

      </div>
    </div>
  );
}
