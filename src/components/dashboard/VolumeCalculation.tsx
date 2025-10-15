import { Card } from "@/components/ui/card";
import { Calculator, TrendingDown, Ruler } from "lucide-react";

const VolumeCalculation = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-4 bg-muted/20 border-border">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Ruler className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Average Depth</p>
            <p className="text-xl font-bold">34.5 m</p>
            <p className="text-xs text-muted-foreground mt-1">Based on DEM analysis</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-muted/20 border-border">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Calculator className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Total Volume</p>
            <p className="text-xl font-bold">2.4M m³</p>
            <p className="text-xs text-muted-foreground mt-1">Simpson's method</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-muted/20 border-border">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-warning/20 flex items-center justify-center flex-shrink-0">
            <TrendingDown className="h-5 w-5 text-warning" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Excavation Rate</p>
            <p className="text-xl font-bold">±12%</p>
            <p className="text-xs text-muted-foreground mt-1">Month over month</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VolumeCalculation;
