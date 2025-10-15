import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Image, Map, Mountain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FileUploadSection = () => {
  const { toast } = useToast();

  const handleFileUpload = (type: string) => {
    toast({
      title: "File Upload",
      description: `${type} file upload functionality will be implemented with backend processing.`,
    });
  };

  const uploadCards = [
    {
      icon: Image,
      title: "Satellite Imagery",
      description: "Upload EO/SAR/Multispectral images (GeoTIFF, JPEG, PNG)",
      formats: ".tif, .jpg, .png",
      color: "text-primary",
    },
    {
      icon: Mountain,
      title: "DEM Data",
      description: "Upload Digital Elevation Model for depth calculations",
      formats: ".tif, .dem",
      color: "text-accent",
    },
    {
      icon: Map,
      title: "Boundary Files",
      description: "Upload authorized mining area boundaries (.shp, .kml)",
      formats: ".shp, .kml, .geojson",
      color: "text-success",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {uploadCards.map((card, index) => (
        <Card 
          key={index} 
          className="p-6 bg-gradient-card border-2 border-primary/40 shadow-glow hover:shadow-glow-purple hover:border-primary hover:scale-105 transition-all duration-500 group animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="space-y-4">
            <div className={`h-12 w-12 rounded-lg bg-gradient-primary shadow-glow flex items-center justify-center group-hover:animate-float`}>
              <card.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${card.color}`}>{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{card.description}</p>
              <p className="text-xs text-muted-foreground mb-4">Supported: {card.formats}</p>
            </div>
            <Button 
              className="w-full gap-2 bg-gradient-primary hover:scale-110 shadow-glow border-2 border-primary/50 transition-all duration-300 animate-neon-pulse"
              onClick={() => handleFileUpload(card.title)}
            >
              <Upload className="h-4 w-4" />
              Upload {card.title}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FileUploadSection;
