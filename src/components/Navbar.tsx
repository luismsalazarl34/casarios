"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#F1EFE9]/96 backdrop-blur-md border-b border-[rgba(45,90,61,0.12)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-8 md:px-16 flex items-center justify-between py-5 h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <div className="relative w-7 h-7 flex-shrink-0">
            <Image
              src="/assets/logo-sin-fondo.jpeg"
              alt="Casa Rios"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-mono text-xs tracking-[0.2em] text-[#15110B] uppercase hidden sm:block">
            Casa Rios
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-mono text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                  pathname === href
                    ? "text-[#2D5A3D]"
                    : "text-[#9A8E7E] hover:text-[#15110B]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleCart}
            className="relative p-2 text-[#4A3D2E] hover:text-[#2D5A3D] transition-colors"
            aria-label="Ver selección"
          >
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#2D5A3D] text-[#F1EFE9] font-mono text-[9px] rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-[#4A3D2E] hover:text-[#2D5A3D] transition-colors p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#F1EFE9]/98 backdrop-blur-md border-b border-[rgba(45,90,61,0.12)]`}
      >
        <ul className="px-8 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-mono text-[11px] tracking-widest uppercase transition-colors ${
                  pathname === href ? "text-[#2D5A3D]" : "text-[#9A8E7E] hover:text-[#15110B]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
