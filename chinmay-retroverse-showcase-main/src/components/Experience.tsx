import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Purs Payments",
    location: "Portland, OR",
    duration: "Mar 2024 - Present",
    type: "Full-time",
    description: "Engineer #10 at early-stage payments startup",
    achievements: [
      "Built internal mailing tool generating daily reports for 5 merchant locations using AWS Lambda, SES",
      "Delivered dashboard with AWS QuickSight for key business metrics tracking",
      "Integrated backend APIs for merchant onboarding flow in ReactJS with Plaid webhooks",
      "Developed secure token-based authorization system using AWS services (Cognito, Lambda, API Gateway)",
      "Achieved 10% increase in transaction volume with improved conversion rates"
    ],
    tech: ["JavaScript", "React", "AWS Lambda", "DynamoDB", "AWS SES", "Plaid", "AWS Cognito"],
    highlight: "🚀 Startup Culture"
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    location: "Seattle, WA",
    duration: "May 2023 - Aug 2023",
    type: "Internship",
    description: "Worked on IoT Core services at enterprise scale",
    achievements: [
      "Designed communication channel in Spring framework for IoT devices to access IoT registry APIs",
      "Migrated existing IoT Registry APIs from controlplane to dataplane for device access via MQTT",
      "Implemented unit tests in Java Mockito with 95% code coverage",
      "Deployed code on preproduction pipeline with integration tests"
    ],
    tech: ["Java", "Spring Framework", "MQTT", "AWS IoT Core", "Mockito"],
    highlight: "☁️ Enterprise Scale"
  },
  {
    title: "Software Development Engineer",
    company: "USC Dornsife",
    location: "Los Angeles, CA",
    duration: "May 2022 - May 2023",
    type: "Part-time",
    description: "Full-stack development for academic research platform",
    achievements: [
      "Built daily activity tracking web app for 9k+ users similar to Workday",
      "Designed API endpoints to store and retrieve data from NodeJS backend with remote SQL database",
      "Delivered responsive web app using Bootstrap with CRUD operations",
      "Synchronized data between local and remote records via PuTTY"
    ],
    tech: ["JavaScript", "Node.js", "Bootstrap", "SQL", "PuTTY"],
    highlight: "🎓 Academic Impact"
  },
  {
    title: "Software Development Engineer",
    company: "VelarHealth",
    location: "Mumbai, IN",
    duration: "Mar 2021 - Nov 2021",
    type: "Contract",
    description: "Healthcare platform development",
    achievements: [
      "Developed frontend with onboarding, search, and appointment booking features",
      "Performed code migration from HTML to EJS optimizing page speed by 15%",
      "Implemented mailing system for CRM notifications",
      "Automated lead management improving CRM team efficiency by 30%"
    ],
    tech: ["HTML", "EJS", "JavaScript", "Node.js", "CRM Integration"],
    highlight: "🏥 Healthcare Tech"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-glow-purple">Work</span>{" "}
            <span className="text-glow-cyan">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From{" "}
            <span className="text-neon-purple font-mono">startup culture</span> to{" "}
            <span className="text-neon-cyan font-mono">enterprise scale</span>
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company}
              className="bg-muted/20 border-muted hover:border-neon-purple/50 transition-all duration-500 hover:shadow-[0_0_25px_hsl(var(--neon-purple)/0.1)] group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs font-mono border-neon-green text-neon-green">
                        {exp.highlight}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl group-hover:text-neon-purple transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-neon-cyan" />
                        <span className="font-medium text-neon-cyan">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-sm">{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-lg">
                  {exp.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-neon-cyan">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-5 w-20 h-20 border-2 border-neon-green/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-5 w-16 h-16 border border-neon-pink/20 rotate-45 animate-float" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default Experience;