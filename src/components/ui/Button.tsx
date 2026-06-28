import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline" | "ghost" | "whatsapp";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  href?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-[#C4845A] text-white hover:bg-[#A0623A] font-medium shadow-sm",
  outline: "border border-[rgba(196,132,90,0.4)] text-[#C4845A] hover:border-[#C4845A] hover:bg-[rgba(196,132,90,0.06)]",
  ghost: "text-[#7A5842] hover:text-[#2E1B0E]",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1DAE54] font-medium shadow-sm",
};

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3 text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer rounded-sm";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
