import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
          className="cursor-pointer transition-transform hover:scale-[1.02]"
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
        <DialogContent className="max-w-3xl h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {experience.role} at {experience.company}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img
              src={experience.imageUrl}
              alt={experience.company}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="prose prose-blue max-w-none">
              <p className="text-lg">{experience.description}</p>
              {/* Add more experience details here */}
            </div>
            {experience.githubUrl && (
              <div className="flex justify-end mt-4">
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