import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import type { Experience } from "@shared/schema";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (imageUrl: string, e: React.MouseEvent<HTMLDivElement>) => {
    // Placeholder for image click handling -  Implement actual zoom functionality here
    console.log("Image clicked:", imageUrl);
    e.stopPropagation(); // Prevent dialog closing
  };


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card
          className="cursor-pointer transition-transform hover:scale-[1.02] border-2 border-accent-gold/40"
          onClick={() => setIsOpen(true)}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={experience.imageUrl}
                alt={experience.company}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex-grow">
              <CardTitle>{experience.role}</CardTitle>
              <p className="text-sm">{experience.company}</p>
            </div>
            {experience.githubUrl && (
              <Button variant="ghost" size="sm" asChild className="text-accent-gold hover:text-accent-gold/80">
                <a
                  href={experience.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2">{experience.description}</p>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-6 border-2 border-accent-gold/20">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-3xl font-bold flex items-start justify-between">
              <span>{experience.role} at {experience.company}</span>
              <div className="flex flex-col items-end gap-2">
                {experience.dateRange && (
                  <span className="text-lg font-medium text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-md">
                    {experience.dateRange}
                  </span>
                )}
                {experience.githubUrl && (
                  <Button variant="outline" asChild className="border-accent-gold text-accent-gold hover:bg-accent-gold/10">
                    <a
                      href={experience.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FaGithub className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </DialogTitle>
            <DialogDescription className="text-lg">
              A detailed overview of my role and contributions
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            {experience.company === "Commonwealth of Massachusetts (EEA)" ? (
              <>
                {/* Role Overview Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      As a Summer Intern with the Commonwealth of Massachusetts Executive Office of Energy and Environmental Affairs (EEA), I collaborated on developing an AI-powered chatbot for the agency's public website. This project successfully aimed to reduce support staff query load by more than 70% by providing automated assistance to citizens navigating permit application processes and environmental regulations.
                    </p>
                  </div>
                </section>

                {/* Key Achievements Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">AI Chatbot Development:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Developed an AI-powered RAG (Retrieval Augmented Generation) chatbot to automate citizen support services.</li>
                        <li>Designed the system to reduce support staff query load by more than 70% through intelligent automation.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">AWS Implementation:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Built the chatbot infrastructure on AWS cloud services for scalability and reliability.</li>
                        <li>Implemented tailored information retrieval based on specific permit types and user requirements.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Public Service Enhancement:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Focused on improving citizen experience with permit application processes and environmental compliance.</li>
                        <li>Worked directly with government agency stakeholders to understand and address real-world public service challenges.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills & Technologies Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">AI & Machine Learning:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Retrieval-Augmented Generation (RAG) pipelines with AWS Bedrock</li>
                        <li>Vector embeddings & semantic search</li>
                        <li>Anthropic Claude 3.7 Sonnet via Bedrock (prompt engineering, query "funneling")</li>
                        <li>Natural Language Processing</li>
                        <li>Text chunking & summarization (NLTK)</li>
                        <li>Keyword extraction & tagging</li>
                        <li>OCR integration (Tesseract) for PDF/text ingestion</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Web Scraping & Data Ingestion:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Python (BeautifulSoup) for static HTML</li>
                        <li>Firecrawl API for JavaScript-rendered pages</li>
                        <li>Document processing (PyPDF2, python-docx, OpenCV preprocessing)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Indexing & Search:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>AWS Bedrock Knowledge Base (document ingestion, chunking, embedding)</li>
                        <li>AWS OpenSearch (full-text + vector search + analytics)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Cloud Infrastructure & DevOps:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>AWS S3 (versioned buckets, lifecycle policies)</li>
                        <li>Serverless & container orchestration</li>
                        <li>AWS Lambda & Step Functions for ETL workflows</li>
                        <li>Docker + AWS Fargate/ECS for scalable microservices</li>
                        <li>Infrastructure-as-Code with AWS CloudFormation</li>
                        <li>Security & networking (IAM roles/policies, PrivateLink, VPC, OAuth 2.0/JWT)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Chat Interface & Frontend:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>AWS Lex slot-based dialogs on mass.gov</li>
                        <li>Streamlit-based Admin Dashboard (usage metrics, CSAT surveys, system health)</li>
                        <li>WCAG-compliant, responsive UI</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Monitoring & Observability:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>AWS CloudWatch & CloudTrail (query metrics, error rates, guardrail triggers)</li>
                        <li>Real-time dashboards and alerting</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Soft Skills Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Soft Skills & Work Environment Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Government Collaboration:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Partnered directly with EEA policy experts and agency officials</li>
                        <li>Translated complex regulatory requirements into guided chatbot dialogs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Stakeholder Communication:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Led requirements analysis workshops</li>
                        <li>Authored runbooks, architecture docs, and non-technical summaries</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Public Impact Focus:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Automated permit guidance to reduce support-ticket volume</li>
                        <li>Measured and reported CSAT improvements and self-navigation success rates</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Agile Development & Adaptability:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Operated in a hybrid Scrum environment with iterative sprints</li>
                        <li>Rapidly adapted pipelines and schemas to evolving mass.gov content</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Cross-Functional Teamwork:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Coordinated across engineering, UX, and policy teams</li>
                        <li>Enforced code quality, security best practices, and accessibility standards</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Professional Growth & Problem Solving:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Deepened expertise in cloud AI, ETL debugging, and production-grade deployments</li>
                        <li>Implemented robust error handling, retry logic, and performance optimizations</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </>
            ) : experience.company === "UMass Robotics Club" ? (
              <>
                {/* Role Overview Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      As a Member of the UMass Robotics Club, I contributed to the development and optimization of VR-based robotics telepresence using Meta Quest 3 and Unity. My role involved enhancing real-time robot control and data retrieval, ensuring low-latency performance, and improving human-robot interaction for the MassRobotics Form & Function Challenge, where we are building a humanoid robot designed to assist individuals with disabilities in performing physically demanding tasks.
                    </p>
                  </div>
                </section>

                {/* Key Achievements Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Meta Quest 3 Integration & Optimization:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Enabled Unity-based robot telepresence on Meta Quest 3, allowing remote interaction with robotic systems.</li>
                        <li>Identified and implemented optimizations to reduce lag in Quest-based robotic control, improving real-time responsiveness.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Real-Time Robot Data Retrieval:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Developed a direct server connection between the Meta Quest and the robot's Nvidia Jetson module for live data streaming.</li>
                        <li>Facilitated real-time debugging and development by enabling continuous robot data monitoring through VR.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Competition Participation & Humanitarian Focus:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Competing in the MassRobotics Form & Function Challenge, contributing to a humanoid robot that assists individuals with disabilities in performing physically strenuous tasks.</li>
                        <li>Assisted in integrating Unity-based simulations with robotic hardware to create a meaningful human-robot interaction.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills & Technologies Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Virtual Reality & Robotics:</strong> Unity, Meta Quest 3, Robot Arm Control, VR Telepresence</li>
                    <li><strong>Networking & Data Processing:</strong> Server-Quest Communication, Live Robot Data Retrieval, Nvidia Jetson</li>
                    <li><strong>Performance Optimization:</strong> Lag Reduction, Real-Time System Debugging</li>
                    <li><strong>Humanitarian Robotics:</strong> Developing assistive robotics for individuals with disabilities</li>
                  </ul>
                </section>

                {/* Soft Skills Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Soft Skills & Work Environment Experience</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Collaboration & Teamwork:</strong> Worked closely with engineers and researchers to integrate robotics with VR.</li>
                    <li><strong>Problem-Solving:</strong> Identified and resolved performance bottlenecks in real-time robot-Quest communication.</li>
                    <li><strong>Communication:</strong> Documented development processes and findings clearly on Notion for team-wide knowledge sharing.</li>
                    <li><strong>Adaptability:</strong> Iterated on VR-based robotics solutions based on user testing and performance feedback.</li>
                    <li><strong>Technical Documentation:</strong> Maintained structured documentation on Notion, ensuring accessibility for future development.</li>
                  </ul>
                </section>


              </>
            ) : experience.company === "UMass Boxing Club" ? (
              <>
                {/* Role Overview Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      As a Web Developer for the UMass Boxing Club, I played a key role in revamping the club's website to enhance usability, improve interactivity, and streamline event management. I developed a modern, responsive interface using React, TypeScript, and Node.js, ensuring better organization and navigation for users. Additionally, I worked closely with club leadership to incorporate feedback and optimize the website's functionality, ultimately improving membership engagement and event promotion efficiency.
                    </p>
                  </div>
                </section>

                {/* Key Achievements Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Website Redesign & Interactivity:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Developed a more engaging, user-friendly website to replace the outdated version, enhancing navigation and usability.</li>
                        <li>Built an intuitive dashboard, quick links, pop-ups, and a contact page using Node.js, improving accessibility.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Boosted Membership Engagement:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Implemented a React & TypeScript-based frontend, leading to a 30% increase in membership inquiries.</li>
                        <li>Improved event promotions with backend form submissions via Express.js, reducing manual work by 40%.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Collaboration & Continuous Improvement:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Regularly gathered feedback from coaches and club leadership, incorporating their suggestions into iterative website updates.</li>
                        <li>Ensured seamless integration of new features while maintaining an interactive and responsive design.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills & Technologies Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Frontend Development:</strong> React, TypeScript, HTML, CSS</li>
                    <li><strong>Backend Development:</strong> Node.js, Express.js</li>
                    <li><strong>User Experience & UI Design:</strong> Website organization, interactive features, responsive design</li>
                    <li><strong>Collaboration & Feedback Integration:</strong> Working with stakeholders to improve user experience</li>
                    <li><strong>Performance Optimization:</strong> Reducing manual work, improving accessibility and event promotion</li>
                  </ul>
                </section>

                {/* Soft Skills Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Soft Skills & Work Environment Experience</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Collaboration & Teamwork:</strong> Worked directly with club leadership and coaches to align the website with their vision.</li>
                    <li><strong>Communication & User-Centered Design:</strong> Gathered and implemented feedback to enhance usability.</li>
                    <li><strong>Problem-Solving:</strong> Identified and resolved pain points in navigation and event management.</li>
                    <li><strong>Technical Documentation:</strong> Maintained structured documentation on Notion to track changes and future improvements.</li>
                    <li><strong>Adaptability:</strong> Iterated on design and functionality based on real user feedback and evolving needs.</li>
                  </ul>
                </section>

                {/* Project Gallery Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Project Gallery</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("/boxing-1.jpg", e)}
                    >
                      <img
                        src="/boxing-1.jpg"
                        alt="UMass Boxing Club - Home Page"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("/boxing-2.jpg", e)}
                    >
                      <img
                        src="/boxing-2.jpg"
                        alt="UMass Boxing Club - Events Page"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("/boxing-3.jpg", e)}
                    >
                      <img
                        src="/boxing-3.jpg"
                        alt="UMass Boxing Club - Dashboard"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("/boxing-4.jpg", e)}
                    >
                      <img
                        src="/boxing-4.jpg"
                        alt="UMass Boxing Club - Contact Form"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </section>
              </>
            ) : experience.company === "Embee Software" ? (
              <>
                {/* Role Overview Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      As a Software Development Intern at Embee Software, I worked on two automation-driven projects:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>PDF/CSV Validator</strong> – Developed a Python-based tool to automate payroll data extraction and conversion, reducing manual effort and securing a company-wide deployment.</li>
                      <li><strong>AI Agent/Bot Summarizer</strong> – Designed an AI-powered system to automate news summarization for press meetings using Azure Cognitive Services and OpenAI APIs, streamlining content retrieval across multiple formats.</li>
                    </ul>
                  </div>
                </section>

                {/* Key Achievements Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">PDF/CSV Validator:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Engineered a Python application to extract employee work-hour data from scanned payroll PDFs and convert them into structured CSV files.</li>
                        <li>Optimized payroll processing efficiency by 20x, leading to a company-wide contract adoption.</li>
                        <li>Implemented a Tkinter-based UI and leveraged PDFPlumber and Pandas for data extraction and transformation.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">AI Agent/Bot Summarizer:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Developed an AI agent that automates news summarization, reducing manual review time by 10x.</li>
                        <li>Implemented a web scraper using BeautifulSoup to fetch online news articles.</li>
                        <li>Processed multimedia content (audio, video, and images) using Azure Cognitive Services for speech-to-text and OCR functionalities.</li>
                        <li>Indexed retrieved data in Azure Blob Storage and enabled keyword-based retrieval via Azure Search Index.</li>
                        <li>Integrated OpenAI's language models with prompt engineering techniques for accurate, topic-based and query-based summaries.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills & Technologies Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Programming & Data Processing:</strong> Python (Pandas, Tkinter, JSON, XML, CSV), BeautifulSoup</li>
                    <li><strong>Cloud & AI Services:</strong> Azure Cognitive Services, Azure Blob Storage, Azure Search Index, OpenAI APIs</li>
                    <li><strong>Automation & UI Development:</strong> Web scraping, OCR, Speech-to-Text, Prompt Engineering</li>
                  </ul>
                </section>

                {/* Soft Skills Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Soft Skills & Work Environment Experience</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Collaboration & Teamwork:</strong> Worked closely with managers and stakeholders to align project goals with business needs.</li>
                    <li><strong>Communication:</strong> Presented technical concepts to non-technical users, ensuring clarity and ease of adoption.</li>
                    <li><strong>Problem-Solving:</strong> Designed scalable solutions to automate manual workflows, improving efficiency.</li>
                    <li><strong>Documentation:</strong> Maintained clear and structured documentation for processes, ensuring smooth handover and future scalability.</li>
                    <li><strong>Adaptability:</strong> Iterated on solutions based on user feedback, refining the tools for real-world deployment.</li>
                  </ul>
                </section>
              </>
            ) : (
              <>
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>{experience.description}</p>
                  </div>
                </section>

                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {experience.company === "Ferrum" && (
                      <>
                        <li>Developed a Python Tkinter application which calculates the waste metal scrape produced in the company's production line</li>
                        <li>Helped the company to improve their waste tracking from manual to automatic</li>
                      </>
                    )}
                  </ul>
                </section>

                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      {experience.company === "Ferrum" && (
                        "Python, Tkinter, Geometry"
                      )}
                    </p>
                  </div>
                </section>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}