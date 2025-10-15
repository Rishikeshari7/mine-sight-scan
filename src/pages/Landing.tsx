import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Satellite, Map, Box, FileText, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import hero3DViz from "@/assets/hero-3d-viz.jpg";

const Landing = () => {
  const features = [
    {
      icon: Satellite,
      title: "Satellite Image Processing",
      description: "Process EO/SAR/Multispectral imagery to detect mining activity with AI-powered algorithms",
    },
    {
      icon: Map,
      title: "2D Visualization",
      description: "Interactive maps with boundary overlays and real-time detection of unauthorized mining zones",
    },
    {
      icon: Box,
      title: "3D Terrain Analysis",
      description: "DEM-based 3D visualization with depth and volume calculations using Simpson's method",
    },
    {
      icon: FileText,
      title: "Automated Reports",
      description: "Generate comprehensive reports for state and district authorities with actionable insights",
    },
    {
      icon: Shield,
      title: "Illegal Mining Detection",
      description: "Compare mining activity against authorized boundaries to identify violations instantly",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Fast processing pipeline for quick detection and response to mining activities",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-accent/10 to-transparent animate-gradient-shift bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border-2 border-primary shadow-glow mb-6 animate-neon-pulse">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">NTRO - National Technical Research Organisation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Open Crust Mining Detection & 3D Visualization
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Advanced satellite imagery analysis system for automated detection of mining activities, 
              illegal mining identification, and precise volume calculations.
            </p>

            <div className="flex gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="gap-2 bg-gradient-primary hover:scale-105 shadow-glow hover:shadow-glow-purple transition-all duration-300 border-2 border-primary/50 text-primary-foreground font-semibold animate-neon-pulse">
                  <Satellite className="h-5 w-5" />
                  Open Dashboard
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-accent hover:bg-accent/20 hover:border-accent hover:shadow-glow-pink transition-all duration-300">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-primary/50 shadow-glow bg-gradient-card relative hover:border-accent/70 hover:shadow-glow-pink transition-all duration-500">
              <img 
                src={hero3DViz} 
                alt="Interactive 3D geological terrain visualization with DEM data" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end justify-center pb-8">
                <p className="text-lg font-medium text-primary animate-pulse">Interactive 3D Visualization Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive toolset for monitoring and analyzing mining activities across regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-2 border-primary/30 shadow-card hover:shadow-glow hover:border-accent/70 transition-all duration-500 hover:scale-105 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-float shadow-glow">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
            <p className="text-muted-foreground">Built with modern technologies for reliability and performance</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "React", desc: "Frontend Framework" },
              { name: "Mapbox", desc: "2D Mapping" },
              { name: "Three.js", desc: "3D Visualization" },
              { name: "Python", desc: "Image Processing" },
            ].map((tech, index) => (
              <Card 
                key={index} 
                className="p-6 text-center bg-gradient-card border-2 border-secondary/40 hover:border-secondary hover:shadow-glow-purple transition-all duration-300 hover:scale-110 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-semibold mb-1 text-secondary">{tech.name}</p>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-card border-2 border-primary/50 shadow-glow hover:shadow-glow-pink transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-neon opacity-10 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-shift bg-[length:200%_200%]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Access the dashboard to upload satellite imagery, analyze mining activities, and generate comprehensive reports
              </p>
              <Link to="/dashboard">
                <Button size="lg" className="gap-2 bg-gradient-primary hover:scale-110 shadow-glow hover:shadow-glow-purple transition-all duration-300 border-2 border-primary/50 animate-neon-pulse">
                  <Satellite className="h-5 w-5" />
                  Launch Dashboard
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 NTRO Mining Detection System. Smart India Hackathon 2025.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="hover:text-foreground transition-colors">API Reference</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
