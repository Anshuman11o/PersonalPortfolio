import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">Anshuman Agarwal</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Computer Science student at UMass Amherst with a passion for AI, software development, and economics. 
          I collaborate on innovative robotics projects, practice boxing, and explore how technology can drive innovation and informed decision-making.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent-gold hover:opacity-90"
          >
            <Link href="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-accent-gold text-accent-gold hover:bg-accent-gold/10">
            <a href="mailto:agarwal.anshuman1@gmail.com">
              Get in Touch
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}