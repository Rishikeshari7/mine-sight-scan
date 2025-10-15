import { Card } from "@/components/ui/card";
import { Calculator, TrendingDown, Ruler } from "lucide-react";

const VolumeCalculation = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-4 bg-muted/20 border-2 border-primary/40 hover:border-primary hover:shadow-glow hover:scale-105 transition-all duration-300 group animate-slide-up">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-primary shadow-glow flex items-center justify-center flex-shrink-0 group-hover:animate-float">
            <Ruler className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <p className="text-xs text-primary mb-1">Average Depth</p>
            <p className="text-xl font-bold text-foreground">34.5 m</p>
            <p className="text-xs text-muted-foreground mt-1">Based on DEM analysis</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-muted/20 border-2 border-accent/40 hover:border-accent hover:shadow-glow-pink hover:scale-105 transition-all duration-300 group animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-accent/30 shadow-glow-pink flex items-center justify-center flex-shrink-0 group-hover:animate-float border-2 border-accent/50">
            <Calculator className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-accent mb-1">Total Volume</p>
            <p className="text-xl font-bold text-foreground">2.4M m³</p>
            <p className="text-xs text-muted-foreground mt-1">Simpson's method</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-muted/20 border-2 border-warning/40 hover:border-warning hover:shadow-glow hover:scale-105 transition-all duration-300 group animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-warning/30 shadow-glow flex items-center justify-center flex-shrink-0 group-hover:animate-float border-2 border-warning/50">
            <TrendingDown className="h-5 w-5 text-warning" />
          </div>
          <div>
            <p className="text-xs text-warning mb-1">Excavation Rate</p>
            <p className="text-xl font-bold text-foreground">±12%</p>
            <p className="text-xs text-muted-foreground mt-1">Month over month</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VolumeCalculation;
