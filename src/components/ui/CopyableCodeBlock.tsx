"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyableCodeBlockProps {
  code: string;
  className?: string;
}

export function CopyableCodeBlock({ code, className }: CopyableCodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={cn(
        "group relative rounded-lg border border-stone-800 bg-stone-900",
        className
      )}
    >
      <button
        type="button"
        onClick={handleCopy}
        className="backdrop-blur-xs absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-md border border-stone-700 bg-stone-800/80 text-stone-300 opacity-80 transition-all hover:bg-stone-700 hover:text-white hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 active:scale-95"
        title={copied ? "Copied to clipboard" : "Copy command"}
        aria-label={copied ? "Copied to clipboard" : "Copy command"}
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-emerald-400" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>

      <pre className="overflow-x-auto whitespace-pre p-3.5 pr-11 font-mono text-xs leading-relaxed text-stone-100">
        {code}
      </pre>
    </div>
  );
}
