"use client"

import { useEffect, useRef } from "react"

interface CodeBlockProps {
  code: string
}

export function CodeBlock({ code }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      // Simple syntax highlighting for Python
      const highlightedCode = code
        .replace(/(class|def|from|import|return|if|else|for|in|try|except)/g, '<span style="color: #4A90E2;">$1</span>')
        .replace(/(#.*$)/gm, '<span style="color: #6B4E71;">$1</span>')
        .replace(/(".*?")/g, '<span style="color: #E8B923;">$1</span>')
        .replace(/(self|__init__)/g, '<span style="color: #F5E6CC; font-style: italic;">$1</span>')

      codeRef.current.innerHTML = highlightedCode
    }
  }, [code])

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-purple-500/20">
      <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-sm ml-4">bardoai_rag.py</span>
      </div>
      <pre className="p-6 overflow-x-auto">
        <code ref={codeRef} className="text-sm text-gray-300 font-mono leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  )
}
