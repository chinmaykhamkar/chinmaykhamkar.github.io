import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-muted"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold font-mono">
              <span className="text-neon-cyan">&gt;</span>
              <span className="text-foreground">chinmay</span>
              <span className="text-neon-purple">.</span>
              <span className="text-neon-green">dev</span>
              <span className="text-neon-cyan animate-pulse">_</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-neon-cyan transition-colors font-mono text-sm relative group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-neon-cyan transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="cyber" 
              size="sm"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Chinmay_Khamkar_resume.pdf';
                link.download = 'Chinmay_Khamkar_resume.pdf';
                link.click();
              }}
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-neon-cyan"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border border-muted rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-neon-cyan hover:bg-muted/50 rounded-md font-mono text-sm transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 border-t border-muted">
                <Button 
                  variant="cyber" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Chinmay_Khamkar_resume.pdf';
                    link.download = 'Chinmay_Khamkar_resume.pdf';
                    link.click();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;