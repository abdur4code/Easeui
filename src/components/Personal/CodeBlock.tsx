import { useState } from "react";
import { Copy, Check } from "lucide-react";
// Import the Prism highlighter and the official VS Code Dark theme
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // Outer IDE Window Shell
    <div className="relative w-full rounded-b-xl overflow-hidden bg-[#1E1E1E]">
      
      {/* IDE Header / Window Controls */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#2D2D2D] border-b border-[#404040]">
        
        {/* Mac-style window dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        
        {/* Language Badge */}
        <span className="text-xs font-mono text-gray-400 absolute left-1/2 -translate-x-1/2">
          {language}
        </span>
        
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Syntax Highlighted Code Area */}
      <div className="text-sm font-mono overflow-x-auto custom-scrollbar">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            background: "transparent", // Let the parent #1E1E1E background show through
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;