import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, Download } from "lucide-react";

const projects = [
  {
    title: "Automated-Cold-Email",
    description: "Helped friends land interviews with automated email generation",
    tech: ["Python", "OpenAI", "Streamlit"],
    stars: 25,
    type: "github",
    link: "https://github.com/chinmaykhamkar/automate-cold-email",
    highlight: "🎯 Interview Generator"
  },
  {
    title: "VS Code Lofi-Mix",
    description: "Music extension for developers to boost productivity",
    tech: ["JavaScript", "VS Code API", "Node.js"],
    downloads: 240,
    type: "marketplace",
    link: "https://marketplace.visualstudio.com/items?itemName=chinmaykhamkar.lofi-mix",
    highlight: "🎵 Dev Tool"
  },
  {
    title: "StackOverflow-ChatGPT",
    description: "Chrome extension integrating ChatGPT with StackOverflow",
    tech: ["JavaScript", "Chrome API", "OpenAI"],
    stars: 13,
    type: "chrome",
    link: "https://github.com/chinmaykhamkar/chat-gpt-stackoverflow",
    highlight: "🤖 AI Integration"
  },
  {
    title: "LoR Manager",
    description: "Letter of Recommendation management system used by professors",
    tech: ["React", "Node.js", "MongoDB"],
    type: "web",
    link: "https://github.com/chinmaykhamkar/LoR",
    highlight: "🎓 Academic Tool"
  },
  {
    title: "Create Viral Reels/Shorts",
    description: "Code-powered content creation tool",
    tech: ["React", "Node.js", "AI", "Video Processing"],
    type: "web",
    link: "https://github.com/chinmaykhamkar/viral-reels-saas",
    highlight: "📹 Content Creator"
  },
  {
    title: "timeago-format",
    description: "NPM package for human-readable time formatting",
    tech: ["TypeScript", "NPM", "Jest"],
    downloads: 50,
    type: "npm",
    link: "https://www.npmjs.com/package/timeago-format",
    highlight: "📦 NPM Package"
  },
  {
    title: "Chat with PDFs & YouTube",
    description: "AI-powered document and video analysis tool",
    tech: ["Python", "LangChain", "OpenAI", "Streamlit"],
    type: "ai",
    link: "https://github.com/chinmaykhamkar/youtube-pdf-chatbot",
    highlight: "🧠 AI Chat"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-glow-cyan">Featured</span>{" "}
            <span className="text-glow-purple">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open source projects with{" "}
            <span className="text-neon-green font-mono">real users</span> and{" "}
            <span className="text-neon-cyan font-mono">measurable impact</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-muted/20 border-muted hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.1)] group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs font-mono border-neon-purple text-neon-purple">
                      {project.highlight}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-neon-purple transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {project.stars && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-neon-orange" />
                        <span className="font-mono">{project.stars}</span>
                      </div>
                    )}
                    {project.downloads && (
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4 text-neon-green" />
                        <span className="font-mono">{project.downloads}+</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="matrix" 
            size="lg"
            onClick={() => window.open('https://github.com/chinmaykhamkar', '_blank')}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-neon-purple/20 rotate-45 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-neon-cyan/20 rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Projects;