
import { useQuery } from "@tanstack/react-query";
import ExperienceCard from "@/components/sections/experience-card";
import type { Experience } from "@shared/schema";

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Embee Software",
    role: "Software Development Intern",
    description: "Developed an AI agent that processes news content, generating summaries and answering user questions, reducing the time spent reviewing company news by 10x for a client. Built a Python application using Pandas to extract and convert employee work hour data from PDF logs into standardized CSV files, enhancing payroll department efficiency by 20x.",
    imageUrl: "https://raw.githubusercontent.com/Anshuman11o/portfolio-website/main/client/public/embee-logo.png",
    githubUrl: null
  },
  {
    id: 2,
    company: "UMass Robotics Club",
    role: "Software Team Member",
    description: "Contributed to the Unity Telepresence project, focusing on developing telepresence capabilities using the Unity engine. Worked on implementing core functionalities in C# and collaborated with team members to enhance remote interaction through Unity-based applications.",
    imageUrl: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb",
    githubUrl: "https://github.com/UMass-Robotics-Club/Unity-Telepresence"
  },
  {
    id: 3,
    company: "UMass Boxing Club",
    role: "Web Developer",
    description: "Developed a website using React, TypeScript, and Node.js, increasing membership inquiries by 30%. Implemented backend form submissions with Node.js and Express.js for event promotions and enrollments, reducing manual processing time by 40% and enhancing system efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    githubUrl: "https://github.com/Anshuman11o/Umass-Boxing-club"
  },
  {
    id: 4,
    company: "Disability Services - University of Massachusetts Amherst",
    role: "Document Conversion Assistant",
    description: "Assisting students with visual disability by providing them with accessible LaTeX notes, ensuring educational content accessibility through advanced document formatting and conversion techniques.",
    imageUrl: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa",
    githubUrl: null
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
