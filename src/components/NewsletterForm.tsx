"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <p className="text-[#8FAF85] text-sm tracking-wide text-center">
        ¡Gracias! Te avisaremos pronto.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@correo.com"
        className="flex-1 bg-white border border-[rgba(196,132,90,0.2)] text-[#2E1B0E] placeholder:text-[#B8A090] px-5 py-3 text-sm rounded-sm focus:outline-none focus:border-[rgba(196,132,90,0.5)] transition-colors"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center px-7 py-3 bg-[#C4845A] text-white text-xs tracking-widest uppercase hover:bg-[#A0623A] transition-colors rounded-sm"
      >
        Suscribir
      </button>
    </form>
  );
}
