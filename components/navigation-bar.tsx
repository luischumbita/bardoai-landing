"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationBarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export function NavigationBar({ activeSection, onNavigate }: NavigationBarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "home", label: "INICIO" },
    { id: "about", label: "ACERCA DE" },
    { id: "technologies", label: "TECNOLOGÍAS" },
    { id: "architecture", label: "ARQUITECTURA" },
    { id: "rag", label: "RAG" },
    { id: "branches", label: "ÁREAS" },
    { id: "team", label: "EQUIPO" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center">
        <div className="flex space-x-6 bg-[#0B1C1E]/50 backdrop-blur-sm rounded-full px-8 py-3 border border-[#D4B363]/20">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative px-4 py-2 text-sm font-semibold tracking-wider transition-colors duration-300 ${
                activeSection === item.id ? "text-[#D4B363]" : "text-gray-300 hover:text-[#D4B363]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4B363] rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              {activeSection === item.id && <div className="absolute inset-0 bg-[#D4B363]/10 rounded-full -z-10"></div>}
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#D4B363] hover:bg-[#D4B363]/20"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0B1C1E]/95 backdrop-blur-sm border-b border-[#D4B363]/20 z-50"
          >
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsOpen(false)
                  }}
                  className={`text-left px-4 py-3 text-sm font-semibold tracking-wider transition-colors duration-300 rounded-lg ${
                    activeSection === item.id
                      ? "text-[#D4B363] bg-[#D4B363]/10"
                      : "text-gray-300 hover:text-[#D4B363] hover:bg-[#D4B363]/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </>
  )
}
