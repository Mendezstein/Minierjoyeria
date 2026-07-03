/**
 * OptimizedImage — Production-grade <picture> component.
 *
 * Features:
 * - AVIF source (smallest file, modern browsers)
 * - WebP source (broad support, ~30% smaller than JPEG)
 * - JPEG/PNG fallback (universal)
 * - Explicit width/height prevents CLS (Cumulative Layout Shift)
 * - loading="lazy" defers off-screen images (improves LCP)
 * - fetchPriority="high" for above-the-fold images (improves LCP)
 * - Descriptive alt text required for screen readers + Google Images
 * - Unsplash CDN format transformation via URL params
 */

import React from "react";

interface OptimizedImageProps {
  /** Base Unsplash URL (with fm=jpg). Will be transformed to avif/webp automatically. */
  src: string;
  /** Descriptive alt text. Use "" for purely decorative images. */
  alt: string;
  /** Intrinsic image width in pixels (used for aspect-ratio reservation). */
  width: number;
  /** Intrinsic image height in pixels (used for aspect-ratio reservation). */
  height: number;
  /** "lazy" (default) for below-the-fold; "eager" for hero/LCP images. */
  loading?: "lazy" | "eager";
  /**
   * "high" for the page's Largest Contentful Paint image (hero).
   * "low" for decorative images well below the fold.
   * "auto" (default) lets the browser decide.
   * Note: passed to the DOM as lowercase fetchpriority (React <19 compatibility).
   */
  fetchPriority?: "high" | "low" | "auto";
  /** CSS sizes attribute for responsive breakpoints. */
  sizes?: string;
  /** CSS class applied to the <img> element. */
  className?: string;
  /** Inline styles applied to the <img> element. */
  style?: React.CSSProperties;
  /** onClick handler (e.g. open lightbox) */
  onClick?: () => void;
  /** ARIA role override (e.g. "presentation" for decorative) */
  role?: string;
}

/**
 * Transforms an Unsplash CDN URL to the requested format and width.
 * Works by replacing the fm= and w= query parameters.
 */
function unsplashSrc(url: string, format: "avif" | "webp" | "jpg", w: number): string {
  return url
    .replace(/[?&]fm=[^&]*/g, "")   // strip existing fm=
    .replace(/[?&]w=[^&]*/g, "")    // strip existing w=
    .replace(/&&+/g, "&")           // collapse double &&
    .replace(/\?&/, "?")            // fix ?& edge case
    .replace(/&$/, "")              // trim trailing &
    + (url.includes("?") ? "&" : "?") + `fm=${format}&w=${w}`;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  fetchPriority = "auto",
  sizes,
  className,
  style,
  onClick,
  role,
}: OptimizedImageProps) {
  const isUnsplash = src.includes("images.unsplash.com");

  /* For non-Unsplash images, render a simple optimised <img> */
  if (!isUnsplash) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority={fetchPriority}
        className={className}
        style={style}
        onClick={onClick}
        role={role}
      />
    );
  }

  /* Derive srcset widths from the target display width */
  const w1x = width;
  const w2x = width * 2;
  const wSmall = Math.round(width * 0.5);

  const sizesAttr = sizes ?? `(max-width: 640px) 100vw, ${width}px`;

  return (
    <picture>
      {/* AVIF — best compression, Chrome 85+, Firefox 93+, Safari 16+ */}
      <source
        type="image/avif"
        srcSet={[
          `${unsplashSrc(src, "avif", wSmall)} ${wSmall}w`,
          `${unsplashSrc(src, "avif", w1x)} ${w1x}w`,
          `${unsplashSrc(src, "avif", w2x)} ${w2x}w`,
        ].join(", ")}
        sizes={sizesAttr}
      />
      {/* WebP — ~30% smaller than JPEG, supported since Chrome 23, Safari 14 */}
      <source
        type="image/webp"
        srcSet={[
          `${unsplashSrc(src, "webp", wSmall)} ${wSmall}w`,
          `${unsplashSrc(src, "webp", w1x)} ${w1x}w`,
          `${unsplashSrc(src, "webp", w2x)} ${w2x}w`,
        ].join(", ")}
        sizes={sizesAttr}
      />
      {/* JPEG fallback — universally supported */}
      <img
        src={unsplashSrc(src, "jpg", w1x)}
        srcSet={[
          `${unsplashSrc(src, "jpg", wSmall)} ${wSmall}w`,
          `${unsplashSrc(src, "jpg", w1x)} ${w1x}w`,
          `${unsplashSrc(src, "jpg", w2x)} ${w2x}w`,
        ].join(", ")}
        sizes={sizesAttr}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority={fetchPriority}
        decoding={loading === "eager" ? "sync" : "async"}
        className={className}
        style={style}
        onClick={onClick}
        role={role}
      />
    </picture>
  );
}
