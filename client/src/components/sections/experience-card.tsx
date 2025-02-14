import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import type { Experience } from "@shared/schema";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card>
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
          <p className="text-muted-foreground">{experience.description}</p>
          {experience.githubUrl && (
            <div className="mt-4">
              <Button variant="outline" asChild>
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
        </CardContent>
      </Card>
    </motion.div>
  );
}
