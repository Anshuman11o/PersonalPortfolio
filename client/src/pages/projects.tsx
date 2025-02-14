import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/sections/project-card";
import type { Project } from "@shared/schema";

const SAMPLE_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project Management Dashboard",
    description: "A modern project management tool built with React and TypeScript",
    githubUrl: "https://github.com/example/project1",
    imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    githubUrl: "https://github.com/example/project2",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    id: 3,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media performance tracking",
    githubUrl: "https://github.com/example/project3",
    imageUrl: "https://images.unsplash.com/photo-1510759395231-72b17d622279"
  }
];

export default function Projects() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["/api/projects"],
    initialData: SAMPLE_PROJECTS
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
