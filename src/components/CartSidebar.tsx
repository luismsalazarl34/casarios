"use client";

import { X, ShoppingBag, Trash2, Minus, Plus } from "lucide-react";
import { useCart, type CartItem } from "./CartContext";

const WHATSAPP = "573145935191";

function buildMessage(items: CartItem[]): string {
  if (!items.length) return "";
  const lines = items
    .map((item) => {
      const priceStr = item.price ? ` (${item.price} c/u)` : "";
      return `  • ${item.quantity}x ${item.name}${priceStr}`;
    })
    .join("\n");
  return `Hola, estoy interesado en los siguientes productos de Casa Rios:\n\n${lines}\n\n¿Me podrían brindar más información sobre disponibilidad? ¡Muchas gracias!`;
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, clearCart, isOpen, closeCart } = useCart();

  const message = buildMessage(items);
  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#15110B]/40 backdrop-blur-sm z-40"
          onClick={closeCart}
        />
      )}

      <aside
        className={`fixed right-0 top-0 h-full w-full max-w-sm bg-[#FAFAF7] shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Tu selección"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(45,90,61,0.12)] bg-[#F1EFE9]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={16} className="text-[#2D5A3D]" />
            <h2 className="font-mono text-xs tracking-[0.2em] text-[#15110B] uppercase">
              Mi Selección
            </h2>
            {items.length > 0 && (
              <span className="bg-[#2D5A3D] text-[#F1EFE9] font-mono text-[9px] rounded-none w-5 h-5 flex items-center justify-center">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-[#9A8E7E] hover:text-[#15110B] transition-colors p-1"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {!items.length ? (
            <div className="text-center py-16">
              <ShoppingBag size={36} className="text-[#D6E8DB] mx-auto mb-4" />
              <p className="font-mono text-[11px] text-[#9A8E7E] uppercase tracking-widest mb-1">
                Selección vacía
              </p>
              <p className="text-[#9A8E7E] text-xs">Agrega productos para consultar</p>
            </div>
          ) : (
            <div className="divide-y divide-[rgba(45,90,61,0.08)]">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-3 py-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[#15110B] text-sm leading-snug mb-0.5">{item.name}</p>
                    {item.price ? (
                      <p className="font-mono text-[10px] text-[#2D5A3D] tracking-wide">
                        {item.price}
                      </p>
                    ) : (
                      <p className="font-mono text-[10px] text-[#9A8E7E] tracking-wide uppercase">
                        Consultar precio
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 border border-[rgba(45,90,61,0.2)] flex items-center justify-center text-[#4A7A5C] hover:bg-[#D6E8DB] transition-colors"
                    >
                      <Minus size={9} />
                    </button>
                    <span className="font-mono text-sm text-[#15110B] w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 border border-[rgba(45,90,61,0.2)] flex items-center justify-center text-[#4A7A5C] hover:bg-[#D6E8DB] transition-colors"
                    >
                      <Plus size={9} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-1 text-[#9A8E7E] hover:text-red-400 transition-colors p-0.5"
                      aria-label="Eliminar"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[rgba(45,90,61,0.12)] bg-[#F1EFE9] space-y-3">
            <div className="bg-[#EEF5F0] p-3 border-l-2 border-[#4A7A5C]">
              <p className="font-mono text-[9px] text-[#4A7A5C] uppercase tracking-widest mb-2">
                Tu mensaje de WhatsApp
              </p>
              <p className="text-xs text-[#4A3D2E] leading-relaxed line-clamp-4 whitespace-pre-line">
                {message}
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1DAE54] text-white font-mono text-xs tracking-widest uppercase py-3.5 transition-colors"
            >
              <WhatsAppIcon />
              Consultar por WhatsApp
            </a>
            <button
              onClick={clearCart}
              className="w-full font-mono text-[10px] text-[#9A8E7E] uppercase tracking-widest hover:text-[#4A3D2E] transition-colors py-1.5"
            >
              Vaciar selección
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
