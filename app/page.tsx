"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Database, Cpu, Network, Zap, Search, MessageSquare, CheckCircle, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CosmicBackground } from "@/components/cosmic-background"
import { NavigationBar } from "@/components/navigation-bar"
import { TechnologyGrid } from "@/components/technology-grid"
import { RAGPipeline } from "@/components/rag-pipeline"

export default function BardoAILanding() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const [activeSection, setActiveSection] = useState("home")
  // Estado para mensaje temporal y modal de imagen principal
  const [showHintPrincipal, setShowHintPrincipal] = useState(true)
  const [showModalPrincipal, setShowModalPrincipal] = useState(false)
  // Estado para mensaje temporal y modal de imagen equipo
  const [showHintEquipo, setShowHintEquipo] = useState(true)
  const [showModalEquipo, setShowModalEquipo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "technologies", "architecture", "rag", "branches", "team"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer1 = setTimeout(() => setShowHintPrincipal(false), 3000)
    const timer2 = setTimeout(() => setShowHintEquipo(false), 3000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1C1E] via-[#09191D] to-[#0B1C1E] text-white overflow-x-hidden relative">
      <CosmicBackground />

      {/* Header Section */}
      <header className="relative z-50 bg-[#0B1C1E]/80 backdrop-blur-sm border-b border-[#D4B363]/20 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <div className="flex justify-center items-center mb-4">
              <img src="/images/bardoai-logo.png" alt="BardoAI Logo" className="w-16 h-16 object-contain rounded-lg border-2 border-dashed border-[#D4B363]/30 bg-gradient-to-br from-[#D4B363]/20 to-[#D4B363]/10 animate-pulse-glow" />
            </div>
            <h1 className="text-4xl font-bold tracking-wider text-white animate-pulse-glow">BARDO AI</h1>
          </motion.div>

          {/* Navigation */}
          <NavigationBar activeSection={activeSection} onNavigate={scrollToSection} />
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-10">
        <motion.div style={{ y }} className="text-center z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">BIENVENIDO A </span>
              <span className="text-[#D4B363] drop-shadow-[0_0_20px_rgba(212,179,99,0.5)]">BARDOAI</span>
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-[#D4B363] drop-shadow-[0_0_20px_rgba(212,179,99,0.5)]">
                ORQUESTANDO INTELIGENCIA ARTIFICIAL A TRAVÉS DEL COSMOS HACIA TU AULA
              </span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4B363] to-transparent mx-auto mb-8"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto px-4"
          >
            Ayudante de cátedra especializado para la Universidad Nacional de La Rioja, potenciado por tecnología RAG de
            vanguardia
          </motion.p>

          {/* Image Space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-4xl mx-auto px-4"
          >
            <div className="bg-gradient-to-br from-[#272F25]/50 to-[#09191D]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#D4B363]/20">
              <div className="w-full h-full min-h-40 sm:min-h-60 md:min-h-80 flex flex-col items-center justify-center p-2 relative">
                {showHintPrincipal && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#D4B363] text-[#0B1C1E] px-3 py-1 rounded shadow animate-pulse z-10 text-xs md:text-sm">
                    ¡Pulsa la imagen!
                  </div>
                )}
                <img
                  src="/images/imagenprincipal..png"
                  alt="Imagen Principal BardoAI"
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg mx-auto cursor-pointer"
                  onClick={() => setShowModalPrincipal(true)}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Overview Section */}
      <section id="about" className="py-16 md:py-20 px-4 relative bg-[#272F25]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              ¿QUÉ IMPULSA A
              <span className="text-[#D4B363] ml-4 relative">
                BARDOAI?
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4B363]"></div>
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4"
          >
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 text-center">
              BardoAI es un asistente educativo revolucionario diseñado específicamente para la Universidad Nacional de
              La Rioja. Utiliza tecnología de Generación Aumentada por Recuperación (RAG) para proporcionar apoyo
              académico personalizado, funcionando como un ayudante de cátedra especializado que comprende el contexto
              universitario local.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center">
              Mediante la orquestación de múltiples agentes de IA especializados en educación superior, BardoAI
              transforma la experiencia de aprendizaje, ofreciendo respuestas contextualizadas, material de estudio
              personalizado y apoyo continuo tanto para estudiantes como para docentes de la UNLAR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16 md:py-20 px-4 relative bg-[#0B1C1E]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">TECNOLOGÍAS PRINCIPALES</h2>
              <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 border-2 border-[#D4B363] rounded-full animate-spin opacity-50"></div>
            </div>
          </motion.div>

          <TechnologyGrid />
        </div>
      </section>

      {/* Multi-Agent Architecture Section */}
      <section id="architecture" className="py-16 md:py-20 px-4 relative bg-[#272F25]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white relative">
              <span className="relative">
                ORQUESTACIÓN MULTI-AGENTE
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-6 md:h-8 bg-[#D4B363]/20 rounded-full blur-xl"></div>
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8">
                BardoAI implementa una arquitectura multi-agente especializada en educación universitaria, donde cada
                agente tiene roles específicos para optimizar el aprendizaje. Estos agentes colaboran para ofrecer
                asistencia académica personalizada, adaptándose al plan de estudios de la UNLAR y las necesidades
                específicas de cada cátedra.
              </p>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4B363] mb-4">AGENTES EDUCATIVOS</h3>
                {[
                  {
                    name: "Agente Recuperador Académico",
                    desc: "Encuentra material de estudio y recursos universitarios relevantes",
                    icon: <Search className="h-4 w-4 md:h-5 md:w-5" />,
                  },
                  {
                    name: "Agente Planificador Curricular",
                    desc: "Organiza contenido según el plan de estudios de la UNLAR",
                    icon: <Network className="h-4 w-4 md:h-5 md:w-5" />,
                  },
                  {
                    name: "Agente Tutor Virtual",
                    desc: "Genera explicaciones pedagógicas adaptadas al nivel universitario",
                    icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" />,
                  },
                  {
                    name: "Agente de Evaluación",
                    desc: "Crea ejercicios y evalúa el progreso académico",
                    icon: <Zap className="h-4 w-4 md:h-5 md:w-5" />,
                  },
                  {
                    name: "Coordinador Académico",
                    desc: "Gestiona la interacción entre agentes y mantiene coherencia educativa",
                    icon: <Cpu className="h-4 w-4 md:h-5 md:w-5" />,
                  },
                ].map((agent, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-[#09191D]/50 border border-[#D4B363]/20"
                  >
                    <div className="text-[#D4B363] mt-1 flex-shrink-0">{agent.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">{agent.name}</h4>
                      <p className="text-gray-400 text-xs md:text-sm">{agent.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <Card className="bg-[#09191D]/80 border-[#D4B363]/30 backdrop-blur-sm mb-6 md:mb-8">
                <CardHeader>
                  <CardTitle className="text-[#D4B363] text-lg md:text-xl">BENEFICIOS EDUCATIVOS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4">
                  {[
                    {
                      title: "Personalización Académica",
                      desc: "Adapta el contenido al nivel y carrera específica del estudiante",
                    },
                    {
                      title: "Apoyo Continuo",
                      desc: "Disponible 24/7 para resolver dudas y guiar el aprendizaje",
                    },
                    {
                      title: "Integración Curricular",
                      desc: "Alineado con los programas de estudio de la UNLAR",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#D4B363] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm md:text-base">{benefit.title}</h4>
                        <p className="text-gray-400 text-xs md:text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4B363]/10 to-transparent rounded-lg"></div>
                <div className="relative p-4 md:p-6 border border-[#D4B363]/30 rounded-lg">
                  <div className="flex items-center justify-center space-x-2 md:space-x-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.5, 1, 0.5],
                          boxShadow: [
                            '0 0 0px #D4B363',
                            '0 0 16px #D4B363',
                            '0 0 0px #D4B363'
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                        className="w-2 h-2 md:w-3 md:h-3 bg-[#D4B363] rounded-full shadow-lg"
                      />
                    ))}
                  </div>
                  <p className="text-center text-gray-400 text-xs md:text-sm mt-3 md:mt-4">
                    Colaboración de Agentes Educativos
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RAG Section */}
      <section id="rag" className="py-16 md:py-20 px-4 relative bg-[#09191D]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white relative">
              <span className="relative">
                DESBLOQUEANDO RAG
                <div className="absolute inset-0 bg-[#D4B363]/20 blur-xl rounded-lg"></div>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#D4B363] font-semibold">GENERACIÓN AUMENTADA POR RECUPERACIÓN</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8">
                La tecnología RAG de BardoAI está específicamente entrenada con el contenido académico de la Universidad
                Nacional de La Rioja. Combina la recuperación inteligente de material universitario con generación
                contextualizada, creando un asistente que comprende tanto el contenido como la metodología educativa de
                la UNLAR.
              </p>

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4B363] mb-4">BENEFICIOS UNIVERSITARIOS</h3>
                {[
                  {
                    title: "Precisión Académica",
                    desc: "Respuestas basadas en el material oficial de la UNLAR",
                  },
                  {
                    title: "Actualización Continua",
                    desc: "Incorpora los últimos cambios en planes de estudio y contenidos",
                  },
                  {
                    title: "Contextualización Local",
                    desc: "Adaptado a la realidad y metodología de la universidad",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#D4B363] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">{benefit.title}</h4>
                      <p className="text-gray-400 text-xs md:text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <RAGPipeline />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-16 md:py-20 px-4 relative bg-[#252315]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">ÁREAS DE BARDOAI</h2>
              <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-2 bg-[#D4B363] rounded-full"></div>
            </div>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
              BardoAI se desarrolla en múltiples áreas especializadas, cada una enfocada en mejorar la experiencia
              educativa en la Universidad Nacional de La Rioja.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4">
            {[
              {
                title: "INVESTIGACIÓN EDUCATIVA",
                desc: "Desarrollo de metodologías de IA aplicadas a la educación superior",
                icon: <Database className="h-6 w-6 md:h-8 md:w-8" />,
                details: "Explorando nuevas formas de personalizar el aprendizaje universitario",
              },
              {
                title: "DESARROLLO TECNOLÓGICO",
                desc: "Construcción de la infraestructura de IA educativa",
                icon: <Cpu className="h-6 w-6 md:h-8 md:w-8" />,
                details: "Sistemas robustos y escalables para el entorno universitario",
              },
              {
                title: "INTEGRACIÓN ACADÉMICA",
                desc: "Conexión con sistemas y procesos universitarios existentes",
                icon: <Network className="h-6 w-6 md:h-8 md:w-8" />,
                details: "Integración perfecta con la infraestructura académica de la UNLAR",
              },
            ].map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#09191D]/80 border-[#D4B363]/30 backdrop-blur-sm hover:border-[#D4B363]/60 transition-all duration-300 group h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 md:p-4 bg-[#D4B363]/20 rounded-full text-[#D4B363] group-hover:bg-[#D4B363]/30 transition-colors duration-300">
                      {branch.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold text-white mb-2">{branch.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-300 mb-4 text-sm md:text-base">{branch.desc}</CardDescription>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{branch.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-20 px-4 relative bg-[#0B1C1E]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">TRABAJO EN EQUIPO</h2>
              <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 border-2 border-[#D4B363] rounded-full animate-pulse opacity-50"></div>
            </div>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
              La colaboración y el trabajo en equipo son fundamentales para el desarrollo y éxito de BardoAI en el
              entorno universitario.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <div className="bg-gradient-to-br from-[#272F25]/50 to-[#09191D]/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-[#D4B363]/20">
                <div className="w-full h-full min-h-40 sm:min-h-60 md:min-h-80 flex flex-col items-center justify-center p-2 relative">
                  {showHintEquipo && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#D4B363] text-[#0B1C1E] px-3 py-1 rounded shadow animate-pulse z-10 text-xs md:text-sm">
                      ¡Pulsa la imagen!
                    </div>
                  )}
                  <img
                    src="/images/ImageContributor.jpeg"
                    alt="Imagen Equipo BardoAI"
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg mx-auto cursor-pointer"
                    onClick={() => setShowModalEquipo(true)}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#D4B363] mb-6">Colaboración Interdisciplinaria</h3>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  El desarrollo de BardoAI requiere la colaboración estrecha entre diferentes disciplinas: ingeniería en
                  sistemas, pedagogía, ciencias de la computación y expertos en el dominio académico de la UNLAR.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Desarrollo Colaborativo",
                      desc: "Equipos multidisciplinarios trabajando en sinergia",
                      icon: <Network className="h-5 w-5" />,
                    },
                    {
                      title: "Metodología Ágil",
                      desc: "Iteraciones rápidas con feedback continuo de la comunidad universitaria",
                      icon: <Zap className="h-5 w-5" />,
                    },
                    {
                      title: "Innovación Conjunta",
                      desc: "Combinando expertise técnico con conocimiento pedagógico",
                      icon: <Users className="h-5 w-5" />,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-4 bg-[#272F25]/30 rounded-lg border border-[#D4B363]/20"
                    >
                      <div className="text-[#D4B363] mt-1 flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white text-sm md:text-base">{item.title}</h4>
                        <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Solo la frase */}
      <footer className="py-8 md:py-12 px-4 bg-[#0B1C1E] relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 italic text-sm md:text-base leading-relaxed px-4"
          >
            "En el reino de las posibilidades infinitas, incluso los errores se convierten en puertas hacia el
            descubrimiento."
          </motion.p>
        </div>
      </footer>

      <AnimatePresence>
        {showModalPrincipal && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur flex items-center justify-center z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModalPrincipal(false)}
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <motion.img
              src="/images/imagenprincipal..png"
              alt="Imagen Principal BardoAI"
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-lg mx-auto"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={e => e.stopPropagation()}
            />
            <button className="absolute top-4 right-4 text-white text-3xl font-bold z-10" onClick={() => setShowModalPrincipal(false)}>&times;</button>
          </motion.div>
        )}
        {showModalEquipo && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur flex items-center justify-center z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModalEquipo(false)}
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <motion.img
              src="/images/ImageContributor.jpeg"
              alt="Imagen Equipo BardoAI"
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-lg mx-auto"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={e => e.stopPropagation()}
            />
            <button className="absolute top-4 right-4 text-white text-3xl font-bold z-10" onClick={() => setShowModalEquipo(false)}>&times;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
