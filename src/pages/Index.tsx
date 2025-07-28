import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-muted bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="text-sm text-muted-foreground font-mono">
              Built with <span className="text-neon-pink">❤️</span> using{" "}
              <span className="text-neon-cyan">React</span> +{" "}
              <span className="text-neon-purple">TypeScript</span> +{" "}
              <span className="text-neon-green">Tailwind CSS</span>
            </div>
            <div className="text-xs text-muted-foreground">
              © 2024 Chinmay Khamkar. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
