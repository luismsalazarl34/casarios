import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre café de especialidad, métodos de preparación, origen y cultura del café. Casa Rios.",
};

const categories = ["Todo", "Origen", "Preparación", "Consejos", "Cultura"];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-[#FEFCF9]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 50% 60%, rgba(196,132,90,0.1) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C4845A] text-xs tracking-[0.4em] uppercase mb-6">
            Conocimiento
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-[#2E1B0E] leading-tight mb-8">
            El Blog de
            <br />
            <em className="not-italic text-accent-gradient">Casa Rios</em>
          </h1>
          <p className="text-[#7A5842] text-lg max-w-xl mx-auto leading-relaxed">
            Todo lo que necesitas saber para entender, preparar y disfrutar el café de especialidad.
          </p>
        </div>
      </section>

      {/* ─── CATEGORY FILTER ─── */}
      <section className="border-y border-[rgba(196,132,90,0.1)] bg-[#FFF8F0] py-5 px-6">
        <div className="max-w-6xl mx-auto flex gap-4 overflow-x-auto pb-1">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`flex-shrink-0 text-xs tracking-widest uppercase px-5 py-2 border transition-colors duration-200 ${
                i === 0
                  ? "border-[rgba(196,132,90,0.4)] text-[#C4845A]"
                  : "border-[rgba(196,132,90,0.1)] text-[#B8A090] hover:text-[#7A5842] hover:border-[rgba(196,132,90,0.2)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── FEATURED POST ─── */}
      {featured && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-0 border border-[rgba(196,132,90,0.1)] hover:border-[rgba(196,132,90,0.3)] transition-all duration-500 overflow-hidden bg-[#FFF8F0]">
              <div className="relative aspect-[4/3] md:aspect-auto bg-[#F5EDE0]">
                <SafeImage
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FFF8F0]/30 md:block hidden" />
                <div className="absolute top-5 left-5">
                  <span className="text-[10px] tracking-widest uppercase px-3 py-1 bg-[#C4845A] text-[#FEFCF9] font-medium">
                    Destacado
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className="text-[#C4845A] text-xs tracking-widest uppercase mb-4">
                  {featured.category}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-[#2E1B0E] group-hover:text-[#C4845A] transition-colors duration-300 leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-[#B8A090] leading-relaxed mb-6 text-sm">
                  {featured.excerpt}
                </p>
                <p className="text-[#B8A090] text-xs">
                  {new Date(featured.date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {featured.readTime} lectura
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ─── POSTS GRID ─── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/10] bg-[#F5EDE0] overflow-hidden mb-5 border border-[rgba(196,132,90,0.08)] group-hover:border-[rgba(196,132,90,0.2)] transition-colors duration-300">
                  <SafeImage
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 bg-[rgba(255,255,255,0.9)] text-[#C4845A]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <p className="text-[#B8A090] text-xs mb-2">
                  {new Date(post.date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {post.readTime} lectura
                </p>
                <h3 className="font-display text-xl text-[#2E1B0E] group-hover:text-[#C4845A] transition-colors duration-300 mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-[#B8A090] text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
