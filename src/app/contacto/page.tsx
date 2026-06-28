"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

const faqs = [
  {
    q: "¿Hacen análisis de taza para productores?",
    a: "Sí. Contamos con Q-Grader y Q-Processing certificados. Podemos evaluar tu lote bajo protocolo SCA y emitir informe oficial.",
  },
  {
    q: "¿Hacen envíos a toda Colombia?",
    a: "Sí. Enviamos a todo el país. El tiempo estimado es 2–4 días hábiles dependiendo de la zona.",
  },
  {
    q: "¿Puedo elegir la molienda?",
    a: "Por supuesto. Al contactarnos especifica tu método de preparación y ajustamos la molienda sin costo adicional.",
  },
  {
    q: "¿Trabajan con cafeterías y restaurantes?",
    a: "Sí. Tenemos esquemas para clientes B2B con precios especiales. Escríbenos con los detalles de tu negocio.",
  },
];

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "Consulta general",
    mensaje: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-12 bg-[#F1EFE9] border-b border-[rgba(45,90,61,0.12)]">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-4">
            CR — Contacto
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-[#15110B] leading-tight mb-4">
            Hablemos de
            <br />
            <em className="not-italic text-forest-gradient">café</em>
          </h1>
          <p className="text-[#9A8E7E] text-sm max-w-md">
            Preguntas sobre productos, análisis Q-Grader, pedidos o capacitaciones. Respondemos en menos de 24h.
          </p>
        </div>
      </section>

      {/* Content grid */}
      <section className="py-16 px-8 md:px-16 pb-24 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1px_1fr] gap-0">
          {/* Vertical rule — only desktop */}
          <div className="hidden lg:block bg-[rgba(45,90,61,0.12)] mx-16" />

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-16 lg:pl-16">
            {/* Contact info */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-6">
                Información
              </p>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Mail, label: "Email", value: "hola@casarios.co", href: "mailto:hola@casarios.co" },
                  { icon: InstagramIcon, label: "Instagram", value: "@casarios.cafe", href: "#" },
                  { icon: FacebookIcon, label: "Facebook", value: "Casa Rios Café", href: "#" },
                  { icon: MapPin, label: "País", value: "Colombia", href: undefined },
                  { icon: Clock, label: "Atención", value: "Lun–Vie 9:00–18:00", href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-7 h-7 border border-[rgba(45,90,61,0.2)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={12} className="text-[#4A7A5C]" />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-[#9A8E7E] uppercase tracking-widest mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="text-[#4A3D2E] text-sm hover:text-[#2D5A3D] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#4A3D2E] text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[rgba(45,90,61,0.1)] pt-8">
                <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-5">
                  FAQ
                </p>
                <div className="space-y-5">
                  {faqs.map(({ q, a }) => (
                    <div key={q}>
                      <p className="text-[#15110B] text-xs font-medium mb-1">{q}</p>
                      <p className="text-[#9A8E7E] text-xs leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="border border-[rgba(45,90,61,0.12)] bg-[#F1EFE9] p-8 md:p-10">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 border border-[rgba(45,90,61,0.25)] flex items-center justify-center mx-auto mb-6">
                      <Send size={16} className="text-[#2D5A3D]" />
                    </div>
                    <h2 className="font-display text-3xl text-[#15110B] mb-3">¡Mensaje enviado!</h2>
                    <p className="text-[#9A8E7E] text-sm mb-8">
                      Responderemos a {form.email} en menos de 24 horas.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="font-mono text-[11px] tracking-widest text-[#2D5A3D] uppercase border-b border-[#2D5A3D] pb-0.5 hover:text-[#1E3D29] transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-8">
                      Formulario de Contacto
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-mono text-[9px] tracking-widest text-[#9A8E7E] uppercase mb-2">
                            Nombre
                          </label>
                          <input
                            type="text"
                            required
                            value={form.nombre}
                            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                            placeholder="Tu nombre"
                            className="w-full bg-[#FAFAF7] border border-[rgba(45,90,61,0.15)] text-[#15110B] placeholder:text-[#9A8E7E] px-4 py-3 text-sm focus:outline-none focus:border-[rgba(45,90,61,0.4)] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[9px] tracking-widest text-[#9A8E7E] uppercase mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="tu@correo.com"
                            className="w-full bg-[#FAFAF7] border border-[rgba(45,90,61,0.15)] text-[#15110B] placeholder:text-[#9A8E7E] px-4 py-3 text-sm focus:outline-none focus:border-[rgba(45,90,61,0.4)] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-[9px] tracking-widest text-[#9A8E7E] uppercase mb-2">
                          Asunto
                        </label>
                        <select
                          value={form.asunto}
                          onChange={(e) => setForm({ ...form, asunto: e.target.value })}
                          className="w-full bg-[#FAFAF7] border border-[rgba(45,90,61,0.15)] text-[#15110B] px-4 py-3 text-sm focus:outline-none focus:border-[rgba(45,90,61,0.4)] transition-colors appearance-none cursor-pointer"
                        >
                          <option>Consulta general</option>
                          <option>Análisis de taza / Q-Grader</option>
                          <option>Pedido de productos</option>
                          <option>Capacitación / Taller</option>
                          <option>Venta al mayoreo</option>
                          <option>Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-mono text-[9px] tracking-widest text-[#9A8E7E] uppercase mb-2">
                          Mensaje
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={form.mensaje}
                          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                          placeholder="Cuéntanos en qué podemos ayudarte..."
                          className="w-full bg-[#FAFAF7] border border-[rgba(45,90,61,0.15)] text-[#15110B] placeholder:text-[#9A8E7E] px-4 py-3 text-sm focus:outline-none focus:border-[rgba(45,90,61,0.4)] transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2D5A3D] text-[#F1EFE9] font-mono text-xs tracking-widest uppercase hover:bg-[#1E3D29] transition-colors"
                      >
                        Enviar Mensaje <Send size={12} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
