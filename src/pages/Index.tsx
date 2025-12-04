import { Button } from "@/components/ui/button";
import { SpaceBackground } from "@/components/SpaceBackground";
import { AstronautBear } from "@/components/AstronautBear";
import { TonBadge } from "@/components/TonBadge";

const TELEGRAM_LINK = "https://t.me/fullwin_official_bot/FULLWIN?startapp=FULLWIN1";

const Index = () => {
  const handleClick = () => {
    window.location.href = TELEGRAM_LINK;
  };

  return (
    <div className="relative h-full min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Space background with ring outlines */}
      <SpaceBackground />
      
      {/* Content container - centered narrow column */}
      <div className="relative z-10 w-full max-w-[420px] mx-auto px-6 py-8 flex flex-col items-center justify-center min-h-screen">
        {/* Astronaut bear illustration */}
        <div className="opacity-0 animate-fade-in-scale animation-delay-100 flex-shrink-0">
          <AstronautBear className="mb-8" />
        </div>
        
        {/* Text content */}
        <div className="text-center space-y-3 mb-12">
          {/* Main title */}
          <h1 
            className="opacity-0 animate-fade-in-up animation-delay-200 text-3xl font-extrabold tracking-tight"
            style={{ color: "#ffffff" }}
          >
            Welcome to FULLWIN
          </h1>
          
          {/* Get free line with badge */}
          <div className="opacity-0 animate-fade-in-up animation-delay-300 flex items-center justify-center gap-3">
            <span 
              className="text-2xl font-semibold"
              style={{ color: "#ffffff" }}
            >
              Get free
            </span>
            <TonBadge amount="3.00 TON" />
          </div>
          
          {/* Good luck line */}
          <p 
            className="opacity-0 animate-fade-in-up animation-delay-400 text-2xl font-semibold"
            style={{ color: "#ffffff" }}
          >
            Good luck! 🚀
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="opacity-0 animate-fade-in-up animation-delay-500 w-full flex justify-center px-4">
          <button
            onClick={handleClick}
            className="w-full max-w-[320px] h-14 rounded-full font-bold text-lg tracking-wide transition-all duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
            style={{
              background: "#1e9bf0",
              color: "#ffffff",
              boxShadow: "0 8px 24px rgba(30, 155, 240, 0.4)",
            }}
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
