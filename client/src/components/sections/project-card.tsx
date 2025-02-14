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
          className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
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
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-6">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground">
              A comprehensive overview of this project
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            {/* Main Project Image */}
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Overview */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold">Project Overview</h3>
              <div className="prose prose-lg prose-blue max-w-none">
                <p>{project.description}</p>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Feature 1 - Detailed explanation of the feature</li>
                <li>Feature 2 - Comprehensive breakdown of functionality</li>
                <li>Feature 3 - Technical implementation details</li>
              </ul>
            </section>

            {/* Project Gallery */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Placeholder for additional project images */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Additional Image 1</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Additional Image 2</p>
                </div>
              </div>
            </section>

            {/* Project Video */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold">Demo Video</h3>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Project Demo Video Placeholder</p>
              </div>
            </section>

            {/* Technical Details */}
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold">Technical Details</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  Detailed technical implementation, challenges faced, and solutions implemented.
                  Include architecture decisions, tech stack, and any notable optimizations.
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