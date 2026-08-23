import { useNavigate } from "react-router";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/Button/Button";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

const HomePage = () => {
  const navigate = useNavigate();
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <div
      className={`relative w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden transition-colors duration-300 ${
        mode === "dark" ? "bg-[#09090b]" : "bg-white"
      }`}
    >
      <div
        className={`absolute inset-0 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-all duration-300 ${
          mode === "dark"
            ? "bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        }`}
      />

      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[120px] rounded-full pointer-events-none transition-colors duration-700 ${
          mode === "dark" ? "bg-indigo-600/10" : "bg-indigo-500/5"
        }`}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center space-y-8 mt-[-5vh]">
        
        {/* Version Pill Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium shadow-sm backdrop-blur-md transition-colors duration-300 ${
            mode === "dark"
              ? "bg-zinc-800/50 border-zinc-700/50 text-gray-200"
              : "bg-white/60 border-gray-200/60 text-gray-800"
          }`}
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          EaseUI v2.0 is now available
        </div>

        {/* Hero Title */}
        <h1
          className={`text-6xl md:text-8xl font-extrabold tracking-tighter transition-colors duration-300 ${
            mode === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Ship UI <br />
          <span
            className={`text-transparent bg-clip-text transition-colors duration-300 ${
              mode === "dark"
                ? "bg-gradient-to-r from-white to-zinc-500"
                : "bg-gradient-to-r from-gray-900 to-gray-400"
            }`}
          >
            without friction.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
            mode === "dark" ? "text-zinc-400" : "text-gray-500"
          }`}
        >
          A design system built for speed, performance, and scale. Copy and
          paste components directly into your React applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            variant="primary"
            size="lg"
            className={`w-full sm:w-auto rounded-full px-8 h-12 text-base font-semibold shadow-md transition-shadow duration-300 ${
              mode === "dark" ? "shadow-indigo-500/20" : "shadow-indigo-500/10"
            }`}
            onClick={() => navigate("/components/button")}
          >
            Start Building <ArrowRight size={18} className="ml-2" />
          </Button>

          {/* Code snippet box */}
          <div
            className={`flex items-center w-full sm:w-auto h-12 px-6 rounded-full border font-mono text-sm cursor-pointer transition-colors duration-300 shadow-sm ${
              mode === "dark"
                ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Terminal
              size={16}
              className={`mr-3 transition-colors duration-300 ${
                mode === "dark" ? "text-zinc-500" : "text-gray-400"
              }`}
            />
            <span className="select-all">npm create ease-ui@latest</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;