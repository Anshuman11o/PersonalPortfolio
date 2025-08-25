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
            src="/anshuman-profile.jpg"
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