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
            <img
              src={experience.imageUrl}
              alt={experience.company}
              className="w-16 h-16 object-contain" 
            />
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
            <DialogTitle className="text-3xl font-bold">
              {experience.role} at {experience.company}
            </DialogTitle>
            <DialogDescription className="text-lg">
              A detailed overview of my role and contributions
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <div className="flex items-center gap-6">
                <img
                  src={experience.imageUrl}
                  alt={experience.company}
                  className="w-32 h-32 object-contain p-2" 
                />
                <div>
                  <h3 className="text-2xl font-semibold">{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
              </div>
            </section>

            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Role Overview</h3>
              <div className="prose prose-lg max-w-none">
                <p>{experience.description}</p>
              </div>
            </section>

            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-2">
                {experience.company === "Embee Software" && (
                  <>
                    <li>Reduced news review time by 10x through AI implementation</li>
                    <li>Enhanced payroll efficiency by 20x with automated data processing</li>
                    <li>Developed scalable solutions for enterprise clients</li>
                  </>
                )}
                {experience.company === "UMass Robotics Club" && (
                  <>
                    <li>Implemented core telepresence functionalities</li>
                    <li>Enhanced remote interaction capabilities</li>
                    <li>Collaborated on Unity-based development</li>
                  </>
                )}
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
                  {experience.company === "Embee Software" && (
                    "Python, Pandas, AI/ML, Natural Language Processing, PDF Processing, Data Extraction, API Integration"
                  )}
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

            {experience.githubUrl && (
              <div className="flex justify-end gap-4 pt-4">
                <Button variant="outline" asChild className="border-accent-gold text-accent-gold hover:bg-accent-gold/10">
                  <a
                    href={experience.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaGithub className="h-4 w-4" />
                    Related Work
                  </a>
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}