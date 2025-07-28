import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MessageSquare, Send, MapPin, Copy, BookOpen, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText("khamkarchinmay4@gmail.com");
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard",
      duration: 2000,
    });
  };

  const showEmailPopup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Please email me directly",
      description: "Email me at khamkarchinmay4@gmail.com",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-glow-pink">Let's</span>{" "}
            <span className="text-glow-cyan">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to relocate and work on{" "}
            <span className="text-neon-pink font-mono">amazing projects</span>. 
            Let's build something{" "}
            <span className="text-neon-cyan font-mono">extraordinary together</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-muted/20 border-muted hover:border-neon-orange/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-neon-orange">
                  <BookOpen className="w-6 h-6" />
                  Read My Blog
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Check out my latest thoughts on{" "}
                  <span className="text-neon-cyan font-mono">software engineering</span>,{" "}
                  <span className="text-neon-pink font-mono">startup culture</span>, and{" "}
                  <span className="text-neon-green font-mono">tech insights</span>.
                </p>
                <a
                  href="https://medium.com/@khamkarchinmay4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neon-orange hover:text-neon-orange/80 transition-colors font-mono text-sm"
                >
                  Visit my Medium blog →
                </a>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted/20 border border-muted hover:border-neon-green/50 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--neon-green)/0.1)] group">
                <div className="p-3 bg-neon-green/10 border border-neon-green/20 rounded-lg">
                  <Mail className="w-6 h-6 text-neon-green" />
                </div>
                <div className="flex-1">
                  <div className="font-medium group-hover:text-neon-green transition-colors">
                    Email
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">
                    khamkarchinmay4@gmail.com
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyEmail}
                  className="border-neon-green/20 text-neon-green hover:bg-neon-green/10 hover:border-neon-green/50"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>

              <a
                href="https://www.linkedin.com/in/chinmaykhamkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-muted/20 border border-muted hover:border-neon-purple/50 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--neon-purple)/0.1)] group"
              >
                <div className="p-3 bg-neon-purple/10 border border-neon-purple/20 rounded-lg">
                  <Linkedin className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <div className="font-medium group-hover:text-neon-purple transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">
                    linkedin.com/in/chinmaykhamkar
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/chinmaykhamkar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-muted/20 border border-muted hover:border-neon-cyan/50 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.1)] group"
              >
                <div className="p-3 bg-neon-cyan/10 border border-neon-cyan/20 rounded-lg">
                  <Github className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <div className="font-medium group-hover:text-neon-cyan transition-colors">
                    GitHub
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">
                    github.com/chinmaykhamkar
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-muted/20 border border-muted rounded-lg">
                <div className="p-3 bg-neon-pink/10 border border-neon-pink/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-neon-pink" />
                </div>
                <div>
                  <div className="font-medium text-neon-pink">
                    Location
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">
                    Portland, OR (Ready to relocate)
                  </div>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full border-neon-green/20 text-neon-green hover:bg-neon-green/10 hover:border-neon-green/50"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Chinmay_Khamkar_resume.pdf';
                  link.download = 'Chinmay_Khamkar_resume.pdf';
                  link.click();
                }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-muted/20 border-muted hover:border-neon-pink/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-neon-pink">
                <Send className="w-6 h-6" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={showEmailPopup}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neon-cyan">Name</label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-background/50 border-muted focus:border-neon-cyan"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neon-cyan">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-background/50 border-muted focus:border-neon-cyan"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neon-cyan">Subject</label>
                  <Input 
                    placeholder="Let's talk about..." 
                    className="bg-background/50 border-muted focus:border-neon-cyan"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neon-cyan">Message</label>
                  <Textarea 
                    placeholder="Your message here..." 
                    className="bg-background/50 border-muted focus:border-neon-cyan min-h-[120px] resize-none"
                  />
                </div>
                
                <Button variant="glow" className="w-full" size="lg" type="submit">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
            "You miss 100% of the shots you don't take"
          </blockquote>
          <div className="mt-4 space-y-2">
            <cite className="text-neon-green font-mono text-sm block">- Wayne Gretzky</cite>
            <cite className="text-neon-cyan font-mono text-sm block">- Michael Scott</cite>
            <cite className="text-neon-purple font-mono text-sm block">- Chinmay Khamkar</cite>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-12 h-12 border border-neon-pink/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-neon-cyan/20 rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Contact;