import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Map, Box, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";
import FileUploadSection from "@/components/dashboard/FileUploadSection";
import MapVisualization from "@/components/dashboard/MapVisualization";
import VolumeCalculation from "@/components/dashboard/VolumeCalculation";
import DetectionResults from "@/components/dashboard/DetectionResults";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Box className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Mining Detection System</h1>
                <p className="text-sm text-muted-foreground">NTRO - National Technical Research Organisation</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Area Scanned</p>
                <p className="text-2xl font-bold">1,245 km²</p>
              </div>
              <Map className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Authorized Mining</p>
                <p className="text-2xl font-bold text-success">342 km²</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Illegal Mining Detected</p>
                <p className="text-2xl font-bold text-destructive">87 km²</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Volume Extracted</p>
                <p className="text-2xl font-bold">2.4M m³</p>
              </div>
              <Box className="h-8 w-8 text-accent" />
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card">
            <TabsTrigger value="upload" className="gap-2">
              <Upload className="h-4 w-4" />
              Upload Data
            </TabsTrigger>
            <TabsTrigger value="map" className="gap-2">
              <Map className="h-4 w-4" />
              2D Visualization
            </TabsTrigger>
            <TabsTrigger value="3d" className="gap-2">
              <Box className="h-4 w-4" />
              3D Terrain
            </TabsTrigger>
            <TabsTrigger value="results" className="gap-2">
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
            <Card className="p-6 bg-gradient-card border-border shadow-card">
              <h3 className="text-lg font-semibold mb-4">3D Terrain Visualization</h3>
              <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border border-border">
                <div className="text-center">
                  <Box className="h-12 w-12 mx-auto mb-2 text-muted-foreground animate-float" />
                  <p className="text-muted-foreground">3D visualization will render here</p>
                  <p className="text-sm text-muted-foreground mt-1">Upload DEM data to enable 3D view</p>
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
