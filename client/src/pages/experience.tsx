import { useQuery } from "@tanstack/react-query";
import ExperienceCard from "@/components/sections/experience-card";
import type { Experience } from "@shared/schema";

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Embee Software",
    role: "Software Development Intern",
    description: "Developed an AI agent that processes news content, generating summaries and answering user questions, reducing the time spent reviewing company news by 10x for a client. Built a Python application using Pandas to extract and convert employee work hour data from PDF logs into standardized CSV files, enhancing payroll department efficiency by 20x.",
    imageUrl: "/embee-logo.png",
    githubUrl: null
  },
  {
    id: 2,
    company: "UMass Robotics Club",
    role: "Software Team Member",
    description: "Contributing to the Unity Telepresence project, focusing on inverse kinematics and motion planning for humanoid robots. Working on system design and modeling to enhance robot movement capabilities for the Mass Robotics competition. Implementing advanced robotics algorithms and real-time control systems.",
    imageUrl: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb",
    githubUrl: "https://github.com/UMass-Robotics-Club/Unity-Telepresence"
  },
  {
    id: 3,
    company: "UMass Boxing Club",
    role: "Web Developer",
    description: "Designed and developed a modern, responsive website for the UMass Boxing Club using HTML, CSS, and JavaScript. Created an engaging platform that showcases club activities, training schedules, and member achievements. Implemented user-friendly navigation and mobile-responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    githubUrl: "https://github.com/Anshuman11o/Umass-Boxing-club"
  }
];

export default function Experience() {
  const { data: experiences, isLoading } = useQuery({
    queryKey: ["/api/experiences"],
    initialData: EXPERIENCES
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Experience & Clubs</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
}