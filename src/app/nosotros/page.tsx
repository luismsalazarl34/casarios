import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { Coffee, MapPin, Leaf, Heart, Star, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "La historia detrás de Casa Rios — Q-Grader y Q-Processing certificados por SCA. Café de especialidad colombiano con relaciones directas con productores.",
};

const values = [
  {
    icon: Coffee,
    title: "Rigor Técnico",
    description:
      "Cada lote es evaluado por Q-Grader certificado bajo protocolo SCA antes de ofrecerse. El estándar de especialidad (80+ puntos) no es negociable.",
  },
  {
    icon: MapPin,
    title: "Origen Colombiano",
    description:
      "Trabajamos exclusivamente con caficultores colombianos. Conocemos las fincas, los procesos y las personas. Nada de intermediarios anónimos.",
  },
  {
    icon: Leaf,
    title: "Comercio Directo",
    description:
      "Pagamos precios justos por encima del mercado. El productor que cuida bien su café merece ser valorado económicamente por eso.",
  },
  {
    icon: Heart,
    title: "Pasión Real",
    description:
      "Cada persona en Casa Rios bebe, estudia y ama el café. Somos catadores, baristas y estudiantes del café primero; negocio después.",
  },
  {
    icon: Star,
    title: "Q-Grader SCA",
    description:
      "Contamos con certificación Q-Grader y Q-Processing del Coffee Quality Institute — el estándar internacional de evaluación sensorial.",
  },
  {
    icon: Award,
    title: "Educación",
    description:
      "El café mejor disfrutado es el café entendido. Compartimos conocimiento a través de talleres, capacitaciones y nuestro blog.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "El Inicio",
    text: "Todo comenzó recorriendo los cafetales colombianos. Ver la diferencia entre café de especialidad y café comercial directo en origen lo cambió todo.",
  },
  {
    year: "2022",
    title: "Certificación Q-Grader",
    text: "Obtuvimos la certificación Q-Grader del Coffee Quality Institute. A partir de aquí, cada café que vendemos pasa por evaluación sensorial formal.",
  },
  {
    year: "2024",
    title: "Q-Processing & Expansión",
    text: "Sumamos la certificación Q-Processing. Comenzamos a ofrecer análisis de taza y consultoría técnica a productores y torrefactores colombianos.",
  },
  {
    year: "2026",
    title: "Casa Rios Hoy",
    text: "Café de especialidad colombiano con rigor técnico comprobado. Enviamos a todo el país y ofrecemos servicios Q-Grader a la cadena productiva.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ─── HERO: split column ─── */}
      <section className="min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 pt-[72px] bg-[#F1EFE9]">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 border-r border-[rgba(45,90,61,0.1)]">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-8">
            CR — Nosotros
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-[#15110B] leading-tight mb-6">
            Detrás de
            <br />
            <em className="not-italic text-forest-gradient">cada taza</em>
          </h1>
          <p className="text-[#4A3D2E] text-base leading-relaxed max-w-md mb-8">
            Casa Rios es un proyecto colombiano de café de especialidad. Somos catadores
            Q-Grader certificados por SCA con una convicción simple: el café extraordinario
            exige relaciones directas y rigor sensorial.
          </p>
          <div className="flex gap-6 border-t border-[rgba(45,90,61,0.12)] pt-8">
            <div>
              <p className="font-display text-2xl text-[#2D5A3D] mb-0.5">Q-Grader</p>
              <p className="font-mono text-[9px] text-[#9A8E7E] uppercase tracking-widest">CQI Certificado</p>
            </div>
            <div className="w-px bg-[rgba(45,90,61,0.12)]" />
            <div>
              <p className="font-display text-2xl text-[#2D5A3D] mb-0.5">Colombia</p>
              <p className="font-mono text-[9px] text-[#9A8E7E] uppercase tracking-widest">Envíos nacionales</p>
            </div>
            <div className="w-px bg-[rgba(45,90,61,0.12)]" />
            <div>
              <p className="font-display text-2xl text-[#2D5A3D] mb-0.5">SCA 84+</p>
              <p className="font-mono text-[9px] text-[#9A8E7E] uppercase tracking-widest">Estándar mínimo</p>
            </div>
          </div>
        </div>

        {/* Right — logo sobre color */}
        <div className="relative bg-[#2D5A3D] flex items-center justify-center overflow-hidden min-h-[400px]">
          <div className="relative w-64 h-64">
            <SafeImage
              src="/assets/logo-fondo-oscuro.jpeg"
              alt="Casa Rios"
              fill
              priority
              className="object-contain"
            />
          </div>
          {/* Decorative text */}
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase">
              Colombia · SCA Q-Grader · Q-Processing
            </p>
          </div>
        </div>
      </section>

      {/* ─── STORY + catación image ─── */}
      <section className="py-20 bg-[#FAFAF7] border-y border-[rgba(45,90,61,0.08)]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16 items-start">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-6">
              CR — Historia
            </p>
            <h2 className="font-display text-4xl text-[#15110B] leading-tight mb-8">
              Una obsesión que
              <br />se convirtió en misión
            </h2>
            <div className="space-y-5 text-[#4A3D2E] leading-relaxed text-sm">
              <p>
                Empezamos haciendo lo que cualquier amante del café haría: recorriendo fincas
                colombianas, probando lotes, aprendiendo de catadores y productores.
              </p>
              <p>
                Descubrimos que el café de especialidad no es solo un producto — es una cadena
                de cuidado que comienza en la tierra y termina en tu taza. Cada eslabón merece
                respeto y rigor técnico.
              </p>
              <p>
                Casa Rios existe para ser ese puente honesto: evaluamos cada lote con protocolo
                SCA, establecemos relaciones directas con los productores y compartimos esa
                excelencia con personas que buscan algo más en su taza diaria.
              </p>
              <p>
                Estamos en Colombia. Enviamos a todo el país. Y cada café que llega a tu puerta
                ha pasado por nuestras manos y nuestra nariz antes de salir.
              </p>
            </div>
          </div>

          {/* Catación image — REAL image from assets */}
          <div className="relative aspect-[3/4] bg-[#D6E8DB] overflow-hidden">
            <SafeImage
              src="/assets/imagen-catacion.jpeg"
              alt="Sesión de catación Q-Grader — Casa Rios"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#15110B]/60 to-transparent p-6">
              <p className="font-mono text-[9px] tracking-widest text-[#8AB89A] uppercase">
                Análisis de taza · protocolo SCA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-20 px-8 md:px-16 bg-[#F1EFE9]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-[rgba(45,90,61,0.12)] pb-8">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-3">
              CR — Trayectoria
            </p>
            <h2 className="font-display text-4xl text-[#15110B]">Línea de Tiempo</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-[rgba(45,90,61,0.2)] pl-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative pb-12 pr-8">
                <div className="absolute -left-8 top-1 w-2 h-2 bg-[#2D5A3D] translate-x-[-3px]" />
                <p className="font-mono text-[10px] tracking-widest text-[#4A7A5C] uppercase mb-2">
                  {item.year}
                </p>
                <h3 className="font-display text-xl text-[#15110B] mb-2">{item.title}</h3>
                <p className="text-[#9A8E7E] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 bg-[#2D5A3D]">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="mb-12">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#8AB89A] uppercase mb-3">
              CR — Principios
            </p>
            <h2 className="font-display text-4xl text-[#F1EFE9]">Lo que nos Define</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(138,184,154,0.1)]">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-[#2D5A3D] p-8 hover:bg-[#1E3D29] transition-colors group"
              >
                <div className="w-8 h-8 border border-[rgba(138,184,154,0.2)] flex items-center justify-center mb-6">
                  <Icon size={14} className="text-[#8AB89A]" />
                </div>
                <h3 className="font-mono text-xs tracking-widest text-[#8AB89A] uppercase mb-3">
                  {title}
                </h3>
                <p className="text-[#4A5C52] text-sm leading-relaxed group-hover:text-[#8AB89A] transition-colors">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#F1EFE9] border-t border-[rgba(45,90,61,0.1)]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-4">
              ¿Hablemos?
            </p>
            <h2 className="font-display text-4xl text-[#15110B] mb-4">
              Café colombiano
              <br />a tu puerta
            </h2>
            <p className="text-[#9A8E7E] text-sm leading-relaxed mb-8 max-w-md">
              Enviamos a todo Colombia. Si quieres análisis Q-Grader para tu lote,
              capacitaciones, o simplemente un café excepcional — escríbenos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D5A3D] text-[#F1EFE9] font-mono text-xs tracking-widest uppercase hover:bg-[#1E3D29] transition-colors"
              >
                Contactar
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(45,90,61,0.3)] text-[#2D5A3D] font-mono text-xs tracking-widest uppercase hover:bg-[#D6E8DB] transition-colors"
              >
                Ver Productos
              </Link>
            </div>
          </div>
          {/* Logo fondo claro */}
          <div className="flex items-center justify-center bg-[#FAFAF7] p-12 border border-[rgba(45,90,61,0.1)]">
            <div className="relative w-48 h-48">
              <SafeImage
                src="/assets/logo-fondo-claro.jpeg"
                alt="Casa Rios"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
