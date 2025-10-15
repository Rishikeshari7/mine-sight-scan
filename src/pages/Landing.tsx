import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Satellite, Map, Box, FileText, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">NTRO - National Technical Research Organisation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Open Crust Mining Detection & 3D Visualization
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Advanced satellite imagery analysis system for automated detection of mining activities, 
              illegal mining identification, and precise volume calculations.
            </p>

            <div className="flex gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90 shadow-glow">
                  <Satellite className="h-5 w-5" />
                  Open Dashboard
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-card bg-gradient-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Box className="h-20 w-20 mx-auto mb-4 text-primary animate-float" />
                  <p className="text-lg text-muted-foreground">Interactive 3D Visualization Preview</p>
                </div>
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
              <Card key={index} className="p-6 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
              <Card key={index} className="p-6 text-center bg-gradient-card border-border">
                <p className="font-semibold mb-1">{tech.name}</p>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-card border-border shadow-card">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access the dashboard to upload satellite imagery, analyze mining activities, and generate comprehensive reports
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90">
                <Satellite className="h-5 w-5" />
                Launch Dashboard
              </Button>
            </Link>
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
