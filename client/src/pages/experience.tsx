import { useQuery } from "@tanstack/react-query";
import ExperienceCard from "@/components/sections/experience-card";
import type { Experience } from "@shared/schema";

const SAMPLE_EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Tech Corp",
    role: "Senior Software Engineer",
    description: "Led development of cloud-native applications using modern technologies",
    imageUrl: "https://images.unsplash.com/photo-1496200186974-4293800e2c20",
    githubUrl: "https://github.com/example/work1"
  },
  {
    id: 2,
    company: "Startup Inc",
    role: "Full Stack Developer",
    description: "Built and maintained multiple customer-facing applications",
    imageUrl: "https://images.unsplash.com/photo-1529612700005-e35377bf1415",
    githubUrl: "https://github.com/example/work2"
  },
  {
    id: 3,
    company: "Innovation Labs",
    role: "Software Developer Intern",
    description: "Developed innovative solutions for complex business problems",
    imageUrl: "https://images.unsplash.com/photo-1554049697-02e809699995",
    githubUrl: null
  }
];

export default function Experience() {
  const { data: experiences, isLoading } = useQuery({
    queryKey: ["/api/experiences"],
    initialData: SAMPLE_EXPERIENCES
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
