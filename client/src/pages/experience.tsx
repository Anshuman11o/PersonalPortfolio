import { useQuery } from "@tanstack/react-query";
import ExperienceCard from "@/components/sections/experience-card";
import type { Experience } from "@shared/schema";

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Commonwealth of Massachusetts (EEA)",
    role: "Summer Internship (ongoing)",
    description: "Collaborating with the Executive Office of Energy and Environmental Affairs (EEA) to develop an AI chatbot for the agency's public website to reduce support staff query load by more than 70%. AI-powered RAG chatbot built on AWS will guide users through permit application processes and help them retrieve information tailored to their specific permit type.",
    imageUrl: "/commonwealth-ma-logo.png",
    githubUrl: null,
    dateRange: "Jun 2025 - Present"
  },
  {
    id: 2,
    company: "Embee Software",
    role: "AI & Data Analytics Intern",
    description: "Developed an AI agent that processes news content, generating summaries and answering user questions, reducing the time spent reviewing company news by 10x for a client. Built a Python application using Pandas to extract and convert employee work hour data from PDF logs into standardized CSV files, enhancing payroll department efficiency by 20x.",
    imageUrl: "/embee-logo.png",
    githubUrl: null,
    dateRange: "Jun - Aug 2024"
  },
  {
    id: 3,
    company: "UMass Robotics Club",
    role: "Software Developer",
    description: "Contributing to the Unity Telepresence project, focusing on inverse kinematics and motion planning for humanoid robots. Working on system design and modeling to enhance robot movement capabilities for the Mass Robotics competition. Implementing advanced robotics algorithms and real-time control systems.",
    imageUrl: "/images/umass-robotics.png",
    githubUrl: "https://github.com/UMass-Robotics-Club/Unity-Telepresence",
    dateRange: "Sep 2024 - Present"
  },
  {
    id: 4,
    company: "UMass Boxing Club",
    role: "Web Developer",
    description: "Designed and developed a modern, responsive website for the UMass Boxing Club using HTML, CSS, and JavaScript. Created an engaging platform that showcases club activities, training schedules, and member achievements. Implemented user-friendly navigation and mobile-responsive design.",
    imageUrl: "/images/boxing-club-logo.png",
    githubUrl: "https://github.com/Anshuman11o/Umass-Boxing-club",
    dateRange: "Mar - May 2024"
  },
  {
    id: 5,
    company: "Ferrum",
    role: "Software Development Intern",
    description: "Worked at Ferrum as an Intern for 2 weeks. Developed an app for the company using python. Learnt about the water purifier manufacturing process. Understood how a water purifier business is managed.",
    imageUrl: "/images/ferrum-logo.png",
    githubUrl: "https://github.com/Anshuman11o/Scrap-Calculator-Application",
    dateRange: "Dec 2023"
  }
];

export default function Experience() {
  const { data: experiences, isLoading } = useQuery({
    queryKey: ["/api/experiences"],
    initialData: EXPERIENCES
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Experience & Clubs</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
}