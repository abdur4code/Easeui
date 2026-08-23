import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";
import { Code2, Rocket, Sparkles, Box } from "lucide-react";

const AboutPage = () => {
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <div
      className={`min-h-[calc(100vh-64px)] w-full transition-colors duration-300 overflow-hidden ${
        mode === "dark" ? "bg-[#09090b]" : "bg-white"
      }`}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32 space-y-24">
        
        {/* Header Section (Strict Minimalist Black & White Theme) */}
        <div className="text-center space-y-6 animate-fadeIn">
          {/* Minimalist Badge matching the homepage */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium shadow-sm transition-colors duration-300 ${
              mode === "dark"
                ? "bg-zinc-800/50 border-zinc-700 text-gray-200"
                : "bg-white border-gray-200 text-gray-800"
            }`}
          >
            <Sparkles size={16} className={mode === "dark" ? "text-indigo-400" : "text-indigo-500"} />
            The Story Behind EaseUI
          </div>
          
          {/* Minimalist Title matching the homepage gradient */}
          <h1
            className={`text-5xl md:text-7xl font-extrabold tracking-tighter transition-colors duration-300 ${
              mode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Built with dedication. <br />
            <span
              className={`text-transparent bg-clip-text transition-colors duration-300 ${
                mode === "dark"
                  ? "bg-gradient-to-r from-white to-zinc-500"
                  : "bg-gradient-to-r from-gray-900 to-gray-400"
              }`}
            >
              Designed for the future.
            </span>
          </h1>
          
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
              mode === "dark" ? "text-zinc-400" : "text-gray-500"
            }`}
          >
            What started as a small academic project has evolved into a
            production-ready design system. Here is how EaseUI came to life.
          </p>
        </div>

        {/* The Timeline / Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting line for desktop */}
          <div
            className={`hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] -z-10 transition-colors duration-300 ${
              mode === "dark"
                ? "bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
                : "bg-gradient-to-r from-transparent via-gray-200 to-transparent"
            }`}
          />

          {/* Card 1: The Foundation (Strict Minimalist) */}
          <div
            className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
              mode === "dark"
                ? "bg-[#09090b] border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 shadow-sm"
                : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 shadow-sm hover:shadow-md"
            }`}
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                mode === "dark"
                  ? "bg-zinc-800/80 text-zinc-300 border border-zinc-700"
                  : "bg-gray-100 text-gray-700 border border-gray-200"
              }`}
            >
              <Code2 size={24} />
            </div>
            <h3
              className={`text-xl font-bold mb-3 ${
                mode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              v1.0: The Foundation
            </h3>
            <p
              className={`leading-relaxed text-sm ${
                mode === "dark" ? "text-zinc-400" : "text-gray-600"
              }`}
            >
              EaseUI was initially conceived by my instructor,{" "}
              <strong className={mode === "dark" ? "text-zinc-200" : "text-gray-900"}>
                Devendra Dhote
              </strong>
              . It began as a foundational UI library consisting of just a few
              core components to demonstrate how a basic website could be
              structured.
            </p>
          </div>

          {/* Card 2: The Evolution (Highlighted V2 Style Preserved) */}
          <div
            className={`relative p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${
              mode === "dark"
                ? "bg-indigo-900/10 border-indigo-500/20 hover:bg-indigo-900/20 shadow-[0_8px_30px_rgb(79,70,229,0.1)]"
                : "bg-indigo-50/50 border-indigo-100 hover:bg-indigo-50 shadow-xl shadow-indigo-100/50"
            }`}
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                mode === "dark"
                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                  : "bg-indigo-100 text-indigo-600 border border-indigo-200"
              }`}
            >
              <Rocket size={24} />
            </div>
            <h3
              className={`text-xl font-bold mb-3 ${
                mode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              v2.0: The Evolution
            </h3>
            <p
              className={`leading-relaxed text-sm ${
                mode === "dark" ? "text-zinc-400" : "text-gray-700"
              }`}
            >
              He handed the codebase over to me with a challenge: understand the
              architecture and improve it. With deep dedication, I built a brand-new, dedicated homepage, restructured the routing, and created immense impact by expanding the library with multiple production-ready UI components.
            </p>
          </div>

          {/* Card 3: The Future (Strict Minimalist) */}
          <div
            className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
              mode === "dark"
                ? "bg-[#09090b] border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 shadow-sm"
                : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 shadow-sm hover:shadow-md"
            }`}
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                mode === "dark"
                  ? "bg-zinc-800/80 text-zinc-300 border border-zinc-700"
                  : "bg-gray-100 text-gray-700 border border-gray-200"
              }`}
            >
              <Box size={24} />
            </div>
            <h3
              className={`text-xl font-bold mb-3 ${
                mode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              What's Next
            </h3>
            <p
              className={`leading-relaxed text-sm ${
                mode === "dark" ? "text-zinc-400" : "text-gray-600"
              }`}
            >
              This is just the beginning. The architecture is now scalable and
              production-ready. In the future, I will be expanding the library
              with more complex UI components, advanced animations, and robust
              accessibility features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;