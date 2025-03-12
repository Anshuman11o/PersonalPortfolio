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
            <DialogTitle className="text-3xl font-bold flex items-center gap-6">
              {project.title}
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
            </DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground">
              A comprehensive overview of this project
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Project Overview</h3>
              <div className="prose prose-lg prose-blue max-w-none">
                {project.title === "Movie Recommender System" ? (
                  <>
                    <p>
                      Developed a content-based movie recommender system using cosine similarity and the TMDB API in Python. The project involved processing movie datasets using Jupyter Notebook, where fields were formatted, unwanted attributes were discarded, and relevant features such as actors, directors, genres, and release dates were combined into a unified tags field. A cosine similarity index generator was implemented to recommend movies based on these tags.
                    </p>
                    <p className="text-muted-foreground">
                      Additional filtering functions were created to refine recommendations based on vote count and popularity, followed by rigorous testing. The frontend was built using Streamlit, which integrated functionalities from Jupyter files, and movie posters were fetched dynamically using the TMDB API. Version control was managed with Git, and the final application was deployed on Heroku for web accessibility.
                    </p>
                  </>
                ) : project.title === "Stock Data Visualizer" ? (
                  <>
                    <p>
                      Developed a real-time stock data visualization tool for NASDAQ 100, leveraging JavaScript and the Alpha Vantage API to fetch live stock market data. The retrieved data was processed and dynamically visualized using Chart.js, creating interactive stock price charts.
                    </p>
                    <p className="text-muted-foreground">
                      In addition to charts, data tables were implemented to display key stock data points, along with a metrics table that computed and highlighted important financial insights. The frontend was designed using HTML and CSS, ensuring a clean and responsive user experience.
                    </p>
                  </>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
            </section>

            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
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
                    <li>Multi-format content processing (PDF, images, audio, videos, Excel, Word, PPTs)</li>
                    <li>Real-time summarization through WhatsApp interface</li>
                    <li>Context-aware Q&A capabilities</li>
                  </>
                )}
              </ul>
            </section>

            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Project Gallery</h3>
              {project.title === "Movie Recommender System" ? (
                <div className="grid grid-cols-3 gap-4">
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
                      alt="Movie Recommendations View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div 
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/movie-recommender-3.png", e)}
                  >
                    <img 
                      src="/movie-recommender-3.png" 
                      alt="Movie Recommendations View - Popular Movies"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : project.title === "Stock Data Visualizer" ? (
                <div className="space-y-6">
                  <div 
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/stock-visualizer.png", e)}
                  >
                    <img 
                      src="/stock-visualizer.png" 
                      alt="Stock Data Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-accent-gold/10">
                    <p className="text-muted-foreground">Additional Image 1</p>
                  </div>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-accent-gold/10">
                    <p className="text-muted-foreground">Additional Image 2</p>
                  </div>
                </div>
              )}
            </section>

            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Technical Details</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  {project.title === "Movie Recommender System" && (
                    "Built with Python Jupyter for data processing, Streamlit for frontend development, and TMDB API integration for retrieving data sets and movie posters. Implemented vectorization and cosine similarity algorithms for movie matching. Used heroku and git for deployment."
                  )}
                  {project.title === "WhatsApp Summarizer AI Agent" && (
                    "Implemented using Python and Django for backend processing, PyTorch for data extraction, OpenAI API for content analysis, and Twilio API for WhatsApp integration. Utilized advanced NLP techniques for accurate summarization."
                  )}
                  {project.title === "Stock Data Visualizer" && (
                    "Developed using JavaScript and Chart.js for visualization, with Alpha Vantage API integration for real-time data. Implemented WebSocket connections for live updates and custom algorithms for trend analysis."
                  )}
                </p>
              </div>
            </section>

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

      <Dialog open={!!viewingImage} onOpenChange={() => setViewingImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-2 border-accent-gold/20">
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