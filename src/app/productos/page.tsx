"use client";

import { useState } from "react";
import SafeImage from "@/components/SafeImage";
import { Check, ArrowUpRight, ShoppingBag } from "lucide-react";
import { products, categoryMeta, type Category } from "@/data/products";
import { useCart } from "@/components/CartContext";

const WHATSAPP = "573145935191";
const CATEGORIES = Object.keys(categoryMeta) as Category[];

function productWhatsAppUrl(name: string): string {
  const msg = `Hola, quiero saber más acerca del producto '${name}'. ¿Me pueden dar información?`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function WhatsAppIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ProductRow({ product, index }: { product: (typeof products)[0]; index: number }) {
  const { addItem, items, openCart } = useCart();
  const [expanded, setExpanded] = useState(false);
  const inCart = items.some((i) => i.id === product.id);

  function handleAdd(e: React.MouseEvent) {
    e.stopPropagation();
    addItem({ id: product.id, name: product.name, category: product.category, price: product.price });
    openCart();
  }

  return (
    <div className="border-b border-[rgba(45,90,61,0.1)] last:border-0">
      {/* Row header — always visible */}
      <div
        className="group grid grid-cols-[40px_1fr_auto] md:grid-cols-[40px_1fr_160px_auto] gap-4 items-center py-5 px-4 -mx-4 cursor-pointer hover:bg-[#EEF5F0] transition-colors rounded"
        onClick={() => setExpanded((v) => !v)}
      >
        <span className="font-mono text-[11px] text-[#9A8E7E]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p className="font-display text-base md:text-lg text-[#15110B] group-hover:text-[#2D5A3D] transition-colors leading-snug">
            {product.name}
          </p>
          <p className="text-[#9A8E7E] text-xs mt-0.5 hidden sm:block line-clamp-1">
            {product.description}
          </p>
        </div>
        <div className="hidden md:flex items-center">
          {product.price ? (
            <span className="font-mono text-sm text-[#2D5A3D] font-medium">{product.price}</span>
          ) : (
            <span className="font-mono text-[10px] text-[#9A8E7E] tracking-wide uppercase">
              Consultar
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <span
            className={`font-mono text-[10px] text-[#9A8E7E] tracking-wider transition-transform duration-200 ${
              expanded ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </div>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="pb-6 px-4 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8">
          <div>
            <p className="text-[#4A3D2E] text-sm leading-relaxed mb-5">
              {product.description}
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {product.details.map((d) => (
                <div key={d} className="flex items-center gap-2">
                  <Check size={11} className="text-[#4A7A5C] flex-shrink-0" />
                  <span className="text-[#4A3D2E] text-xs">{d}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAdd}
                className={`inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-all ${
                  inCart
                    ? "bg-[#D6E8DB] text-[#2D5A3D] border border-[rgba(45,90,61,0.3)]"
                    : "bg-[#2D5A3D] text-[#F1EFE9] hover:bg-[#1E3D29]"
                }`}
              >
                <ShoppingBag size={12} />
                {inCart ? "En tu selección" : "Agregar a selección"}
              </button>
              <a
                href={productWhatsAppUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(45,90,61,0.25)] text-[#4A3D2E] font-mono text-xs tracking-wide uppercase hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-all"
              >
                <WhatsAppIcon size={12} />
                Para más información, pulsa aquí
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto bg-[#D6E8DB] overflow-hidden">
            <SafeImage
              src={product.image}
              alt={product.name}
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductosPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("cafes");
  const filtered = products.filter((p) => p.category === activeCategory);
  const catInfo = categoryMeta[activeCategory];

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-0 bg-[#F1EFE9]">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="border-b border-[rgba(45,90,61,0.15)] pb-10 pt-8">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#4A7A5C] uppercase mb-4">
              CR — Catálogo · {new Date().getFullYear()}
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-[#15110B] leading-tight mb-4">
              Productos
              <br />
              <em className="not-italic text-[#4A7A5C]">&amp; Servicios</em>
            </h1>
            <p className="text-[#9A8E7E] text-sm max-w-lg">
              Cafés de especialidad, equipos, accesorios, productos naturales y servicios
              técnicos de Q-Grader certificado.
            </p>
          </div>
        </div>
      </section>

      {/* Category nav — horizontal tabs, text-based, minimal */}
      <section className="sticky top-[72px] z-30 bg-[#F1EFE9]/95 backdrop-blur-sm border-b border-[rgba(45,90,61,0.12)]">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="flex gap-0 overflow-x-auto">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-4 font-mono text-[11px] tracking-widest uppercase border-b-2 transition-all duration-200 ${
                    isActive
                      ? "border-[#2D5A3D] text-[#2D5A3D]"
                      : "border-transparent text-[#9A8E7E] hover:text-[#4A3D2E]"
                  }`}
                >
                  {categoryMeta[cat].label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category description + count */}
      <section className="bg-[#FAFAF7] border-b border-[rgba(45,90,61,0.08)]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
          <p className="text-[#4A3D2E] text-sm">{catInfo.description}</p>
          <span className="font-mono text-[10px] text-[#9A8E7E] uppercase tracking-wider">
            {filtered.length} {filtered.length === 1 ? "ítem" : "ítems"}
          </span>
        </div>
      </section>

      {/* Products — editorial directory rows */}
      <section className="bg-[#FAFAF7] pb-24">
        <div className="max-w-6xl mx-auto px-8 md:px-16 pt-2">
          {filtered.map((product, i) => (
            <ProductRow key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
