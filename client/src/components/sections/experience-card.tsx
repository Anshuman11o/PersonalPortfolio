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
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <CardTitle>{experience.role}</CardTitle>
              <p className="text-sm text-muted-foreground">{experience.company}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-2">{experience.description}</p>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-6 border-2 border-accent-gold/20">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-3xl font-bold">
              {experience.role} at {experience.company}
            </DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground">
              A detailed overview of my role and contributions
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            {/* Company Overview */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <div className="flex items-center gap-6">
                <img
                  src={experience.imageUrl}
                  alt={experience.company}
                  className="w-24 h-24 rounded-lg object-cover border border-accent-gold/20"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{experience.company}</h3>
                  <p className="text-muted-foreground">{experience.role}</p>
                </div>
              </div>
            </section>

            {/* Role Description */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Role Overview</h3>
              <div className="prose prose-lg max-w-none">
                <p>{experience.description}</p>
                <p className="text-muted-foreground">{experience.description}</p>
              </div>
            </section>

            {/* Key Achievements */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
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
                {experience.company === "Disability Services - University of Massachusetts Amherst" && (
                  <>
                    <li>Create accessible LaTeX documents for visually impaired students</li>
                    <li>FERPA certified for handling sensitive student information</li>
                    <li>Utilize Microsoft Office and Overleaf for document conversion</li>
                  </>
                )}
              </ul>
            </section>

            {/* Project Gallery */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Project Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Placeholder for project images */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-accent-gold/10">
                  <p className="text-muted-foreground">Project Image 1</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-accent-gold/10">
                  <p className="text-muted-foreground">Project Image 2</p>
                </div>
              </div>
            </section>

            {/* Demo Video */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Project Demonstration</h3>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-accent-gold/10">
                <p className="text-muted-foreground">Project Demo Video Placeholder</p>
              </div>
            </section>

            {/* Skills & Technologies */}
            <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  Overview of the technical skills, tools, and methodologies used in this role.
                  Include both technical and soft skills developed during this experience.
                </p>
              </div>
            </section>

            {/* Action Buttons */}
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