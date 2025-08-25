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
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="Anshuman Agarwal"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-accent-gold/30 shadow-lg mx-auto"
          />
        </motion.div>
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">Anshuman Agarwal</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Computer Science student at UMass Amherst with a passion for AI, software development, and robotics. 
          I collaborate on innovative AI, ML and Robotics projects and explore how technology can drive groundbreaking solutions and transformative change. Check out my projects and experiences to learn more about my work!
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          {/* Top row with View My Work and View My Experience */}
          <div className="flex flex-wrap justify-center gap-4">
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
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent-gold hover:opacity-90"
            >
              <Link href="/experience">
                View My Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Bottom centered Get in Touch button */}
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