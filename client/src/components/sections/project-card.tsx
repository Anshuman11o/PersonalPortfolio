import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setViewingImage(imageSrc);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card
          className="h-[400px] overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] border-2 border-accent-gold/40"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{project.title}</CardTitle>
              <Button variant="ghost" size="sm" asChild className="text-accent-gold hover:text-accent-gold/80">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2">{project.description}</p>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-6 border-2 border-accent-gold/20">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-3xl font-bold flex items-center justify-between">
              <span>{project.title}</span>
              <div className="flex items-center gap-4">
                {project.title === "Movie Recommender System" && (
                  <a
                    href="https://movie-recommender-system-11o-7fec3d4e884a.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xl font-semibold px-3 py-1 rounded-md bg-accent-gold/10 text-accent-gold hover:bg-accent-gold/20 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
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
            </DialogTitle>
            <DialogDescription className="text-lg">
              A comprehensive overview of this project
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            {/* Project Overview Section */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Project Overview</h3>
              <div className="prose prose-lg max-w-none">
                {project.title === "Movie Recommender System" ? (
                  <>
                    <p>
                      Developed a content-based movie recommender system using cosine similarity and the TMDB API in Python. The project involved processing movie datasets using Jupyter Notebook, where fields were formatted, unwanted attributes were discarded, and relevant features such as actors, directors, genres, and release dates were combined into a unified tags field. A cosine similarity index generator was implemented to recommend movies based on these tags.
                    </p>
                    <p>
                      Additional filtering functions were created to refine recommendations based on vote count and popularity, followed by rigorous testing. The frontend was built using Streamlit, which integrated functionalities from Jupyter files, and movie posters were fetched dynamically using the TMDB API. Version control was managed with Git, and the final application was deployed on Heroku for web accessibility.
                    </p>
                  </>
                ) : project.title === "Stock Data Visualizer" ? (
                  <>
                    <p>
                      Developed a real-time stock data visualization tool for NASDAQ 100, leveraging JavaScript and the Alpha Vantage API to fetch live stock market data. The retrieved data was processed and dynamically visualized using Chart.js, creating interactive stock price charts.
                    </p>
                    <p>
                      In addition to charts, data tables were implemented to display key stock data points, along with a metrics table that computed and highlighted important financial insights. The frontend was designed using HTML and CSS, ensuring a clean and responsive user experience.
                    </p>
                  </>
                ) : project.title === "WhatsApp Summarizer AI Agent" ? (
                  <>
                    <p>
                      Developed an AI-powered WhatsApp Summarizer Agent that generates concise, analytical summaries for work-related report files, including financial data. Built for a real-world user (my dad), the system processes various media formats—including PDFs, images, audio, videos, PPTs, and Excel files—helping users make informed decisions quickly. The project was executed using Django, OpenAI APIs, and Twilio for WhatsApp automation.
                    </p>
                  </>
                ) : project.title === "Cooking Inventory Management System" ? (
                  <>
                    <p>
                      Developed an inventory management system for freelance chefs using Python's Tkinter and SQLite3. The system streamlines inventory tracking, order management, and financial reporting while integrating user authentication for secure access. By automating calculations and optimizing workflows, the solution enhances operational efficiency, enabling timely deliveries and increased order capacity.
                    </p>
                  </>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
            </section>

            {/* Key Features Section */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.title === "Movie Recommender System" && (
                  <>
                    <li>Content-based filtering with cosine similarity</li>
                    <li>Top 5 similar movie suggestions</li>
                    <li>Dynamic movie poster fetching</li>
                    <li>Popular and highly-rated movie recommendations</li>
                    <li>Advanced filtering based on vote count and popularity</li>
                  </>
                )}
                {project.title === "Stock Data Visualizer" && (
                  <>
                    <li>Real-time NASDAQ 100 stock price tracking</li>
                    <li>Dynamic graph visualization with Chart.js</li>
                    <li>Interactive data tables for key metrics</li>
                    <li>Custom financial indicators and analysis</li>
                    <li>Responsive and user-friendly interface</li>
                  </>
                )}
                {project.title === "WhatsApp Summarizer AI Agent" && (
                  <>
                    <li>Automated WhatsApp Summaries: Sends AI-generated summaries via WhatsApp using Twilio</li>
                    <li>Multi-Format Support: Extracts insights from PDFs, images, videos, audio, PPTs, Excel, and Word documents</li>
                    <li>Context-Aware Analysis: Uses prompt engineering to generate summaries tailored to financial and business reports</li>
                    <li>Real-Time Processing: Handles text and multimedia files efficiently with optimized pipelines</li>
                    <li>Efficient Data Handling: Uses in-memory storage (binary streams) to prevent excessive local storage use</li>
                    <li>Robust Debugging: Implements a logging system to track and resolve issues efficiently</li>
                  </>
                )}
                {project.title === "Cooking Inventory Management System" && (
                  <>
                    <li>User Authentication: Secure login system to manage user access</li>
                    <li>Real-Time Inventory Tracking: Enables chefs to monitor stock levels and update them dynamically</li>
                    <li>Order Management: Tracks incoming and outgoing orders efficiently</li>
                    <li>Financial Reporting: Automates cost and revenue calculations for streamlined bookkeeping</li>
                    <li>Personalized User Experience: Custom-built features based on user feedback for improved usability</li>
                    <li>Error Handling & Validation: Ensures data integrity and prevents invalid inputs</li>
                    <li>Comprehensive Documentation: Delivered with detailed instructions for ease of use and maintenance</li>
                  </>
                )}
              </ul>
            </section>

            {/* Project Gallery Section */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Project Gallery</h3>
              {project.title === "Movie Recommender System" && (
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/movie-recommender-1.png", e)}
                  >
                    <img
                      src="/movie-recommender-1.png"
                      alt="Movie Recommender Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/movie-recommender-2.png", e)}
                  >
                    <img
                      src="/movie-recommender-2.png"
                      alt="Movie Recommendations"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity col-span-2"
                    onClick={(e) => handleImageClick("/movie-recommender-3.png", e)}
                  >
                    <img
                      src="/movie-recommender-3.png"
                      alt="Movie Recommendations Additional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              {project.title === "WhatsApp Summarizer AI Agent" && (
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/whatsapp-2.jpg", e)}
                  >
                    <img
                      src="/whatsapp-2.jpg"
                      alt="Porter's Five Forces Analysis - WhatsApp Summary"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/whatsapp-1.jpg", e)}
                  >
                    <img
                      src="/whatsapp-1.jpg"
                      alt="Economic Monitor Report - WhatsApp Summary"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}
              {project.title === "Stock Data Visualizer" && (
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/stock-data-1.jpg", e)}
                  >
                    <img
                      src="/stock-data-1.jpg"
                      alt="Stock Data Graph View"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/stock-data-2.jpg", e)}
                  >
                    <img
                      src="/stock-data-2.jpg"
                      alt="Stock Data Table View"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}
              {project.title === "Cooking Inventory Management System" && (
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-1.png", e)}
                  >
                    <img
                      src="/cooking-inventory-1.png"
                      alt="Login Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-2.png", e)}
                  >
                    <img
                      src="/cooking-inventory-2.png"
                      alt="Inventory Management"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-3.png", e)}
                  >
                    <img
                      src="/cooking-inventory-3.png"
                      alt="Order Management"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-4.png", e)}
                  >
                    <img
                      src="/cooking-inventory-4.png"
                      alt="Menu Management"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-5.png", e)}
                  >
                    <img
                      src="/cooking-inventory-5.png"
                      alt="Financial Reports"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-6.png", e)}
                  >
                    <img
                      src="/cooking-inventory-6.png"
                      alt="Error Handling"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </section>

            {/* Technical Details Section */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Technical Details</h3>
              <div className="prose prose-lg max-w-none">
                {project.title === "Movie Recommender System" ? (
                  <p>
                    Built with Python Jupyter for data processing, Streamlit for frontend development, and TMDB API integration for retrieving data sets and movie posters. Implemented vectorization and cosine similarity algorithms for movie matching. Used heroku and git for deployment.
                  </p>
                ) : project.title === "WhatsApp Summarizer AI Agent" ? (
                  <p>
                    Backend: Django framework for handling requests and responses. AI Integration: OpenAI APIs for text summarization and NLP tasks. Media Processing: Utilized Whisper (audio), MoviePy (video), and PyTesseract (image text extraction). Webhook Integration: Twilio API for WhatsApp communication, connected via ngrok. Storage Optimization: Temporary in-memory storage using binary streams to handle large files. Development Process: Iterative improvement based on feedback, debugging via a structured logging system.
                  </p>
                ) : project.title === "Stock Data Visualizer" ? (
                  <p>
                    Developed using JavaScript and Chart.js for visualization, with Alpha Vantage API integration for real-time data. Implemented WebSocket connections for live updates and custom algorithms for trend analysis.
                  </p>
                ) : project.title === "Cooking Inventory Management System" ? (
                  <p>
                    Tech Stack: Python (Tkinter for GUI), SQLite3 for database management. Implemented CRUD operations, data optimization using derived attributes, joins, and third normal form (3NF) normalization for efficiency. Integrated the frontend with the database for seamless interaction, utilized global variables to maintain consistent data flow, and improved the system based on feedback from real users.
                  </p>
                ) : null}
              </div>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!viewingImage} onOpenChange={() => setViewingImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-2 border-accent-gold/20">
          <DialogHeader>
            <DialogTitle className="sr-only">Project Image Viewer</DialogTitle>
            <DialogDescription className="sr-only">
              Enlarged view of project screenshot
            </DialogDescription>
          </DialogHeader>
          <div className="relative w-full h-full">
            {viewingImage && (
              <img
                src={viewingImage}
                alt="Project Screenshot"
                className="w-full h-full object-contain"
              />
            )}
            <button
              onClick={() => setViewingImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background text-foreground"
            >
              ✕
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}