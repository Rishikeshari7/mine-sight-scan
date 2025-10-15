import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import satelliteMap from "@/assets/satellite-map.jpg";

const MapVisualization = () => {
  return (
    <Card className="p-6 bg-gradient-card border-2 border-primary/40 shadow-glow hover:border-primary transition-all duration-500">
      <div className="flex items-center justify-between mb-4 animate-slide-in">
        <h3 className="text-lg font-semibold text-primary">Interactive Map View</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-2 border-primary/30 hover:bg-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110">
            <Layers className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="border-2 border-primary/30 hover:bg-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="border-2 border-primary/30 hover:bg-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="border-2 border-primary/30 hover:bg-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="aspect-video bg-muted/20 rounded-lg border-2 border-primary/50 relative overflow-hidden hover:border-accent transition-all duration-500 group">
        {/* Satellite image background */}
        <img 
          src={satelliteMap} 
          alt="Satellite view of mining area" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Overlay detection areas */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"></div>
        
        {/* Map legend */}
        <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg border-2 border-primary/30 shadow-glow animate-scale-in">
          <p className="text-xs font-semibold mb-2 text-primary">Legend</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded bg-success shadow-glow animate-pulse"></div>
              <span className="text-success">Authorized Mining</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded bg-destructive shadow-glow-pink animate-pulse"></div>
              <span className="text-destructive">Illegal Mining</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded bg-primary shadow-glow animate-pulse"></div>
              <span className="text-primary">Detected Activity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Info Cards */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="p-3 bg-muted/20 rounded-lg border-2 border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in">
          <p className="text-xs text-primary">Latitude</p>
          <p className="font-mono text-sm text-foreground">23.4567° N</p>
        </div>
        <div className="p-3 bg-muted/20 rounded-lg border-2 border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <p className="text-xs text-primary">Longitude</p>
          <p className="font-mono text-sm text-foreground">77.8901° E</p>
        </div>
        <div className="p-3 bg-muted/20 rounded-lg border-2 border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-xs text-primary">Zoom Level</p>
          <p className="font-mono text-sm text-foreground">12</p>
        </div>
      </div>
    </Card>
  );
};

export default MapVisualization;
