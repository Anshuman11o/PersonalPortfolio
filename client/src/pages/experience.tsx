import { useQuery } from "@tanstack/react-query";
import ExperienceCard from "@/components/sections/experience-card";
import type { Experience } from "@shared/schema";

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Embee Software",
    role: "Software Development Intern",
    description: "Developed an AI agent that processes news content, generating summaries and answering user questions, reducing the time spent reviewing company news by 10x for a client. Built a Python application using Pandas to extract and convert employee work hour data from PDF logs into standardized CSV files.",
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
    githubUrl: null
  },
  {
    id: 2,
    company: "UMass Robotics Club",
    role: "Software Team Member",
    description: "Developing system design, modeling, and motion planning in Unity for Inverse Kinematics, enhancing humanoid robot movement. Contributing to the software sub-team for the Mass Robotics competition.",
    imageUrl: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb",
    githubUrl: "https://github.com/Anshuman11o/umass-robotics"
  },
  {
    id: 3,
    company: "UMass Boxing Club",
    role: "Web Developer",
    description: "Attended weekly sessions and designed a new scalable club website using HTML, CSS and JavaScript. Applied modern web development practices to create an engaging and responsive platform.",
    imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
    githubUrl: "https://github.com/Anshuman11o/boxing-club-website"
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