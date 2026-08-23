import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { 
  vscDarkPlus, 
  oneLight 
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  
  const { mode } = useSelector((state: RootState) => state.theme);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`relative w-full rounded-b-xl overflow-hidden transition-colors duration-300 ${
        mode === "dark" 
          ? "bg-[#1E1E1E]" 
          : "bg-gray-50 border-t border-gray-200"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 py-3 border-b transition-colors duration-300 ${
          mode === "dark" 
            ? "bg-[#2D2D2D] border-[#404040]" 
            : "bg-gray-100 border-gray-200"
        }`}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>

        {/* Language Badge */}
        <span
          className={`text-xs font-mono absolute left-1/2 -translate-x-1/2 transition-colors duration-300 ${
            mode === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {language}
        </span>

        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 px-2 py-1 text-xs rounded transition-colors ${
            mode === "dark"
              ? "text-gray-400 hover:text-white hover:bg-white/10"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"
          }`}
        >
          {copied ? (
            <Check
              size={14}
              className={mode === "dark" ? "text-green-400" : "text-green-600"}
            />
          ) : (
            <Copy size={14} />
          )}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Syntax Highlighted Code Area */}
      <div className="text-sm font-mono overflow-x-auto custom-scrollbar">
        <SyntaxHighlighter
          language={language}
         
          style={mode === "dark" ? vscDarkPlus : oneLight}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            background: "transparent", 
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;