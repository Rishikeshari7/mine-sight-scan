import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, MapPin, Download, Eye } from "lucide-react";

const DetectionResults = () => {
  const detections = [
    {
      id: 1,
      location: "Region A - Sector 12",
      coords: "23.4567° N, 77.8901° E",
      status: "illegal",
      area: "12.3 km²",
      confidence: 94,
      date: "2025-01-10",
    },
    {
      id: 2,
      location: "Region B - Sector 8",
      coords: "23.5123° N, 77.9234° E",
      status: "authorized",
      area: "45.7 km²",
      confidence: 98,
      date: "2025-01-09",
    },
    {
      id: 3,
      location: "Region C - Sector 15",
      coords: "23.3456° N, 77.7890° E",
      status: "illegal",
      area: "8.9 km²",
      confidence: 87,
      date: "2025-01-08",
    },
  ];

  return (
    <div className="space-y-4">
      {detections.map((detection) => (
        <Card key={detection.id} className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-start justify-between">
            <div className="flex gap-4 flex-1">
              <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                detection.status === "illegal" ? "bg-destructive/20" : "bg-success/20"
              }`}>
                {detection.status === "illegal" ? (
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                ) : (
                  <CheckCircle2 className="h-6 w-6 text-success" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-lg">{detection.location}</h4>
                  <Badge variant={detection.status === "illegal" ? "destructive" : "default"}>
                    {detection.status === "illegal" ? "Illegal Mining" : "Authorized"}
                  </Badge>
                  <Badge variant="outline" className="font-mono text-xs">
                    {detection.confidence}% confidence
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                  <div>
                    <p className="text-muted-foreground">Coordinates</p>
                    <p className="font-mono">{detection.coords}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Area Detected</p>
                    <p className="font-semibold">{detection.area}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Detection Date</p>
                    <p>{detection.date}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    View on Map
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <MapPin className="h-4 w-4" />
                    3D View
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export Data
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DetectionResults;
