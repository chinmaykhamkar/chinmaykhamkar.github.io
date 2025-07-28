import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react";
import cyberCat from "@/assets/cyber-cat.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative matrix-bg cat-cursor">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 animate-float">
          {/* Main title with glowing effect */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="text-glow-cyan">Chinmay</span>{" "}
              <span className="text-glow-purple">Khamkar</span>
            </h1>
            <div className="text-xl md:text-2xl font-mono">
              <span className="text-neon-green">&gt; </span>
              <span className="text-muted-foreground">Software Engineer</span>
              <span className="text-neon-cyan animate-pulse">_</span>
            </div>
          </div>

          {/* Subtitle with typing effect */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Engineer #10 at{" "}
              <span className="text-neon-cyan font-medium">Purs Payments</span> •{" "}
              <span className="text-neon-purple font-medium">AWS Alumni</span> •
              Building tools that{" "}
              <span className="text-glow-green">people actually use</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="neon" 
              size="lg" 
              className="group"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Button 
              variant="cyber" 
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/chinmaykhamkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-cyan transition-colors hover-glow-cyan p-2 rounded-lg"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/chinmaykhamkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-purple transition-colors hover-glow-purple p-2 rounded-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:khamkarchinmay4@gmail.com"
              className="text-muted-foreground hover:text-neon-green transition-colors p-2 rounded-lg"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://medium.com/@khamkarchinmay4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-pink transition-colors p-2 rounded-lg"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-neon-cyan" />
        </div>
      </div>

      {/* Floating geometric shapes and cyber cat */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-neon-cyan opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-neon-purple opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-neon-green opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-neon-pink opacity-20 animate-float" style={{animationDelay: '0.5s'}}></div>
      
      {/* Subtle cyber cat */}
      <div className="absolute top-1/3 right-16 opacity-10 animate-float" style={{animationDelay: '3s'}}>
        <img src={cyberCat} alt="" className="w-24 h-24 select-none pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;