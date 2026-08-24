import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

const Footer = () => {
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <footer
      className={`relative z-10 w-full border-t transition-colors flex items-center duration-300 ${
        mode === "dark"
          ? "bg-[#09090b] border-zinc-800"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-3 py-4 md:py-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Credits & Info */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center text-sm gap-2 sm:gap-0 transition-colors duration-300 ${
              mode === "dark" ? "text-zinc-500" : "text-gray-500"
            }`}
          >
            <p>&copy; {new Date().getFullYear()} EaseUI.</p>
            
            <span
              className={`hidden sm:inline-block mx-3 transition-colors duration-300 ${
                mode === "dark" ? "text-zinc-800" : "text-gray-300"
              }`}
            >
              |
            </span>
            
            <p>Built with React & Redux Toolkit.</p>

            {/* Hidden on mobile, visible as a separator on sm+ screens */}
            <span
              className={`hidden sm:inline-block mx-3 transition-colors duration-300 ${
                mode === "dark" ? "text-zinc-800" : "text-gray-300"
              }`}
            >
              |
            </span>

            <p>
              Built by{" "}
              <a
                href="https://www.linkedin.com/in/abdur4code"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold hover:underline transition-all ${
                  mode === "dark"
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                }`}
              >
                Abdur Rahim
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;