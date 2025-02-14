import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/sections/project-card";
import type { Project } from "@shared/schema";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "WhatsApp Summarizer AI Agent",
    description: "Built an AI agent that processes various media inputs (PDFs, images, audio, videos, Excel, Word, PPTs) to generate comprehensive summaries. The agent uses OpenAI's GPT models for natural language processing, reducing content comprehension time by 10x. Features include multi-format support, intelligent summarization, and seamless WhatsApp integration.",
    githubUrl: "https://github.com/Anshuman11o/whatsapp-summarizer-AI-agent",
    imageUrl: "https://images.unsplash.com/photo-1696446701796-da61225697cc"
  },
  {
    id: 2,
    title: "Movie Recommender System",
    description: "A sophisticated web application that provides personalized movie recommendations using content-based filtering. Leveraging the TMDB API and cosine similarity algorithms, the system analyzes user preferences to suggest relevant films. Built with Python, utilizing Pandas for data processing and Streamlit for the user interface.",
    githubUrl: "https://github.com/Anshuman11o/Movie-Recommender-System",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1"
  },
  {
    id: 3,
    title: "Stock Data Visualizer",
    description: "A real-time stock visualization platform for NASDAQ 100 stocks, featuring interactive charts and comprehensive market analysis tools. Built with JavaScript and Chart.js, the application provides traders with dynamic data visualization and trend analysis capabilities using the Alpha Vantage API.",
    githubUrl: "https://github.com/Anshuman11o/Stock-Data-Generator",
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