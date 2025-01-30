'use client'

import { cn } from '@/lib/utils';
import { useState, useRef } from 'react';

export const CodePre = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const textInput = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current?.textContent || '');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("overflow-hidden rounded-lg border border-gray-700 bg-[#282c34] w-[95%]", className)}>
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-3">
        <span className="text-xs text-gray-400">Code</span>
        <button
          onClick={onCopy}
          className="text-gray-400 hover:text-gray-300"
          aria-label="Copy code"
        >
          {copied ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          )}
        </button>
      </div>
      <pre ref={textInput} className="py-2 px-5 bg-[#282c34]">
        {children}
      </pre>
    </div>
  );
};
