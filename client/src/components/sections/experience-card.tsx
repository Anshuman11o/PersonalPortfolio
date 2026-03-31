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

  const handleImageClick = (imageUrl: string, e: React.MouseEvent<HTMLDivElement>) => {
    // Placeholder for image click handling -  Implement actual zoom functionality here
    console.log("Image clicked:", imageUrl);
    e.stopPropagation(); // Prevent dialog closing
  };


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
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={experience.imageUrl}
                alt={experience.company}
                className="max-w-full max-h-full object-contain"
              />
            </div>
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
            <DialogTitle className="text-3xl font-bold flex items-start justify-between">
              <span>{experience.role} at {experience.company}</span>
              <div className="flex flex-col items-end gap-2">
                {experience.dateRange && (
                  <span className="text-lg font-medium text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-md">
                    {experience.dateRange}
                  </span>
                )}
                {experience.githubUrl && (
                  <Button variant="outline" asChild className="border-accent-gold text-accent-gold hover:bg-accent-gold/10">
                    <a
                      href={experience.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FaGithub className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </DialogTitle>
            <DialogDescription className="text-lg">
              A detailed overview of my role and contributions
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            {experience.company === "IOMICS Corporation" ? (
              <>
                {/* Role Overview Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      As a Machine Learning Intern at IOMICS Corporation, I developed scalable data pipelines for transforming clinical observational datasets into structured, analysis-ready formats for various machine learning models. My work focused on <strong>propositionalization</strong>, building <strong>Extract, Transform, Load (ETL) pipelines</strong>, preprocessing workflows, schema configuration, and data quality reporting to support downstream Artificial Intelligence (AI) and research applications in the biotechnology sector.
                    </p>
                    <p>
                      IOMICS Corporation specializes in applying advanced data science and machine learning techniques to biotechnology and clinical research, working with complex datasets that require sophisticated processing and transformation methodologies.
                    </p>
                    <p className="flex items-center gap-2">
                      <strong>Company Website:</strong> 
                      <a 
                        href="https://iomics.ai/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-accent-gold hover:text-accent-gold/80 underline"
                      >
                        https://iomics.ai/
                      </a>
                    </p>
                  </div>
                </section>

                {/* Current Focus & Achievements Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Data Pipeline Development:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Built scalable Extract, Transform, Load (ETL) pipelines using PySpark for large-scale clinical dataset processing</li>
                        <li>Implemented data quality reporting systems to ensure accuracy and consistency in downstream applications</li>
                        <li>Developed schema configuration workflows for standardizing diverse clinical observational data formats</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Machine Learning Infrastructure:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Created analysis-ready datasets optimized for various machine learning model architectures</li>
                        <li>Implemented propositionalization techniques to convert relational data into flat feature representations</li>
                        <li>Designed preprocessing workflows that maintain data integrity while optimizing for ML performance</li>
                        <li>Evaluated Logical Neural Networks, PyTsetlin Machine and Active learning framework for high-dimensional omics transcriptomics, reporting on API usability, parameter handling, and data compatibility to validate architectural fit for interpretable feature selection and internal software usage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Process Improvement & Documentation:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Enhanced documentation standards and testing protocols for data pipeline reliability</li>
                        <li>Improved integration processes between data transformation stages and downstream AI applications</li>
                        <li>Contributed to biotechnology research applications through robust data engineering practices</li>
                        <li>Conducted extensive code refactoring and code review on PyTsetlin Machine code to prepare it for internal usage and adoption</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills & Technologies Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Data Processing & Analytics:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>PySpark for distributed data processing and large-scale analytics</li>
                        <li>Python with Pandas for data manipulation and analysis</li>
                        <li>Apache Arrow for high-performance data interchange and processing</li>
                        <li>Extract, Transform, Load (ETL) pipeline design and implementation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Data Formats & Storage:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Hierarchical Data Format version 5 (HDF5) for scientific data storage</li>
                        <li>Parquet for columnar storage and analytics optimization</li>
                        <li>JavaScript Object Notation (JSON) for structured data exchange</li>
                        <li>eXtensible Markup Language (XML) for document processing and data interchange</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Machine Learning & AI:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Machine Learning pipeline development and optimization</li>
                        <li>Artificial Intelligence (AI) systems for research applications</li>
                        <li>Data propositionalization for ML model compatibility</li>
                        <li>Clinical data analysis and biotechnology applications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Software Engineering & Quality:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Documentation standards and technical writing</li>
                        <li>Testing protocols for data pipeline reliability</li>
                        <li>Integration processes and workflow optimization</li>
                        <li>Schema configuration and data quality assurance</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Professional Development & Environment */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Professional Development & Work Environment</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Biotechnology & Research Focus:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Gained expertise in biotechnology applications of machine learning and data science</li>
                        <li>Worked with clinical observational datasets and research-grade data processing</li>
                        <li>Developed understanding of regulatory and quality standards in biotechnology data management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Technical Leadership & Collaboration:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Contributed to cross-functional teams in hybrid work environment (Holyoke, MA)</li>
                        <li>Developed scalable solutions that support multiple downstream research applications</li>
                        <li>Implemented best practices for data engineering in scientific computing environments</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Continuous Learning & Innovation:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Stayed current with emerging technologies in distributed computing and data processing</li>
                        <li>Applied academic machine learning knowledge to real-world biotechnology challenges</li>
                        <li>Contributed to the advancement of AI applications in clinical and research settings</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </>
            ) : experience.company === "Commonwealth of Massachusetts (EEA)" ? (
              <>
                {/* Role Overview Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      As part of the AI for the Commonwealth (AI4CW) Cohort 3 program, I developed a scalable AI-powered Permit Navigator Chatbot for the Massachusetts Executive Office of Energy and Environmental Affairs (EEA). The project transformed how Massachusetts residents, contractors, and businesses find environmental permits by creating an AI-driven chatbot that uses Retrieval-Augmented Generation (RAG) to provide accurate, contextual guidance through <strong>400+ permit types</strong> and <strong>1,200+ supporting documents</strong>.
                    </p>
                    <p>
                      The solution addressed EEA's fragmented, text-heavy permit system that generated <strong>35-40 daily navigation-related support tickets</strong>, creating high frustration for users and consuming thousands of staff hours annually. I <strong>presented the final project to Governor Maura Healey</strong> and Commonwealth officials, demonstrating its potential to save <strong>~5,000 staff hours annually</strong> while improving public accessibility to government services.
                    </p>
                  </div>
                </section>

                {/* Key Achievements Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements & Impact</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Quantified Impact & KPIs:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Potential 20%+ reduction</strong> in navigation-related support tickets (~5,000 staff hours saved annually)</li>
                        <li><strong>25% improvement</strong> in average permit discovery time for end users</li>
                        <li><strong>40%+ self-navigation success rate</strong> achieved in pilot testing</li>
                        <li><strong>35-40 daily baseline tickets</strong> before implementation, targeting significant volume reduction</li>
                        <li><strong>≥70% user satisfaction score</strong> target for pilot deployment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Technical Implementation:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Built fully serverless, cloud-native architecture supporting 400+ permit types and 1,200+ documents</li>
                        <li>Developed autonomous data pipeline with web scraping, metadata filtering, and intelligent indexing</li>
                        <li>Created Next.js chatbot widget with WCAG-compliant accessibility design</li>
                        <li>Implemented RAG optimization with query funneling and conversational guidance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Leadership & Collaboration:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Presented to Governor Maura Healey</strong> and Commonwealth officials showcasing project outcomes</li>
                        <li>Led cross-agency collaboration with EEA leadership, IT teams, and support staff</li>
                        <li>Conducted user acceptance testing and iterative feedback integration</li>
                        <li>Delivered comprehensive Implementation & Handoff Guide with detailed cost analysis</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills & Technologies Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Technical Skills & Architecture</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">AI & Machine Learning:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Retrieval-Augmented Generation (RAG) pipelines with AWS Bedrock Knowledge Base</li>
                        <li>Anthropic Claude 3.7 Sonnet via Bedrock with advanced prompt engineering</li>
                        <li>Vector embeddings & semantic search with OpenSearch</li>
                        <li>Query funneling and conversational flow optimization</li>
                        <li>Metadata schema validation and intelligent document indexing</li>
                        <li>Natural Language Processing for permit categorization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Cloud Infrastructure & DevOps:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>AWS Lambda & Step Functions for serverless orchestration</li>
                        <li>AWS S3 for versioned storage with lifecycle policies</li>
                        <li>AWS Amplify for CI/CD deployment and hosting</li>
                        <li>Infrastructure-as-Code with AWS CloudFormation</li>
                        <li>Docker containerization for Lambda deployments</li>
                        <li>Security: IAM role-based access, CORS restrictions, environment variable management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Frontend & User Experience:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Next.js chatbot widget with WCAG accessibility compliance</li>
                        <li>TypeScript for type-safe development</li>
                        <li>Admin dashboard for real-time pipeline control and analytics</li>
                        <li>Human-Centered Design (HCD) methodology implementation</li>
                        <li>Responsive design for multi-device accessibility</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Data Processing & Integration:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Python web scraping with BeautifulSoup (static content)</li>
                        <li>Firecrawl API integration for dynamic JavaScript-rendered pages</li>
                        <li>Autonomous data pipeline for crawling 1,200+ Mass.gov documents</li>
                        <li>Metadata filtering and document categorization</li>
                        <li>AWS OpenSearch for full-text and vector search capabilities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Monitoring & Analytics:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>AWS CloudWatch & CloudTrail for comprehensive logging</li>
                        <li>Real-time dashboards for usage metrics and system health</li>
                        <li>KPI tracking for user satisfaction and navigation success rates</li>
                        <li>Cost analysis and operational efficiency monitoring</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Soft Skills Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Project Management & Professional Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Executive Leadership & Communication:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Presented final deliverables to Governor Maura Healey and Commonwealth leadership</li>
                        <li>Led stakeholder presentations to EEA officials and AI COE reviewers</li>
                        <li>Authored comprehensive technical documentation and non-technical summaries</li>
                        <li>Delivered structured communication to accelerate cross-agency alignment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Government & Public Service Collaboration:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Collaborated directly with EEA leadership, IT teams, and support staff</li>
                        <li>Translated complex regulatory requirements into user-friendly conversational flows</li>
                        <li>Balanced client needs with technical feasibility in government environment</li>
                        <li>Participated in WCAG accessibility and government AI compliance workshops</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Agile Project Management:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Managed 5-phase development lifecycle from problem definition to deployment</li>
                        <li>Led requirements gathering workshops and user testing sessions</li>
                        <li>Implemented iterative feedback loops to prevent scope drift</li>
                        <li>Coordinated sprint planning and deliverable scheduling across phases</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Impact Analysis & Strategic Thinking:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Conducted comprehensive cost-benefit analysis with operational projections</li>
                        <li>Developed KPI framework for measuring public service improvement</li>
                        <li>Created scalable architecture supporting multiple EEA sub-agencies</li>
                        <li>Designed human-centered solutions addressing accessibility and equity concerns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Technical Leadership & Quality Assurance:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Enforced security best practices and compliance standards</li>
                        <li>Conducted scenario-based testing with government stakeholders</li>
                        <li>Implemented robust error handling and performance optimization strategies</li>
                        <li>Delivered complete Implementation & Handoff Guide for operational transition</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </>
            ) : experience.company === "UMass Robotics Club" ? (
              <>
                {/* Role Overview Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      As a Member of the UMass Robotics Club, I contributed to the development and optimization of VR-based robotics telepresence using Meta Quest 3 and Unity. My role involved enhancing real-time robot control and data retrieval, ensuring low-latency performance, and improving human-robot interaction for the MassRobotics Form & Function Challenge, where we were building a humanoid robot designed to assist individuals with disabilities in performing physically demanding tasks.
                    </p>
                  </div>
                </section>

                {/* Key Achievements Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Meta Quest 3 Integration & Optimization:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Enabled Unity-based robot telepresence on Meta Quest 3, allowing remote interaction with robotic systems.</li>
                        <li>Identified and implemented optimizations to reduce lag in Quest-based robotic control, improving real-time responsiveness.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Real-Time Robot Data Retrieval:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Developed a direct server connection between the Meta Quest and the robot's Nvidia Jetson module for live data streaming.</li>
                        <li>Facilitated real-time debugging and development by enabling continuous robot data monitoring through VR.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Competition Participation & Humanitarian Focus:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Competed in the MassRobotics Form & Function Challenge, contributing to a humanoid robot that assisted individuals with disabilities in performing physically strenuous tasks.</li>
                        <li>Assisted in integrating Unity-based simulations with robotic hardware to create a meaningful human-robot interaction.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills & Technologies Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Virtual Reality & Robotics:</strong> Unity, Meta Quest 3, Robot Arm Control, VR Telepresence</li>
                    <li><strong>Networking & Data Processing:</strong> Server-Quest Communication, Live Robot Data Retrieval, Nvidia Jetson</li>
                    <li><strong>Performance Optimization:</strong> Lag Reduction, Real-Time System Debugging</li>
                    <li><strong>Humanitarian Robotics:</strong> Developing assistive robotics for individuals with disabilities</li>
                  </ul>
                </section>

                {/* Soft Skills Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Soft Skills & Work Environment Experience</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Collaboration & Teamwork:</strong> Worked closely with engineers and researchers to integrate robotics with VR.</li>
                    <li><strong>Problem-Solving:</strong> Identified and resolved performance bottlenecks in real-time robot-Quest communication.</li>
                    <li><strong>Communication:</strong> Documented development processes and findings clearly on Notion for team-wide knowledge sharing.</li>
                    <li><strong>Adaptability:</strong> Iterated on VR-based robotics solutions based on user testing and performance feedback.</li>
                    <li><strong>Technical Documentation:</strong> Maintained structured documentation on Notion, ensuring accessibility for future development.</li>
                  </ul>
                </section>


              </>
            ) : experience.company === "UMass Boxing Club" ? (
              <>
                {/* Role Overview Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      As a Web Developer for the UMass Boxing Club, I played a key role in revamping the club's website to enhance usability, improve interactivity, and streamline event management. I developed a modern, responsive interface using React, TypeScript, and Node.js, ensuring better organization and navigation for users. Additionally, I worked closely with club leadership to incorporate feedback and optimize the website's functionality, ultimately improving membership engagement and event promotion efficiency.
                    </p>
                  </div>
                </section>

                {/* Key Achievements Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Website Redesign & Interactivity:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Developed a more engaging, user-friendly website to replace the outdated version, enhancing navigation and usability.</li>
                        <li>Built an intuitive dashboard, quick links, pop-ups, and a contact page using Node.js, improving accessibility.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Boosted Membership Engagement:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Implemented a React & TypeScript-based frontend, leading to a 30% increase in membership inquiries.</li>
                        <li>Improved event promotions with backend form submissions via Express.js, reducing manual work by 40%.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Collaboration & Continuous Improvement:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Regularly gathered feedback from coaches and club leadership, incorporating their suggestions into iterative website updates.</li>
                        <li>Ensured seamless integration of new features while maintaining an interactive and responsive design.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills & Technologies Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Frontend Development:</strong> React, TypeScript, HTML, CSS</li>
                    <li><strong>Backend Development:</strong> Node.js, Express.js</li>
                    <li><strong>User Experience & UI Design:</strong> Website organization, interactive features, responsive design</li>
                    <li><strong>Collaboration & Feedback Integration:</strong> Working with stakeholders to improve user experience</li>
                    <li><strong>Performance Optimization:</strong> Reducing manual work, improving accessibility and event promotion</li>
                  </ul>
                </section>

                {/* Soft Skills Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Soft Skills & Work Environment Experience</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Collaboration & Teamwork:</strong> Worked directly with club leadership and coaches to align the website with their vision.</li>
                    <li><strong>Communication & User-Centered Design:</strong> Gathered and implemented feedback to enhance usability.</li>
                    <li><strong>Problem-Solving:</strong> Identified and resolved pain points in navigation and event management.</li>
                    <li><strong>Technical Documentation:</strong> Maintained structured documentation on Notion to track changes and future improvements.</li>
                    <li><strong>Adaptability:</strong> Iterated on design and functionality based on real user feedback and evolving needs.</li>
                  </ul>
                </section>

                {/* Project Gallery Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Project Gallery</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("/boxing-1.jpg", e)}
                    >
                      <img
                        src="/boxing-1.jpg"
                        alt="UMass Boxing Club - Home Page"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("/boxing-2.jpg", e)}
                    >
                      <img
                        src="/boxing-2.jpg"
                        alt="UMass Boxing Club - Events Page"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("/boxing-3.jpg", e)}
                    >
                      <img
                        src="/boxing-3.jpg"
                        alt="UMass Boxing Club - Dashboard"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden border border-accent-gold/10 cursor-zoom-in hover:opacity-90 transition-opacity"
                      onClick={(e) => handleImageClick("/boxing-4.jpg", e)}
                    >
                      <img
                        src="/boxing-4.jpg"
                        alt="UMass Boxing Club - Contact Form"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </section>
              </>
            ) : experience.company === "Embee Software" ? (
              <>
                {/* Role Overview Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      As a Software Development Intern at Embee Software, I worked on two automation-driven projects:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>PDF/CSV Validator</strong> – Developed a Python-based tool to automate payroll data extraction and conversion, reducing manual effort and securing a company-wide deployment.</li>
                      <li><strong>AI Agent/Bot Summarizer</strong> – Designed an AI-powered system to automate news summarization for press meetings using Azure Cognitive Services and OpenAI APIs, streamlining content retrieval across multiple formats.</li>
                    </ul>
                  </div>
                </section>

                {/* Key Achievements Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">PDF/CSV Validator:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Engineered a Python application to extract employee work-hour data from scanned payroll PDFs and convert them into structured CSV files.</li>
                        <li>Optimized payroll processing efficiency by 20x, leading to a company-wide contract adoption.</li>
                        <li>Implemented a Tkinter-based UI and leveraged PDFPlumber and Pandas for data extraction and transformation.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">AI Agent/Bot Summarizer:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Developed an AI agent that automates news summarization, reducing manual review time by 10x.</li>
                        <li>Implemented a web scraper using BeautifulSoup to fetch online news articles.</li>
                        <li>Processed multimedia content (audio, video, and images) using Azure Cognitive Services for speech-to-text and OCR functionalities.</li>
                        <li>Indexed retrieved data in Azure Blob Storage and enabled keyword-based retrieval via Azure Search Index.</li>
                        <li>Integrated OpenAI's language models with prompt engineering techniques for accurate, topic-based and query-based summaries.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills & Technologies Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Programming & Data Processing:</strong> Python (Pandas, Tkinter, JSON, XML, CSV), BeautifulSoup</li>
                    <li><strong>Cloud & AI Services:</strong> Azure Cognitive Services, Azure Blob Storage, Azure Search Index, OpenAI APIs</li>
                    <li><strong>Automation & UI Development:</strong> Web scraping, OCR, Speech-to-Text, Prompt Engineering</li>
                  </ul>
                </section>

                {/* Soft Skills Section */}
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Soft Skills & Work Environment Experience</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Collaboration & Teamwork:</strong> Worked closely with managers and stakeholders to align project goals with business needs.</li>
                    <li><strong>Communication:</strong> Presented technical concepts to non-technical users, ensuring clarity and ease of adoption.</li>
                    <li><strong>Problem-Solving:</strong> Designed scalable solutions to automate manual workflows, improving efficiency.</li>
                    <li><strong>Documentation:</strong> Maintained clear and structured documentation for processes, ensuring smooth handover and future scalability.</li>
                    <li><strong>Adaptability:</strong> Iterated on solutions based on user feedback, refining the tools for real-world deployment.</li>
                  </ul>
                </section>
              </>
            ) : (
              <>
                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Role Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>{experience.description}</p>
                  </div>
                </section>

                <section className="space-y-4 p-6 rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                  <ul className="list-disc list-inside space-y-2">
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
                      {experience.company === "Ferrum" && (
                        "Python, Tkinter, Geometry"
                      )}
                    </p>
                  </div>
                </section>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}