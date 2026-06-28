import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

const featuredCafes = products.filter((p) => p.category === "cafes").slice(0, 3);
const recentPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ─── HERO: editorial split — NOT centered-text-on-image ─── */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_420px] bg-[#F1EFE9] pt-20">
        {/* Left: typography block */}
        <div className="flex flex-col justify-between px-8 md:px-16 py-16 lg:py-20 border-r border-[rgba(45,90,61,0.12)]">
          <div>
            {/* Index label — editorial detail */}
            <div className="flex items-center gap-4 mb-16">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase">
                CR — 01
              </span>
              <div className="flex-1 h-px bg-[rgba(45,90,61,0.2)]" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#9A8E7E] uppercase">
                Café de Especialidad
              </span>
            </div>

            {/* Big display */}
            <h1 className="font-display font-semibold leading-[0.95] text-[#15110B] mb-10">
              <span className="block text-[clamp(52px,8vw,120px)]">Casa</span>
              <span className="block text-[clamp(52px,8vw,120px)] text-forest-gradient">Rios</span>
              <span className="block text-[clamp(18px,2.5vw,32px)] font-normal text-[#4A3D2E] mt-4 tracking-tight">
                Colombia · SCA Q-Grader
              </span>
            </h1>

            <p className="text-[#4A3D2E] text-base md:text-lg leading-relaxed max-w-md mb-12">
              Seleccionamos, tostamos y evaluamos cafés colombianos de excepción.
              Cada lote pasa por análisis Q-Grader antes de llegar a tu taza.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D5A3D] text-[#F1EFE9] text-xs font-mono tracking-widest uppercase hover:bg-[#1E3D29] transition-colors"
              >
                Ver Catálogo <ArrowRight size={13} />
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(45,90,61,0.35)] text-[#2D5A3D] text-xs font-mono tracking-widest uppercase hover:bg-[#D6E8DB] transition-colors"
              >
                Quiénes Somos
              </Link>
            </div>
          </div>

          {/* Bottom stats bar */}
          <div className="grid grid-cols-3 border-t border-[rgba(45,90,61,0.15)] pt-8 mt-16">
            {[
              { n: "Q-Grader", sub: "Certificado SCA" },
              { n: "5+", sub: "Orígenes activos" },
              { n: "SCA 84+", sub: "Estándar mínimo" },
            ].map(({ n, sub }) => (
              <div key={sub} className="pr-6">
                <p className="font-display text-xl md:text-2xl text-[#2D5A3D] mb-0.5">{n}</p>
                <p className="font-mono text-[10px] text-[#9A8E7E] tracking-wide uppercase">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image column */}
        <div className="hidden lg:flex flex-col">
          <div className="flex-1 relative bg-[#D6E8DB] overflow-hidden">
            <SafeImage
              src="/assets/hero.jpg"
              alt="Casa Rios — Café de Especialidad"
              fill
              priority
              className="object-cover"
            />
            {/* Overlay with editorial index */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#F1EFE9]/90 backdrop-blur-sm p-4 border-l-2 border-[#2D5A3D]">
                <p className="font-mono text-[10px] tracking-widest text-[#4A7A5C] uppercase mb-1">
                  Origen destacado
                </p>
                <p className="font-display text-sm text-[#15110B]">Café Santuario · Risaralda</p>
              </div>
            </div>
          </div>
          {/* Second image slot */}
          <div className="h-52 relative bg-[#4A7A5C] overflow-hidden border-t border-[rgba(45,90,61,0.2)]">
            <SafeImage
              src="/assets/nosotros-teaser.jpg"
              alt="Proceso"
              fill
              className="object-cover opacity-60 mix-blend-multiply"
            />
            <div className="absolute inset-0 flex items-end p-5">
              <p className="font-mono text-[10px] tracking-widest text-[#D6E8DB] uppercase">
                Del campo a la taza
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HORIZONTAL TICKER / MANIFESTO ─── */}
      <section className="bg-[#2D5A3D] py-4 overflow-hidden border-y border-[#1E3D29]">
        <div className="flex gap-12 animate-fade-in">
          {[
            "Cafés de Especialidad",
            "•",
            "Q-Grader Certificado",
            "•",
            "Métodos de Preparación",
            "•",
            "Capacitaciones SCA",
            "•",
            "Miel · Cacao · Colombia",
            "•",
            "Q-Processing",
            "•",
          ].map((item, i) => (
            <span
              key={i}
              className="font-mono text-[11px] tracking-[0.2em] text-[#8AB89A] uppercase whitespace-nowrap flex-shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ─── CAFÉS — editorial rows, NOT card grid ─── */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          {/* Section header */}
          <div className="flex items-end justify-between mb-10 border-b border-[rgba(45,90,61,0.15)] pb-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-2">
                CR — 02 · Selección
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-[#15110B]">
                Cafés de Temporada
              </h2>
            </div>
            <Link
              href="/productos"
              className="hidden md:flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#2D5A3D] uppercase hover:gap-3 transition-all"
            >
              Ver todos <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Editorial rows */}
          <div className="divide-y divide-[rgba(45,90,61,0.1)]">
            {featuredCafes.map((p, i) => (
              <Link
                key={p.id}
                href="/productos"
                className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[60px_1fr_200px_auto] gap-6 items-center py-7 hover:bg-[#EEF5F0] transition-colors px-2 -mx-2 rounded"
              >
                {/* Index number */}
                <span className="font-mono text-[11px] text-[#9A8E7E] tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Name + desc */}
                <div>
                  <p className="font-display text-lg md:text-xl text-[#15110B] group-hover:text-[#2D5A3D] transition-colors mb-1">
                    {p.name}
                  </p>
                  <p className="text-[#9A8E7E] text-sm hidden md:block line-clamp-1">
                    {p.description}
                  </p>
                </div>
                {/* Details */}
                <div className="hidden md:flex flex-wrap gap-2">
                  {p.details.slice(0, 2).map((d) => (
                    <span
                      key={d}
                      className="font-mono text-[10px] px-2 py-1 bg-[#D6E8DB] text-[#2D5A3D] tracking-wide"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                {/* Price + arrow */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  {p.price && (
                    <span className="font-mono text-sm text-[#2D5A3D] font-medium">
                      {p.price}
                    </span>
                  )}
                  <ArrowUpRight
                    size={16}
                    className="text-[#9A8E7E] group-hover:text-[#2D5A3D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#2D5A3D] uppercase border border-[rgba(45,90,61,0.3)] px-5 py-3"
            >
              Ver todos los productos <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Q-GRADER CREDENTIAL BLOCK ─── */}
      <section className="bg-[#2D5A3D] py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#8AB89A] uppercase mb-6">
              CR — 03 · Credenciales
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-[#F1EFE9] leading-tight mb-6">
              Catadores
              <br />
              <em className="not-italic text-[#8AB89A]">Q-Grader SCA</em>
            </h2>
            <p className="text-[#8AB89A] leading-relaxed mb-8 text-base">
              Contamos con certificación Q-Grader y Q-Processing del Coffee Quality Institute.
              Esto significa que cada café que vendemos ha sido evaluado bajo los estándares
              sensoriales más rigurosos del sector.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { title: "Q-Grader", body: "Evaluación sensorial de café verde y tostado bajo protocolo SCA" },
                { title: "Q-Processing", body: "Análisis técnico del proceso de beneficio y calidad del verde" },
                { title: "Análisis de Taza", body: "Informes oficiales de cupping con puntaje en escala de 100" },
                { title: "Consultoría", body: "Asesoría técnica para productores, torrefactores y cafeterías" },
              ].map(({ title, body }) => (
                <div key={title} className="border border-[rgba(138,184,154,0.2)] p-4">
                  <p className="font-mono text-[11px] text-[#8AB89A] tracking-wider uppercase mb-2">
                    {title}
                  </p>
                  <p className="text-[#D6E8DB] text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <Link
              href="/productos?cat=capacitaciones"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(138,184,154,0.4)] text-[#8AB89A] font-mono text-xs tracking-widest uppercase hover:bg-[rgba(138,184,154,0.1)] transition-colors"
            >
              Ver Servicios Q-Grader <ArrowRight size={13} />
            </Link>
          </div>
          <div className="relative aspect-[3/4] bg-[#1E3D29] overflow-hidden">
            <SafeImage
              src="/assets/capacitaciones/catacion.jpg"
              alt="Análisis de taza Q-Grader"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute top-5 right-5">
              <div className="bg-[#F1EFE9] px-3 py-1.5">
                <p className="font-mono text-[9px] tracking-widest text-[#2D5A3D] uppercase">
                  CQI Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOSOTROS TEASER ─── */}
      <section className="py-20 px-8 md:px-16 bg-[#F1EFE9]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0">
          <div className="pr-0 md:pr-16 pb-16 md:pb-0">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-6">
              CR — 04 · Historia
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#15110B] leading-tight mb-6">
              Una obsesión
              <br />
              por el origen
            </h2>
            <p className="text-[#4A3D2E] leading-relaxed mb-4">
              Casa Rios nació en los cafetales colombianos. La convicción que nos mueve
              es simple: el café extraordinario exige relaciones directas, honestidad técnica
              y rigor sensorial.
            </p>
            <p className="text-[#9A8E7E] text-sm leading-relaxed mb-10">
              Trabajamos con productores que comparten esa exigencia. Pagamos precios justos,
              visitamos fincas y evaluamos cada lote antes de ofrecerlo.
            </p>
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#2D5A3D] uppercase hover:gap-3 transition-all border-b border-[#2D5A3D] pb-0.5"
            >
              Conocer más <ArrowRight size={12} />
            </Link>
          </div>

          {/* Vertical rule */}
          <div className="hidden md:block bg-[rgba(45,90,61,0.15)]" />

          {/* Blog preview */}
          <div className="pl-0 md:pl-16 pt-16 md:pt-0">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-6">
              CR — 05 · Blog
            </p>
            <div className="space-y-8">
              {recentPosts.slice(0, 2).map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[10px] text-[#9A8E7E] mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4A7A5C] uppercase tracking-wider mb-1">
                        {post.category}
                      </p>
                      <h3 className="font-display text-lg text-[#15110B] group-hover:text-[#2D5A3D] transition-colors leading-snug mb-1">
                        {post.title}
                      </h3>
                      <p className="text-[#9A8E7E] text-xs">{post.readTime} lectura</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-[rgba(45,90,61,0.12)]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#2D5A3D] uppercase hover:gap-3 transition-all border-b border-[#2D5A3D] pb-0.5"
              >
                Todos los artículos <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
