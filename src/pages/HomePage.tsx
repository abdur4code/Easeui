import { useNavigate } from "react-router";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/Button/Button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-color)] transition-colors duration-300">
      
      {/* Light Grid Layer - Slightly darker gray (#e5e7eb) for better visibility */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-opacity duration-300 opacity-100 dark:opacity-0" />
      
      {/* Dark Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-opacity duration-300 opacity-0 dark:opacity-100" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center space-y-8 mt-[-5vh]">
        
        {/* Pill Badge - Added bg-gray-50 for subtle contrast in light mode */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 text-sm font-medium text-gray-900 dark:text-gray-200 shadow-sm transition-colors duration-300">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          EaseUI v2.0 is now available
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-gray-900 dark:text-white transition-colors duration-300">
          Ship UI <br/>
          {/* Adjusted the light mode gradient to be slightly deeper for readability */}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-600 to-gray-900 dark:from-white dark:to-zinc-500 transition-colors duration-300">
            without friction.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
          A design system built for speed, performance, and scale. Copy and paste components directly into your React applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto rounded-full px-8 h-12 text-base font-semibold shadow-md transition-colors duration-300"
            onClick={() => navigate("/components/button")}
          >
            Start Building <ArrowRight size={18} className="ml-2" />
          </Button>
          
          {/* Terminal Box - Changed light mode bg to gray-50 so it stands out from the white page */}
          <div className="flex items-center w-full sm:w-auto h-12 px-6 rounded-full bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400 font-mono text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-300 shadow-sm">
            <Terminal size={16} className="mr-3 text-gray-400 dark:text-zinc-500 transition-colors duration-300" />
            <span className="select-all">npm create ease-ui@latest</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;