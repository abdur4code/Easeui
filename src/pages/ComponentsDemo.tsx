import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  // Extracting mode directly from Redux
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <div
      className={`border rounded-xl overflow-hidden shadow-sm transition-colors duration-300 ${
        mode === "dark"
          ? "border-zinc-800 bg-[#09090b]"
          : "border-gray-200 bg-white"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 py-3 border-b transition-colors duration-300 ${
          mode === "dark"
            ? "border-zinc-800 bg-zinc-900/50"
            : "border-gray-200 bg-gray-50/50"
        }`}
      >
        <span
          className={`text-sm font-medium ${
            mode === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Preview
        </span>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium border rounded-md transition-colors ${
            mode === "dark"
              ? "text-zinc-400 bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
              : "text-gray-600 bg-white border-gray-200 hover:bg-gray-50"
          }`}
        >
          <Code size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      {/* Manual dot grid background tied to the Redux state */}
      <div
        className={`py-20 px-4 flex items-center justify-center transition-colors ${
          mode === "dark"
            ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzQxNTUiLz48L3N2Zz4=')]"
            : "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlN2U1ZTQiLz48L3N2Zz4=')]"
        }`}
      >
        {children}
      </div>

      {isCodeVisible && (
        <div className="w-full">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;