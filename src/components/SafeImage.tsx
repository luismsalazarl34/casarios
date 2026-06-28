"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackClassName?: string;
}

export default function SafeImage({ fallbackClassName, className, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return <div className={fallbackClassName ?? className ?? ""} />;
  }

  return <Image {...props} className={className} onError={() => setError(true)} />;
}
