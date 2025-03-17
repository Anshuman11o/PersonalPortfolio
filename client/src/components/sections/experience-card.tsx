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
            <DialogTitle className="text-3xl font-bold flex items-center justify-between">
              <span>{experience.role} at {experience.company}</span>
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
            </DialogTitle>
            <DialogDescription className="text-lg">
              A detailed overview of my role and contributions
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-32 h-32 flex items-center justify-center">
                  <img
                    src={experience.imageUrl}
                    alt={experience.company}
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
              </div>
            </section>

            {experience.company === "Embee Software" ? (
              <>
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>As a Software Development Intern at Embee Software, I worked on two automation-driven projects:</p>
                    <ul>
                      <li><strong>PDF/CSV Validator</strong> – Developed a Python-based tool to automate payroll data extraction and conversion, reducing manual effort and securing a company-wide deployment.</li>
                      <li><strong>AI Agent/Bot Summarizer</strong> – Designed an AI-powered system to automate news summarization for press meetings using Azure Cognitive Services and OpenAI APIs, streamlining content retrieval across multiple formats.</li>
                    </ul>
                  </div>
                </section>

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

                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Programming & Data Processing:</strong> Python (Pandas, Tkinter, JSON, XML, CSV), BeautifulSoup</li>
                    <li><strong>Cloud & AI Services:</strong> Azure Cognitive Services, Azure Blob Storage, Azure Search Index, OpenAI APIs</li>
                    <li><strong>Automation & UI Development:</strong> Web scraping, OCR, Speech-to-Text, Prompt Engineering</li>
                  </ul>
                </section>

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
                    {experience.company === "UMass Robotics Club" ? (
                      <>
                        {/* UMass Robotics Club section is replaced below */}
                        <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                          <h3 className="text-2xl font-semibold">Role Overview</h3>
                          <div className="prose prose-lg max-w-none">
                            <p>
                              As a Member of the UMass Robotics Club, I contributed to the development and optimization of VR-based robotics telepresence using Meta Quest 3 and Unity. My role involved enhancing real-time robot control and data retrieval, ensuring low-latency performance, and improving human-robot interaction for the MassRobotics Form & Function Challenge, where we are building a humanoid robot designed to assist individuals with disabilities in performing physically demanding tasks.
                            </p>
                          </div>
                        </section>

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

                        <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                          <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                          <ul className="list-disc list-inside space-y-2">
                            <li><strong>Virtual Reality & Robotics:</strong> Unity, Meta Quest 3, Robot Arm Control, VR Telepresence</li>
                            <li><strong>Networking & Data Processing:</strong> Server-Quest Communication, Live Robot Data Retrieval, Nvidia Jetson</li>
                            <li><strong>Performance Optimization:</strong> Lag Reduction, Real-Time System Debugging</li>
                            <li><strong>Humanitarian Robotics:</strong> Developing assistive robotics for individuals with disabilities</li>
                          </ul>
                        </section>

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
                    ) : null}
                    {experience.company === "UMass Boxing Club" && (
                      <>
                        <li>Increased membership inquiries by 30%</li>
                        <li>Reduced manual processing time by 40%</li>
                        <li>Implemented full-stack web solutions</li>
                      </>
                    )}
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
                      {experience.company === "UMass Robotics Club" && (
                        "Unity Engine, C#, Telepresence Systems, Remote Interaction Technologies"
                      )}
                      {experience.company === "UMass Boxing Club" && (
                        "React, TypeScript, Node.js, Express.js, Frontend Development, Backend Development, Form Handling"
                      )}
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