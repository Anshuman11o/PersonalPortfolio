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
            {experience.company === "UMass Robotics Club" ? (
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
                      onClick={(e) => handleImageClick("attached_assets/image_1742176679862.png", e)}
                    >
                      <img
                        src="attached_assets/image_1742176679862.png"
                        alt="UMass Boxing Club - Home Page"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("attached_assets/image_1742176688741.png", e)}
                    >
                      <img
                        src="attached_assets/image_1742176688741.png"
                        alt="UMass Boxing Club - Events Page"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("attached_assets/image_1742176696556.png", e)}
                    >
                      <img
                        src="attached_assets/image_1742176696556.png"
                        alt="UMass Boxing Club - Members Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("attached_assets/image_1742176702386.png", e)}
                    >
                      <img
                        src="attached_assets/image_1742176702386.png"
                        alt="UMass Boxing Club - Contact Form"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
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