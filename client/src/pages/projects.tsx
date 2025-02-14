import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/sections/project-card";
import type { Project } from "@shared/schema";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "WhatsApp Summarizer AI Agent",
    description: "Built an AI agent to generate insightful summaries from diverse media inputs, including PDFs, images, audio, videos, Excel, Word, and PPTs, reducing user's time in content comprehension by 10x.",
    githubUrl: "https://github.com/Anshuman11o/whatsapp-summarizer",
    imageUrl: "https://images.unsplash.com/photo-1696446701796-da61225697cc"
  },
  {
    id: 2,
    title: "Movie Recommender System",
    description: "Launched a web application that recommends personalized movie lists based on users' past preferences using content-based filtering with the TMDB API and cosine similarity.",
    githubUrl: "https://github.com/Anshuman11o/movie-recommender",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1"
  },
  {
    id: 3,
    title: "Stock Data Visualizer",
    description: "Created a web application for real-time visualization of NASDAQ 100 stock prices, featuring dynamic graphs and data points to facilitate stock trend analysis for traders.",
    githubUrl: "https://github.com/Anshuman11o/stock-visualizer",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
  }
];

export default function Projects() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["/api/projects"],
    initialData: PROJECTS
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