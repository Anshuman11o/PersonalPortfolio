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
                {project.title === "Cybersecurity Coding Agent Harness" ? (
                  <>
                    <p>
                      Built a harness for an AI agent to scan and patch <strong>30+ OWASP vulnerability classes</strong> in a production web app in under <strong>6 minutes</strong>, reaching <strong>88% detection recall</strong> against <strong>100 vulnerabilities</strong> in <strong>1,000+ files</strong>. The costliest breaches of recent years — Log4Shell, the MOVEit SQL injection, the XZ Utils backdoor — all began with a defect sitting in source code that had already passed review, and the classes that dominate real incident reports are precisely the ones no static rule can describe, because the bug is something <em>absent</em>: a check that was never written, a parameter nobody thought to distrust.
                    </p>
                    <p>
                      Conventional tooling splits that work and drops the middle. SAST only matches what someone already knew to write a rule for; DAST proves exploitability but points at a URL rather than a line. This harness takes the approach that targets the gap directly: decompose a repository into bounded units of work, reason over each one with a language model, and emit located, classified, evidence-backed findings. The engineering problem is that reasoning is expensive and non-deterministic, so the entire design is about making an agent's work <strong>bounded, auditable and reproducible</strong> rather than letting it roam a repository on an unbounded budget.
                    </p>
                    <p>
                      I then benchmarked <strong>10 AI models</strong> on an identical corpus and scorer, varying only the model, to select the best recall-per-dollar production default. GPT-5.6 Luna ranked first on both metrics at <strong>88.7% recall</strong> and a <strong>$4.37</strong> run cost, beating open-source and self-hosted models like GLM. Finally, an autonomous agent loop worked against a defined recall goal — modifying the harness, verifying each change with dedicated scoring tools and adopting only confirmed improvements — raising detection recall from <strong>38% to 88%</strong>.
                    </p>
                  </>
                ) : project.title === "Video Processing Mobile App" ? (
                  <>
                    <p>
                      Built a React Native mobile app backed by a <strong>distributed system of stateless Go workers</strong> that captions video clips into <strong>adaptive-bitrate HTTP Live Streaming</strong>, running on a self-hosted SQLite queue for safe retries. Pick a video on your phone and get back a captioned stream with a three-rung resolution ladder the player switches between on the fly.
                    </p>
                    <p>
                      Uploading video from a mobile device fails in two ways, and each makes the other harder to solve. Networks are unreliable and video files are large, so a single-request upload that fails at 90 percent restarts from zero. Processing on-device is impractical, because adaptive-bitrate streaming means encoding the same clip at three resolutions plus speech-to-text against a model of several hundred megabytes — minutes of sustained CPU on hardware the user is holding, on platforms that strictly limit what an app may do once it leaves the foreground.
                    </p>
                    <p>
                      The solution separates the work at the boundary where the guarantees differ. On the device, a <strong>Kotlin WorkManager uploader</strong> queues clips locally and drives multipart S3 uploads that <strong>survive app kills</strong>: the clip is divided into 5 MiB parts, each recorded to a local ledger as it lands, with the transfer owned by the operating system's scheduler rather than the app process. On the backend, every stage is restartable — messages carry pointers rather than payloads, the database holds the only authoritative state, and each stage checks whether its own output already exists before doing any work.
                    </p>
                  </>
                ) : project.title === "World Wide News" ? (
                  <>
                    <p>
                      Built an <strong>interactive D3.js globe</strong> in React, Vite and Figma surfacing <strong>100+ news domains per country</strong> with translingual coverage in <strong>65+ languages</strong>. Click any country and you get the top five stories its own local press is running, across <strong>195 countries</strong>, refreshed every <strong>15 minutes</strong> on GDELT's own update cadence.
                    </p>
                    <p>
                      Most international coverage reaches a reader after passing through an outlet in their own country, which decides what is worth relaying and how to frame it. The premise here is that the most accurate picture of a country's situation comes from what that country is publishing for itself &mdash; so the platform never editorialises. Every article links straight to its source, and the ranking that put it on screen is exposed rather than hidden.
                    </p>
                    <p>
                      The ranking is a <strong>relevance-scoring algorithm over three weighted signals</strong> &mdash; intensity, richness and locality &mdash; computed over a Python, FastAPI and PostgreSQL pipeline on GDELT's Global Knowledge Graph. The weights are not fixed: three sliders in the side panel let the reader retune them live, and the country's top five is rescored on the spot. Someone hunting for high-emotion coverage and someone hunting for the most locally-grounded reporting get different, defensible answers from the same data.
                    </p>
                  </>
                ) : project.title === "Movie Recommender System" ? (
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
                {project.title === "Cybersecurity Coding Agent Harness" && (
                  <>
                    <li>Scans 1,000+ files for 30+ OWASP vulnerability classes in under 6 minutes, at 88% detection recall against 100 vulnerabilities</li>
                    <li>Four-stage pipeline where each stage writes an artifact the next one reads, so any stage can be re-run, inspected, scored or replaced on its own</li>
                    <li>Bounded reasoning: only two of the four stages call a model, keeping the expensive, non-deterministic work confined to exactly two places</li>
                    <li>Evidence-backed findings — every finding carries a vulnerability class, a confidence score and a line-level trace from entry point to sink</li>
                    <li>Provable coverage: one lane per file, with hunt plus skip required to equal the full inventory, so nothing disappears silently</li>
                    <li>Per-lane budget ceilings projected before the run, so one pathological file cannot consume the budget for everything after it</li>
                    <li>Multi-model benchmark of 10 AI models on an identical corpus and scorer, selecting the best recall-per-dollar production default</li>
                    <li>Autonomous agent loop that modifies the harness, scores each change and adopts only confirmed improvements, lifting recall from 38% to 88%</li>
                    <li>Scored blind — neither the harness nor any agent that wrote its code has ever had access to the answer key</li>
                  </>
                )}
                {project.title === "Video Processing Mobile App" && (
                  <>
                    <li>Byte-exact upload resume across app kill, process death and network loss</li>
                    <li>Direct-to-S3 transfer using presigned URLs — video bytes never pass through the API, so one small API process serves uploads of any size</li>
                    <li>Four-stage processing pipeline (validate, extract, transcribe, package) with per-stage state and failure isolation</li>
                    <li>Pluggable queue: a self-hosted SQLite broker implementing visibility timeouts, delivery counts and dead-lettering in a single file with no server, plus Amazon SQS behind the same interface</li>
                    <li>Adaptive-bitrate HLS with a three-rung resolution ladder and a selectable caption track</li>
                    <li>Speech-to-text via whisper.cpp, with a mock mode for fast iteration</li>
                    <li>Idempotent by construction — every stage is safe to run twice, checking for its own output before doing any work</li>
                    <li>Survives a worker being killed mid-stage without losing or duplicating work, and dead-letters a poisoned clip after a bounded number of attempts</li>
                    <li>Parallel uploads and processing across clips, with live per-job progress: current stage, per-stage timings and megabytes landed</li>
                  </>
                )}
                {project.title === "World Wide News" && (
                  <>
                    <li>Interactive D3.js globe — drag to rotate, scroll to zoom, click a country to fly to it and load its news</li>
                    <li>Top 5 local stories per country across 195 countries, sourced from 100+ news domains each</li>
                    <li>Translingual coverage in 65+ languages, so a country's press is read in the language it publishes in</li>
                    <li>Three live relevance sliders — intensity, richness and locality — that rescore the country's top 5 on the spot</li>
                    <li>Theme diversity enforced in the top 3 slots, so the ranking cannot return five versions of one story</li>
                    <li>Every article links directly to its source, with the publisher named on the card</li>
                    <li>Scoring methodology published in-app on a dedicated Scoring page rather than kept opaque</li>
                    <li>Refreshed every 15 minutes against GDELT 2.0, with an optional local CSV cache for offline replay</li>
                    <li>Headline fallback chain that recovers a readable title from the article URL when the page supplies none</li>
                  </>
                )}
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
              {project.title === "Cybersecurity Coding Agent Harness" && (
                <div className="space-y-4">
                  <div
                    className="bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cyber-harness-architecture.png", e)}
                  >
                    <img
                      src="/cyber-harness-architecture.png"
                      alt="Scanner pipeline architecture: an 865-file corpus flows through Stage 0 recon, Stage 0.5 lane selector, Stage 1 budget governor and the Stage 2 per-lane hunt loop, each writing a JSON artifact the next stage reads, ending in candidate-findings.json and a cost reconcile step"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The full pipeline. Orange stages call a model, blue stages are deterministic TypeScript, and every arrow crosses a JSON artifact on disk rather than memory.
                  </p>
                  <div
                    className="bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cyber-harness-benchmark.png", e)}
                  >
                    <img
                      src="/cyber-harness-benchmark.png"
                      alt="Vulnerability scan recall by cost: GPT-5.6 Luna 88.7% at $4.37, GLM-5.2 85.6% at an estimated $7.33, Claude Sonnet 5 86.6% at $84.04, and Gemini 3.6 Flash 75.3% at $24.85, plotted against a log cost scale"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recall against run cost on a log scale. Holding the corpus, prompts and scorer fixed and varying only the model is what makes the recall-per-dollar ranking meaningful.
                  </p>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cyber-harness-results.png", e)}
                  >
                    <img
                      src="/cyber-harness-results.png"
                      alt="Detection recall raised from 38% to 88% by an autonomous agent loop that modifies the harness, verifies each change with scoring tools, and adopts only confirmed improvements"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The self-improvement loop. Each change is scored before it is kept, so the gain is measured rather than assumed.
                  </p>
                </div>
              )}
              {project.title === "Video Processing Mobile App" && (
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden border border-accent-gold/10 bg-black">
                    <video
                      src="/videos/captionclips-demo.mp4"
                      poster="/captionclips-cover.png"
                      controls
                      playsInline
                      preload="none"
                      className="w-full max-h-[70vh] object-contain"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Two raw clips selected, uploaded in parallel, processed through the pipeline with live metrics, and played back with generated captions and selectable resolutions.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      ["/captionclips-1-home.png", "CaptionClips home screen"],
                      ["/captionclips-2-upload.png", "Selected clips ready to upload"],
                      ["/captionclips-3-jobs.png", "Job list with per-stage progress"],
                      ["/captionclips-4-pipeline.png", "Job detail: pipeline stages and multipart upload progress"],
                      ["/captionclips-5-completed.png", "Completed job with total elapsed time and per-stage timings"],
                      ["/captionclips-6-ladder.png", "Playback with generated captions and the adaptive-bitrate resolution ladder"],
                    ].map(([src, alt]) => (
                      <div
                        key={src}
                        className="aspect-[9/16] bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                        onClick={(e) => handleImageClick(src, e)}
                      >
                        <img src={src} alt={alt} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {project.title === "World Wide News" && (
                <div className="space-y-4">
                  <div
                    className="bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/worldwidenews-architecture.png", e)}
                  >
                    <img
                      src="/worldwidenews-architecture.png"
                      alt="High-level architecture: GDELT 2.0 and an optional local CSV cache feed a FastAPI backend, which writes raw_articles, country_articles, top5_cache and country_status in PostgreSQL and serves a Vite and React frontend of a D3 globe and side panel"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Five tiers, ingestion through browser. Scoring happens on the way in, not on the way out, so a globe click is one indexed lookup against the precomputed top-5 cache rather than a scoring pass.
                  </p>
                </div>
              )}
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
                    onClick={(e) => handleImageClick("/cooking-inventory-1.jpg", e)}
                  >
                    <img
                      src="/cooking-inventory-1.jpg"
                      alt="Login Interface"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-2.jpg", e)}
                  >
                    <img
                      src="/cooking-inventory-2.jpg"
                      alt="Inventory Management"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-3.jpg", e)}
                  >
                    <img
                      src="/cooking-inventory-3.jpg"
                      alt="Financial Reports"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-4.jpg", e)}
                  >
                    <img
                      src="/cooking-inventory-4.jpg"
                      alt="Error Handling"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-5.jpg", e)}
                  >
                    <img
                      src="/cooking-inventory-5.jpg"
                      alt="Menu Management"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick("/cooking-inventory-6.jpg", e)}
                  >
                    <img
                      src="/cooking-inventory-6.jpg"
                      alt="Order Management"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}
            </section>

            {/* Technical Details Section */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Technical Details</h3>
              <div className="prose prose-lg max-w-none">
                {project.title === "Cybersecurity Coding Agent Harness" ? (
                  <>
                    <p>
                      <strong>Stack:</strong> TypeScript, Python, Node.js, Anthropic Claude API, OWASP, JSON Schema, pytest and Git.
                    </p>
                    <p>
                      <strong>Pipeline.</strong> Stage 0 (Recon) turns an unknown repository into a single JSON fact sheet — an AST pass extracts the route table including middleware and auto-generated CRUD endpoints, a diff compares the declared API spec against the routes that actually exist, and a frontend pass finds the escape hatches where markup bypasses sanitization. Stage 0.5 (Lane selector) cuts the codebase into bounded units of work, one lane per file, each carrying only the vulnerability classes recon's evidence associates with that file. Stage 1 (Budget governor) is pure arithmetic over the manifest and on-disk file sizes: how many calls, how many tokens, what that costs at the selected model's rate. Stage 2 (Hunt lanes) binds the model to exactly one file with its class playbooks and the architectural context, then runs an agent loop — a hunt turn followed by a trace-completion turn in the same conversation, stopping early when a turn adds nothing.
                    </p>
                    <p>
                      <strong>Why it is built this way.</strong> Stages 0.5 and 1 are deterministic on purpose: lane assignment and cost projection have to be auditable without re-running a model, and they are the two places where non-determinism would make every downstream comparison meaningless. Findings are labelled against a class registry that maps onto OWASP codes, and a finding may carry more than one class, so hedging is tracked as its own number — meaning "score well by labelling everything" shows up as a metric rather than as recall.
                    </p>
                    <p>
                      <strong>Measurement.</strong> Every run is scored by the same scorer against the same denominator, with the answer key held in a separate private repository the harness has never had access to. Model comparison holds corpus, prompts and lanes fixed and varies only the model, which is what makes the recall-per-dollar ranking mean anything.
                    </p>
                  </>
                ) : project.title === "Video Processing Mobile App" ? (
                  <>
                    <p>
                      <strong>Stack:</strong> Go, React Native, TypeScript, Kotlin, AWS (S3, DynamoDB), SQLite, FFmpeg and whisper.cpp.
                    </p>
                    <p>
                      <strong>Architecture.</strong> Two Go binaries — an HTTP API that never touches video bytes, and a worker binary whose stage is selected by an environment variable. The phone talks straight to S3 using short-lived presigned URLs, so a single small API process serves uploads of any size; it only mints URLs and records facts. DynamoDB holds the job record with per-stage state and is the only source of truth. The queue is a table with a "hidden until" timestamp: claiming a message hides it rather than removing it, and it rejoins the visible set if its lease expires without an acknowledgement.
                    </p>
                    <p>
                      <strong>Queue guarantees.</strong> Replacing a managed broker with a self-hosted one means visibility timeouts, delivery counts and redrive policies stop being configuration and become code that has to be correct. A claim is a single atomic <code>UPDATE ... RETURNING</code> statement, so mutual exclusion is delegated to the storage engine's transaction. Claims mint an opaque receipt token, so a worker that overruns its lease cannot destroy work another worker legitimately owns. Long stages heartbeat to extend their lease rather than holding a lock, because a lease expires on its own and a crashed lock-holder never releases. Delivery counts are incremented during the claim rather than on failure, so a worker that crashes hard without reporting still consumes retry budget.
                    </p>
                    <p>
                      <strong>The hard part.</strong> At-least-once delivery makes "has this already run?" genuinely ambiguous: an output present with no recorded state can mean a duplicate delivery after a successful run, or a crash between writing the output and recording it. Those demand opposite responses and no single flag can tell them apart, which is why every stage consults both the object store and the job record, and why every stage was written to be safe to run twice rather than trying to guarantee it never would be.
                    </p>
                  </>
                ) : project.title === "World Wide News" ? (
                  <>
                    <p>
                      <strong>Stack:</strong> Python, FastAPI, PostgreSQL, Pandas, React, Vite, D3.js, the GDELT 2.0 API, Figma and Git.
                    </p>
                    <p>
                      <strong>Ingest.</strong> GDELT publishes a new Global Knowledge Graph batch every 15 minutes. The backend pulls that batch over httpx, parses the GKG column set with Pandas, and resolves each article's publisher domain to a country through a mappings table. A cached-CSV mode replays a downloaded batch from disk instead, which keeps development off the live feed &mdash; the full pull is expensive and rerunning it on every restart is the kind of thing that quietly costs an afternoon.
                    </p>
                    <p>
                      <strong>Scoring.</strong> Three signals, each min-max normalised across the country's article set so no one signal's raw range dominates. <em>Intensity</em> combines tone magnitude and polarity strength. <em>Richness</em> counts the themes and named people GDELT extracted, as a proxy for how substantive a piece is. <em>Locality</em> is the ratio of source-country location mentions to total location mentions &mdash; how much of the article is about where it was published. They combine at default weights of 0.40, 0.30 and 0.30, and any weight the caller omits falls back to its own default rather than the whole set resetting.
                    </p>
                    <p>
                      <strong>Why the top 5 is not just the top 5 by score.</strong> Ranking purely on score returns five articles about whatever the country's dominant story is that hour. Slots 1&ndash;3 therefore enforce theme diversity &mdash; each must lead with a different primary theme &mdash; and slots 4&ndash;5 fill by score. The result reads as a picture of the country rather than a pile of one event.
                    </p>
                    <p>
                      <strong>Serving.</strong> Postgres holds <code>raw_articles</code>, <code>country_articles</code>, a precomputed <code>top5_cache</code> and <code>country_status</code>, indexed by country code. Reads hit the cache, so a globe click is one indexed lookup rather than a scoring pass. Moving a slider posts new weights, rescores just that country asynchronously through a psycopg pool, and replaces its cache rows &mdash; reusing the headline for any URL that survived the reshuffle so the list does not visibly flicker. When an article carries no usable page title, a fallback chain recovers one from the URL slug, then from the lead person and theme, before settling for a generic label.
                    </p>
                  </>
                ) : project.title === "Movie Recommender System" ? (
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