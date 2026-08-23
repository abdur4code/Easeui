import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun, Github } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { RootState } from "@/store/Store";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <nav
      className={`sticky top-0 z-50 w-full h-16 flex items-center justify-between px-5 md:px-10 border-b backdrop-blur-xl transition-colors duration-300 ${mode === "dark"
          ? "bg-[#09090b]/80 border-zinc-800/60"
          : "bg-white/70 border-gray-200/60"
        }`}
    >
      <div className="flex items-center gap-6">
        <h1
          onClick={() => navigate("/")}
          className={`font-bold text-lg tracking-tight cursor-pointer select-none transition-opacity hover:opacity-70 ${mode === "dark" ? "text-white" : "text-gray-950"
            }`}
        >
          EaseUI.
        </h1>

        <div
          className={`hidden sm:flex items-center rounded-full px-3.5 py-2 border transition-all duration-200 focus-within:ring-1 ${mode === "dark"
              ? "bg-zinc-900/60 border-zinc-800 focus-within:border-zinc-600 focus-within:ring-zinc-700/30"
              : "bg-gray-100/80 border-gray-200/80 focus-within:border-gray-300 focus-within:ring-gray-300/40"
            }`}
        >
          <Search
            size={15}
            className={mode === "dark" ? "text-zinc-500" : "text-gray-400"}
          />
          <input
            type="text"
            placeholder="Search components..."
            className={`ml-2.5 bg-transparent outline-none text-[13px] w-52 ${mode === "dark"
                ? "text-zinc-200 placeholder-zinc-600"
                : "text-gray-900 placeholder-gray-600"
              }`}
          />
        </div>
      </div>

      <div className="flex items-center gap-1 text-sm font-medium">
        <span
          onClick={() => navigate("components")}
          className={`cursor-pointer rounded-md px-3 py-2 transition-colors hidden md:block ${mode === "dark"
              ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
            }`}
        >
          Components
        </span>
       <span
          onClick={() => navigate("about")}
          className={`cursor-pointer rounded-md px-3 py-2 transition-colors hidden md:block ${mode === "dark"
              ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
            }`}
        >
          About
        </span>

        <div
          className={`w-px h-4 hidden md:block mx-1.5 ${mode === "dark" ? "bg-zinc-800" : "bg-gray-200"
            }`}
        ></div>

        <a
          href="https://github.com/abdur4code/Easeui"
          target="_blank"
          className={`p-2.5 rounded-lg transition-all duration-200 ${mode === "dark"
              ? "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/80"
            }`}
        >
          <Github size={17} />
        </a>

        <button
          className={`p-2.5 rounded-lg transition-all duration-200 ${mode === "dark"
              ? "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/80"
            }`}
          onClick={() => dispatch(toggleTheme())}
        >
          {mode === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;