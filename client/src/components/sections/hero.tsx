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