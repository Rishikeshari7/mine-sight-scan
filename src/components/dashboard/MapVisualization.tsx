import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import satelliteMap from "@/assets/satellite-map.jpg";

const MapVisualization = () => {
  return (
    <Card className="p-6 bg-gradient-card border-border shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Interactive Map View</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Layers className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="aspect-video bg-muted/20 rounded-lg border border-border relative overflow-hidden">
        {/* Satellite image background */}
        <img 
          src={satelliteMap} 
          alt="Satellite view of mining area" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay detection areas */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"></div>
        
        {/* Map legend */}
        <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg border border-border">
          <p className="text-xs font-semibold mb-2">Legend</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded bg-success"></div>
              <span>Authorized Mining</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded bg-destructive"></div>
              <span>Illegal Mining</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded bg-primary"></div>
              <span>Detected Activity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Info Cards */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="p-3 bg-muted/20 rounded-lg border border-border">
          <p className="text-xs text-muted-foreground">Latitude</p>
          <p className="font-mono text-sm">23.4567° N</p>
        </div>
        <div className="p-3 bg-muted/20 rounded-lg border border-border">
          <p className="text-xs text-muted-foreground">Longitude</p>
          <p className="font-mono text-sm">77.8901° E</p>
        </div>
        <div className="p-3 bg-muted/20 rounded-lg border border-border">
          <p className="text-xs text-muted-foreground">Zoom Level</p>
          <p className="font-mono text-sm">12</p>
        </div>
      </div>
    </Card>
  );
};

export default MapVisualization;
