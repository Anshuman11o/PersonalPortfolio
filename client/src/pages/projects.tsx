
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/sections/project-card";
import type { Project } from "@shared/schema";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "WhatsApp Summarizer AI Agent",
    description: "Built an AI agent to generate insightful summaries from diverse media inputs, including PDFs, images, audio, videos, Excel, Word, and PPTs, reducing user's time in content comprehension by 10x. Designed with Python, Django, PyTorch to extract data, OpenAI API to analyze content and prepare format-specific summaries and Twilio API for seamless delivery to users.",
    githubUrl: "https://github.com/Anshuman11o/whatsapp-summarizer-AI-agent",
    imageUrl: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5"
  },
  {
    id: 2,
    title: "Movie Recommender System",
    description: "Built a movie recommender web app using Python Jupyter and TMDB database. Implemented content-based filtering with cosine similarity to suggest top 5 similar movies. Features include popular and highly-rated movie recommendations. Deployed on Heroku with Streamlit frontend, offering an intuitive user interface for movie discovery.",
    githubUrl: "https://github.com/Anshuman11o/Movie-Recommender-System",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1"
  },
  {
    id: 3,
    title: "Stock Data Visualizer",
    description: "Created a web application for real-time visualization of NASDAQ 100 stock prices. Built with JavaScript and Chart.js, featuring dynamic graphs and data points for stock trend analysis. Integrated Alpha Vantage API for real-time stock data, with custom metrics and indicators for trader decision-making support.",
    githubUrl: "https://github.com/Anshuman11o/Stock-Data-Generator",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
  },
  {
    id: 4,
    title: "Scrap Calculator Application",
    description: "Developed a metal scrap calculator for Ferrum water purifier production using Python's Tkinter. The application optimizes metal sheet usage calculations, reducing accounting time by 90 minutes per week. Features include dimension input handling, production optimization algorithms, and a user-friendly GUI with comprehensive error handling.",
    githubUrl: "https://github.com/Anshuman11o/Scrap-Calculator-Application",
    imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82"
  },
  {
    id: 5,
    title: "Cooking Inventory Management System",
    description: "Developed an inventory management system for freelance chefs using Python's Tkinter and SQLite3. Features include user authentication, real-time inventory tracking, order management, and financial reporting. The system streamlines operations with automated calculations and comprehensive documentation.",
    githubUrl: "https://github.com/Anshuman11o/Cooking-Inventory-Management-System",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
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
