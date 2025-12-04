import astronautBear from "@/assets/astronaut-bear.png";
import { cn } from "@/lib/utils";

interface AstronautBearProps {
  className?: string;
}

export const AstronautBear = ({ className }: AstronautBearProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Astronaut bear image */}
      <div className="w-full max-w-[220px] mx-auto">
        <img
          src={astronautBear}
          alt="Cute astronaut bear mascot holding a gift"
          className="w-full h-auto drop-shadow-lg animate-float"
        />
      </div>
    </div>
  );
};
