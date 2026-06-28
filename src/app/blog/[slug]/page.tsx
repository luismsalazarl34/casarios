import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="font-display text-2xl md:text-3xl text-[#2E1B0E] mt-12 mb-5 first:mt-0"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="text-[#C4845A] font-medium mb-3">
          {line.slice(2, -2)}
        </p>
      );
    } else {
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j} className="text-[#2E1B0E] font-medium">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      elements.push(
        <p key={i} className="text-[#7A5842] leading-relaxed mb-4">
          {parts}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-0 overflow-hidden">
        <div className="relative aspect-[21/9] max-h-[500px] bg-[#F5EDE0] overflow-hidden">
          <SafeImage
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FEFCF9] via-[#FEFCF9]/50 to-transparent" />
          <div className="absolute bottom-12 left-0 right-0 max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-[#B8A090] text-xs hover:text-[#7A5842] transition-colors"
              >
                <ArrowLeft size={12} />
                Blog
              </Link>
              <span className="text-[#B8A090] text-xs">/</span>
              <span className="text-[#C4845A] text-xs tracking-widest uppercase">
                {post.category}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-[#2E1B0E] leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ─── META ─── */}
      <section className="border-b border-[rgba(196,132,90,0.1)] bg-[#FFF8F0]">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center gap-6">
          <p className="text-[#B8A090] text-xs">
            {new Date(post.date).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <span className="text-[#B8A090] text-xs">·</span>
          <p className="flex items-center gap-1.5 text-[#B8A090] text-xs">
            <Clock size={11} />
            {post.readTime} de lectura
          </p>
          <span className="text-[#B8A090] text-xs">·</span>
          <p className="text-[#B8A090] text-xs">{post.author}</p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A5842] text-lg leading-relaxed mb-10 border-l-2 border-[#C4845A]/40 pl-6 italic">
            {post.excerpt}
          </p>
          <div className="prose-custom">{renderContent(post.content)}</div>
        </div>
      </article>

      {/* ─── NAV PREV/NEXT ─── */}
      <section className="border-t border-[rgba(196,132,90,0.1)] py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between gap-6">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex items-start gap-4 max-w-xs"
            >
              <div className="mt-1">
                <ArrowLeft size={16} className="text-[#B8A090] group-hover:text-[#C4845A] transition-colors" />
              </div>
              <div>
                <p className="text-[#B8A090] text-xs uppercase tracking-widest mb-1">Anterior</p>
                <p className="text-[#7A5842] text-sm group-hover:text-[#2E1B0E] transition-colors leading-snug font-display">
                  {prevPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-start gap-4 max-w-xs text-right ml-auto"
            >
              <div>
                <p className="text-[#B8A090] text-xs uppercase tracking-widest mb-1">Siguiente</p>
                <p className="text-[#7A5842] text-sm group-hover:text-[#2E1B0E] transition-colors leading-snug font-display">
                  {nextPost.title}
                </p>
              </div>
              <div className="mt-1">
                <ArrowRight size={16} className="text-[#B8A090] group-hover:text-[#C4845A] transition-colors" />
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* ─── RELATED POSTS ─── */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 bg-[#FFF8F0] border-t border-[rgba(196,132,90,0.1)]">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#C4845A] text-xs tracking-[0.4em] uppercase mb-10 text-center">
              Sigue Leyendo
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex gap-5"
                >
                  <div className="relative w-28 flex-shrink-0 aspect-square bg-[#F5EDE0] overflow-hidden">
                    <SafeImage
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                  <div>
                    <span className="text-[#C4845A] text-[10px] tracking-widest uppercase">
                      {related.category}
                    </span>
                    <h3 className="font-display text-base text-[#2E1B0E] group-hover:text-[#C4845A] transition-colors duration-300 mt-1 mb-1 leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-[#B8A090] text-xs">{related.readTime} lectura</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Button href="/blog" variant="outline">
                Ver Todos los Artículos <ArrowRight size={13} />
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
