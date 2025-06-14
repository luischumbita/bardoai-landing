"use client"

import { motion } from "framer-motion"
import { ArrowRight, Search, MessageSquare, FileText } from "lucide-react"

export function RAGPipeline() {
  const steps = [
    {
      title: "Consulta Estudiantil",
      description: "Pregunta académica del estudiante",
      icon: <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />,
      color: "#D4B363",
    },
    {
      title: "Recuperador UNLAR",
      description: "Busca en la base de conocimiento universitaria",
      icon: <Search className="h-5 w-5 md:h-6 md:w-6" />,
      color: "#D4B363",
    },
    {
      title: "Generador Educativo",
      description: "Contextualiza con material académico de la UNLAR",
      icon: <FileText className="h-5 w-5 md:h-6 md:w-6" />,
      color: "#D4B363",
    },
    {
      title: "Respuesta Personalizada",
      description: "Respuesta adaptada al contexto universitario",
      icon: <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />,
      color: "#D4B363",
    },
  ]

  return (
    <div className="bg-[#0B1C1E]/80 rounded-2xl p-4 md:p-6 border border-[#D4B363]/30 backdrop-blur-sm">
      <h3 className="text-xl md:text-2xl font-bold text-[#D4B363] mb-4 md:mb-6 text-center">PIPELINE RAG EDUCATIVO</h3>

      <div className="space-y-4 md:space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-[#272F25]/50 rounded-lg border border-[#D4B363]/20 hover:border-[#D4B363]/40 transition-colors duration-300">
              <div className="p-2 md:p-3 rounded-full flex-shrink-0" style={{ backgroundColor: `${step.color}20` }}>
                <div style={{ color: step.color }}>{step.icon}</div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-1 text-sm md:text-base">{step.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm">{step.description}</p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center my-2"
              >
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-[#D4B363]" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        className="mt-6 md:mt-8 p-3 md:p-4 bg-gradient-to-r from-[#D4B363]/10 to-transparent rounded-lg border border-[#D4B363]/20"
      >
        <p className="text-center text-gray-300 text-xs md:text-sm">
          <span className="text-[#D4B363] font-semibold">Conocimiento universitario especializado</span> combinado con
          <span className="text-[#D4B363] font-semibold"> IA educativa avanzada</span> para asistencia académica
          personalizada
        </p>
      </motion.div>
    </div>
  )
}
