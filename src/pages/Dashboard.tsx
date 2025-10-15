import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Map, Box, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";
import FileUploadSection from "@/components/dashboard/FileUploadSection";
import MapVisualization from "@/components/dashboard/MapVisualization";
import VolumeCalculation from "@/components/dashboard/VolumeCalculation";
import DetectionResults from "@/components/dashboard/DetectionResults";
import terrainImage from "@/assets/3d-terrain.jpg";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="border-b-2 border-primary/30 bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-glow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between animate-slide-in">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow animate-neon-pulse">
                <Box className="h-6 w-6 text-primary-foreground animate-float" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">Mining Detection System</h1>
                <p className="text-sm text-primary">NTRO - National Technical Research Organisation</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2 border-2 border-accent hover:bg-accent/20 hover:shadow-glow-pink transition-all duration-300 hover:scale-105">
              <FileText className="h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 bg-gradient-card border-2 border-primary/40 shadow-glow hover:shadow-glow-purple hover:scale-105 transition-all duration-300 animate-slide-up group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary">Total Area Scanned</p>
                <p className="text-2xl font-bold text-foreground">1,245 km²</p>
              </div>
              <Map className="h-8 w-8 text-primary group-hover:animate-float" />
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-card border-2 border-success/40 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300 animate-slide-up group" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-success">Authorized Mining</p>
                <p className="text-2xl font-bold text-success">342 km²</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-success group-hover:animate-float" />
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card border-2 border-destructive/40 shadow-card hover:shadow-glow-pink hover:scale-105 transition-all duration-300 animate-slide-up group" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-destructive">Illegal Mining Detected</p>
                <p className="text-2xl font-bold text-destructive">87 km²</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive group-hover:animate-pulse" />
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card border-2 border-accent/40 shadow-card hover:shadow-glow-pink hover:scale-105 transition-all duration-300 animate-slide-up group" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-accent">Volume Extracted</p>
                <p className="text-2xl font-bold text-foreground">2.4M m³</p>
              </div>
              <Box className="h-8 w-8 text-accent group-hover:animate-float" />
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6 animate-scale-in">
          <TabsList className="grid w-full grid-cols-4 bg-card border-2 border-primary/30 shadow-glow p-1">
            <TabsTrigger value="upload" className="gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all duration-300">
              <Upload className="h-4 w-4" />
              Upload Data
            </TabsTrigger>
            <TabsTrigger value="map" className="gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all duration-300">
              <Map className="h-4 w-4" />
              2D Visualization
            </TabsTrigger>
            <TabsTrigger value="3d" className="gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all duration-300">
              <Box className="h-4 w-4" />
              3D Terrain
            </TabsTrigger>
            <TabsTrigger value="results" className="gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all duration-300">
              <FileText className="h-4 w-4" />
              Detection Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <FileUploadSection />
          </TabsContent>

          <TabsContent value="map">
            <MapVisualization />
          </TabsContent>

          <TabsContent value="3d">
            <Card className="p-6 bg-gradient-card border-2 border-secondary/40 shadow-glow-purple hover:border-secondary transition-all duration-500">
              <h3 className="text-lg font-semibold mb-4 text-secondary">3D Terrain Visualization</h3>
              <div className="aspect-video bg-muted/20 rounded-lg border-2 border-primary/50 relative overflow-hidden hover:border-accent transition-all duration-500 group">
                <img 
                  src={terrainImage} 
                  alt="3D terrain visualization of mining pit with DEM data" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 flex items-end justify-center pb-6">
                  <p className="text-sm text-primary animate-pulse">Upload DEM data to enable interactive 3D controls</p>
                </div>
              </div>
              <VolumeCalculation />
            </Card>
          </TabsContent>

          <TabsContent value="results">
            <DetectionResults />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
