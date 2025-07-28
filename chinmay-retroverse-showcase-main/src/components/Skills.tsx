import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Laptop, 
  Database, 
  Cloud, 
  Wrench, 
  Palette,
  Terminal,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "neon-cyan",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C/C++", "HTML/CSS"]
  },
  {
    title: "Frontend",
    icon: Laptop,
    color: "neon-purple",
    skills: ["React", "Next.js", "Bootstrap", "Tailwind CSS", "HTML/CSS"]
  },
  {
    title: "Backend",
    icon: Terminal,
    color: "neon-green",
    skills: ["Node.js", "Flask", "Spring Framework", "RESTful APIs"]
  },
  {
    title: "Cloud & AWS",
    icon: Cloud,
    color: "electric-blue",
    skills: ["AWS Lambda", "DynamoDB", "S3", "Cognito", "API Gateway", "AWS CDK"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "neon-pink",
    skills: ["MongoDB", "MySQL", "DynamoDB", "Pinecone", "Supabase"]
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "neon-orange",
    skills: ["Git", "LangChain", "Cursor", "Claude", "VS Code", "Chrome Extensions"]
  }
];

const highlights = [
  {
    title: "Full-Stack Development",
    description: "End-to-end application development with modern tech stacks",
    icon: Cpu,
    color: "neon-cyan"
  },
  {
    title: "Cloud Architecture",
    description: "Scalable solutions using AWS services and best practices",
    icon: Cloud,
    color: "neon-purple"
  },
  {
    title: "Open Source",
    description: "Building tools that developers actually use and love",
    icon: Code2,
    color: "neon-green"
  },
  {
    title: "AI Integration",
    description: "Leveraging LLMs and AI tools for enhanced user experiences",
    icon: Palette,
    color: "neon-pink"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-glow-green">Tech</span>{" "}
            <span className="text-glow-pink">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to{" "}
            <span className="text-neon-green font-mono">build amazing things</span> and{" "}
            <span className="text-neon-pink font-mono">solve real problems</span>
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card 
                key={highlight.title}
                className="bg-muted/20 border-muted hover:border-neon-cyan/50 transition-all duration-300 text-center group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-lg bg-${highlight.color}/10 border border-${highlight.color}/20`}>
                      <IconComponent className={`w-8 h-8 text-${highlight.color}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="bg-muted/20 border-muted hover:border-neon-purple/50 transition-all duration-500 hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.1)] group"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 group-hover:text-neon-purple transition-colors">
                    <div className={`p-2 rounded-lg bg-${category.color}/10 border border-${category.color}/20`}>
                      <IconComponent className={`w-5 h-5 text-${category.color}`} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs font-mono hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-cyan font-mono">10+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-purple font-mono">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-green font-mono">6+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-pink font-mono">∞</div>
              <div className="text-sm text-muted-foreground">Coffee Consumed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-32 right-10 w-6 h-6 bg-neon-green/20 rotate-45 animate-float"></div>
      <div className="absolute bottom-32 left-10 w-8 h-8 border border-neon-cyan/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Skills;