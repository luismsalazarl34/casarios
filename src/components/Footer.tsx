import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

const navLinks = [
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#15110B] mt-auto">
      <div className="max-w-6xl mx-auto px-8 md:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12 pb-12 border-b border-[rgba(138,184,154,0.08)]">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] text-[#8AB89A] uppercase mb-4">
              Casa Rios
            </p>
            <p className="text-[#4A5C52] text-sm leading-relaxed max-w-64 mb-6">
              Cafés de especialidad seleccionados con rigor técnico.
              Q-Grader y Q-Processing certificados por SCA/CQI.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 border border-[rgba(138,184,154,0.15)] flex items-center justify-center text-[#4A5C52] hover:text-[#8AB89A] hover:border-[rgba(138,184,154,0.4)] transition-all"
              >
                <InstagramIcon size={13} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 border border-[rgba(138,184,154,0.15)] flex items-center justify-center text-[#4A5C52] hover:text-[#8AB89A] hover:border-[rgba(138,184,154,0.4)] transition-all"
              >
                <FacebookIcon size={13} />
              </a>
              <a
                href="/contacto"
                aria-label="Email"
                className="w-8 h-8 border border-[rgba(138,184,154,0.15)] flex items-center justify-center text-[#4A5C52] hover:text-[#8AB89A] hover:border-[rgba(138,184,154,0.4)] transition-all"
              >
                <Mail size={13} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#3D5045] uppercase mb-5">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-mono text-[11px] tracking-widest text-[#3D5045] uppercase hover:text-[#8AB89A] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#3D5045] uppercase mb-5">
              Contacto
            </p>
            <p className="text-[#3D5045] text-sm mb-2">hola@casarios.co</p>
            <p className="text-[#3D5045] text-sm mb-5">+57 314 593 5191</p>
            <a
              href="https://wa.me/573145935191"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#8AB89A] border border-[rgba(138,184,154,0.2)] px-4 py-2 uppercase hover:border-[rgba(138,184,154,0.5)] transition-all"
            >
              WhatsApp directo
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-[#2D3D33] tracking-wide uppercase">
            © 2026 Casa Rios — Colombia
          </p>
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 bg-[#2D5A3D]" />
            <p className="font-mono text-[10px] text-[#2D3D33] tracking-[0.25em] uppercase">
              Q-Grader · SCA Certified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
