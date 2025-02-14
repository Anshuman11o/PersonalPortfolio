import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card 
          className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] border-2 border-accent-gold/40"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{project.title}</span>
              <span className="text-accent-gold">→</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-2">{project.description}</p>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-6 border-2 border-accent-gold/20">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground">
              A comprehensive overview of this project
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            {/* Main Project Image */}
            <div className="relative h-[400px] overflow-hidden rounded-lg border border-accent-gold/20">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Overview */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Project Overview</h3>
              <div className="prose prose-lg prose-blue max-w-none">
                <p>{project.description}</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </section>

            {/* Key Features */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.title === "WhatsApp Summarizer AI Agent" && (
                  <>
                    <li>Multi-format content processing (PDF, images, audio, videos, Excel, Word, PPTs)</li>
                    <li>Real-time summarization through WhatsApp interface</li>
                    <li>Context-aware Q&A capabilities</li>
                  </>
                )}
                {project.title === "Movie Recommender System" && (
                  <>
                    <li>Content-based filtering with cosine similarity</li>
                    <li>Top 5 similar movie suggestions</li>
                    <li>Popular and highly-rated movie recommendations</li>
                  </>
                )}
                {project.title === "Stock Data Visualizer" && (
                  <>
                    <li>Real-time NASDAQ 100 stock price tracking</li>
                    <li>Dynamic graph visualization</li>
                    <li>Custom trading metrics and indicators</li>
                  </>
                )}
                {project.title === "Scrap Calculator Application" && (
                  <>
                    <li>Dimension input handling for metal sheets</li>
                    <li>Production optimization algorithms</li>
                    <li>Comprehensive error handling system</li>
                  </>
                )}
                {project.title === "Cooking Inventory Management System" && (
                  <>
                    <li>User authentication and role management</li>
                    <li>Real-time inventory tracking</li>
                    <li>Automated calculations and reporting</li>
                  </>
                )}
              </ul>
            </section>

            {/* Project Gallery */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Placeholder for additional project images */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-accent-gold/10">
                  <p className="text-muted-foreground">Additional Image 1</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-accent-gold/10">
                  <p className="text-muted-foreground">Additional Image 2</p>
                </div>
              </div>
            </section>

            {/* Project Video */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Demo Video</h3>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-accent-gold/10">
                <p className="text-muted-foreground">Project Demo Video Placeholder</p>
              </div>
            </section>

            {/* Technical Details */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Technical Details</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  {project.title === "WhatsApp Summarizer AI Agent" && (
                    "Implemented using Python and Django for backend processing, PyTorch for data extraction, OpenAI API for content analysis, and Twilio API for WhatsApp integration. Utilized advanced NLP techniques for accurate summarization."
                  )}
                  {project.title === "Movie Recommender System" && (
                    "Built with Python Jupyter for data processing, Streamlit for frontend development, and TMDB API integration. Implemented vectorization and cosine similarity algorithms for movie matching."
                  )}
                  {project.title === "Stock Data Visualizer" && (
                    "Developed using JavaScript and Chart.js for visualization, with Alpha Vantage API integration for real-time data. Implemented WebSocket connections for live updates and custom algorithms for trend analysis."
                  )}
                  {project.title === "Scrap Calculator Application" && (
                    "Built using Python's Tkinter for GUI, incorporating custom algorithms for metal sheet optimization. Implemented SQLite database for data persistence and report generation capabilities."
                  )}
                  {project.title === "Cooking Inventory Management System" && (
                    "Developed with Python Tkinter and SQLite3, featuring a layered architecture for separation of concerns. Implemented secure user authentication and real-time database operations."
                  )}
                </p>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <Button variant="outline" asChild className="border-accent-gold text-accent-gold hover:bg-accent-gold/10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}