"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TechnologyGrid() {
  const technologies = [
    {
      name: "Next.js",
      description: "Para frontends React modernos y eficientes",
      icon: "⚛️",
      category: "Frontend",
    },
    {
      name: "Express",
      description: "Plataforma de API backend",
      icon: "🚀",
      category: "Backend",
    },
    {
      name: "TypeScript",
      description: "Seguridad de tipos en todo el stack",
      icon: "📘",
      category: "Lenguaje",
    },
    {
      name: "Turborepo",
      description: "Orquestación de monorepo y caché de construcción",
      icon: "⚡",
      category: "DevOps",
    },
    {
      name: "Swagger (OpenAPI)",
      description: "Documentación de API",
      icon: "📋",
      category: "Documentación",
    },
    {
      name: "LangChain",
      description: "Para construir pipelines RAG",
      icon: "🔗",
      category: "IA/ML",
    },
    {
      name: "Qdrant VectorDatabase",
      description: "Para almacenamiento y recuperación eficiente de vectores",
      icon: "🗄️",
      category: "Base de Datos",
    },
  ]

  const techLogos: Record<string, string> = {
    'Next.js': '/images/nextjs.png',
    'TypeScript': '/images/typescript.png',
    'Turborepo': '/images/turborepo.png',
    'LangChain': '/images/langchain.png',
    'Qdrant VectorDatabase': '/images/qdrantLogo.svg',
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <Card className="bg-[#09191D]/80 border-[#D4B363]/30 backdrop-blur-sm hover:border-[#D4B363]/60 hover:bg-[#252315]/50 transition-all duration-300 group h-full">
            <CardHeader className="text-center pb-3">
              <div className="flex justify-center mb-3">
                {techLogos[tech.name] ? (
                  <img src={techLogos[tech.name]} alt={tech.name + ' logo'} className="h-12 object-contain mx-auto" />
                ) : (
                  <span className="text-3xl md:text-4xl">{tech.icon}</span>
                )}
              </div>
              <CardTitle className="text-base md:text-lg font-bold text-white mb-2">{tech.name}</CardTitle>
              <div className="inline-block px-2 py-1 bg-[#D4B363]/20 text-[#D4B363] text-xs rounded-full">
                {tech.category}
              </div>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <CardDescription className="text-gray-300 leading-relaxed text-sm">{tech.description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
